import { motion } from "framer-motion";

const capabilities = [
    {
        title: "Architecture & technical direction",
        description:
            "Defining how a system should be built before the first line of production code. Technology selection, trade-offs, and foundations that support growth without overengineering.",
    },
    {
        title: "Shipping production systems",
        description:
            "End-to-end delivery across the stack: APIs, frontends, data pipelines, infrastructure. Systems shipped with full accountability, not just code handed over.",
    },
    {
        title: "MVP development done properly",
        description:
            "Moving fast without creating a mess to clean up later. MVPs that can evolve, not ones that need rewriting the moment they gain traction.",
    },
    {
        title: "Stabilising growing systems",
        description:
            "Bringing structure to systems that have outgrown their early decisions. Reducing fragility, improving observability, making it easier to move again.",
    },
];

const techGroups = [
    { label: "Languages", items: ["Python", "TypeScript", "Go"] },
    { label: "Backend", items: ["FastAPI", "Django", "Node.js"] },
    { label: "Frontend", items: ["React", "Next.js"] },
    { label: "Data & AI", items: ["OpenSearch", "LLM pipelines", "RAG systems"] },
    { label: "Infrastructure", items: ["Docker", "CI/CD", "Cloud deployment"] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-secondary/50">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <p className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-4">
                        Capabilities
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
                        What I bring
                    </h2>
                </motion.div>

                {/* Capability cards */}
                <div className="space-y-0 mb-20">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                            className="py-8 border-b border-border first:border-t"
                        >
                            <h3 className="font-display text-xl font-medium text-foreground mb-2">
                                {cap.title}
                            </h3>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xl">
                                {cap.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech stack — compact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-8">
                        Tools & technologies
                    </p>
                    <div className="flex flex-wrap gap-x-10 gap-y-5">
                        {techGroups.map((group) => (
                            <div key={group.label}>
                                <p className="font-body text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">
                                    {group.label}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="font-body text-sm text-foreground/80"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
