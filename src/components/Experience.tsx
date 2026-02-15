import React from "react";
import { EXPERIENCES } from "../constants/data";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto reveal">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black text-blue-600 tracking-[0.3em] uppercase mb-6">
            Experience
          </h2>
          <h3 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter">
            Career Milestones.
          </h3>
        </div>

        <div className="space-y-24 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Line */}
              {idx !== EXPERIENCES.length - 1 && (
                <div className="absolute left-[23px] top-10 bottom-[-60px] w-px bg-slate-100 hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                <div className="md:w-1/4">
                  <div className="sticky top-40">
                    <p className="text-xs font-black text-blue-600 tracking-widest uppercase mb-1">
                      {exp.period}
                    </p>
                    <div className="w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black shadow-xl mb-4 group-hover:bg-blue-600 transition-colors">
                      {exp.company.charAt(0)}
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <h4 className="text-3xl font-black text-slate-950 mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-xl font-bold text-slate-400">
                      {exp.company}
                    </p>
                  </div>

                  <ul className="space-y-4">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="text-slate-600 flex items-start gap-4 text-lg"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
