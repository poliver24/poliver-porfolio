import { motion } from "framer-motion";
import { Download } from "lucide-react";

const experiences = [
    {
        domain: "Climate Tech",
        description:
            "Designed and delivered production data systems for environmental monitoring. Replaced legacy search infrastructure with a new OpenSearch-based platform and built AI document pipelines that reduced analyst review time from days to minutes.",
    },
    {
        domain: "Biotech & Life Sciences",
        description:
            "Built document processing systems and research tooling in regulated environments. Reliable software that handled sensitive data and cut significant manual work from core workflows.",
    },
    {
        domain: "Early-Stage Startups",
        description:
            "Founding or early engineer across multiple ventures. Turned broad product concepts into validated MVPs, onboarding early users and shaping technical direction under tight constraints.",
    },
    {
        domain: "End-to-End Product Ownership",
        description:
            "Owned features from schema to deployment. APIs, frontends, infrastructure, and production support with full accountability.",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
                        Background
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-4">
                        Experience
                    </h2>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mb-14">
                        A mix of domains, all with real constraints and production requirements.
                    </p>
                </motion.div>

                <div className="space-y-10 mb-14">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.domain}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="border-l-2 border-primary/30 pl-6"
                        >
                            <h3 className="font-display text-xl font-medium text-foreground mb-2">
                                {exp.domain}
                            </h3>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <a
                        href="/poliver_cv.pdf"
                        download="Patrick_Oliver_CV.pdf"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-body text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Download Full CV
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
