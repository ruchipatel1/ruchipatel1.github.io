import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

function navClassName({ isActive }: { isActive: boolean }) {
  return cn(
    "text-sm font-medium transition-colors hover:text-foreground/80",
    isActive ? "text-foreground" : "text-muted-foreground",
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="font-mono text-sm font-semibold tracking-tight text-foreground">
          Ruchi Patel
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClassName} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw,20rem)]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile">
                {nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={navClassName}
                    end={item.to === "/"}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
