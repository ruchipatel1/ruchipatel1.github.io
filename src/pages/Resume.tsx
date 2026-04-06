import { ExternalLink, FileDown, FolderGit2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  resumePdfHref,
  resumePdfIsExternal,
  resumePreviewImageSrc,
  resumeSourceRepoUrl,
} from "@/lib/site-config";

export function Resume() {
  const [imageOk, setImageOk] = useState(true);

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
        <p className="text-muted-foreground">
          {resumePdfIsExternal
            ? "PDF is served from your resume pipeline (see link target). Optional preview image if configured."
            : "Download a PDF or preview an image from this site’s static files."}
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a href={resumePdfHref} target="_blank" rel="noreferrer noopener">
            <FileDown className="h-4 w-4" />
            Open PDF
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://www.linkedin.com/in/ruchi-patel1/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
        {resumeSourceRepoUrl ? (
          <Button variant="outline" asChild>
            <a href={resumeSourceRepoUrl} target="_blank" rel="noreferrer noopener">
              <FolderGit2 className="h-4 w-4" />
              LaTeX source
            </a>
          </Button>
        ) : null}
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">How this is wired</CardTitle>
          <CardDescription className="space-y-2 text-pretty">
            {resumePdfIsExternal ? (
              <p>
                <code className="font-mono text-xs">VITE_RESUME_PDF_URL</code> points at your PDF (for example{" "}
                <code className="font-mono text-xs">…/releases/latest/download/resume.pdf</code>). Each new GitHub
                Release updates what visitors download; you do not need to rebuild this portfolio for PDF-only changes.
              </p>
            ) : (
              <>
                <p>
                  Prefer a release link? Set <code className="font-mono text-xs">VITE_RESUME_PDF_URL</code> in{" "}
                  <code className="font-mono text-xs">.env</code> (see <code className="font-mono text-xs">.env.example</code>
                  ). Otherwise add <code className="font-mono text-xs">RuchiPatelResume.pdf</code> under{" "}
                  <code className="font-mono text-xs">public/</code>. Optional:{" "}
                  <code className="font-mono text-xs">VITE_RESUME_SOURCE_REPO_URL</code> for your LaTeX repo.
                </p>
                <p className="text-xs text-muted-foreground">
                  To bundle the PDF on each deploy instead, set repo variable <code className="font-mono text-xs">RESUME_PDF_FETCH_URL</code>{" "}
                  (see README).
                </p>
              </>
            )}
          </CardDescription>
        </CardHeader>
      </Card>
      <Separator />
      {imageOk ? (
        <div className="overflow-hidden rounded-xl border bg-muted/30">
          <img
            src={resumePreviewImageSrc}
            alt="Resume preview"
            className="mx-auto max-h-[70vh] w-full object-contain object-top p-4"
            loading="lazy"
            onError={() => setImageOk(false)}
          />
        </div>
      ) : (
        <p className="text-center text-sm text-muted-foreground">
          Add <code className="font-mono text-xs">RuchiPatelResume.jpg</code> to <code className="font-mono text-xs">public/</code>
          , or set <code className="font-mono text-xs">VITE_RESUME_PREVIEW_IMAGE_URL</code> to a hosted image (for example
          exported from your LaTeX CI).
        </p>
      )}
    </div>
  );
}
