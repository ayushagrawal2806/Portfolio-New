import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-slate-950 text-white rounded-[4rem] mx-4 my-8 relative z-20 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-black text-blue-400 tracking-[0.3em] uppercase mb-8">
                Contact
              </h2>
              <h3 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
                Let's <br />
                <span className="text-blue-500 italic">Collaborate.</span>
              </h3>
              <p className="text-slate-400 text-xl leading-relaxed max-w-md">
                Have a challenging project or an opportunity for growth? Reach
                out to discuss how I can bring value to your engineering team.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="mailto:ayushagrawal6082@gmail.com"
                className="text-2xl font-black hover:text-blue-400 transition-colors border-b-4 border-white/5 pb-2 hover:border-blue-400/50"
              >
                ayushagrawal6082@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Prayagraj, India &bull; Open to Remote
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <SocialBar
              title="LinkedIn"
              handle="ayush-agrawal"
              link="https://www.linkedin.com/in/ayushag2806/"
            />
            <SocialBar
              title="GitHub"
              handle="ayushagrawal6082"
              link="https://github.com/ayushagrawal2806"
            />
            {/* <SocialBar title="Phone" handle="+91-9616558029" link="tel:+919616558029" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialBar = ({
  title,
  handle,
  link,
}: {
  title: string;
  handle: string;
  link: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-between p-8 rounded-[2rem] border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
  >
    <span className="text-slate-400 font-bold uppercase tracking-widest text-xs group-hover:text-white transition-colors">
      {title}
    </span>

    <div className="flex items-center gap-4 transition-colors group-hover:text-blue-400">
      <span className="text-xl font-bold">{handle}</span>

      <svg
        className="w-5 h-5 text-slate-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  </a>
);

export default Contact;
