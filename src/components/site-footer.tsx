import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

import { Separator } from "@/components/ui/separator";

const social = [
  { href: "https://github.com/ruchipatel1", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/ruchi-patel1/", label: "LinkedIn", Icon: Linkedin },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ruchi Patel ·{" "}
          <Link to="/contact" className="underline-offset-4 hover:underline">
            Get in touch
          </Link>
        </p>
        <div className="flex items-center gap-4">
          {social.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <Separator />
    </footer>
  );
}
