import React from 'react';
import { Upload, ChevronDown, CheckCircle2, Shield, Gauge, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-brand-charcoal bg-grid-pattern pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden border-b border-brand-border">
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Process Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-card border border-brand-border text-xs font-mono text-brand-orange">
              <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
              HIGH-PRECISION 3-AXIS &amp; 4-AXIS CNC ROUTING
            </div>

            {/* Value Proposition Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Precision CNC Routing &amp; Custom Sheet Fabrication <span className="text-brand-orange">Without Bottlenecks.</span>
            </h1>

            {/* Value Supporting Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Equipped with <strong>5x10 ft multi-zone vacuum beds</strong>, 24,000 RPM high-torque spindles, and automatic tool changers. We deliver <strong>±0.005" tolerances</strong> for architectural millwork, rapid prototypes, and high-volume cabinet nesting—with instant DFM file reviews and guaranteed <strong>24–48 hour turnaround</strong>.
            </p>

            {/* Dual CTAs & Micro-Proof */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a 
                href="#rfq" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded font-heading font-extrabold text-sm uppercase tracking-wider text-white bg-brand-orange hover:bg-brand-orangeHover shadow-xl shadow-brand-orange/30 transition-all transform hover:-translate-y-0.5"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload Files for Fast Quote
              </a>
              <a 
                href="#capabilities" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded font-heading font-semibold text-sm tracking-wide text-slate-300 hover:text-white bg-brand-card hover:bg-brand-cardhover border border-brand-border transition-all"
              >
                Explore Capabilities
                <ChevronDown className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Micro File Note */}
            <p className="text-xs text-brand-steel font-mono">
              Accepted Formats: DXF, DWG, SVG, STEP, IGES, STL, AI, Vector PDF • Strict NDAs Honored
            </p>
          </div>

          {/* Right Machine Telemetry Visual (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden bg-brand-card border border-brand-border shadow-2xl group">
              
              {/* Telemetry Header */}
              <div className="bg-brand-darker/90 px-4 py-3 border-b border-brand-border flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-slate-300 font-semibold uppercase">ProCut 4×8 Wood Router</span>
                </div>
                <span className="text-brand-orange font-bold">24,000 RPM / 6KW</span>
              </div>

              {/* Real Machine Image Visual */}
              <div className="relative bg-slate-900 p-4 text-center space-y-4">
                <div className="h-72 rounded-lg border border-brand-border/80 flex items-center justify-center relative overflow-hidden bg-slate-950/70 p-2">
                  <img 
                    src="/procut-router.jpg" 
                    alt="Vector ProCut 4x8 Wood Router Machine" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                </div>

                {/* Quick Spec Strip */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono text-xs">
                  <div className="p-2 rounded bg-brand-darker border border-brand-border">
                    <span className="text-brand-steel block text-[10px]">TABLE SIZE</span>
                    <strong className="text-white">49" × 97"</strong>
                  </div>
                  <div className="p-2 rounded bg-brand-darker border border-brand-border">
                    <span className="text-brand-steel block text-[10px]">CONTROLLER</span>
                    <strong className="text-cyan-400 text-[10px]">NC Studio/Mach3</strong>
                  </div>
                  <div className="p-2 rounded bg-brand-darker border border-brand-border">
                    <span className="text-brand-steel block text-[10px]">TOOL CHANGER</span>
                    <strong className="text-brand-orange">Manual / ATC</strong>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* TRUST BAR (4 Proof Points) */}
        <div className="mt-16 pt-10 border-t border-brand-border/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-lg bg-brand-card/40 border border-brand-border/60 hover:border-brand-orange/40 transition-colors">
              <div className="font-heading font-black text-2xl lg:text-3xl text-brand-orange font-mono">±0.005"</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">Machining Tolerance</div>
              <div className="text-[11px] text-brand-steel mt-0.5">Calibrated digital precision on all axes</div>
            </div>

            <div className="p-4 rounded-lg bg-brand-card/40 border border-brand-border/60 hover:border-brand-orange/40 transition-colors">
              <div className="font-heading font-black text-2xl lg:text-3xl text-white font-mono">4×8 &amp; 5×10</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">Dual Router Bed Sizes</div>
              <div className="text-[11px] text-brand-steel mt-0.5">Full sheet optimization with zero seam lines</div>
            </div>

            <div className="p-4 rounded-lg bg-brand-card/40 border border-brand-border/60 hover:border-brand-orange/40 transition-colors">
              <div className="font-heading font-black text-2xl lg:text-3xl text-brand-orange font-mono">24–48 HR</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">Quote Turnaround</div>
              <div className="text-[11px] text-brand-steel mt-0.5">Comprehensive DFM review &amp; pricing</div>
            </div>

            <div className="p-4 rounded-lg bg-brand-card/40 border border-brand-border/60 hover:border-brand-orange/40 transition-colors">
              <div className="font-heading font-black text-2xl lg:text-3xl text-white font-mono">ZERO MOQ</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">No Minimum Order</div>
              <div className="text-[11px] text-brand-steel mt-0.5">Single custom prototype to production runs</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
