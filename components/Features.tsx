import React from 'react';
import { ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const Features: React.FC = () => {
  const items = [
    { icon: <ShieldCheck className="text-blue-500" />, title: 'Highly Secure', desc: 'Enterprise Grade Safety' },
    { icon: <Zap className="text-blue-500" />, title: 'Fast Delivery', desc: 'Rapid Project Execution' },
    { icon: <HeartHandshake className="text-blue-500" />, title: 'Reliable Support', desc: '24/7 Dedicated Team' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
      <div className="bg-slate-900 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-xl">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 text-white group cursor-default">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;