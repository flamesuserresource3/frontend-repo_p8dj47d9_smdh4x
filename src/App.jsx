import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#040A19' }}>
      {/* Subtle background radial gradient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,_#0B1528_0%,_transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(50%_50%_at_80%_20%,_#083344_0%,_transparent_60%)] opacity-60" />

      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
