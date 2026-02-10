import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg w-full h-[300px] object-cover" alt="Coding Work" />
              <div className="bg-blue-500 rounded-3xl p-6 text-white text-center shadow-xl shadow-blue-500/20">
                 <p className="text-3xl font-bold">5+</p>
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mt-1">Years Experience</p>
              </div>
            </div>
            <div className="pt-12">
               <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg w-full h-[400px] object-cover" alt="Sleek Office Space" />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <span className="text-blue-500 font-bold tracking-[0.15em] uppercase text-[12px] flex items-center gap-3">
            <div className="w-10 h-[1.5px] bg-blue-500/30"></div> ABOUT US
          </span>
          <h2 className="text-3xl lg:text-[44px] font-bold text-slate-900 leading-[1.2] tracking-tight">
            Crafting a Sustainable Digital Presence
          </h2>
          <p className="text-slate-600 leading-relaxed text-[15px]">
            Cypherbit is a premier software company based in Ludhiana. We specialize in providing comprehensive IT services that empower businesses to thrive in the modern landscape. Our approach combines technical expertise with creative innovation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
             {[
               "Expert Developers", 
               "Client Centric approach", 
               "Modern Technologies", 
               "Proven Track Record"
             ].map((text, i) => (
               <div key={i} className="flex items-center gap-3">
                 <div className="p-1 bg-blue-50 rounded-full">
                    <CheckCircle2 className="text-blue-500 w-4 h-4" />
                 </div>
                 <span className="font-semibold text-slate-700 text-[14px]">{text}</span>
               </div>
             ))}
          </div>

          <div className="border-t border-slate-100 pt-8 mt-8 grid grid-cols-3 gap-6">
            {STATS.map((stat, idx) => (
              <div key={idx}>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Our Philosophy</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Innovation & Trust</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Simple icon replacement since we're removing the CEO face
import { ShieldCheck } from 'lucide-react';

export default About;