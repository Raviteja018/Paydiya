import { useState } from 'react';
import { Check, Users, ArrowUpRight, Building2, Mail } from 'lucide-react';

const PARTNER_TYPES = [
  {
    title: 'Banking Partners',
    desc: 'Integrate directly as a clearing bank or acquirer node. Build custom co-branded checkout modules.',
    benefits: ['Direct core server access', 'Zero-hop settlement clearing', 'Shared fraud metrics dashboard'],
    revShare: 'Custom clearing splits',
    support: 'L3 TAM (24/7 dedicated)',
  },
  {
    title: 'Technology Partners',
    desc: 'Integrate paydiya into e-commerce plugins, billing systems, or ledger management applications.',
    benefits: ['API developer access sandbox', 'Revenue share on all referrals', 'Co-marketing campaigns'],
    revShare: 'Up to 0.20% referral volume',
    support: 'Developer slack + forums',
  },
  {
    title: 'Channel Partners & Resellers',
    desc: 'Resell paydiya merchant solutions directly to local shops, platform marketplaces, and developers.',
    benefits: ['Sub-partner client sub-ledgers', 'Sales enablement materials', 'Monthly recurring payout slips'],
    revShare: '10-25% Platform margin share',
    support: 'Partner success specialist',
  },
];

export default function Partners() {
  // Application form state
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [partnerType, setPartnerType] = useState('technology');
  const [message, setMessage] = useState('');
  
  // Submit state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyName.trim() && contactEmail.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Clear fields
        setCompanyName('');
        setContactEmail('');
        setMessage('');
      }, 1500);
    }
  };

  return (
    <div className="w-full py-20 px-6 md:px-12 lg:px-24 bg-transparent text-white relative overflow-hidden">

      {/* Background glow overlay */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-electric-violet/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
          Accelerate Growth Together with <span className="gradient-text-cyan-violet">paydiya Partners</span>.
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Partner with our fintech network to unlock co-branded clearing rails, referral commission sharing, and dedicated support systems.
        </p>
      </div>

      {/* Partners Dashboard Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {PARTNER_TYPES.map((partner, idx) => (
          <div 
            key={idx}
            className="glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{partner.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{partner.desc}</p>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Key Benefits</span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {partner.benefits.map((ben, bIdx) => (
                    <li key={bIdx} className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Rev share and support */}
            <div className="mt-8 border-t border-soft-lavender/5 pt-4 space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Revenue Split</span>
                <span className="text-neon-cyan font-bold font-mono">{partner.revShare}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Support Tier</span>
                <span className="text-white font-mono">{partner.support}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Application Form & Contact Info */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
        
        {/* Contact Info Sidebar Column (Span 5) */}
        <div className="lg:col-span-5 glass-panel p-6 md:p-8 rounded-2xl border border-slate-200/50 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Top Accent Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-electric-violet to-emerald-green" />
          
          {/* Tinted background hue */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-electric-violet/5 opacity-[0.1] pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/5 rounded-full filter blur-xl pointer-events-none" />

          <div className="space-y-8 relative z-10">
            <div>
              <span className="text-[10px] uppercase font-bold text-electric-violet tracking-wider bg-emerald-green/10 px-2.5 py-1 rounded">Official Registry</span>
              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2 font-sans">Corporate Headquarters</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Connect with our corporate office or contact our customer support teams directly.
              </p>
            </div>

            {/* Address Block */}
            <div className="flex gap-4">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl h-fit text-emerald-green shadow-sm">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Registered Office</h4>
                <p className="text-xs text-slate-900 leading-relaxed font-sans font-semibold">
                  Paydia Fintech Solutions Private Limited
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Flat No. 401, Inturi Chambers<br />
                  KPHB 6th Phase<br />
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>

            {/* Email Channels */}
            <div className="flex gap-4">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl h-fit text-neon-cyan shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-3 flex-1">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Email Directory</h4>
                
                <div className="grid grid-cols-1 gap-2.5">
                  <div className="space-y-0.5">
                    <div className="text-[9px] uppercase font-bold text-slate-400">General Support</div>
                    <a href="mailto:info@paydia.in" className="text-xs text-electric-violet hover:text-royal-indigo font-semibold block transition-colors">info@paydia.in</a>
                  </div>
                  
                  <div className="space-y-0.5">
                    <div className="text-[9px] uppercase font-bold text-slate-400">Technical Ops</div>
                    <a href="mailto:support@paydia.in" className="text-xs text-electric-violet hover:text-royal-indigo font-semibold block transition-colors">support@paydia.in</a>
                  </div>
                  
                  <div className="space-y-0.5">
                    <div className="text-[9px] uppercase font-bold text-slate-400">Business & Sales</div>
                    <a href="mailto:sales@paydia.in" className="text-xs text-electric-violet hover:text-royal-indigo font-semibold block transition-colors">sales@paydia.in</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 border-t border-slate-100 pt-4 text-[9px] text-slate-400 font-mono relative z-10 flex justify-between">
            <span>CIN: U72900TG2020PTC144567</span>
            <span>SLA: &lt; 4 hours</span>
          </div>
        </div>

        {/* Application Form (Span 7) */}
        <div className="lg:col-span-7 glass-panel p-6 md:p-8 rounded-2xl border border-slate-200/50 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Top Accent Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-green via-electric-violet to-neon-cyan" />
          {/* Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-electric-violet/5 rounded-full filter blur-[40px] pointer-events-none" />
          
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-1 font-sans">Apply for the Partnership Ecosystem</h3>
              <p className="text-xs text-slate-500 font-medium">
                Submit your organization details to schedule an evaluation roadmap call with our partner team.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-8 rounded-xl bg-emerald-green/5 border border-emerald-green/20 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-green/10 flex items-center justify-center text-emerald-green mx-auto">
                  <Check className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-sans">Application Dispatched!</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Thank you for applying. A partner manager will review your submission and contact you within 24 hours.
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="px-4 py-2 rounded-lg bg-electric-violet text-white text-xs font-bold hover:scale-[1.02] active:scale-95 transition-all cursor-pointer shadow"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Company name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Company / Org Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Tech Labs"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-800 focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-all"
                    />
                  </div>

                  {/* Business email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Business Email</label>
                    <input
                      type="email"
                      required
                      placeholder="partner@company.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-800 focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-all"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Partner Type */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Partner Track</label>
                    <select
                      value={partnerType}
                      onChange={(e) => setPartnerType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-800 focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-all"
                    >
                      <option value="banking">Banking Acquirer Node</option>
                      <option value="technology">Technology & SaaS Integration</option>
                      <option value="channel">Channel Partner / reseller</option>
                    </select>
                  </div>

                  {/* Note */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Additional details (Optional)</label>
                    <input
                      type="text"
                      placeholder="Brief overview of operations volume"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-800 focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-all"
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-electric-violet to-royal-indigo hover:from-royal-indigo hover:to-electric-violet text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border border-t-transparent border-white animate-spin" />
                      <span>Validating application...</span>
                    </>
                  ) : (
                    <>
                      Submit Application <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
