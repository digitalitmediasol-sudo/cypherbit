import React from 'react';
import { Calendar, User } from 'lucide-react';
import { BLOGS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-[12px]">NEWS & BLOGS</span>
        <h2 className="text-3xl lg:text-[44px] font-bold text-slate-900 mt-4 leading-tight tracking-tight">
          Latest Insights & Tech News
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {BLOGS.map((blog) => (
          <div key={blog.id} className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
               <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute bottom-6 left-6">
                 <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-blue-500/20">
                   {blog.category}
                 </span>
               </div>
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-6 text-[11px] text-slate-400 font-bold mb-5 uppercase tracking-[0.15em]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-blue-500/50" /> {blog.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-blue-500/50" /> Admin
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-5 group-hover:text-blue-300 transition-colors cursor-pointer leading-tight tracking-tight">
                {blog.title}
              </h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-[15px]">
                {blog.excerpt}
              </p>
              <button className="text-[12px] font-bold text-slate-900 hover:text-blue-500 transition-colors flex items-center gap-3 uppercase tracking-[0.2em]">
                Read More <div className="w-8 h-[1px] bg-slate-200 group-hover:bg-blue-500 group-hover:w-12 transition-all duration-500"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;