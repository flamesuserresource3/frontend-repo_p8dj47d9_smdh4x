import React from 'react';
import { Cog, BarChart3, Megaphone, Globe2 } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, items }) => (
  <div className="relative group rounded-2xl p-6 bg-[#0B1528]/90 border border-white/10 shadow-[0_0_40px_-20px_#00D1B2] hover:shadow-[0_0_50px_-14px_#14B8A6] transition">
    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-teal-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl pointer-events-none" />
    <div className="relative">
      <div className="w-12 h-12 rounded-xl grid place-items-center bg-teal-500/10 border border-teal-400/30 mb-4">
        <Icon className="text-[#14B8A6]" size={22} />
      </div>
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-[#B3C0D0] text-sm">{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-[#B3C0D0] mt-3">
            Comprehensive AI automation and marketing solutions tailored for your business needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={Cog}
            title="AI Automation"
            items={["Process Automation", "Workflow Optimization", "Custom AI Models"]}
          />
          <ServiceCard
            icon={Megaphone}
            title="Strategic Marketing"
            items={["Digital Campaigns", "Content Strategy", "SEO Optimization"]}
          />
          <ServiceCard
            icon={BarChart3}
            title="Analytics & Insights"
            items={["Performance Tracking", "Predictive Analytics", "Custom Dashboards"]}
          />
          <ServiceCard
            icon={Globe2}
            title="Web Development"
            items={["Full-stack Development", "Landing Pages & Business Websites", "Custom Web Apps", "UI/UX Design"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
