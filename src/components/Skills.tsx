import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Technical Direction",
        skills: ["Architecture for early-stage products", "System design under constraint", "Technology selection and trade-offs", "Scaling foundations without overengineering"],
    },
    {
        title: "Full-Stack Delivery",
        skills: ["Python, Go, TypeScript", "FastAPI, Django, React, Next.js", "APIs, data pipelines, distributed systems"],
    },
    {
        title: "Applied AI & Data Systems",
        skills: ["Retrieval systems and document workflows", "Practical use of language models", "Evaluation and testing frameworks"],
    },
    {
        title: "Infrastructure & Reliability",
        skills: ["Docker, CI/CD, cloud deployment", "Production monitoring and resilience", "Shared schemas and consistent error handling"],
    },
];

const problems = [
    "Turning a rough idea into a working production system",
    "Designing architecture that supports growth without slowing velocity",
    "Making messy workflows reliable and maintainable",
    "Shipping complex features with clarity and accountability",
    "Bringing structure to ambiguous technical problems",
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-secondary">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
                        Capabilities
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-12">
                        What I bring
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="bg-background rounded-lg p-6 border border-border"
                        >
                            <h3 className="font-display text-lg font-medium text-foreground mb-4">
                                {cat.title}
                            </h3>
                            <ul className="space-y-2">
                                {cat.skills.map((skill) => (
                                    <li key={skill} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="font-display text-2xl font-medium text-foreground mb-6">
                        Problems I help solve
                    </h3>
                    <ul className="space-y-3">
                        {problems.map((problem, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="font-body text-base text-muted-foreground flex items-start gap-3"
                            >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {problem}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
