import React from 'react';
import { Cpu, Gauge, ShieldCheck, Ruler, Check } from 'lucide-react';

export default function Equipment() {
  return (
    <section id="equipment" className="py-20 lg:py-28 bg-brand-darker relative border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 border-b border-brand-border pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-orange font-bold">
              Shop Floor Fleet &amp; Metrology
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">
              Industrial CNC Machinery &amp; Calibrated Tolerances
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Rigid cast steel bases, high-frequency HSD electrospindles, and Syntec digital closed-loop motion control ensure zero vibration at high feed speeds.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1.5 rounded bg-brand-card border border-brand-border text-xs font-mono text-slate-300">
              Calibration: <strong>Semi-Annual ISO Standard</strong>
            </span>
            <span className="px-3 py-1.5 rounded bg-brand-card border border-brand-border text-xs font-mono text-emerald-400">
              Dust Extraction: <strong>HEPA 99.9%</strong>
            </span>
          </div>
        </div>

        {/* 3 Equipment Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-mono text-xs">
          
          {/* Machine 1 */}
          <div className="p-6 rounded-xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-orange/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-brand-orange font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-orange" />
                  Heavy 5×10 CNC Router
                </span>
                <span className="px-2 py-0.5 rounded bg-brand-charcoal text-[10px] text-slate-400 border border-brand-border">PRIMARY WORKHORSE</span>
              </div>
              <p className="text-slate-300 font-sans text-xs">
                High-production nesting for full sheets. Delivers rapid feed rates with automated tool changes.
              </p>
              
              <div className="space-y-2 pt-3 border-t border-brand-border/60 text-slate-300">
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Working Envelope:</span>
                  <strong className="text-white">60" × 120" × 12" Z-Travel</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Spindle Power:</span>
                  <strong className="text-white">12kW (16 HP) HSD Electrospindle</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Max Spindle Speed:</span>
                  <strong className="text-white">24,000 RPM (Ceramic Bearings)</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Hold-Down System:</span>
                  <strong className="text-white">25 HP Multi-Zone High Vacuum</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Tool Changer:</span>
                  <strong className="text-brand-orange">12-Position Rapid Rotary ATC</strong>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border/60 text-[11px] text-brand-steel flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-brand-orange" />
              <span>Optimized for Baltic Birch &amp; MDF Nesting</span>
            </div>
          </div>

          {/* Machine 2 */}
          <div className="p-6 rounded-xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-orange/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-brand-orange font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-brand-orange" />
                  4-Axis 4×8 Sculpting Router
                </span>
                <span className="px-2 py-0.5 rounded bg-brand-charcoal text-[10px] text-cyan-400 border border-brand-border">3D ROTARY</span>
              </div>
              <p className="text-slate-300 font-sans text-xs">
                Continuous 4th rotary axis for balusters, columns, multi-sided carvings, and molds.
              </p>
              
              <div className="space-y-2 pt-3 border-t border-brand-border/60 text-slate-300">
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Working Envelope:</span>
                  <strong className="text-white">49" × 97" × 16" Z-Clearance</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Rotary 4th Axis:</span>
                  <strong className="text-white">12" Max Dia × 96" Length</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Cooling System:</span>
                  <strong className="text-white">Methanol Cold-Mist Delivery</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Motion Control:</span>
                  <strong className="text-white">NC Studio / Mach3 / DSP / DDCS</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Drive Mechanism:</span>
                  <strong className="text-brand-orange">Precision Helical Rack &amp; Pinion</strong>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border/60 text-[11px] text-brand-steel flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-brand-orange" />
              <span>Continuous 360° Surfacing for Turned Millwork</span>
            </div>
          </div>

          {/* Machine 3 */}
          <div className="p-6 rounded-xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-orange/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-brand-orange font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-brand-orange" />
                  Quality Assurance &amp; Metrology
                </span>
                <span className="px-2 py-0.5 rounded bg-brand-charcoal text-[10px] text-emerald-400 border border-brand-border">QC PROTOCOL</span>
              </div>
              <p className="text-slate-300 font-sans text-xs">
                Standardized first-article inspection, granite datum blocks, and digital edge finding.
              </p>
              
              <div className="space-y-2 pt-3 border-t border-brand-border/60 text-slate-300">
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Linear Repeatability:</span>
                  <strong className="text-white">±0.001" (0.025 mm)</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Positional Tolerance:</span>
                  <strong className="text-white">±0.005" Across 120" Bed</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Metrology Equipment:</span>
                  <strong className="text-white">Mitutoyo Digimatic Calipers</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-border/30">
                  <span className="text-slate-400">Edge Quality:</span>
                  <strong className="text-white">Clean / Burr-free Assemble Ready</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Pre-Cut Validation:</span>
                  <strong className="text-brand-orange">100% 3D CAM Collision Check</strong>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border/60 text-[11px] text-brand-steel flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-brand-orange" />
              <span>First-Article Caliper Sign-off on Every Run</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
