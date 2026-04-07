import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skills = [
  "C#",
  "Python",
  "TypeScript",
  "Go",
  "C++",
  "SQL",
  "React",
  "Node.js",
  "Docker",
  "AWS",
  "ASP.NET",
  "Git",
  "Sentry",
  "Splunk",
];

export function About() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-muted-foreground">Background, focus areas, and how I work.</p>
      </div>
      <Separator />
      <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
        <p>
          I&apos;m a fullstack software engineer at{" "}
          <a
            href="https://www.atlassian.com/"
            className="font-medium text-foreground underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            Atlassian
          </a>
          , where I work on enterprise product and platform problems spanning permissions, frontend architecture,
          event-driven workflows, and performance.
        </p>
        <p>
          I like turning messy, high-impact problems into systems that are easier to reason about, safer to extend, and
          simpler for other engineers to use. A lot of my work centers on reusable architecture, internal tooling, and
          shipping features that hold up under scale.
        </p>
        <p>
          Before Atlassian, I interned at Qualtrics, where I built fullstack tools for ML pipeline visibility and
          large-scale auditability. I studied computer science at Georgia Tech, but this site is primarily about the
          work I&apos;ve done as an engineer.
        </p>
        <p>
          You can find code on{" "}
          <a
            href="https://github.com/ruchipatel1"
            className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub <ExternalLink className="h-3 w-3" />
          </a>{" "}
          and a fuller timeline on my{" "}
          <Link to="/resume" className="font-medium text-foreground underline-offset-4 hover:underline">
            resume
          </Link>
          .
        </p>
      </div>
      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tools & languages</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
