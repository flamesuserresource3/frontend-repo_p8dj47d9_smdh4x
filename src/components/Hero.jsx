import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[78vh] md:min-h-[86vh] overflow-hidden">
      {/* Background gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0B1528] via-transparent to-transparent opacity-60" />

      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Transforming Business with <span className="text-[#00D1B2]">AI Automation</span>
          </h1>
          <p className="text-[#B3C0D0] max-w-2xl text-lg">
            OptiCore helps businesses leverage cutting-edge AI technology and strategic marketing to drive growth, efficiency, and innovation.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-6 py-3 font-semibold text-sm md:text-base text-[#040A19] bg-gradient-to-r from-[#00D1B2] to-[#14B8A6] shadow-[0_0_40px_-12px_#00D1B2] hover:shadow-[0_0_50px_-10px_#14B8A6] transition"
            >
              Book a Meeting
            </a>
          </div>
        </div>

        {/* Right panel: abstract mesh sphere card */}
        <div className="relative">
          <div className="relative rounded-2xl bg-white/95 shadow-2xl p-6 md:p-8">
            <div className="aspect-square rounded-xl bg-gradient-to-b from-white to-white/80 grid place-items-center">
              {/* Simple white wireframe sphere using SVG */}
              <svg viewBox="0 0 200 200" className="w-full h-full max-w-sm max-h-sm">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.6" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="90" fill="url(#glow)" />
                {/* Longitudes */}
                {[...Array(7)].map((_, i) => {
                  const x = (i + 1) / 8;
                  return (
                    <ellipse key={`lon-${i}`} cx="100" cy="100" rx={90 * Math.abs(Math.cos((x * Math.PI)))} ry="90" fill="none" stroke="#94a3b8" strokeWidth="0.8" />
                  );
                })}
                {/* Latitudes */}
                {[...Array(7)].map((_, i) => {
                  const x = (i + 1) / 8;
                  return (
                    <ellipse key={`lat-${i}`} cx="100" cy="100" rx="90" ry={90 * Math.abs(Math.cos((x * Math.PI)))} fill="none" stroke="#94a3b8" strokeWidth="0.8" />
                  );
                })}
              </svg>
            </div>
          </div>
          {/* Glow */}
          <div className="absolute -inset-6 rounded-3xl bg-teal-400/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
