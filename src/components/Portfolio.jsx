import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'architectural',
      tag: '3D CONTOUR MILLING',
      title: 'Fluted 3D Acoustic Ribbon Wall',
      subtitle: 'Luxury Commercial Headquarters Lobby',
      description: '48 modular panels precision-machined with a continuous flowing sinusoidal wave. Panels seamlessly align on installation across an 80-foot corporate boardroom wall.',
      material: '1.25" Moisture-Resistant MDF + White Oak Veneer',
      batch: '48 Full Sheets (4\' × 8\') / 22 Machine Hours',
      metric: '±0.004" Seam Line Precision',
      outcome: 'Zero onsite re-fitting required. General contractor finished installation 3 days ahead of schedule, saving $6,800 in carpentry labor.'
    },
    {
      id: 2,
      category: 'cabinetry',
      tag: 'HIGH-YIELD NESTING',
      title: '250-Sheet Flat-Pack Nested Casework',
      subtitle: '140 Kitchen Carcasses & Vanities',
      description: 'High-speed profile routing, pocketing, shelf pin drilling, and blind mortise-and-tenon joints for a luxury condominium development. Every part labeled with automated barcoding.',
      material: '3/4" Prefinished Birch Plywood',
      batch: '250 Sheets / 3-Day Turnaround',
      metric: '93.4% Algorithmic Sheet Efficiency',
      outcome: 'Saved the millwork subcontractor 18 sheets of high-grade birch ($2,160 in raw stock) and bypassed their in-house machinery backlog completely.'
    },
    {
      id: 3,
      category: 'signage',
      tag: 'HYBRID FABRICATION',
      title: 'Backlit Aluminum Stencil & Cast Acrylic',
      subtitle: 'Flagship Tech Campus Exterior',
      description: '0.125" 5052 aluminum plate stenciled and grooved for fold-forming, matched with 1.0" polished cast acrylic letters with 1/8" light-stopping stepped rebates for crisp halo diffusion.',
      material: '5052-H32 Aluminum & 1" Cast Acrylic',
      batch: '4 Custom Monument Monoliths / 48 Hr Run',
      metric: '±0.003" Friction-Fit Rebate',
      outcome: 'Plexiglas friction-fit snugly without adhesive squeeze-out. Passed IP65 weather-resistance sealing on first inspection.'
    },
    {
      id: 4,
      category: 'industrial',
      tag: 'PRECISION PLASTICS',
      title: 'Custom UHMW-PE Wear Plates & Guides',
      subtitle: 'Conveyor Bottling Line Retrofit',
      description: 'Machining high-wear ultra-high-molecular-weight polyethylene guides with counter-bored mounting slots and chamfered entry edges to prevent line jams.',
      material: '1/2" Engineering UHMW-PE Plastic',
      batch: '350 Precision Guide Strips / 24 Hr Run',
      metric: '±0.004" Slot Center Tolerance',
      outcome: 'Eliminated conveyor jamming and reduced production line downtime by 14% across three automated packaging facilities.'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'cabinetry', label: 'Cabinetry & Nesting' },
    { key: 'architectural', label: 'Architectural 3D' },
    { key: 'signage', label: 'Signage & Display' },
    { key: 'industrial', label: 'Industrial Parts' },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-brand-darker relative border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-orange font-bold">
            Proven Machining Track Record
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Featured Projects &amp; Production Case Studies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Browse our high-tolerance work across architectural millwork, production nesting, commercial signage, and industrial components.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activeFilter === f.key
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20'
                    : 'bg-brand-card hover:bg-brand-cardhover text-slate-300 border border-brand-border'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="rounded-xl bg-brand-card border border-brand-border overflow-hidden hover:border-brand-orange/60 transition-all group flex flex-col justify-between"
            >
              {/* Graphic Blueprint Top Header */}
              <div className="h-48 bg-gradient-to-tr from-slate-900 to-slate-800 relative flex items-center justify-center p-6 border-b border-brand-border overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="relative text-center z-10 space-y-1">
                  <span className="inline-block px-2.5 py-1 rounded bg-brand-charcoal/90 text-brand-orange font-mono text-[11px] border border-brand-border">
                    {project.tag}
                  </span>
                  <div className="font-heading font-bold text-white text-base">
                    {project.title}
                  </div>
                  <div className="text-xs text-brand-steel font-mono">
                    {project.subtitle}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-brand-border/60 font-mono text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Material:</span>
                      <strong className="text-slate-200 text-right">{project.material}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Batch/Run:</span>
                      <strong className="text-slate-200 text-right">{project.batch}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Precision:</span>
                      <strong className="text-brand-orange text-right">{project.metric}</strong>
                    </div>
                  </div>
                </div>

                {/* Outcome Pill */}
                <div className="mt-4 p-3 rounded bg-brand-darker border border-brand-border/60">
                  <span className="text-[11px] text-brand-steel uppercase tracking-wider block font-semibold mb-1">
                    Client Outcome:
                  </span>
                  <p className="text-xs text-emerald-400 font-sans leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
