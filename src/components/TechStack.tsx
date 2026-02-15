import React from "react";
import { TECH_STACK } from "../constants/data";

const TechStack: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto reveal">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black text-accent tracking-[0.3em] uppercase mb-6">
            Stack
          </h2>
          <h3 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter">
            Tools I use.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {TECH_STACK.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <h4 className="text-xl font-black text-slate-900 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-slate-200"></span>
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-black uppercase tracking-widest hover:border-accent hover:text-accent transition-all cursor-default hover:shadow-lg hover:shadow-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
