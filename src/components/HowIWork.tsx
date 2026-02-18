import { motion } from "framer-motion";

const principles = [
    {
        number: "01",
        heading: "Start with the problem, not the stack",
        body: "Technology choices follow from what the problem actually needs — not the other way around.",
    },
    {
        number: "02",
        heading: "Prefer simple systems that evolve well",
        body: "Complexity should be earned. Most good systems are simpler than expected.",
    },
    {
        number: "03",
        heading: "Bias toward shipping, but not recklessly",
        body: "Speed matters, but not at the cost of decisions that are painful to undo.",
    },
    {
        number: "04",
        heading: "Document decisions clearly",
        body: "Future maintainers — often future me — should understand not just what was built, but why.",
    },
    {
        number: "05",
        heading: "Think long-term about maintainability",
        body: "Software that's a pleasure to change is worth more than software that's fast to write.",
    },
];

const HowIWork = () => (
    <section id="how-i-work" className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-14"
            >
                <p className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-4">
                    Approach
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
                    How I work
                </h2>
            </motion.div>

            <div className="space-y-10">
                {principles.map((p, i) => (
                    <motion.div
                        key={p.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        className="grid sm:grid-cols-[3rem_1fr] gap-4 sm:gap-8"
                    >
                        <span className="font-body text-xs text-primary/50 tracking-widest pt-0.5 font-medium">
                            {p.number}
                        </span>
                        <div>
                            <h3 className="font-display text-lg font-medium text-foreground mb-1.5">
                                {p.heading}
                            </h3>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                {p.body}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default HowIWork;
