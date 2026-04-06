/**
 * Resume URLs (optional env — see .env.example).
 *
 * External PDF: use GitHub’s latest-release asset URL so updates apply without redeploying
 * the site, e.g. https://github.com/OWNER/resume-repo/releases/latest/download/resume.pdf
 */
function trimEnv(value: string | undefined): string | undefined {
  const v = value?.trim();
  return v || undefined;
}

export const resumePdfHref =
  trimEnv(import.meta.env.VITE_RESUME_PDF_URL) ?? "/RuchiPatelResume.pdf";

export const resumePreviewImageSrc =
  trimEnv(import.meta.env.VITE_RESUME_PREVIEW_IMAGE_URL) ?? "/RuchiPatelResume.jpg";

export const resumeSourceRepoUrl = trimEnv(import.meta.env.VITE_RESUME_SOURCE_REPO_URL);

export const resumePdfIsExternal = resumePdfHref.startsWith("http://") || resumePdfHref.startsWith("https://");
