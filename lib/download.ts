/**
 * ABOUT THIS FILE
 *   Do not hand-edit the values below by accident. Update them when you publish
 *   a new release, so the size and fingerprint match the file people download.
 *
 * WHERE THE INSTALLER LIVES
 *   Hosted as a GitHub Release, not inside this project. That keeps the repo
 *   and every deploy small, and gives each version a permanent link. The file
 *   on the release was verified byte-for-byte against the fingerprint below.
 *
 * TO PUBLISH THE NEXT VERSION
 *   1. In the app folder, bump the version in package.json and build:
 *        npm run build:win
 *   2. On GitHub, create a release with the new tag and attach the new .exe
 *   3. Update version, tag, fileName, url, sizeMb, fileSizeBytes and sha256
 *      here to match the new release
 *
 * WHY THE FILE NAME CHANGES EACH TIME
 *   Browsers cache release downloads, so each version needs its own release and
 *   its own file name. Reusing a name would leave people on the old file with
 *   no way to push them onto the new one.
 */
export const download = {
  /** Version shown to customers. */
  version: "2.1.0",

  /** File name as published on the release. */
  fileName: "Business.Manager.Setup.2.1.0.exe",

  /** Release tag on GitHub. */
  tag: "v2.1.0",

  /** Where the button sends people. */
  url: "https://github.com/abduljamilafghan121-cell/business-manager-website/releases/download/v2.1.0/Business.Manager.Setup.2.1.0.exe",

  /** Human-friendly size shown on the button. */
  sizeMb: "84.3 MB",

  /** Real byte size of the file, for verifying the download. */
  fileSizeBytes: 88366226,

  /** SHA-256 fingerprint, shown so customers can check the file is complete. */
  sha256: "487262097F3494655B0E7214245703F407837C78C7B13948BD99B16414B569BE",

  /** Plain-language system requirements shown next to the button. */
  requirements: "Windows 10 or 11, 64-bit"
} as const;
