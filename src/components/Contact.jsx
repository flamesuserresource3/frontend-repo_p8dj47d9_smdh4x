import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-white text-3xl font-bold mb-3">Ready to Discuss Your Project?</h3>
            <p className="text-[#B3C0D0] max-w-xl">Tell us about your goals and we'll craft a tailored plan to help you win with AI.</p>
          </div>
          <form className="relative grid gap-4 bg-[#0B1528]/90 border border-white/10 rounded-2xl p-6">
            <div>
              <label className="block text-sm text-[#B3C0D0] mb-1">Name</label>
              <input type="text" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-[#7B8A9A] focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-[#B3C0D0] mb-1">Email</label>
              <input type="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-[#7B8A9A] focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="block text-sm text-[#B3C0D0] mb-1">Message</label>
              <textarea rows="4" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-[#7B8A9A] focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="Tell us about your project..." />
            </div>
            <div>
              <button type="submit" className="inline-flex items-center rounded-full px-6 py-3 font-semibold text-[#040A19] bg-gradient-to-r from-[#00D1B2] to-[#14B8A6] shadow-[0_0_40px_-12px_#00D1B2] hover:shadow-[0_0_50px_-10px_#14B8A6] transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
