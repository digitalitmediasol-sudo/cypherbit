import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        
        <div className="flex-1 p-10 lg:p-20 text-white">
          <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-[12px]">CONTACT US</span>
          <h2 className="text-3xl lg:text-[44px] font-bold mt-4 mb-8 leading-tight tracking-tight">
            Let's Start Your Success Journey Today!
          </h2>
          <p className="text-slate-400 mb-12 text-[15px] leading-relaxed">
            Have a project in mind? Our team is ready to help you navigate your digital transformation.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] mb-1 uppercase tracking-[0.2em] font-bold">Call Us</p>
                <p className="text-lg font-bold tracking-tight">+91 95922 41344</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] mb-1 uppercase tracking-[0.2em] font-bold">Email Us</p>
                <p className="text-lg font-bold tracking-tight">cypherbit@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] mb-1 uppercase tracking-[0.2em] font-bold">Location</p>
                <p className="text-lg font-bold tracking-tight">Aman Nagar, Ludhiana, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-10 lg:p-20 bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+91 00000 00000" 
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Message</label>
              <textarea 
                rows={4} 
                placeholder="How can we help you?" 
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all resize-none text-sm"
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-500/10 hover:bg-blue-600 transition-all flex items-center justify-center gap-3 text-[13px] uppercase tracking-[0.2em]">
              Send Message <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;