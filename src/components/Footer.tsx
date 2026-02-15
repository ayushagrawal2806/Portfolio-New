import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-500 py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          © {new Date().getFullYear()} Ayush Agrawal.
        </div>
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
