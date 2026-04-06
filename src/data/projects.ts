/**
 * Edit this file to add or update portfolio entries.
 * Optional image: place files in /public/work/ and set image to "/work/your-file.png"
 */
export type ProjectCategory = "coursework" | "personal" | "professional" | "open-source";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  /** Short line under the title */
  tagline: string;
  /** One or two sentences for cards */
  summary: string;
  /** Longer description for expanded / detail views */
  description: string;
  category: ProjectCategory;
  year?: string;
  role?: string;
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
  /** Path under public/, e.g. "/work/screenshot.png" */
  image?: string;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  coursework: "Coursework",
  personal: "Personal",
  professional: "Professional",
  "open-source": "Open source",
};

export const projects: Project[] = [
  {
    id: "portfolio-site",
    title: "Personal site",
    tagline: "This repository",
    summary: "A static portfolio built with React, Vite, Tailwind CSS, and shadcn/ui, deployed on GitHub Pages.",
    description:
      "Single-page app with routing, a filterable project directory, and a contact form. Intended as a template you can extend with real project screenshots and case studies.",
    category: "personal",
    year: "2026",
    role: "Author",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    links: [{ label: "Source", href: "https://github.com/ruchipatel1/ruchipatel1.github.io" }],
    featured: true,
  },
  {
    id: "github-profile",
    title: "GitHub profile",
    tagline: "Code & experiments",
    summary: "Repositories for coursework, side projects, and tooling. Replace this card with a specific repo when you want to highlight it.",
    description:
      "Use this pattern for work that lives entirely on GitHub: link the repo, list the stack, and add a short outcome (e.g. performance, users, or what you learned).",
    category: "open-source",
    tags: ["Git"],
    links: [{ label: "GitHub", href: "https://github.com/ruchipatel1" }],
  },
  {
    id: "sample-course-project",
    title: "Algorithms project (example)",
    tagline: "Replace with your course deliverable",
    summary: "Placeholder for a class project: brief problem statement, your approach, and a link to PDF or GitHub.",
    description:
      "Swap this entry for a real assignment or capstone. Add an image path for a diagram or demo screenshot to make the card stand out.",
    category: "coursework",
    year: "—",
    role: "Student",
    tags: ["Java", "Algorithms"],
    links: [],
  },
];

export function sortProjects(list: Project[]): Project[] {
  return [...list].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    const ya = a.year ?? "";
    const yb = b.year ?? "";
    if (ya !== yb) return yb.localeCompare(ya);
    return a.title.localeCompare(b.title);
  });
}
