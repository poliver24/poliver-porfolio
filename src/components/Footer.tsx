const Footer = () => (
    <footer className="py-14 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
                <p className="font-display text-sm font-semibold text-foreground tracking-tight">
                    <span className="font-bold">PO</span>liver
                    <span className="font-body text-muted-foreground/60 font-normal"> · Oxford, UK</span>
                </p>
                <p className="font-body text-xs text-muted-foreground/50 mt-1.5">
                    © {new Date().getFullYear()} · Available for contract & freelance work
                </p>
            </div>
            <div className="flex items-center gap-8">
                {[
                    { label: "GitHub", href: "https://github.com/poliver24/" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/patrick-oliver/" },
                    { label: "Email", href: "mailto:poliver24@hotmail.com" },
                ].map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    </footer>
);

export default Footer;
