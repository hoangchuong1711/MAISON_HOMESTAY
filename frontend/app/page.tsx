import About from "../components/About";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Rooms from "../components/Rooms";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f3e9] bg-[radial-gradient(100%_80%_at_50%_0%,_#fdf9ee_0%,_#eff3e1_45%,_#f7f3e9_100%)] text-zinc-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Rooms />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
