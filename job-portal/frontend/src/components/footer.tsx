import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container mx-auto max-w-7xl px-4 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start gap-3 flex-1">
          <h3 className="text-2xl font-bold tracking-tight">JobPortal</h3>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
            Connecting top talent with the best opportunities. Building the future of work, together.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-3 flex-1">
          <h4 className="font-semibold">Quick Links</h4>
          <div className="flex flex-col items-center md:items-start gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/jobs" className="hover:text-primary transition-colors">Browse Jobs</Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-3 flex-1">
          <h4 className="font-semibold">Connect</h4>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
