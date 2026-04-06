import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skills = [
  "Java",
  "MATLAB",
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "LaTeX",
  "Git",
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
          I study computer science at the{" "}
          <a
            href="https://www.gatech.edu/"
            className="font-medium text-foreground underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            Georgia Institute of Technology
          </a>
          , with concentrations in modeling and simulation and in information management.
        </p>
        <p>
          I enjoy turning messy problems into clear implementations—whether that is simulation, data-focused tooling,
          or interfaces that make complex ideas easier to explore.
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
