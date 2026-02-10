import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left z-10">
            <span className="inline-flex items-center py-1.5 px-4 mb-8 rounded-full bg-[#eff6ff] text-[#3b82f6] text-[12px] font-bold tracking-[0.1em] uppercase">
              SINCE 2018
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-extrabold text-[#0f172a] leading-[1.05] mb-8 tracking-tighter">
              Empowering Your <br />
              Digital Future: <br />
              <span className="text-[#3b82f6]">IT Excellence</span>
            </h1>
            <p className="text-base lg:text-lg text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We help businesses grow by building amazing digital experiences. At Cypherbit, we transform your vision into reality through innovative software solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a 
                href="#about"
                className="bg-[#3b82f6] text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-[0_15px_30px_rgba(59,130,246,0.2)] hover:-translate-y-1 text-sm uppercase tracking-wide"
              >
                Explore More <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#services"
                className="text-slate-900 font-bold px-4 py-4 hover:text-[#3b82f6] transition-colors flex items-center gap-2 text-base tracking-tight"
              >
                View All Services
              </a>
            </div>
          </div>

          <div className="flex-1 relative w-full lg:w-auto mt-12 lg:mt-20">
            {/* The Image Container with Rounded Corners and Overflow Hidden */}
            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.08)] aspect-[1.1/1] group z-10">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Tech Workspace" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/40 to-transparent"></div>
            </div>
            
            {/* REDUCED SIZE: Circular spinning badge floating on top/outside */}
            <div className="absolute -top-8 -right-2 md:-top-12 md:-right-8 w-32 h-32 md:w-36 md:h-36 bg-[#0f172a] rounded-full border-[6px] md:border-[8px] border-white flex items-center justify-center shadow-2xl z-20 hover:scale-110 transition-transform duration-500">
              {/* Rotating text */}
              <div className="absolute inset-0 w-full h-full animate-spin-slow">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="text-[9px] fill-white font-black tracking-[0.22em] uppercase">
                    <textPath xlinkHref="#circlePath">
                      GET IN TOUCH • GET IN TOUCH • 
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Large Central Blue Icon Circle */}
              <div className="relative z-10 w-[50%] h-[50%] bg-[#3b82f6] rounded-full shadow-lg flex items-center justify-center transition-transform hover:rotate-[360deg] duration-1000">
                 <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
            
            {/* Background artistic blob */}
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-70"></div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;