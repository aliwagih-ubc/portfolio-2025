import { Compass, Hammer, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./section-heading";

const pillars = [
    {
        icon: Compass,
        title: "Empathy-First Discovery",
        description: "I don't just take specs. I map the real pain, understand the constraints, and ensure we're solving the right problem for the people in the field."
    },
    {
        icon: Hammer,
        title: "Build the Right Thing",
        description: "I believe in the smallest useful version. Rapid prototyping and tight feedback loops prevent wasted effort and ensure adoption."
    },
    {
        icon: ShieldCheck,
        title: "Ship with Reliability",
        description: "Civil engineering taught me that failure isn't an option. I bring that same rigour to software—handling edge cases and ensuring stability."
    }
];

export function HowIWork() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container-custom">
                <SectionHeading
                    title="How I Work"
                    subtitle="Software success isn't just code. It's understanding the reality of where that code lives."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                    {pillars.map((pillar) => (
                        <div key={pillar.title} className="flex flex-col items-center text-center space-y-4">
                            <div className="h-16 w-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center mb-2">
                                <pillar.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold">{pillar.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
