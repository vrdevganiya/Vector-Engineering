import React, { useState } from 'react';
import { Phone, Mail, Menu, X, ArrowRight, Activity } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* TOP INDUSTRIAL UTILITY BAR */}
      <div className="bg-brand-darker border-b border-brand-border text-xs text-brand-steel py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Shop Floor Active
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline">Shift Hours: Mon–Fri 9:00 AM – 7:00 PM (Sunday: Closed)</span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline">Current Quote Queue: <strong className="text-slate-200">Under 24 Hours</strong></span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+919712266167" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 font-mono">
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              +91 9712266167
            </a>
            <a href="mailto:rfq@vectorengineering.com" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              Direct RFQ Inbox
            </a>
          </div>
        </div>
      </div>

      {/* STICKY MAIN NAVBAR */}
      <header className="sticky top-0 z-50 bg-brand-charcoal/95 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-black overflow-hidden flex items-center justify-center p-1 shadow-lg border border-slate-700/60 group-hover:border-brand-orange transition-all">
              <img src="/logo.jpg" alt="Vector Engineering Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                VECTOR<span className="text-brand-orange">CNC</span>
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-brand-steel">Precision Machining & Fab</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            <a href="#capabilities" className="text-slate-300 hover:text-brand-orange transition-colors">Capabilities</a>
            <a href="#materials" className="text-slate-300 hover:text-brand-orange transition-colors">Materials Matrix</a>
            <a href="#equipment" className="text-slate-300 hover:text-brand-orange transition-colors">Equipment & Specs</a>
            <a href="#portfolio" className="text-slate-300 hover:text-brand-orange transition-colors">Case Studies</a>
            <a href="#process" className="text-slate-300 hover:text-brand-orange transition-colors">How It Works</a>
            <a href="#faq" className="text-slate-300 hover:text-brand-orange transition-colors">FAQ</a>
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="#rfq" 
              className="inline-flex items-center justify-center px-5 py-2.5 rounded font-heading font-bold text-xs uppercase tracking-wider text-white bg-brand-orange hover:bg-brand-orangeHover shadow-lg shadow-brand-orange/25 transition-all transform hover:-translate-y-0.5"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Toggle Navigation" 
            className="lg:hidden p-2 rounded text-slate-400 hover:text-white hover:bg-brand-card focus:outline-none"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-brand-darker border-b border-brand-border px-6 pt-3 pb-6 space-y-3">
            <a onClick={() => setMobileOpen(false)} href="#capabilities" className="block py-2 text-slate-300 hover:text-brand-orange font-medium">Capabilities</a>
            <a onClick={() => setMobileOpen(false)} href="#materials" className="block py-2 text-slate-300 hover:text-brand-orange font-medium">Materials Matrix</a>
            <a onClick={() => setMobileOpen(false)} href="#equipment" className="block py-2 text-slate-300 hover:text-brand-orange font-medium">Equipment & Specs</a>
            <a onClick={() => setMobileOpen(false)} href="#portfolio" className="block py-2 text-slate-300 hover:text-brand-orange font-medium">Case Studies</a>
            <a onClick={() => setMobileOpen(false)} href="#process" className="block py-2 text-slate-300 hover:text-brand-orange font-medium">How It Works</a>
            <a onClick={() => setMobileOpen(false)} href="#faq" className="block py-2 text-slate-300 hover:text-brand-orange font-medium">FAQ</a>
            <a 
              onClick={() => setMobileOpen(false)} 
              href="#rfq" 
              className="block text-center mt-3 py-3 rounded font-heading font-bold text-sm uppercase tracking-wider text-white bg-brand-orange"
            >
              Request a Quote
            </a>
          </div>
        )}
      </header>
    </>
  );
}
