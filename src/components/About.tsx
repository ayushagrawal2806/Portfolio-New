import React from "react";
import { EDUCATION } from "../constants/data";

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto reveal">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
            <h2 className="text-sm font-black text-blue-600 tracking-[0.3em] uppercase mb-6">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-950 leading-[1.1] tracking-tighter">
              Results-driven <br />
              Engineering.
            </h3>
          </div>

          <div className="w-full lg:w-2/3 space-y-12">
            <div className="space-y-6">
              <p className="text-2xl text-slate-600 leading-snug">
                I'm{" "}
                <span className="text-slate-950 font-bold">Ayush Agrawal</span>,
                a Software Engineer with{" "}
                <span className="text-blue-600 font-bold">1.5+ years</span> of
                experience building high-performance web and mobile
                applications.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                Specialized in{" "}
                <span className="text-slate-900 font-semibold">
                  React, Next.js, and React Native
                </span>
                , I have a proven track record of improving application
                performance by 20-30% through meticulous code optimization.
                Beyond building products, I am passionate about mentoring and
                have guided over{" "}
                <span className="text-slate-900 font-semibold">
                  100+ students
                </span>{" "}
                in their development journey.
              </p>
            </div>

            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
                  Education
                </p>
                <h4 className="text-xl font-black text-slate-900 mb-2">
                  {EDUCATION.degree}
                </h4>
                <p className="text-slate-500 font-medium mb-6">
                  {EDUCATION.school}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                      Timeline
                    </p>
                    <p className="text-sm font-black text-slate-900">
                      {EDUCATION.period}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                      Location
                    </p>
                    <p className="text-sm font-black text-slate-900">
                      {EDUCATION.location}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200/50">
                  <p className="text-xs text-slate-400 font-bold uppercase mb-3">
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-500"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-slate-100 rounded-3xl group hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Technical Mentorship
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Experienced in code reviews, agile/scrum methodologies, and
                  pair programming to foster high-quality engineering standards.
                </p>
              </div>
              <div className="p-8 border border-slate-100 rounded-3xl group hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Full-Stack Capability
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Comfortable handling backend REST APIs using Spring Boot,
                  secure JWT authentication, and relational data modeling with
                  PostgreSQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
