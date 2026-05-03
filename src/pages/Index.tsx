import Background from "@/components/portfolio/Background";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Work from "@/components/portfolio/Work";
import Resume from "@/components/portfolio/Resume";
import Contact from "@/components/portfolio/Contact";

const Index = () => (
  <main className="relative min-h-screen text-foreground">
    <Background />
    <Nav />
    <Hero />
    <About />
    <Work />
    <Resume />
    <Contact />
  </main>
);

export default Index;
