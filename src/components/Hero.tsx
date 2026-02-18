import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex items-center justify-center px-6 pt-28 pb-20">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="font-body text-sm tracking-widest uppercase text-primary mb-6">
                        Software Engineering · Product Delivery · Architecture
                    </p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.15] text-foreground mb-8"
                >
                    Technical direction and hands-on delivery for early-stage teams.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mb-3"
                >
                    I help founders turn ambiguous ideas into production systems that hold up.
                    From MVP architecture to scalable infrastructure, I design and build software that survives growth.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="font-body text-sm text-muted-foreground/70 leading-relaxed max-w-2xl mb-12"
                >
                    Oxford-based. Working with early-stage startups across the UK and remotely.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-body text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
                    >
                        Get in Touch
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href="/poliver_cv.pdf"
                        download="Patrick_Oliver_CV.pdf"
                        className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-body text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Download CV
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
