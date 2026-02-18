import { motion } from "framer-motion";

const About = () => (
    <section id="about" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
                    About
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-8">
                    A bit about me
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6 font-body text-base text-muted-foreground leading-relaxed"
            >
                <p>
                    I work best at the stage where the problem isn't fully defined yet.
                </p>
                <p>
                    When a team has an idea, some traction, and a lot of open questions, that's where I add the most value.
                    I help clarify the technical direction, design an architecture that fits the reality of the business, and then build it properly.
                </p>
                <p>
                    I've worked across climate tech, biotech, and early-stage startups. I've replaced legacy systems,
                    built AI-powered document pipelines that reduced days of manual work to minutes, and shipped MVPs
                    that supported funding conversations.
                </p>
                <p>
                    I care about ownership, clarity, and building systems that don't need to be rewritten six months later.
                </p>
            </motion.div>
        </div>
    </section>
);

export default About;
