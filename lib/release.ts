/**
 * Single source of truth for the installer download.
 *
 * Every value is read from the repository's latest GitHub release, so all you
 * do when publishing a version is create the release and attach the .exe. The
 * page revalidates hourly, which means the website switches to the new version
 * without any edit or redeploy.
 *
 * lib/release-fallback.json is a snapshot written by `npm run release`. It is
 * only used when GitHub cannot be reached while the page is being rendered.
 */
import fallbackRelease from "./release-fallback.json";

const REPO = "abduljamilafghan121-cell/business-manager-website";
const REQUIREMENTS = "Windows 10 or 11, 64-bit";

export type Release = {
  /** Version shown to customers, without the leading "v". */
  version: string;
  /** File name of the installer attached to the release. */
  fileName: string;
  /** Direct download URL of the installer. */
  url: string;
  /** Human-friendly size shown on the button. */
  sizeMb: string;
  /** Uppercase SHA-256; empty when GitHub has not published a digest. */
  sha256: string;
  /** Plain-language system requirements shown next to the button. */
  requirements: string;
};

type GitHubAsset = {
  name: string;
  size: number;
  digest: string | null;
  browser_download_url: string;
};

type GitHubRelease = {
  tag_name: string;
  assets: GitHubAsset[];
};

function toRelease(release: GitHubRelease): Release {
  const installer = release.assets.find((asset) =>
    asset.name.toLowerCase().endsWith(".exe")
  );

  if (!installer) {
    throw new Error(`No .exe installer on release ${release.tag_name}`);
  }

  return {
    version: release.tag_name.replace(/^v/i, ""),
    fileName: installer.name,
    url: installer.browser_download_url,
    sizeMb: `${(installer.size / 1024 / 1024).toFixed(1)} MB`,
    sha256: (installer.digest ?? "").replace(/^sha256:/i, "").toUpperCase(),
    requirements: REQUIREMENTS
  };
}

export async function getLatestRelease(): Promise<Release> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28"
        },
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded ${response.status}`);
    }

    return toRelease((await response.json()) as GitHubRelease);
  } catch (error) {
    console.warn(
      "[release] Could not read the latest release from GitHub; using " +
        "lib/release-fallback.json instead.",
      error
    );
    return fallbackRelease;
  }
}
