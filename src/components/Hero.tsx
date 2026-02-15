import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-44 pb-24 px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-[5%] left-[5%] w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10 animate-slide-up">
        <div className="flex-[1.2] text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Based in India &bull; Open to New Challenges
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-[900] tracking-tighter text-slate-950 leading-[0.85] mb-10">
            Ayush <br />
            <span className="text-slate-400">Agrawal.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl leading-relaxed mb-12">
            Software Engineer specializing in{" "}
            <span className="text-slate-950 font-bold underline decoration-blue-500/30 decoration-4 underline-offset-4">
              React, Next.js, and React Native
            </span>
            . Crafting reliable web and mobile experiences with 1.5+ years of
            hands-on expertise.
          </p>

          <div className="bg-white border border-slate-100 rounded-[1.25rem] px-5 py-3.5 inline-flex items-center gap-4 mb-12 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <p className="text-slate-600 font-medium text-sm md:text-base">
              Improved performance by{" "}
              <span className="text-slate-950 font-bold">40%</span> for systems
              serving{" "}
              <span className="text-slate-950 font-bold">5k+ users</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="px-10 py-4.5 bg-slate-950 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-2xl shadow-blue-200/50 active:scale-95 flex items-center gap-2"
            >
              Explore Projects
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-10 py-4.5 bg-white text-slate-950 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 transition-all active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg hidden lg:block">
          <div className="relative">
            <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                    Development Focus
                  </p>
                  <p className="text-2xl font-black text-slate-900 leading-tight">
                    Full Stack <br />
                    Web & Mobile
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                      Role
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Software Engineer
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                      Impact
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      User Centric
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-50">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                    Core Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Native", "TS", "Spring"].map(
                      (tech, i) => (
                        <div
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-100 transition-all cursor-default"
                        >
                          {tech}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
