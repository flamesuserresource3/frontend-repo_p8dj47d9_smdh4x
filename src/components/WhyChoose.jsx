import React from 'react';
import { Sparkles, Users, Award, TrendingUp } from 'lucide-react';

const WhyCard = ({ icon: Icon, title }) => (
  <div className="relative group rounded-2xl p-6 bg-[#0B1528]/90 border border-white/10">
    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-teal-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl pointer-events-none" />
    <div className="relative flex items-center gap-4">
      <div className="w-11 h-11 rounded-lg grid place-items-center bg-teal-500/10 border border-teal-400/30">
        <Icon className="text-[#14B8A6]" size={20} />
      </div>
      <span className="text-white font-medium">{title}</span>
    </div>
  </div>
);

const WhyChoose = () => {
  return (
    <section id="about" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-white text-3xl font-bold">Why Choose OptiCore?</h2>
          <p className="text-[#B3C0D0] mt-3">We combine technical expertise with strategic thinking to deliver exceptional results.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <WhyCard icon={Sparkles} title="Innovation" />
          <WhyCard icon={Users} title="Collaboration" />
          <WhyCard icon={Award} title="Excellence" />
          <WhyCard icon={TrendingUp} title="Results" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
