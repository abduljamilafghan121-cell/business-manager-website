/**
 * The website's own address, used for the canonical link, social sharing
 * previews, sitemap.xml and robots.txt.
 *
 * Set it in two places, or the live site will keep using the fallback:
 *   1. .env.local on this machine
 *   2. Your host's dashboard (Vercel: Settings > Environment Variables)
 *
 * A custom domain is better than the .vercel.app address, because customers see
 * the address in their browser.
 */
const FALLBACK = "https://business-manager-af.vercel.app";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK
).replace(/\/+$/, "");

if (!process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    `\n[site] NEXT_PUBLIC_SITE_URL is not set, so the canonical link, ` +
      `social previews and sitemap are using the built-in fallback:\n` +
      `      ${siteUrl}\n` +
      "      Set it in .env.local and in your host's dashboard.\n"
  );
}
