import React from 'react';
import { Plus, MapPin } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-xl">
          <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-[12px]">LATEST PROJECTS</span>
          <h2 className="text-3xl lg:text-[44px] font-bold text-slate-900 mt-4 leading-tight tracking-tight">
            Our Portfolio of Digital Success
          </h2>
        </div>
        <button className="bg-white border border-slate-200 text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all text-[13px] uppercase tracking-widest">
          View All Work
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[16/10] bg-slate-200 shadow-md">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/50 transition-all duration-500 flex items-center justify-center">
                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                   <Plus className="w-5 h-5 text-blue-500" />
                 </div>
              </div>
              <div className="absolute top-6 left-6">
                <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-slate-900 shadow-sm border border-white/20">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-500 transition-colors tracking-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-slate-400 text-[12px] font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-blue-500/60" />
                {project.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;