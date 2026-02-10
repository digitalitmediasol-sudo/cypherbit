
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'blogs', 'contact'];
      const scrollPosition = window.scrollY + 120; // Adjusted offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      
      <main>
        {/* Added scroll-mt-28 to ensure fixed navbar doesn't cover content when jumping to section */}
        <section id="home" className="scroll-mt-28">
          <Hero />
          <Features />
        </section>

        <section id="about" className="py-20 bg-slate-50/50 scroll-mt-28">
          <About />
        </section>

        <section id="services" className="py-20 scroll-mt-28">
          <Services />
        </section>

        <section id="projects" className="py-20 bg-slate-50/50 scroll-mt-28">
          <Projects />
        </section>

        <section id="blogs" className="py-20 scroll-mt-28">
          <Blog />
        </section>

        <section id="contact" className="py-20 bg-white scroll-mt-28">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
