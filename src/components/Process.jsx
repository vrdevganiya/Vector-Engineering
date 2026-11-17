import React from 'react';
import { UploadCloud, FileSearch, Cog, Truck, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: '01',
      icon: UploadCloud,
      title: 'Send Your CAD or Vector Files',
      description: 'Upload your DXF, DWG, STEP, SVG, AI, or even rough dimensional sketches through our secure RFQ portal. Specify material, quantity, and required delivery date.',
      tag: 'Supported: 2D vectors & 3D solid models',
      tagColor: 'text-brand-steel'
    },
    {
      step: '02',
      icon: FileSearch,
      title: 'DFM Review & Binding Quote',
      description: 'Our CAM engineers verify your geometry for tool radiuses, optimal sheet yield, and structural stability. You receive an itemized quote within 24–48 hours.',
      tag: 'Transparent pricing with zero hidden fees',
      tagColor: 'text-emerald-400'
    },
    {
      step: '03',
      icon: Cog,
      title: 'High-Speed CNC Machining',
      description: 'Once approved, parts are cut on our calibrated 4×8 or 5×10 router beds. High-torque spindles, optimal tooling, and vacuum hold-downs guarantee crisp, burr-free edges.',
      tag: 'Deburred, drilled, labeled & sorted',
      tagColor: 'text-cyan-400'
    },
    {
      step: '04',
      icon: Truck,
      title: 'Quality Inspection & Dispatch',
      description: 'Every part passes dimensional caliper verification against your CAD file. Finished parts are palletized, stretch-wrapped, or crated for local pickup or domestic freight dispatch.',
      tag: 'Live tracking & dock-to-dock delivery',
      tagColor: 'text-brand-orange'
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-brand-charcoal relative border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-orange font-bold">
            From CAD File to Crating
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            How It Works: 4 Simple Steps to Precision Parts
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We take the friction out of custom fabrication. No guesswork, no ghosting—just fast DFM analysis and reliable delivery schedules.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div 
                key={index}
                className="rounded-xl bg-brand-card border border-brand-border p-6 space-y-4 hover:border-brand-orange/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-black text-4xl text-brand-orange/30">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded bg-brand-charcoal border border-brand-border flex items-center justify-center text-brand-orange">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {s.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border/60">
                  <span className={`text-[11px] font-mono block ${s.tagColor}`}>
                    {s.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div className="mt-14 text-center">
          <a 
            href="#rfq" 
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-orange/20 transition-all transform hover:-translate-y-0.5"
          >
            Ready to Start? Submit Your Project Specs
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
