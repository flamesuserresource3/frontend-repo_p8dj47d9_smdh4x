import React from 'react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 py-10 mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="relative inline-block mb-2">
              <span className="absolute inset-0 blur-xl rounded-full bg-lime-300/40 opacity-70" />
              <span className="relative text-white font-extrabold tracking-tight text-xl">OptiCore</span>
            </div>
            <p className="text-[#B3C0D0]">AI Automation & Marketing Solutions</p>
          </div>
          <div className="text-white/90">
            <div className="font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2 text-[#B3C0D0]">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">Why OptiCore</a></li>
              <li><a href="#team" className="hover:text-white">Team</a></li>
            </ul>
          </div>
          <div className="text-white/90">
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-1 text-[#B3C0D0]">
              <li>hello@opticoresolutions.com</li>
              <li>+1 (000) 123-4567</li>
              <li>Global • Remote First</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-[#B3C0D0] text-sm mt-10">© 2025 OptiCore. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
