import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { categoryLabels, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  highlight?: boolean;
};

export function ProjectCard({ project, highlight }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (highlight && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [highlight]);

  return (
    <Card
      ref={ref}
      id={`project-${project.id}`}
      className={cn(
        "flex h-full flex-col overflow-hidden transition-shadow",
        highlight && "ring-2 ring-ring ring-offset-2 ring-offset-background",
      )}
    >
      {project.image ? (
        <div className="aspect-video w-full overflow-hidden border-b bg-muted">
          <img src={project.image} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
      ) : (
        <div className="aspect-video w-full border-b bg-gradient-to-br from-muted to-background" aria-hidden />
      )}
      <CardHeader className="space-y-1">
        <p className="font-mono text-xs text-muted-foreground">
          {categoryLabels[project.category]}
          {project.year ? ` · ${project.year}` : ""}
        </p>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription>{project.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        <p className="text-sm text-muted-foreground">{project.summary}</p>
        {project.role ? (
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Role:</span> {project.role}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Badge key={t} variant="outline" className="font-normal">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      {project.links.length > 0 ? (
        <CardFooter className="flex flex-wrap gap-2 border-t bg-muted/30 pt-4">
          {project.links.map((link) => (
            <Button key={link.href} variant="secondary" size="sm" asChild>
              <a href={link.href} target="_blank" rel="noreferrer noopener">
                {link.label}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          ))}
        </CardFooter>
      ) : null}
    </Card>
  );
}
