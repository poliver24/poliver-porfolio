import { motion } from "framer-motion";

const clients = [
    "Early-stage startups figuring out their architecture",
    "Teams shipping complex features into production",
    "Companies where engineers are expected to own the problem end-to-end",
    "Founders who want a developer, not just a ticket-taker",
    "Organisations working on something that genuinely matters",
];

const Clients = () => {
    return (
        <section className="py-20 px-6 border-t border-border">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
                        Who I work with
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-10">
                        Who I work best with
                    </h2>
                </motion.div>

                <ul className="space-y-4">
                    {clients.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.06 }}
                            className="font-body text-base text-muted-foreground flex items-start gap-3 leading-relaxed"
                        >
                            <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Clients;
