import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/40">
            <div className="container-custom py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <span className="font-semibold text-sm">Ali Wagih</span>
                        <span className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} All rights reserved.
                        </span>
                    </div>

                    <div className="flex gap-6">
                        <Link
                            href="mailto:contact@aliwagih.com" // Placeholder email
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/aliwagih" // Placeholder LinkedIn
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://github.com/aliwagih" // Placeholder GitHub
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
