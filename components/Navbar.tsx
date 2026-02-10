import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Blogs', id: 'blogs' },
    { label: 'Contact Us', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:py-6 pointer-events-none">
      <nav 
        className={`max-w-7xl mx-auto w-full transition-all duration-500 pointer-events-auto rounded-full border border-white/30 shadow-2xl
          ${isScrolled 
            ? 'bg-white/80 backdrop-blur-xl py-2.5 px-6' 
            : 'bg-white/60 backdrop-blur-md py-3.5 px-8'
          }`}
      >
        <div className="flex justify-between items-center relative h-12 md:h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 z-10">
            <a href="#home" className="block transition-all duration-300 hover:scale-105 active:scale-95">
              <img 
                src="https://res.cloudinary.com/dxpyzts2w/image/upload/v1770719654/ChatGPT_Image_Feb_10_2026_03_59_13_PM_pcs4cm.png" 
                alt="Cypherbit" 
                className="h-10 md:h-14 w-auto object-contain"
              />
            </a>
          </div>

          {/* Menu - Center (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-4 py-2 rounded-full text-[14px] font-bold tracking-tight transition-all duration-300 relative flex flex-col items-center group
                    ${isActive 
                      ? 'text-[#3b82f6] bg-[#eff6ff]' 
                      : 'text-slate-600 hover:text-[#3b82f6]'
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA - Right */}
          <div className="hidden md:flex items-center z-10">
            <a
              href="#contact"
              className="px-6 py-2.5 font-bold text-white transition-all duration-300 bg-[#0f172a] rounded-full hover:bg-blue-600 hover:shadow-[0_10px_20px_rgba(15,23,42,0.15)] active:scale-95 text-[13px] tracking-wide uppercase leading-none"
            >
              Get A Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden z-10">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 focus:outline-none group bg-white/50 rounded-full"
              aria-label="Toggle Menu"
            >
              <div className="w-5 flex flex-col items-end gap-1 overflow-hidden">
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 origin-right ${mobileMenuOpen ? 'w-5 -rotate-45 translate-y-[1px]' : 'w-5'}`} />
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 translate-x-4' : 'w-3'}`} />
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 origin-right ${mobileMenuOpen ? 'w-5 rotate-45 -translate-y-[1px]' : 'w-4'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${mobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4 pb-4 px-2' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-5 py-3.5 rounded-2xl text-[15px] font-bold transition-colors
                  ${activeSection === item.id 
                    ? 'text-[#3b82f6] bg-[#eff6ff]' 
                    : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 px-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-block py-4 bg-[#0f172a] text-white text-center font-bold rounded-2xl shadow-lg active:scale-[0.98] transition-all text-[14px] uppercase tracking-wider"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;