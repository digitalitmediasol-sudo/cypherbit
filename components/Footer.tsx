import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Latest Blogs', href: '#blogs' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dxpyzts2w/image/upload/v1770719654/ChatGPT_Image_Feb_10_2026_03_59_13_PM_pcs4cm.png" 
                alt="Cypherbit" 
                className="h-16 md:h-24 w-auto object-contain block" 
              />
            </div>
            <p className="leading-relaxed text-slate-400 text-[14px]">
              We empower businesses with cutting-edge digital solutions. From web development to digital marketing, we are your partner in growth.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-[13px] mb-8 uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'Graphic Design', 'SEO & Marketing', 'UI/UX Design'].map(link => (
                <li key={link}>
                  <a href="#services" className="hover:text-blue-500 transition-colors text-[14px] text-slate-400 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[13px] mb-8 uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-blue-500 transition-colors text-[14px] text-slate-400 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[13px] mb-8 uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="mb-6 text-[14px] text-slate-400">Stay updated with our latest technology trends and company news.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 px-6 focus:outline-none focus:border-blue-500 transition-all text-white text-[13px]"
              />
              <button className="absolute right-1.5 top-1.5 bg-blue-500 p-2 rounded-full text-white hover:bg-white hover:text-blue-500 transition-all shadow-lg shadow-blue-500/20">
                <ArrowUp className="w-4 h-4 rotate-90" />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[12px] text-slate-500 font-medium uppercase tracking-wider">
            © 2024 Cypherbit. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-500 transition-all shadow-xl shadow-blue-500/10"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;