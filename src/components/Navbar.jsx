import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="relative w-full z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group inline-flex items-center gap-3">
          <div className="relative">
            <span className="absolute inset-0 blur-xl rounded-full bg-lime-300/40 opacity-70 group-hover:opacity-90 transition" />
            <span className="relative text-white font-extrabold tracking-tight text-2xl">OptiCore</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="text-[#B3C0D0] hover:text-white transition">Home</a>
          <a href="#services" className="text-[#B3C0D0] hover:text-white transition">Services</a>
          <a href="#about" className="text-[#B3C0D0] hover:text-white transition">About Us</a>
          <a href="#team" className="text-[#B3C0D0] hover:text-white transition">Our Team</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full px-5 py-2 font-medium text-sm text-[#040A19] bg-gradient-to-r from-[#00D1B2] to-[#14B8A6] shadow-[0_0_30px_-10px_#00D1B2] hover:shadow-[0_0_40px_-8px_#14B8A6] transition"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile */}
        <button aria-label="Open Menu" className="md:hidden text-white p-2 rounded-lg border border-white/10">
          <Menu size={22} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
