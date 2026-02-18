import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
    <div className="min-h-screen bg-background">
        <Header />
        <main>
            <Hero />
            <Clients />
            <About />
            <Skills />
            <Experience />
            <Contact />
        </main>
        <Footer />
    </div>
);

export default Index;
