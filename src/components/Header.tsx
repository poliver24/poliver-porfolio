import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#" className="font-display text-lg font-semibold text-foreground tracking-tight">
                    <span className="font-bold">PO</span>liver
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-1"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-px bg-foreground transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
                    <span className={`block w-5 h-px bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-px bg-foreground transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
                </button>
            </div>

            {mobileOpen && (
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </motion.nav>
            )}
        </motion.header>
    );
};

export default Header;
