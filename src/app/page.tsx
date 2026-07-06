import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Work from '@/components/sections/Work';
import Expertise from '@/components/sections/Expertise';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-base text-text-1 selection:bg-brand-dim selection:text-brand-light">
      <Navbar />
      <main id="main">
        <Hero />
        <Work />
        <Expertise />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
