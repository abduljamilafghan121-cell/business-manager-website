/**
 * Converts every PNG in public/screenshots to WebP and deletes the original.
 *
 * Run this any time you drop in new screenshots:
 *   npm run images
 *
 * The page reads from screenshotData.ts, which lists the .webp filenames and
 * the real pixel size of each one. This script prints those sizes so you can
 * keep that file accurate.
 */
import { readdir, unlink, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const DIR = join(process.cwd(), "public", "screenshots");

if (!existsSync(DIR)) {
  console.error(`No screenshots folder at ${DIR}`);
  process.exit(1);
}

const files = (await readdir(DIR)).filter((f) => f.toLowerCase().endsWith(".png"));

if (files.length === 0) {
  console.log("No PNG files found — nothing to do.");
  process.exit(0);
}

let beforeTotal = 0;
let afterTotal = 0;

for (const file of files.sort()) {
  const src = join(DIR, file);
  const dest = src.replace(/\.png$/i, ".webp");

  const { width, height } = await sharp(src).metadata();
  beforeTotal += (await stat(src)).size;

  await sharp(src).webp({ quality: 88, effort: 6 }).toFile(dest);
  afterTotal += (await stat(dest)).size;

  await unlink(src);

  console.log(`${file} -> ${dest.split(/[\\/]/).pop()}  ${width}x${height}`);
}

const kb = (n) => `${Math.round(n / 1024)} KB`;
console.log(
  `\nDone. ${kb(beforeTotal)} -> ${kb(afterTotal)} ` +
    `(saved ${Math.round((1 - afterTotal / beforeTotal) * 100)}%)`
);
console.log("Copy the width/height values above into components/screenshotData.ts.");
