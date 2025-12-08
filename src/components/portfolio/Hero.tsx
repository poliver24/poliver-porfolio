import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail } from "lucide-react";
import { SiGithub as Github, SiLinkedin as Linkedin } from "react-icons/si";

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Status Badge */}
                    <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-sm text-muted-foreground">
                            Available for new opportunities
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                        Hi, I'm{" "}
                        <span className="text-gradient">Patrick</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Full Stack Developer crafting{" "}
                        <span className="text-foreground">elegant solutions</span> for complex
                        problems. Passionate about clean code and great user experiences.
                    </p>

                    {/* CTA Buttons */}
                    <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Button size="lg" className="glow group">
                            View My Work
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg">
                            Get In Touch
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="animate-fade-up-delay-3 flex items-center justify-center gap-6">
                        <a
                            href="https://github.com/poliver24"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/patrick-oliver/"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:poliver24@hotmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
                </div>
            </div>
        </section>
    );
};