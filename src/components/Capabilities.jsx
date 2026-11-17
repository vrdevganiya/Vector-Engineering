import React from 'react';
import { Layers, Mountain, Sparkles, Box, Wrench, ArrowUpRight } from 'lucide-react';

export default function Capabilities() {
  const services = [
    {
      id: 'nesting',
      icon: Layers,
      title: '2D & 2.5D Profile Nesting & Sheet Cutting',
      description: 'Algorithmic nesting maximizes sheet utilization (up to 94% yield), drastically lowering material costs. Ideal for millwork shops, flat-pack furniture manufacturers, and casework builders requiring ready-to-assemble components with pre-drilled 32mm system holes and dados.',
      specs: [
        'Auto-nesting algorithm with grain alignment',
        'Blind dados, rebates, pocketing & line boring',
        'High-vacuum zone hold-down (no part shifting)'
      ],
      colSpan: 'lg:col-span-1'
    },
    {
      id: '3d-carving',
      icon: Mountain,
      title: '3D Relief Carving, Sculpting & Panels',
      description: 'Complex ball-nose surfacing and continuous 4th-axis rotary carving. We produce seamless textured architectural feature walls, organic acoustic panels, topographic landscape models, vacuum-forming molds, and custom timber corbels.',
      specs: [
        'Step-over cusp heights down to 0.003"',
        '4th-Axis continuous rotary for turned columns',
        'High-density tooling board & timber machining'
      ],
      colSpan: 'lg:col-span-1'
    },
    {
      id: 'signage',
      icon: Sparkles,
      title: 'Architectural Signage & Precision Engraving',
      description: 'High-impact dimensional logos, illuminated channel lettering, push-through acrylic graphics, and crisp V-carved wood monuments. We cut clean, burr-free edges ready for priming, paint, powder coating, or LED encapsulation.',
      specs: [
        '60°/90° sharp prismatic V-bit engraving',
        'Push-through acrylic rebate with light-stop borders',
        'ACM fold-forming with V-groove scoring'
      ],
      colSpan: 'lg:col-span-1'
    },
    {
      id: 'metals-plastics',
      icon: Box,
      title: 'Aluminum, Brass & Engineering Plastics',
      description: 'Methanol cold-mist cooled high-speed routing of 6061-T6 aluminum plates, C360 brass inlays, cast acrylic, Delrin, HDPE, and polycarbonate. Perfect for machine guards, electrical faceplates, mounting fixtures, and durable prototypes.',
      specs: [
        'Micro-droplet alcohol/air chill mist (zero burr)',
        'Single O-flute high-speed plastic cutter geometry',
        '±0.005" hole position and perimeter repeatability'
      ],
      colSpan: 'lg:col-span-1'
    },
    {
      id: 'dfm-cam',
      icon: Wrench,
      title: 'CAD/CAM Optimization & Design for Manufacturability (DFM)',
      badge: 'DFM EXPERTISE',
      description: "Don't let open vectors, wrong tool radii, or un-machinable sharp interior corners stall your schedule. Our senior manufacturing engineers review every file prior to machining. We add dog-bone fillets for mortise-and-tenon joints, vectorize PDF/raster sketches, calculate optimal tool step-overs, and program custom tooling paths to slash machining cycle time and cost.",
      specs: [
        'File healing & overlapping vector cleanup',
        'Automated dog-bone / T-bone corner clearance',
        'Feed/speed toolpath optimization for mirror finish',
        'Comprehensive engineering feedback within 24h'
      ],
      colSpan: 'md:col-span-2 lg:col-span-2'
    }
  ];

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-brand-darker relative border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-orange font-bold">
            Industrial Machining Solutions
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Engineered for Speed, Yield &amp; Surface Perfection.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From high-yield nested sheet cabinetry to continuous 4-axis sculpted millwork, our machining infrastructure eliminates scrap and delivers assemble-ready parts.
          </p>
        </div>

        {/* Grid of Specialized Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className={`rounded-xl bg-brand-card border border-brand-border p-6 hover:border-brand-orange/60 hover:shadow-xl hover:shadow-brand-orange/10 transition-all flex flex-col justify-between group ${service.colSpan}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded bg-brand-charcoal border border-brand-border flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand-orange/10 text-brand-orange border border-brand-orange/30 font-semibold">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-mono uppercase text-brand-steel tracking-wide block mb-2 font-semibold">
                      Technical Highlights:
                    </span>
                    <ul className={`text-xs text-slate-400 space-y-1.5 font-mono ${service.id === 'dfm-cam' ? 'grid grid-cols-1 sm:grid-cols-2 gap-2 space-y-0' : ''}`}>
                      {service.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-brand-orange font-bold">✓</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60">
                  <a 
                    href="#rfq" 
                    className="text-xs font-heading font-bold uppercase tracking-wider text-brand-orange hover:text-white flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Quote This Service
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
