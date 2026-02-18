import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

const CONTACT_EMAIL = "poliver24@hotmail.com";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Contact from poliver.dev — ${formData.name}`);
        const body = encodeURIComponent(
            `From: ${formData.name} <${formData.email}>\n\n${formData.message}`
        );
        const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

        window.location.href = mailtoUrl;
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
                        Contact
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-4">
                        Let's talk
                    </h2>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mb-3 max-w-2xl">
                        Available to work with early-stage teams on technical direction and delivery.
                    </p>
                    <div className="font-body text-sm text-muted-foreground/80 space-y-1 mb-10">
                        <p>📍 Oxford, UK · open to remote</p>
                        <p>📅 Currently available</p>
                        <p>⏱ I typically respond within 24 hours</p>
                    </div>
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-foreground transition-colors mb-12"
                    >
                        <Mail className="w-4 h-4" />
                        {CONTACT_EMAIL}
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {submitted ? (
                        <div className="bg-secondary border border-border rounded-lg p-10 text-center">
                            <p className="font-display text-xl font-medium text-foreground mb-2">Almost there</p>
                            <p className="font-body text-sm text-muted-foreground mb-4">
                                Your email client should have opened with a pre-filled message. Please send it to complete your request.
                                I&apos;ll get back to you within 24 hours once received.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSubmitted(false);
                                    setFormData({ name: "", email: "", message: "" });
                                }}
                                className="font-body text-sm text-primary hover:text-foreground transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="font-body text-sm font-medium text-foreground mb-2 block">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="font-body text-sm font-medium text-foreground mb-2 block">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                                        placeholder="you@company.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="font-body text-sm font-medium text-foreground mb-2 block">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-shadow resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-body text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
