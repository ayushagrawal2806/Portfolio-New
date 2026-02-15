import React from "react";
import { PROJECTS } from "../constants/data";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-slate-950 text-white rounded-[3rem]"
    >
      <div className="max-w-6xl mx-auto reveal">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-black text-accent tracking-[0.3em] uppercase mb-6">
              Projects
            </h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter">
              Selected Work.
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm text-lg font-medium">
            Each project represents a unique challenge in scale, performance, or
            user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[2.5rem] transition-all duration-500 hover:bg-white/10 hover:border-white/20 ${idx === 2 ? "md:col-span-2" : ""}`}
            >
              <div className="p-10 md:p-14 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div className="px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-600/30">
                    {project.impact}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-white/5 rounded-full hover:bg-accent transition-all"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-white/5 rounded-full hover:bg-accent transition-all"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-3xl md:text-4xl font-black mb-6 group-hover:text-accent transition-colors tracking-tight">
                  {project.name}
                </h4>
                <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-white/5 text-white/50 rounded-lg text-xs font-bold uppercase tracking-widest border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
