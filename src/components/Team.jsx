import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const people = [
  {
    name: 'Shivam Tiwari',
    role: 'Founder',
    linkedin:
      'https://www.linkedin.com/in/shivam-tiwari-aa2ab1233/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram:
      'https://www.instagram.com/_iam_shivam_tiwari/?igsh=cjhnYXFuc2l1ZjV6#',
  },
  {
    name: 'Shubham Tiwari',
    role: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/shubham-tiwari-5ab30a211/',
    instagram: 'https://www.instagram.com/_shubham_3003_?igsh=c2w5ZXY4bGc1bDZm',
  },
  {
    name: 'Satyam Tiwari',
    role: 'UI/UX Designer & Lead Generator',
    linkedin: 'https://www.linkedin.com/in/satyam-tiwari-0365b7326/',
    instagram: 'https://www.instagram.com/satyamtiwari_005?igsh=czc0eGJkdXRnemMx',
  },
  {
    name: 'Satyam A Tiwari',
    role: 'Lead Developer',
    linkedin: 'https://www.linkedin.com/in/satyam-tiwari-1205a3328/',
    instagram: 'https://www.instagram.com/pinakiplays?igsh=M2Z2MGlybTFraGp5',
  },
];

const TeamCard = ({ name, role, linkedin, instagram }) => (
  <div className="relative group rounded-2xl p-6 bg-[#0B1528]/90 border border-teal-500/30">
    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-teal-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl pointer-events-none" />
    <div className="relative flex items-center gap-4">
      <div className="w-14 h-14 rounded-full ring-2 ring-[#14B8A6] ring-offset-2 ring-offset-[#040A19] bg-[#0B1528]" />
      <div className="flex-1">
        <div className="text-white font-semibold">{name}</div>
        <div className="text-[#B3C0D0] text-sm">{role}</div>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#14B8A6] hover:text-[#00D1B2] transition"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-[#14B8A6] hover:text-[#00D1B2] transition"
        >
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
            <TeamCard key={p.name} name={p.name} role={p.role} linkedin={p.linkedin} instagram={p.instagram} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
