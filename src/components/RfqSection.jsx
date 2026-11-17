import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, Shield, Phone, FileText, X, Loader2 } from 'lucide-react';
import { submitInquiry } from '../supabaseClient';

export default function RfqSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    material: '',
    quantity: '',
    leadTime: 'standard',
    notes: ''
  });

  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selected]);
    }
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const ref = 'VCTR-' + Math.floor(1000 + Math.random() * 9000);
    setTicketRef(ref);

    await submitInquiry({
      full_name: formData.fullName,
      company_name: formData.company,
      email: formData.email,
      phone: formData.phone,
      primary_material: formData.material,
      quantity: formData.quantity,
      timeline: formData.leadTime,
      notes: formData.notes,
      reference_no: ref,
      source: 'react_rfq_portal',
      status: 'new'
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      material: '',
      quantity: '',
      leadTime: 'standard',
      notes: ''
    });
    setFiles([]);
    setSubmitted(false);
  };

  return (
    <section id="rfq" className="py-20 lg:py-28 bg-brand-darker relative border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: RFQ Guidance & Trust Elements (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-xs font-mono text-brand-orange">
              <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
              FAST ESTIMATION ENGINE
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Get an Accurate CNC Quote Within <span className="text-brand-orange">24–48 Hours.</span>
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Provide your project specifications and CAD files. Our CAM engineers will evaluate your geometries, optimize the nesting layout, and return a competitive, itemized quotation.
            </p>

            {/* Checklist of Trust Guarantees */}
            <div className="space-y-4 pt-2 font-mono text-xs">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-white block font-sans text-sm">Strict Confidentiality &amp; NDA</strong>
                  <span className="text-slate-400">Your designs, vector geometries, and client IP are 100% confidential. Mutual NDAs executed on request.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-white block font-sans text-sm">Direct Engineering Feedback</strong>
                  <span className="text-slate-400">We inspect for stress risers, thin wall risks, tool diameter clearances, and nesting savings.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-white block font-sans text-sm">Volume Price Breaks</strong>
                  <span className="text-slate-400">Automatic discounts for recurring contracts, multi-sheet nesting runs, and contract manufacturing.</span>
                </div>
              </div>
            </div>

            {/* Technical Assistance Callout Box */}
            <div className="p-5 rounded-xl bg-brand-card border border-brand-border space-y-2">
              <div className="text-xs font-mono text-brand-orange uppercase font-bold tracking-wider">
                Need Immediate Technical Assistance?
              </div>
              <p className="text-xs text-slate-300">
                Have complex 3D STEP solid models or an emergency rush turnaround? Speak directly with our production manager.
              </p>
              <div className="pt-2 flex items-center gap-3 font-mono text-sm font-bold text-white">
                <a href="tel:+919712266167" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-brand-orange" />
                  +91 9712266167
                </a>
                <span className="text-slate-500">|</span>
                <span className="text-slate-400 text-xs font-sans font-normal">Direct Shop Floor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive RFQ Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-brand-card rounded-2xl border border-brand-border p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {!submitted ? (
                <>
                  <h3 className="font-heading font-bold text-xl text-white mb-1">
                    Request Machining Quote
                  </h3>
                  <p className="text-xs text-brand-steel mb-6 font-mono">
                    Fill out the fields below. Required fields are marked with *
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input 
                          type="text" 
                          required 
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g., Alex Miller" 
                          className="w-full px-3.5 py-2.5 rounded bg-brand-darker border border-brand-border text-white placeholder-slate-500 text-sm focus:border-brand-orange focus:bg-brand-charcoal transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                          Company / Studio
                        </label>
                        <input 
                          type="text" 
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g., Apex Architectural Millwork" 
                          className="w-full px-3.5 py-2.5 rounded bg-brand-darker border border-brand-border text-white placeholder-slate-500 text-sm focus:border-brand-orange focus:bg-brand-charcoal transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                          Work Email *
                        </label>
                        <input 
                          type="email" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com" 
                          className="w-full px-3.5 py-2.5 rounded bg-brand-darker border border-brand-border text-white placeholder-slate-500 text-sm focus:border-brand-orange focus:bg-brand-charcoal transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          required 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000" 
                          className="w-full px-3.5 py-2.5 rounded bg-brand-darker border border-brand-border text-white placeholder-slate-500 text-sm focus:border-brand-orange focus:bg-brand-charcoal transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Material & Quantity */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                          Material Selection *
                        </label>
                        <select 
                          required 
                          value={formData.material}
                          onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded bg-brand-darker border border-brand-border text-white text-sm focus:border-brand-orange focus:bg-brand-charcoal transition-all"
                        >
                          <option value="" disabled>Select Primary Material...</option>
                          <optgroup label="Plywoods & Wood">
                            <option value="baltic_birch">Baltic Birch Plywood (B/BB)</option>
                            <option value="mdf">MDF / High Density Fiberboard</option>
                            <option value="hardwood">Solid Hardwood (Walnut, Oak, Maple)</option>
                          </optgroup>
                          <optgroup label="Plastics & Polymers">
                            <option value="acrylic">Cast Acrylic (Plexiglas)</option>
                            <option value="hdpe">HDPE / UHMW-PE Plastic</option>
                            <option value="delrin">Delrin / Acetal (POM)</option>
                            <option value="polycarbonate">Polycarbonate (Lexan)</option>
                          </optgroup>
                          <optgroup label="Metals & Composites">
                            <option value="aluminum">6061-T6 Aluminum Plate</option>
                            <option value="brass">C360 Brass Plate / Inlay</option>
                            <option value="acm">ACM / Aluminum Composite Material</option>
                            <option value="hdu">HDU Precision Tooling Foam</option>
                          </optgroup>
                          <option value="customer_supplied">Customer Supplied Material</option>
                          <option value="other">Other / Need Recommendation</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                          Estimated Quantity *
                        </label>
                        <select 
                          required 
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded bg-brand-darker border border-brand-border text-white text-sm focus:border-brand-orange focus:bg-brand-charcoal transition-all"
                        >
                          <option value="" disabled>Select Batch Size...</option>
                          <option value="1">1 Prototype / One-Off Part</option>
                          <option value="2-10">2 – 10 Parts (Low Volume)</option>
                          <option value="11-50">11 – 50 Parts</option>
                          <option value="51-200">51 – 200 Parts (Production Run)</option>
                          <option value="200+">200+ Parts / Recurring Contract</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Lead Time Options */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                        Target Delivery Urgency
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                        <label className={`flex items-center p-3 rounded bg-brand-darker border cursor-pointer transition-colors ${formData.leadTime === 'standard' ? 'border-brand-orange text-white' : 'border-brand-border text-slate-400'}`}>
                          <input 
                            type="radio" 
                            name="leadTime" 
                            value="standard" 
                            checked={formData.leadTime === 'standard'}
                            onChange={(e) => setFormData({ ...formData, leadTime: e.target.value })}
                            className="text-brand-orange mr-2"
                          />
                          <span>Standard (5-7 Days)</span>
                        </label>
                        <label className={`flex items-center p-3 rounded bg-brand-darker border cursor-pointer transition-colors ${formData.leadTime === 'rush' ? 'border-brand-orange text-amber-400' : 'border-brand-border text-slate-400'}`}>
                          <input 
                            type="radio" 
                            name="leadTime" 
                            value="rush" 
                            checked={formData.leadTime === 'rush'}
                            onChange={(e) => setFormData({ ...formData, leadTime: e.target.value })}
                            className="text-brand-orange mr-2"
                          />
                          <span className="text-amber-400">Rush (2-4 Days)</span>
                        </label>
                        <label className={`flex items-center p-3 rounded bg-brand-darker border cursor-pointer transition-colors ${formData.leadTime === 'planning' ? 'border-brand-orange text-white' : 'border-brand-border text-slate-400'}`}>
                          <input 
                            type="radio" 
                            name="leadTime" 
                            value="planning" 
                            checked={formData.leadTime === 'planning'}
                            onChange={(e) => setFormData({ ...formData, leadTime: e.target.value })}
                            className="text-brand-orange mr-2"
                          />
                          <span>Planning Phase</span>
                        </label>
                      </div>
                    </div>

                    {/* Row 5: Project Notes */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                        Project Notes &amp; Specifications
                      </label>
                      <textarea 
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Detail material thickness, edge finishing requirements (sanded, edge-banded, chamfered), specific tolerances, or packaging requirements..."
                        className="w-full px-3.5 py-2.5 rounded bg-brand-darker border border-brand-border text-white placeholder-slate-500 text-sm focus:border-brand-orange focus:bg-brand-charcoal transition-all"
                      />
                    </div>

                    {/* Row 6: Drag & Drop File Upload Area */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                        Upload CAD / Vector Files
                      </label>
                      <div className="border-2 border-dashed border-brand-border rounded-xl p-6 text-center bg-brand-darker/60 hover:bg-brand-darker hover:border-brand-orange transition-all relative">
                        <input 
                          type="file" 
                          multiple 
                          accept=".dxf,.dwg,.svg,.step,.stp,.stl,.iges,.igs,.ai,.pdf,.zip" 
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                          <div className="w-10 h-10 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-brand-orange">
                            <UploadCloud className="w-5 h-5" />
                          </div>
                          <div className="text-sm font-heading font-semibold text-white">
                            Drop files here or <span className="text-brand-orange underline">browse folders</span>
                          </div>
                          <div className="text-[11px] text-brand-steel font-mono">
                            Accepted: DXF, DWG, SVG, STEP, STL, IGES, AI, PDF (Max 50MB per file)
                          </div>
                        </div>
                      </div>

                      {/* Uploaded File List */}
                      {files.length > 0 && (
                        <div className="mt-3 space-y-1.5">
                          {files.map((file, i) => (
                            <div key={i} className="flex items-center justify-between p-2 rounded bg-brand-darker border border-brand-border text-xs font-mono">
                              <div className="flex items-center gap-2 text-slate-200 truncate">
                                <FileText className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                                <span className="truncate">{file.name}</span>
                                <span className="text-slate-500 text-[10px]">({Math.round(file.size / 1024)} KB)</span>
                              </div>
                              <button 
                                type="button" 
                                onClick={() => removeFile(i)}
                                className="text-slate-400 hover:text-red-400 p-1"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded font-heading font-extrabold text-sm uppercase tracking-wider text-white bg-brand-orange hover:bg-brand-orangeHover shadow-xl shadow-brand-orange/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Saving to Supabase Backend...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Files &amp; Request Official Quote</span>
                            <UploadCloud className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <div className="text-center mt-3 text-[11px] text-slate-500 font-mono">
                        🔒 Encrypted 256-Bit SSL Transfer • Zero Spam Guarantee • Strict NDAs Honored
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                /* Success Confirmation State */
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-3xl">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h4 className="font-heading font-extrabold text-2xl text-white">
                    RFQ Successfully Received!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md font-sans leading-relaxed">
                    Our manufacturing team has logged your submission into our CAM queue. We will review your CAD geometries and email your itemized quotation within <strong>24 business hours</strong>.
                  </p>
                  <div className="p-3 rounded-lg bg-brand-darker border border-brand-border font-mono text-xs">
                    Assigned Quote Reference: <span className="text-brand-orange font-bold font-mono">#{ticketRef}</span>
                  </div>
                  <button 
                    onClick={resetForm}
                    className="mt-4 px-6 py-2.5 rounded bg-brand-darker hover:bg-brand-card border border-brand-border text-xs font-heading uppercase tracking-wider text-slate-200 hover:text-white transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
