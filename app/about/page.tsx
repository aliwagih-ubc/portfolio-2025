import { HeroSection } from "@/components/hero-section";
import { ContactSection } from "@/components/contact-section";
import { SectionHeading } from "@/components/section-heading";
import { CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                eyebrow="My Journey"
                title="From concrete and steel to code and cloud."
                description={
                    <p>
                        I spent years managing complex marine construction projects in BC. Now, I use that experience to build software that actually solves the problems I saw on site every day.
                    </p>
                }
            />

            <section className="pb-24 container-custom">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Main Narrative */}
                    <div className="md:col-span-8 space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-6">The Background</h3>
                            <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
                                <p>
                                    My career started in civil engineering, where "production" meant delivering tangible infrastructure in harsh marine environments. As a Project Manager, I dealt with multi-million dollar budgets, complex stakeholder negotiations, and the constant pressure of tide charts and weather windows.
                                </p>
                                <p>
                                    I saw first-hand how much friction exists in construction workflows. Data is siloed, decisions are made on stale information, and brilliant engineers spend hours copy-pasting spreadsheet rows.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-6">The Pivot</h3>
                            <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
                                <p>
                                    I realized that the biggest levers for improvement weren't better concrete mixes, but better information systems. I went back to school for Computer Science to build the tools I wished I had.
                                </p>
                                <p>
                                    Today, I'm bridging the gap. I speak the language of the job site and the language of the pull request. I build software that respects deep domain constraints while leveraging modern AI to automate the drudgery.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-6">Core Values</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Empathy for the end-user",
                                    "Clarity over cleverness",
                                    "Ownership of outcomes",
                                    "Bias for action",
                                    "Rigorous simplicity",
                                    "Reliability matters"
                                ].map((value) => (
                                    <li key={value} className="flex items-start gap-3 text-muted-foreground bg-muted/30 p-3 rounded-lg border border-border/50">
                                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium">{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Stack */}
                    <div className="md:col-span-4 space-y-10">
                        <div className="bg-muted/20 border border-border/60 rounded-xl p-6">
                            <h4 className="font-bold text-lg mb-4">Technical Stack</h4>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">Frontend</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"].map(item => (
                                            <span key={item} className="text-xs bg-background border border-border px-2 py-1 rounded">{item}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">Backend & Data</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {["Node.js", "Python", "Supabase", "PostgreSQL", "Prisma"].map(item => (
                                            <span key={item} className="text-xs bg-background border border-border px-2 py-1 rounded">{item}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">AI & Tools</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {["OpenAI API", "LangChain", "RAG Patterns", "Vercel"].map(item => (
                                            <span key={item} className="text-xs bg-background border border-border px-2 py-1 rounded">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-xl p-6">
                            <h4 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-100">Why Me?</h4>
                            <p className="text-sm text-blue-700 dark:text-blue-200 leading-relaxed">
                                Most developers haven't worn a hard hat. I have. I know what it means to build tools that need to work when it's raining, the wifi is spotty, and the schedule is slipping.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <ContactSection />
        </div>
    );
}
