import { Navbar } from "@/components/portfolio/NavBar";
import { Hero } from "@/components/portfolio/Hero";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <Hero />
            </main>
        </div>
    );
};

export default Index;