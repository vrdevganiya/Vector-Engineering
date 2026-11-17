import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import MaterialsMatrix from './components/MaterialsMatrix';
import Equipment from './components/Equipment';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import RfqSection from './components/RfqSection';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-charcoal text-slate-100 min-h-screen flex flex-col font-body selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Capabilities />
        <MaterialsMatrix />
        <Equipment />
        <Portfolio />
        <Process />
        <RfqSection />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
