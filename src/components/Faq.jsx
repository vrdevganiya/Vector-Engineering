import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is your Minimum Order Quantity (MOQ)?',
      a: 'We have no minimum order quantity (Zero MOQ). We routinely machine single prototype parts, one-off custom architectural fixtures, or replacement components. For multi-unit and repeat production runs, we provide automatic tiered volume discounting based on sheet optimization and reduced setup time.'
    },
    {
      q: 'Which CAD file formats yield the fastest, most accurate quotes?',
      a: 'For 2D sheet profile cutting and nesting, 1:1 scale DXF or DWG (with closed polylines) or clean vector SVGs are fastest. For 3D contoured reliefs and architectural panels, STEP (.stp), IGES, or STL solids are preferred. If you only have a hand sketch or vector PDF, our engineering team can vectorize and prepare CAM files for you as part of our DFM design assistance.'
    },
    {
      q: 'Do you supply materials, or can I supply my own stock?',
      a: 'Both! We maintain substantial stock of high-grade Baltic birch (6mm–25mm), cabinet MDF, cast acrylic, HDPE, and 6061 aluminum plate at volume contractor pricing. Alternatively, you or your supplier can drop-ship raw stock directly to our freight dock. We inspect client-supplied stock for thickness variance and warp before cutting.'
    },
    {
      q: 'How do you handle packaging, shipping, and local pickup?',
      a: 'Local clients are welcome to pick up orders directly at our facility rollup loading dock during shop hours. For regional and continental orders, parts are strapped to custom-built wood pallets, banded, bubble-protected, and shipped via LTL freight or standard parcel (UPS/FedEx) with live tracking.'
    },
    {
      q: 'What tolerances can your CNC routers hold across a 5x10 sheet?',
      a: 'Our heavy-duty steel frame routers with closed-loop Syntec servo drives maintain a linear repeatability of ±0.001" and general machining tolerance of ±0.005" across the entire 5\' × 10\' envelope. Natural material variations (such as core thickness in commercial plywood) are compensated with digital touch-off surface mapping.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-brand-charcoal relative border-b border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-orange font-bold">
            Got Questions?
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Direct answers regarding file tolerances, material sourcing, turnaround times, and shipping logistics.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl bg-brand-card border border-brand-border overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center text-white font-heading font-bold text-sm sm:text-base hover:text-brand-orange transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-brand-orange font-mono text-xl shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-brand-border/40 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
