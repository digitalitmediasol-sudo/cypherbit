import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-[12px]">OUR SERVICES</span>
        <h2 className="text-3xl lg:text-[44px] font-bold text-slate-900 mt-4 leading-tight tracking-tight">
          Solutions for a Better Digital World
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="group p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 mb-8">
              {/* Scale down icons slightly for balance */}
              <div className="scale-90">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
            <p className="text-slate-500 text-[14px] mb-8 leading-relaxed">
              {service.description}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:text-blue-500 transition-colors text-[13px] uppercase tracking-wider"
            >
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 lg:p-12 bg-slate-900 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2 tracking-tight">Need a Custom Solution?</h3>
          <p className="text-slate-400 text-[15px]">Contact us today to discuss your project requirements in detail.</p>
        </div>
        <button className="relative z-10 bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all shadow-lg shadow-blue-500/10 whitespace-nowrap text-[13px] uppercase tracking-widest">
          Get A Quote
        </button>
        {/* Subtle pattern background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-20 -mt-20"></div>
      </div>
    </div>
  );
};

export default Services;