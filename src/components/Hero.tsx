import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="min-h-[92vh] flex items-center px-6 pt-32 pb-24">
            <div className="max-w-3xl mx-auto w-full">

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-10"
                >
                    <span className="inline-block font-body text-xs tracking-[0.2em] uppercase text-primary/80 border border-primary/20 rounded-full px-3 py-1">
                        Oxford, UK · Available for work
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="font-display text-4xl sm:text-5xl md:text-[3.5rem] font-medium leading-[1.18] text-foreground mb-8 tracking-tight"
                >
                    I build production software for teams solving real-world problems.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mb-2"
                >
                    Senior software engineer based in Oxford.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.42 }}
                    className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mb-14"
                >
                    I work with early-stage teams to define architecture, ship production features, and build systems that hold up under real use.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.52 }}
                    className="flex flex-wrap gap-4"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-body text-sm font-medium rounded-md hover:opacity-85 transition-opacity"
                    >
                        Work With Me
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href="#experience"
                        className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-body text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                    >
                        View Experience
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
