/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_FORM_ID?: string;
  /** Full URL to PDF — e.g. GitHub latest release asset (updates without redeploying the site). */
  readonly VITE_RESUME_PDF_URL?: string;
  /** Optional preview image URL (or use public/RuchiPatelResume.jpg). */
  readonly VITE_RESUME_PREVIEW_IMAGE_URL?: string;
  /** Link to LaTeX / source repo on the Resume page. */
  readonly VITE_RESUME_SOURCE_REPO_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
