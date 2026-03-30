import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

// --------------------
// Navigation Items
// --------------------
export const NAV_ITEMS = [
  { label: "About", path: "/about" },
  { label: "Research", path: "/research" },
  { label: "Publications", path: "/publications" },
  { label: "Teaching", path: "/teaching" },
  { label: "Fun", path: "/fun" },
];

// --------------------
// Nav Links Component
// --------------------
interface NavLinksProps {
  onNavigate?: () => void;
  orientation?: "horizontal" | "vertical";
}

function NavLinks({ onNavigate, orientation = "horizontal" }: NavLinksProps) {
  const location = useLocation();

  return (
    <nav
      className={cn(
        "text-sm font-medium",
        orientation === "horizontal"
          ? "hidden md:flex items-center space-x-6"
          : "flex flex-col space-y-3",
      )}
    >
      {NAV_ITEMS.map(({ label, path }) => (
        <Link
          key={path}
          to={path}
          onClick={onNavigate}
          className={cn(
            "transition-colors hover:text-primary",
            location.pathname === path
              ? "font-semibold text-primary"
              : "text-muted-foreground",
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

// --------------------
// Header Component
// --------------------
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo / Initials */}
        <Link to="/about" className="flex items-center">
          <span className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors">
            NK
          </span>
        </Link>

        {/* Desktop Nav */}
        <NavLinks orientation="horizontal" />

        {/* Right Controls */}
        <div className="flex items-center space-x-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden md:flex"
          >
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </Button>

          <ModeToggle />

          {/* Mobile Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="px-4 py-2 space-y-6">
            <NavLinks
              orientation="vertical"
              onNavigate={() => setMobileOpen(false)}
            />
            <Button asChild variant="outline" size="sm" className="w-full">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
