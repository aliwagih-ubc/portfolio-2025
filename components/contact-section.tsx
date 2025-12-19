import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24">
            <div className="container-custom">
                <div className="border border-border/60 bg-gradient-to-br from-muted/50 to-background rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                        Ready to build something real?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                        If you’re building in construction or engineering and want a thoughtful technical partner who understands the domain, let's connect.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="mailto:contact@aliwagih.com"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            Send me an email
                        </Link>
                        <Link
                            href="https://linkedin.com/in/aliwagih"
                            target="_blank"
                            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted"
                        >
                            Connect on LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
