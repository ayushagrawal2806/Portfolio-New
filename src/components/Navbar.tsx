import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-5xl rounded-[2rem] border overflow-hidden ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-slate-200 shadow-2xl py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="px-8 flex justify-between items-center">
        <a
          href="#"
          className="text-lg font-black tracking-tighter text-slate-900 group flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white text-xs rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500">
            AA
          </div>
          Ayush.
        </a>

        <div className="hidden md:flex items-center space-x-10">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Work</NavLink>
          <NavLink href="#experience">Journal</NavLink>
          <NavLink href="#contact" isPrimary>
            Let's talk
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  isPrimary?: boolean;
}> = ({ href, children, isPrimary }) => (
  <a
    href={href}
    className={`text-[13px] font-black uppercase tracking-widest transition-all ${
      isPrimary
        ? "bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-accent transition-colors"
        : "text-slate-500 hover:text-slate-950"
    }`}
  >
    {children}
  </a>
);

export default Navbar;
