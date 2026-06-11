import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import ROICalculator from '../components/ROICalculator';

const COMPARISON_FEATURES = [
  { group: 'API access', name: 'Standard Payment Intents', starter: true, growth: true, enterprise: true },
  { group: 'API access', name: 'Smart Routing Engine', starter: false, growth: true, enterprise: true },
  { group: 'API access', name: 'Auto-acquirer splitting', starter: false, growth: 'Customizable', enterprise: 'Fully dedicated' },
  { group: 'Settlements', name: 'Standard Settlements (T+2)', starter: 'Included', growth: 'Included', enterprise: 'Included' },
  { group: 'Settlements', name: 'Instant Settlements (0.2s)', starter: '1.5% Fee Premium', growth: '0.5% Fee Premium', enterprise: 'Free / SLA' },
  { group: 'Security', name: 'PCI Tokenization Vault', starter: true, growth: true, enterprise: true },
  { group: 'Security', name: 'AI Fraud Prevention', starter: 'Basic', growth: 'Advanced AI', enterprise: 'Custom rules + HSM' },
  { group: 'Support', name: 'Support tier', starter: 'Community forum', growth: '24/7 Priority chat', enterprise: 'Dedicated slack + phone' },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const PRICING = {
    starter: { monthly: '1.9%', yearly: (1.9 * 0.8).toFixed(2) + '%' },
    growth: { monthly: '1.5%', yearly: (1.5 * 0.8).toFixed(2) + '%' },
  } as const;

  return (
    <div className="w-full py-20 px-6 md:px-12 lg:px-24 bg-transparent text-white relative overflow-hidden">

      {/* Glow layers */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-electric-violet/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">

        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
          Flexible Pricing for <span className="gradient-text-cyan-violet">Businesses of All Sizes</span>.
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          No setup fees. No monthly maintenance costs. Pay only for what you process with transparent tiers.
        </p>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center space-x-3 pt-4">
          <span className={`text-xs font-semibold ${!isYearly ? 'text-white' : 'text-slate-500'}`}>Monthly Billing</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-12 h-6 rounded-full bg-slate-800 p-1 flex items-center cursor-pointer transition-colors focus:outline-none"
          >
            <div className={`w-4 h-4 rounded-full bg-neon-cyan shadow transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-xs font-semibold ${isYearly ? 'text-white' : 'text-slate-500'} flex items-center gap-1.5`}>
            Annual Billing <span className="bg-emerald-green/10 text-emerald-green text-[9px] px-1.5 py-0.5 rounded border border-emerald-green/20 font-bold font-mono">SAVE 20%</span>
          </span>
        </div>
      </div>

      {/* Plan Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        
        {/* Starter Plan */}
        <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold text-slate-500">Starter</span>
            <h3 className="text-2xl font-bold text-white">Bootstrap Tier</h3>
            <p className="text-xs text-slate-400">Perfect for side projects, indie hackers, and early startups testing validation channels.</p>
            
            <div className="py-4 border-t border-b border-soft-lavender/5">
              <span className="text-3xl font-black text-white font-mono">{isYearly ? PRICING.starter.yearly : PRICING.starter.monthly}</span>
              <span className="text-xs text-slate-400"> per successful tx</span>
              {isYearly && (
                <div className="text-[10px] text-emerald-green mt-1">Billed annually — effective rate shown</div>
              )}
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>Free Onboarding Setup</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>Basic Collect API & Webhooks</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>Community Discord Support</span>
              </li>
            </ul>
          </div>

          <button className="w-full mt-8 py-3 rounded-xl text-xs font-bold bg-[#0d142b] border border-soft-lavender/10 text-white hover:bg-slate-800 transition-all cursor-pointer">
            Select Starter Plan
          </button>
        </div>

        {/* Growth Plan - Highlighted */}
        <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between border-electric-violet/30 shadow-[0_0_30px_rgba(124,58,237,0.15)] relative overflow-hidden bg-midnight-navy/70">
          {/* Highlight Indicator */}
          <span className="absolute top-4 right-4 text-[9px] bg-electric-violet text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider flex items-center gap-1">
            <Star className="w-3 h-3 fill-current text-amber-gold" /> Recommended
          </span>

          <div className="space-y-4">
            <span className="text-xs uppercase font-bold text-electric-violet">Growth</span>
            <h3 className="text-2xl font-bold text-white">Merchant Scale</h3>
            <p className="text-xs text-slate-400">Ideal for expanding platforms, e-commerce, and high-growth SaaS tools looking to recapture transactions.</p>
            
            <div className="py-4 border-t border-b border-soft-lavender/5">
              <span className="text-3xl font-black text-white font-mono">{isYearly ? PRICING.growth.yearly : PRICING.growth.monthly}</span>
              <span className="text-xs text-slate-400"> per successful tx</span>
              {isYearly && (
                <div className="text-[10px] text-emerald-green mt-1">Billed annually — effective rate shown</div>
              )}
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>Smart Routed Multi-Bank Rails</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>Interactive Failure Analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>24/7 Priority Developer Chat</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>Tokenized PCI Card Vault</span>
              </li>
            </ul>
          </div>

          <button className="w-full mt-8 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-electric-violet to-royal-indigo hover:from-royal-indigo hover:to-electric-violet text-white transition-all shadow-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] cursor-pointer">
            Select Growth Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold text-slate-500">Enterprise</span>
            <h3 className="text-2xl font-bold text-white">Custom Rails</h3>
            <p className="text-xs text-slate-400">Engineered for global marketplaces, logistics giants, and banking infrastructures requiring heavy load capacity.</p>
            
            <div className="py-4 border-t border-b border-soft-lavender/5">
              <span className="text-3xl font-black text-white font-mono">Custom</span>
              <span className="text-xs text-slate-400"> volume pricing</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>Dedicated Acquirer Nodes & Escrow</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>99.999% SLA Uptime Guarantees</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>Dedicated Slack Node & TAM Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-green" /> <span>SLA-optimized customized fee structure</span>
              </li>
            </ul>
          </div>

          <button className="w-full mt-8 py-3 rounded-xl text-xs font-bold bg-[#0d142b] border border-soft-lavender/10 text-white hover:bg-slate-800 transition-all cursor-pointer">
            Contact Enterprise Sales
          </button>
        </div>

      </div>

      {/* ROI Calculator Wrapper */}
      <div className="max-w-6xl mx-auto mb-24">
        <ROICalculator />
      </div>

      {/* Feature Comparison Table */}
      <div className="max-w-5xl mx-auto glass-panel p-6 rounded-2xl border border-soft-lavender/10 shadow-xl overflow-x-auto">
        <h3 className="text-lg font-bold text-white mb-6">Detailed Feature Matrix</h3>
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-soft-lavender/10 text-slate-400 font-mono">
              <th className="py-3 px-4 uppercase tracking-wider font-semibold">Features</th>
              <th className="py-3 px-4 uppercase tracking-wider font-semibold">Starter</th>
              <th className="py-3 px-4 uppercase tracking-wider font-semibold text-electric-violet">Growth</th>
              <th className="py-3 px-4 uppercase tracking-wider font-semibold">Enterprise</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-soft-lavender/5">
            {COMPARISON_FEATURES.map((feat, idx) => (
              <tr key={idx} className="hover:bg-slate-800/10 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-300">{feat.name}</td>
                <td className="py-3.5 px-4">
                  {typeof feat.starter === 'boolean' 
                    ? (feat.starter ? <Check className="w-4 h-4 text-emerald-green" /> : '-') 
                    : feat.starter}
                </td>
                <td className="py-3.5 px-4 font-semibold text-soft-lavender">
                  {typeof feat.growth === 'boolean' 
                    ? (feat.growth ? <Check className="w-4 h-4 text-emerald-green" /> : '-') 
                    : feat.growth}
                </td>
                <td className="py-3.5 px-4 text-slate-300">
                  {typeof feat.enterprise === 'boolean' 
                    ? (feat.enterprise ? <Check className="w-4 h-4 text-emerald-green" /> : '-') 
                    : feat.enterprise}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
