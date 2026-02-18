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
                <p className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-4">
                    About
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-10">
                    A bit about me
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6 font-body text-base text-muted-foreground leading-[1.85]"
            >
                <p>
                    I've built internal platforms used daily by researchers and analysts.
                    I've worked in climate tech where data decisions carry real-world consequences.
                    That experience shapes how I build: carefully, clearly, and with long-term thinking.
                </p>
                <p>
                    I'm most useful at the stage where the problem isn't fully defined — when a team
                    has traction but open questions around architecture, tooling, or how to scale without
                    painting themselves into a corner. I help make those decisions with confidence, then
                    follow through on the build.
                </p>
                <p>
                    I've worked across life sciences, climate tech, and early-stage startups. I've
                    replaced legacy systems, built document pipelines that cut days of manual work
                    to minutes, and shipped MVPs that held up when users arrived.
                </p>
                <p>
                    I care about ownership, clarity, and writing software that doesn't need to be
                    rewritten six months later.
                </p>
                <p>
                    Outside of work, I cook elaborate dinners, sail when I can, and spend a lot of time
                    thinking about how systems (technical or human) hold together.
                </p>
            </motion.div>
        </div>
    </section>
);

export default About;
