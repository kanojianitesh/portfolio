import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import { ScholarIcon } from "@/components/icons/ScholarIcon";
import { OrcidIcon } from "@/components/icons/OrcidIcon";

function Footer() {
  return (
    <footer className="mt-10 w-full border-t border-border bg-background/60 py-6 backdrop-blur">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-3 text-center">
        <div className="flex justify-center space-x-1">
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://www.linkedin.com/in/nitesh-kanojia-1510"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://scholar.google.com/citations?user=zetUw0UAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Scholar"
            >
              <ScholarIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://orcid.org/0000-0002-9860-3533"
              target="_blank"
              rel="noreferrer"
              aria-label="ORCID"
            >
              <OrcidIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="mailto:Kanojianitesh01@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} by{" "}
          <span className="font-medium text-primary">Nitesh Kanojia</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
