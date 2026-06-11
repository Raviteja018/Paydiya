import { ArrowUpRight, Check, Zap, Cpu, ShieldCheck, Heart, Layers, Globe } from 'lucide-react';

const SOLUTIONS = [
  {
    id: 'startups',
    title: 'Startups',
    subtitle: 'Move fast, scale instantly.',
    desc: 'Launch payment acceptance within hours using our zero-code integrations, sandbox environments, and instant onboarding schemes.',
    features: ['100% Digital onboarding', 'Free developer tools', 'Access to growth credits'],
    icon: Zap,
    gradient: 'from-neon-cyan to-royal-indigo',
    stats: '₹0 Setup Fees',
  },
  {
    id: 'smes',
    title: 'SMEs & Retailers',
    subtitle: 'Streamline local commerce.',
    desc: 'Empower retail operations with static & dynamic UPI QRs, simple SMS checkout links, and automatic ledger reconciliation tools.',
    features: ['Multi-operator UPI QRs', 'SMS/Email billing collections', 'Next-day automated settlements'],
    icon: Globe,
    gradient: 'from-amber-gold to-coral-pink',
    stats: '2.0% Flat Fee',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Engines',
    subtitle: 'Banish checkout dropoffs.',
    desc: 'Create highly optimized checkout funnels that tokenize card details, enable single-tap UPI payments, and offer native EMI setups.',
    features: ['Card Vault Tokenization', 'One-click checkout layers', 'No-Cost EMI options'],
    icon: Layers,
    gradient: 'from-electric-violet to-neon-cyan',
    stats: '+14% Sales Capture',
  },
  {
    id: 'saas',
    title: 'SaaS Platforms',
    subtitle: 'Automate subscription cycles.',
    desc: 'Design beautiful recurring payment schemes, mandate collection logs, dunning notifications, and automatic smart credit routes.',
    features: ['UPI Autopay & Card Mandates', 'Custom billing cycles', 'Grace period dunning logs'],
    icon: Cpu,
    gradient: 'from-royal-indigo to-electric-violet',
    stats: '&lt; 0.1% Churn',
  },
  {
    id: 'enterprises',
    title: 'Global Enterprises',
    subtitle: 'High volume, custom rails.',
    desc: 'Support peak transaction volumes with dedicated acquring infrastructure, custom routers, SLA guarantees, and priority multi-bank networks.',
    features: ['Dedicated multi-acquirer node', '99.999% SLA Guarantee', 'Custom volume pricing'],
    icon: ShieldCheck,
    gradient: 'from-emerald-green to-neon-cyan',
    stats: '99.99% Uptime SLA',
  },
  {
    id: 'marketplaces',
    title: 'Marketplaces',
    subtitle: 'Split settlements instantly.',
    desc: 'Automate marketplace commissions, merchant splits, service charge collections, and seller onboarding logs within a single payload.',
    features: ['Real-time escrow routing', 'Multi-party balance split', 'Automated merchant payouts'],
    icon: Heart,
    gradient: 'from-coral-pink to-amber-gold',
    stats: 'Sub-second Split',
  },
];

export default function Solutions() {
  return (
    <div className="w-full pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-transparent text-white relative overflow-hidden">

      {/* Background glow layers */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-electric-violet/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
          Tailored Architecture for <span className="gradient-text-cyan-violet">Every Scale</span>.
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Explore specialized integration flows custom-engineered for your business model and target demographics.
        </p>
      </div>

      {/* Alternating Solutions Grid */}
      <div className="max-w-6xl mx-auto space-y-8">
        {SOLUTIONS.map((sol, index) => {
          const SolIcon = sol.icon;
          const isEven = index % 2 === 0;

          return (
            <div 
              key={sol.id}
              className={`glass-panel p-8 md:p-10 rounded-3xl border border-soft-lavender/10 shadow-xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16 transition-all duration-300 hover:scale-[1.01] hover:border-electric-violet/20 relative overflow-hidden ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Top Accent Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${sol.gradient}`} />

              {/* Tinted background hue */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sol.gradient} opacity-[0.02] pointer-events-none`} />

              {/* Soft corner glow */}
              <div className={`absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-tr ${sol.gradient} opacity-[0.05] rounded-full filter blur-[50px] pointer-events-none`} />

              {/* Left/Right Text Content */}
              <div className="w-full lg:w-1/2 space-y-6 relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${sol.gradient} flex items-center justify-center text-midnight-navy font-bold shadow-lg`}>
                  <SolIcon className="w-6 h-6 text-white" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neon-cyan">{sol.subtitle}</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">{sol.title}</h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">{sol.desc}</p>

                {/* Features Checklist */}
                <ul className="space-y-3 pt-2">
                  {sol.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-3 text-xs text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-emerald-green/10 border border-emerald-green/20 flex items-center justify-center text-emerald-green">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center text-xs font-bold text-soft-lavender hover:text-white uppercase tracking-wider transition-colors pt-2 group cursor-pointer">
                  Deploy this solution <ArrowUpRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </div>

              {/* Left/Right Visual Highlight Card */}
              <div className="w-full lg:w-1/2 relative z-10">
                <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-soft-lavender/10 shadow-inner relative overflow-hidden flex flex-col justify-between h-72">
                  {/* Decorative mesh */}
                  <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-tr ${sol.gradient} opacity-[0.03] rounded-full filter blur-[40px] pointer-events-none`} />
                  
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Performance Metric</span>
                    <span className="px-3 py-1 rounded bg-[#FFFFFF] border border-soft-lavender/10 text-xs font-bold font-mono text-slate-700">
                      {sol.stats}
                    </span>
                  </div>

                  {/* SVG graphical representation */}
                  <div className="h-24 w-full relative mt-4">
                    <svg className="w-full h-full" viewBox="0 0 100 24">
                      {/* Grid representation */}
                      <line x1="0" y1="12" x2="100" y2="12" stroke="rgba(196, 181, 253, 0.05)" strokeWidth="1" />
                      <line x1="25" y1="0" x2="25" y2="24" stroke="rgba(196, 181, 253, 0.05)" strokeWidth="1" />
                      <line x1="50" y1="0" x2="50" y2="24" stroke="rgba(196, 181, 253, 0.05)" strokeWidth="1" />
                      <line x1="75" y1="0" x2="75" y2="24" stroke="rgba(196, 181, 253, 0.05)" strokeWidth="1" />
                      
                      {/* Pulse path */}
                      <path d="M5,12 Q25,2 50,12 T95,12" fill="none" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="2" strokeDasharray="3, 3" />
                      <path d="M5,12 Q25,2 50,12 T95,12" fill="none" stroke="#22D3EE" strokeWidth="2" strokeDasharray="20 80" strokeDashoffset="0">
                        <animate attributeName="stroke-dashoffset" values="100;0" dur="4s" repeatCount="indefinite" />
                      </path>
                      
                      <circle cx="50" cy="12" r="4" fill="#7C3AED" className="animate-pulse" />
                      <circle cx="25" cy="5" r="3" fill="#22D3EE" />
                      <circle cx="75" cy="19" r="3" fill="#F43F5E" />
                    </svg>
                  </div>

                  <div className="text-[10px] text-slate-500 font-mono flex justify-between items-center mt-2 border-t border-soft-lavender/5 pt-2">
                    <span>Node: acq_{sol.id}_primary</span>
                    <span>Status: OPERATIONAL (99.998%)</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
