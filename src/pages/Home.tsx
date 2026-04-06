import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { categoryLabels, projects, sortProjects } from "@/data/projects";

export function Home() {
  const featured = sortProjects(projects.filter((p) => p.featured));
  const rest = sortProjects(projects.filter((p) => !p.featured)).slice(0, 2);

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <p className="font-mono text-sm text-muted-foreground">Hello —</p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          I&apos;m Ruchi, a computer science student at Georgia Tech focused on modeling, simulation, and information
          management.
        </h1>
        <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
          I build software, study systems, and share selected work on this site. Browse the project index for code and
          write-ups, or jump to my resume and contact page.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/work">
              View work <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/about">About me</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight">Selected work</h2>
          <Link to="/work" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            All projects
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {[...featured, ...rest].map((p) => (
            <li key={p.id}>
              <Link
                to="/work"
                state={{ highlight: p.id }}
                className="block rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="font-mono text-xs text-muted-foreground">{categoryLabels[p.category]}</p>
                <p className="mt-1 font-semibold">{p.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
