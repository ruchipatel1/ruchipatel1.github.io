import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categoryLabels, type ProjectCategory, projects, sortProjects } from "@/data/projects";

const categories: Array<ProjectCategory | "all"> = ["all", "coursework", "personal", "professional", "open-source"];

function matchesQuery(project: (typeof projects)[number], q: string): boolean {
  if (!q.trim()) return true;
  const needle = q.trim().toLowerCase();
  const hay = [
    project.title,
    project.tagline,
    project.summary,
    project.description,
    ...project.tags,
    project.role ?? "",
    project.year ?? "",
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(needle);
}

export function Work() {
  const location = useLocation();
  const highlightId = (location.state as { highlight?: string } | null)?.highlight;

  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<(typeof categories)[number]>("all");

  const filtered = useMemo(() => {
    const byCat = tab === "all" ? projects : projects.filter((p) => p.category === tab);
    const withoutFeatured = byCat.filter((p) => !p.featured);
    return sortProjects(withoutFeatured.filter((p) => matchesQuery(p, query)));
  }, [tab, query]);

  const featured = useMemo(() => sortProjects(projects.filter((p) => p.featured)), []);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Work</h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          Projects grouped by context. Use search to filter by title, stack, or keywords. Each card links out when a
          demo or repository exists—swap entries in{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">src/data/projects.ts</code> as you ship new
          work.
        </p>
      </header>

      {featured.length > 0 ? (
        <section className="space-y-4" aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="text-lg font-semibold tracking-tight">
            Featured
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} highlight={highlightId === p.id} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4" aria-labelledby="directory-heading">
        <h2 id="directory-heading" className="text-lg font-semibold tracking-tight">
          Directory
        </h2>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter by category"
          >
            {categories.map((c) => (
              <Button
                key={c}
                type="button"
                role="tab"
                aria-selected={tab === c}
                variant={tab === c ? "default" : "secondary"}
                size="sm"
                className="rounded-md"
                onClick={() => setTab(c)}
              >
                {c === "all" ? "All" : categoryLabels[c]}
              </Button>
            ))}
          </div>
          <Input
            type="search"
            placeholder="Search projects…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="max-w-sm"
            aria-label="Search projects"
          />
        </div>
        <div className="mt-2">
          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground">No projects match that filter.</p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2">
              {filtered.map((p) => (
                <li key={p.id}>
                  <ProjectCard project={p} highlight={highlightId === p.id} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
