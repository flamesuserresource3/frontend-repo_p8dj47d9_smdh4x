import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const people = [
  { name: 'Shivam Tiwari', role: 'Founder' },
  { name: 'Shubham Tiwari', role: 'Co-Founder' },
  { name: 'Satyam Tiwari', role: 'UI/UX Designer & Lead Generator' },
  { name: 'Satyam A Tiwari', role: 'Lead Developer' },
];

const TeamCard = ({ name, role }) => (
  <div className="relative group rounded-2xl p-6 bg-[#0B1528]/90 border border-teal-500/30">
    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-teal-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl pointer-events-none" />
    <div className="relative flex items-center gap-4">
      <div className="w-14 h-14 rounded-full ring-2 ring-[#14B8A6] ring-offset-2 ring-offset-[#040A19] bg-[#0B1528]" />
      <div className="flex-1">
        <div className="text-white font-semibold">{name}</div>
        <div className="text-[#B3C0D0] text-sm">{role}</div>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" aria-label="LinkedIn" className="text-[#14B8A6] hover:text-[#00D1B2] transition">
          <Linkedin size={18} />
        </a>
        <a href="#" aria-label="Instagram" className="text-[#14B8A6] hover:text-[#00D1B2] transition">
          <Instagram size={18} />
        </a>
      </div>
    </div>
  </div>
);

const Team = () => {
  return (
    <section id="team" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-white text-3xl font-bold">Our Team</h2>
          <p className="text-[#B3C0D0] mt-3">Meet the people behind OptiCore — blending AI engineering, strategy, and execution.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {people.map((p) => (
            <TeamCard key={p.name} name={p.name} role={p.role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
