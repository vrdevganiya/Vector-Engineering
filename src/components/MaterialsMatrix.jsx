import React, { useState } from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';

export default function MaterialsMatrix() {
  const categories = [
    {
      name: 'Woods & Engineered',
      tag: 'Sheet & Billet',
      tagColor: 'text-brand-orange',
      items: [
        { name: 'Baltic Birch (B/BB)', spec: '6mm – 30mm thickness' },
        { name: 'Domestic Hardwoods (Oak/Walnut/Maple)', spec: 'S2S & S4S Stock' },
        { name: 'MDF & Ultralight HDF', spec: 'Standard & MR (Moisture-Resistant)' },
        { name: 'Marine Grade Plywood', spec: 'Hydro-Resistant Okoume / Fir' },
        { name: 'Melamine & Phenolic Board', spec: 'Chip-Free Compression Cut' },
      ]
    },
    {
      name: 'Polymers & Plastics',
      tag: 'Optically Clean',
      tagColor: 'text-cyan-400',
      items: [
        { name: 'Cast Acrylic (Plexiglas)', spec: 'Clear, Tinted & Matte (1/8"-1.5")' },
        { name: 'HDPE & Marine Board', spec: 'Chemical & UV Grade' },
        { name: 'Delrin / Acetal (POM-C)', spec: 'High-Tensile Precision Bushings' },
        { name: 'Polycarbonate (Lexan)', spec: 'Impact Resistant Guards' },
        { name: 'Expanded PVC (Sintra)', spec: '3mm – 19mm Display Stock' },
      ]
    },
    {
      name: 'Non-Ferrous Metals',
      tag: 'Cold-Mist Cooled',
      tagColor: 'text-amber-400',
      items: [
        { name: '6061-T6 Aluminum', spec: 'Structural Plate (0.063" - 0.750")' },
        { name: '5052-H32 Aluminum', spec: 'Fold-Forming Sheet Parts' },
        { name: 'C360 Free-Machining Brass', spec: 'Architectural Inlay & Hardware' },
        { name: 'ACM (Dibond Panels)', spec: '3mm & 4mm Cladding' },
        { name: 'Copper 110', spec: 'Electrical Busbars & Decorative' },
      ]
    },
    {
      name: 'Tooling Boards & Foams',
      tag: 'Model Making',
      tagColor: 'text-emerald-400',
      items: [
        { name: 'HDU Precision Board', spec: '15 to 30 lbs/cu.ft Density' },
        { name: 'Polyurethane Tooling Board', spec: 'Master Vacuum Molds' },
        { name: 'Expanded Polystyrene (EPS)', spec: 'Architectural Shapes' },
        { name: 'FR Honeycomb Sandwich', spec: 'Aerospace & Transit Core' },
        { name: 'Solid Carbon Fiber Sheet', spec: 'Cured Structural Plate' },
      ]
    }
  ];

  return (
    <section id="materials" className="py-20 lg:py-28 bg-brand-charcoal relative border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-orange font-bold">
            Raw Stock &amp; Machine Infrastructure
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Stocked &amp; Machined Materials Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Whether you supply custom exotic timber or draw from our factory inventory of Baltic birch, cast acrylic, and 6061 aluminum plate, our tooling library is calibrated for high feed rates and pristine edges.
          </p>
        </div>

        {/* 4-Column Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="rounded-xl bg-brand-card border border-brand-border p-6 space-y-4 hover:border-brand-orange/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-brand-border/60 pb-3 mb-4">
                  <h3 className="font-heading font-bold text-white text-base">
                    {cat.name}
                  </h3>
                  <span className={`text-xs font-mono font-semibold ${cat.tagColor}`}>
                    {cat.tag}
                  </span>
                </div>

                <ul className="space-y-3 text-xs font-mono">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex flex-col border-b border-brand-border/30 pb-2 last:border-0 last:pb-0">
                      <span className="text-slate-200 font-semibold">{item.name}</span>
                      <span className="text-brand-steel text-[11px] mt-0.5">{item.spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-brand-border/50 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Ready for CAM Nesting</span>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Stock Notice */}
        <div className="mt-8 p-4 rounded-xl bg-brand-card/60 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange"></span>
            <span className="text-slate-300">
              <strong>Need a non-standard material?</strong> We accept customer-supplied sheets and billets delivered directly to our freight receiving dock.
            </span>
          </div>
          <a href="#rfq" className="font-heading font-bold uppercase tracking-wider text-brand-orange hover:text-white underline shrink-0">
            Check Material Compatibility →
          </a>
        </div>

      </div>
    </section>
  );
}
