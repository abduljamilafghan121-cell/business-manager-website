/**
 * Publishes a new Windows installer.
 *
 * USAGE
 *   npm run release -- "C:\path\to\Business Manager Setup 2.2.0.exe"
 *
 * Optionally pass the version explicitly:
 *   npm run release -- "C:\path\to\setup.exe" 2.2.0
 *
 * WHAT IT DOES
 *   1. Reads the version from the file name (or the second argument)
 *   2. Computes the installer's SHA-256 and size on disk
 *   3. Uploads it as a new GitHub release with the GitHub CLI
 *   4. Checks that GitHub stored the same checksum
 *   5. Refreshes lib/release-fallback.json for offline builds
 *
 * The website reads the latest release itself, so after this finishes there is
 * nothing else to edit. The live page switches within an hour; trigger a
 * Vercel redeploy if you want it immediately.
 */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { readFile, stat, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { setTimeout as sleep } from "node:timers/promises";

const FALLBACK_FILE = join(process.cwd(), "lib", "release-fallback.json");

function fail(message) {
  console.error(message);
  process.exit(1);
}

function repoSlug() {
  let remote;
  try {
    remote = execFileSync("git", ["remote", "get-url", "origin"], {
      encoding: "utf8"
    }).trim();
  } catch {
    fail(
      "This folder has no git remote called origin, so the script cannot tell\n" +
        "which GitHub repository to publish to."
    );
  }

  const path = remote
    .split("github.com")
    .pop()
    .replace(/^[:/]+/, "")
    .replace(/\.git$/, "")
    .replace(/\/+$/, "");

  const [owner, repo] = path.split("/");
  if (!owner || !repo) {
    fail(`The origin remote is not a GitHub repository:\n  ${remote}`);
  }

  return `${owner}/${repo}`;
}

const [, , sourceArg, versionArg] = process.argv;

if (!sourceArg) {
  fail('Usage: npm run release -- "C:\\path\\to\\setup.exe" [version]');
}

const source = sourceArg.replace(/^"|"$/g, "");
const sourceName = basename(source);

const sourceStat = await stat(source).catch(() => null);
if (!sourceStat) {
  fail(
    `Could not find that file:\n  ${source}\n\n` +
      "If the folder or file name has spaces, keep the quotes around the path."
  );
}

if (sourceStat.size < 1024) {
  fail("That file is far too small to be an installer. Check the path.");
}

const version =
  versionArg || (sourceName.match(/(\d+\.\d+\.\d+)/) || [])[1];

if (!version) {
  fail(
    `Could not read a version number from "${sourceName}".\n` +
      'Rename the installer so it contains the version, e.g. ' +
      '"Business Manager Setup 2.2.0.exe", or pass it: ' +
      'npm run release -- "<file>" 2.2.0'
  );
}

const tag = `v${version}`;

const hash = createHash("sha256");
for await (const chunk of createReadStream(source)) {
  hash.update(chunk);
}
const sha256 = hash.digest("hex").toUpperCase();
const sizeMb = `${(sourceStat.size / 1024 / 1024).toFixed(1)} MB`;

try {
  execFileSync("gh", ["auth", "status"], { stdio: "ignore" });
} catch {
  fail(
    'The GitHub CLI is not signed in. Run "gh auth login" once, then try again.'
  );
}

let tagTaken = true;
try {
  execFileSync("gh", ["release", "view", tag, "--json", "tagName"], {
    stdio: "ignore"
  });
} catch {
  // A missing release is the normal case: gh exits non-zero.
  tagTaken = false;
}

if (tagTaken) {
  fail(
    `Release ${tag} already exists.\n` +
      "Bump the version in your app, rebuild the installer, then run this again."
  );
}

const repo = repoSlug();

console.log(`Uploading ${sourceName} (${sizeMb}) as release ${tag}...`);
try {
  execFileSync(
    "gh",
    [
      "release",
      "create",
      tag,
      source,
      "--title",
      `Business Manager ${version}`,
      "--notes",
      `Business Manager ${version} for Windows.`
    ],
    { stdio: "inherit" }
  );
} catch {
  fail("GitHub rejected the release upload. Check the message above.");
}

// GitHub computes the asset digest after the upload finishes, so wait briefly.
let asset = null;
for (let attempt = 0; attempt < 12; attempt += 1) {
  const release = JSON.parse(
    execFileSync("gh", ["api", `repos/${repo}/releases/tags/${tag}`], {
      encoding: "utf8"
    })
  );

  asset =
    release.assets.find((candidate) => candidate.name === sourceName) ??
    release.assets.find((candidate) => candidate.name.toLowerCase().endsWith(".exe"));

  if (asset?.digest) break;
  await sleep(5000);
}

if (asset?.digest) {
  const remoteSha = asset.digest.replace(/^sha256:/i, "").toUpperCase();
  if (remoteSha !== sha256) {
    fail(
      "GitHub stored a different file than the one on disk.\n" +
        `  local : ${sha256}\n  GitHub: ${remoteSha}\n` +
        "Delete that release on GitHub before customers download it."
    );
  }
  console.log("Checksum verified against GitHub.");
} else {
  console.warn(
    "GitHub has not published a digest yet; the checksum was taken from your file."
  );
}

let requirements = "Windows 10 or 11, 64-bit";
try {
  const previous = JSON.parse(await readFile(FALLBACK_FILE, "utf8"));
  if (typeof previous.requirements === "string") {
    requirements = previous.requirements;
  }
} catch {
  /* first run */
}

const fallback = {
  version,
  fileName: asset?.name ?? sourceName,
  url:
    asset?.browser_download_url ??
    `https://github.com/${repo}/releases/download/${tag}/${encodeURIComponent(sourceName)}`,
  sizeMb: asset ? `${(asset.size / 1024 / 1024).toFixed(1)} MB` : sizeMb,
  sha256,
  requirements
};

await writeFile(
  FALLBACK_FILE,
  `${JSON.stringify(fallback, null, 2)}\n`,
  "utf8"
);

console.log(`
Done. ${tag} is published (${fallback.sizeMb}).
Updated: lib/release-fallback.json

The website reads the latest release on its own and switches within an hour.
To update it immediately, trigger a redeploy in Vercel.
`);
