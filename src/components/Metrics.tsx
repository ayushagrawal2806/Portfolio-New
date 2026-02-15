import React from "react";
import { METRICS } from "../constants/data";

const Metrics: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto reveal">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {METRICS.map((metric, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-slate-200/60 rounded-[2rem] hover:border-accent transition-all duration-500 hover:shadow-premium"
            >
              <div className="text-3xl md:text-4xl font-black text-slate-950 mb-2 tracking-tighter group-hover:text-accent transition-colors">
                {metric.value}
              </div>
              <div className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
