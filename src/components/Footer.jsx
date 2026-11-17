import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker text-slate-400 font-sans border-t border-brand-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-border/60">
          
          {/* Col 1 & 2: Brand & Shop Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-black overflow-hidden flex items-center justify-center p-1 border border-slate-700/60 shadow-md">
                <img src="/logo.jpg" alt="Vector Engineering Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                VECTOR<span className="text-brand-orange">CNC</span> MACHINING
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              High-precision 3-axis &amp; 4-axis CNC routing, sheet nesting, and custom industrial fabrication. From rapid prototyping to high-volume contract manufacturing.
            </p>

            <div className="space-y-1 font-mono text-xs text-slate-400 pt-1">
              <div className="text-white font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                Machining Facility &amp; Freight Dock:
              </div>
              <div>Udhana, Surat, Gujarat-395006, India.</div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-brand-card border border-brand-border text-[11px] font-mono text-emerald-400">
                â— Receiving Dock Open
              </span>
              <span className="text-xs text-slate-500 font-mono">Forklift Rated: 8,000 lbs</span>
            </div>
          </div>

          {/* Col 3: Direct Capabilities */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Capabilities
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#capabilities" className="hover:text-brand-orange transition-colors">Sheet Nesting (Cabinetry)</a></li>
              <li><a href="#capabilities" className="hover:text-brand-orange transition-colors">3D Relief &amp; Architectural</a></li>
              <li><a href="#capabilities" className="hover:text-brand-orange transition-colors">Architectural Signage</a></li>
              <li><a href="#capabilities" className="hover:text-brand-orange transition-colors">Aluminum Plate Machining</a></li>
              <li><a href="#capabilities" className="hover:text-brand-orange transition-colors">Engineering Plastics (Delrin/HDPE)</a></li>
              <li><a href="#capabilities" className="hover:text-brand-orange transition-colors">DFM &amp; CAM Programming</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#materials" className="hover:text-brand-orange transition-colors">Stocked Materials</a></li>
              <li><a href="#equipment" className="hover:text-brand-orange transition-colors">Machine Specifications</a></li>
              <li><a href="#portfolio" className="hover:text-brand-orange transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-brand-orange transition-colors">Fabrication Process</a></li>
              <li><a href="#faq" className="hover:text-brand-orange transition-colors">FAQ</a></li>
              <li><a href="#rfq" className="text-brand-orange hover:underline font-bold">Request an RFQ</a></li>
            </ul>
          </div>

          {/* Col 5: Operating Hours & Direct Dispatch */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white font-sans flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              Operating Hours
            </div>
            <div className="space-y-1 text-slate-400">
              <div><strong className="text-slate-200">Mon â€“ Fri:</strong> 7:00 AM â€“ 5:30 PM</div>
              <div><strong className="text-slate-200">Saturday:</strong> 9:00 AM – 4:00 PM</div>
              <div><strong className="text-slate-200">Sunday:</strong> Production Closed</div>
            </div>
            <div className="pt-2">
              <div className="text-slate-200 font-semibold mb-1">Direct Contacts:</div>
              <a href="tel:+919712266167" className="text-brand-orange font-bold hover:underline block font-mono">+91 9712266167</a>
              <div className="text-slate-400 font-sans">rfq@vectorengineering.com</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {currentYear} Vector Engineering &amp; CNC Fabrication. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Confidentiality &amp; NDA Terms</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Machining Tolerances Spec</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
