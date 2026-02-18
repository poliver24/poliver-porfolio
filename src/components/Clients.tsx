import { motion } from "framer-motion";

const clients = [
    "Early-stage startups defining their technical direction",
    "Founders who want an engineer with opinions, not just a ticket-taker",
    "Teams shipping complex features into production",
    "Teams building in life sciences, climate, or community-driven domains",
    "Organisations that expect engineers to own problems end-to-end",
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
                    className="mb-10"
                >
                    <p className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-4">
                        Who I work with
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
                        Who I work best with
                    </h2>
                </motion.div>

                <ul className="space-y-5">
                    {clients.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.06 }}
                            className="font-body text-base text-muted-foreground flex items-start gap-4 leading-relaxed"
                        >
                            <span className="mt-[11px] w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Clients;
