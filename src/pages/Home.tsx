import { useState, useEffect } from 'react';
import { 
  ShieldCheck, Zap, ArrowRight, Check,
  ChevronDown, ChevronRight
} from 'lucide-react';
import DashboardPreview from '../components/DashboardPreview';
import PaymentFlow from '../components/PaymentFlow';
import SecuritySection from '../components/SecuritySection';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

// Payment Methods list
const PAYMENT_METHODS = [
  { id: 'upi', label: 'UPI / Autopay', desc: 'Instant collect, dynamic QRs, and recurring intent.', highlight: 'Popular', icon: '⚡' },
  { id: 'cards_credit', label: 'Credit Cards', desc: 'Secure vaults, custom checkout sheets, and Visa/Mastercard/Amex.', highlight: '0% OTP Drop', icon: '💳' },
  { id: 'cards_debit', label: 'Debit Cards', desc: 'Zero cost-routing & network tokenized vault security.', highlight: 'Secure', icon: '📇' },
  { id: 'net_banking', label: 'Net Banking', desc: 'Direct secure integrations with 75+ retail & corporate banks.', highlight: 'Direct Acquirer', icon: '🏛️' },
  { id: 'wallets', label: 'Wallets', desc: 'Pre-integrated popular wallets including Amazon Pay & Mobikwik.', highlight: 'One-Click', icon: '👛' },
  { id: 'emi', label: 'EMI', desc: 'No-cost & standard EMIs with major credit and debit issuers.', highlight: 'High Conversion', icon: '📈' },
  { id: 'bnpl', label: 'BNPL', desc: 'Buy Now Pay Later integrations via LazyPay, Simpl & more.', highlight: 'Increase AOV', icon: '⏳' },
  { id: 'intl', label: 'International Payments', desc: 'Accept 135+ currencies with automatic dcc rates & compliance.', highlight: 'Global reach', icon: '🌐' },
];

const SUCCESS_STORIES = [
  {
    merchant: 'Style Union',
    uplift: '+4.2%',
    metric: 'Conversion Rate Increase',
    quote: 'paydiya’s smart routing and 0.2s checkouts saved thousands of cart abandons during peak dinner rush hours.',
    before: '86.4% success',
    after: '99.8% success',
    borderLine: 'bg-emerald-green',
    bgColor: 'bg-emerald-green/10',
    borderColor: 'hover:border-emerald-green/30',
  },
  {
    merchant: 'StyleLane',
    uplift: '₹12 Cr',
    metric: 'Monthly Fraud Recaptured',
    quote: 'The AI Sentinel blocked high-frequency fraud bots without introducing friction for legitimate buyers.',
    before: '0.8% fraud rate',
    after: '&lt;0.01% fraud rate',
    borderLine: 'bg-electric-violet',
    bgColor: 'bg-electric-violet/10',
    borderColor: 'hover:border-electric-violet/30',
  },
  {
    merchant: 'RideWave',
    uplift: '0.0s',
    metric: 'Settlement Lag',
    quote: 'Driver payouts and aggregator settlements are routed instantly via UPI and IMPS on a 24/7 basis.',
    before: 'T+2 days',
    after: 'Instant (24/7)',
    borderLine: 'bg-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
    borderColor: 'hover:border-neon-cyan/30',
  },
];

const FAQ_ITEMS = [
  {
    category: 'Onboarding',
    q: 'How quickly can I get onboarded?',
    a: 'Sandbox access in minutes. Production onboarding typically completes within 1–3 business days after KYC and integration are finished.',
  },
  {
    category: 'Payments',
    q: 'What payment methods are supported?',
    a: 'We support UPI (Intent & QR), Credit & Debit Cards (Visa, Mastercard, RuPay, Amex), NetBanking (75+ banks), Wallets, EMI, BNPL networks, and 135+ international currencies.',
  },
  {
    category: 'Settlements',
    q: 'How are settlements processed?',
    a: 'We offer instant settlements (0.2s dispatch) plus configurable hourly or daily settlement cycles. Traditional bank rails follow T+1/T+2 depending on the acquirer.',
  },
  {
    category: 'Hardware',
    q: 'Do you provide POS devices?',
    a: 'Yes — certified POS terminals and SDK integrations are available through our hardware partners. Contact sales for provisioning and pricing.',
  },
  {
    category: 'UPI',
    q: 'Can I accept UPI payments?',
    a: 'Yes. UPI Intent, Collect, and QR flows are fully supported, including recurring/autopay where applicable.',
  },
  {
    category: 'Support',
    q: 'Is technical support available?',
    a: 'Yes — developer docs, sandbox access, and 24/7 technical support for production customers with priority SLAs available on enterprise plans.',
  },
];

export default function Home({ setActiveTab }: HomeProps) {
  // Analytics sub-tab state
  const [analyticsPeriod, setAnalyticsPeriod] = useState<'24h' | '7d' | '30d'>('7d');

  // FAQ accordion active state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);


  return (
    <div className="w-full bg-transparent text-white relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-36 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Moving Grid Background */}
        <div className="absolute inset-0 moving-grid opacity-30 z-0" />
        
        {/* Dynamic Aurora Glow Backdrops */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-electric-violet/10 rounded-full filter blur-[100px] animate-aurora pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-neon-cyan/10 rounded-full filter blur-[100px] animate-aurora pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Hero Side */}
          <div className="space-y-8 text-left max-w-xl">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-violet/10 to-neon-cyan/10 border border-electric-violet/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-soft-lavender shadow-[0_0_15px_rgba(124,58,237,0.15)]">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span>Version 4.0 Live • Next-Gen Routing Active</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Accept Payments at the <span className="gradient-text-cyan-violet">Speed of Business</span>.
            </h1>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Empower startups, enterprises, and global businesses with lightning-fast payments, instant settlements, AI-powered fraud protection, and seamless customer experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => setActiveTab('pricing')}
                className="w-full sm:w-auto relative px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-electric-violet to-royal-indigo hover:from-royal-indigo hover:to-electric-violet text-white transition-all shadow-[0_4px_25px_rgba(124,58,237,0.4)] hover:shadow-[0_4px_30px_rgba(34,211,238,0.35)] hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group"
              >
                Start for Free
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => setActiveTab('partners')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold border border-soft-lavender/15 bg-midnight-navy/60 hover:bg-slate-800/40 text-slate-300 hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Request Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-soft-lavender/10">
              <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-green" />
                <span>PCI DSS Level 1</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-green" />
                <span>RBI Compliant</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-green" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                <Zap className="w-4 h-4 text-amber-gold" />
                <span>99.99% Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Hero Side (Live Dashboard widget) */}
          <div className="w-full flex items-center justify-center">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* 2. TRUSTED COMPANIES MARQUEE */}
      <section className="py-12 border-t border-b border-soft-lavender/5 bg-[#080d1e] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-6">
          <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-500">
            Trusted by the fastest growing global brands
          </span>
        </div>
        
        {/* Horizontal Marquee */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 md:space-x-24">
            {/* Logos */}
            {['Amazon', 'Flipkart', 'FoodSprint', 'RideWave', 'Zomato', 'StyleLane', 'Amazon', 'Flipkart', 'FoodSprint', 'RideWave', 'Zomato', 'StyleLane'].map((brand, idx) => (
              <span 
                key={idx} 
                className="text-lg md:text-xl font-bold tracking-widest font-mono text-slate-600 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                {brand.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PAYMENT METHODS SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-neon-cyan">Channels</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            One integration. Infinite payment options.
          </h2>
          <p className="text-slate-400 text-sm">
            Support native payment methods and checkout experiences tailored to your customer’s region.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAYMENT_METHODS.map((method) => (
            <div 
              key={method.id}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Highlight badge */}
              <span className="absolute top-4 right-4 text-[9px] bg-electric-violet/20 border border-electric-violet/30 text-soft-lavender px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                {method.highlight}
              </span>

              <div>
                <div className="text-3xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {method.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {method.label}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {method.desc}
                </p>
              </div>

              {/* Action indicator */}
              <div className="mt-6 flex items-center text-[10px] font-bold text-soft-lavender uppercase tracking-wider group-hover:text-neon-cyan transition-colors">
                Explore Tech Docs <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PREMIUM ANALYTICS EXPERIENCE */}
      <section className="py-20 bg-[#080d1e] border-t border-b border-soft-lavender/5 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Left side: content */}
            <div className="lg:col-span-2 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-gold">Intelligence</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Turn transactional data into core revenue.
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Unlock smart merchant analytics showing card failure analysis, smart routing paths, acquirer latency, and regional purchase density.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-green/10 flex items-center justify-center text-emerald-green mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-white">Smart Routing AI:</span> Re-routes transaction splits to active banking gateways automatically.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-green/10 flex items-center justify-center text-emerald-green mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-white">Success rate guard:</span> Bypasses failed bank gateways to secure capture rates up to 99.9%.
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: custom dashboard mockup */}
            <div className="lg:col-span-3 glass-panel p-6 rounded-2xl border border-soft-lavender/10 shadow-2xl relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Revenue Analytics Overview</h3>
                  <p className="text-[10px] text-slate-500">Global processing volumes</p>
                </div>
                {/* Period buttons */}
                <div className="flex bg-midnight-navy/60 border border-soft-lavender/10 rounded-lg p-0.5">
                  {(['24h', '7d', '30d'] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setAnalyticsPeriod(p)}
                      className={`px-3 py-1 text-[10px] font-semibold rounded-md cursor-pointer transition-all ${
                        analyticsPeriod === p 
                          ? 'bg-electric-violet text-white shadow' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Grid */}
              <div className="h-44 w-full relative mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path
                    d={analyticsPeriod === '7d' 
                      ? "M0,32 C8,32 14,20 20,20 C26,20 34,28 40,28 C48,28 57,6 65,6 C73,6 79,30 85,30 C91,30 96,10 100,10 L100,40 L0,40 Z" 
                      : analyticsPeriod === '24h'
                      ? "M0,38 C8,38 14,27 20,27 C26,27 32,33 38,33 C44,33 54,8 62,8 C70,8 76,22 82,22 C88,22 94,12 100,12 L100,40 L0,40 Z"
                      : "M0,30 C8,30 14,12 20,12 C26,12 38,24 45,24 C55,24 65,6 75,6 C85,6 92,15 100,15 L100,40 L0,40 Z"
                    }
                    fill="url(#rev-grad)"
                  />
                  <path
                    d={analyticsPeriod === '7d' 
                      ? "M0,32 C8,32 14,20 20,20 C26,20 34,28 40,28 C48,28 57,6 65,6 C73,6 79,30 85,30 C91,30 96,10 100,10" 
                      : analyticsPeriod === '24h'
                      ? "M0,38 C8,38 14,27 20,27 C26,27 32,33 38,33 C44,33 54,8 62,8 C70,8 76,22 82,22 C88,22 94,12 100,12"
                      : "M0,30 C8,30 14,12 20,12 C26,12 38,24 45,24 C55,24 65,6 75,6 C85,6 92,15 100,15"
                    }
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                  />
                  <defs>
                    <linearGradient id="rev-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Chart Legend Metrics */}
              <div className="grid grid-cols-3 gap-4 border-t border-soft-lavender/5 pt-4 text-center">
                <div>
                  <div className="text-[10px] text-slate-500">PROCESSED</div>
                  <div className="text-sm font-bold text-white font-mono">
                    {analyticsPeriod === '24h' ? '₹1.24 Cr' : analyticsPeriod === '7d' ? '₹9.48 Cr' : '₹42.9 Cr'}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">AVG FEE RATE</div>
                  <div className="text-sm font-bold text-neon-cyan font-mono">1.42%</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">DISPUTES</div>
                  <div className="text-sm font-bold text-coral-pink font-mono">0.02%</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE PAYMENT FLOW */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <PaymentFlow />
      </section>

      {/* 6. SECURITY SECTION */}
      <section className="py-16 bg-[#080d1e] border-t border-b border-soft-lavender/5">
        <SecuritySection />
      </section>

      {/* 7. MERCHANT SUCCESS STORIES */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-soft-lavender">Merchant Impact</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Helping top tier enterprises scale globally.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((story, idx) => (
            <div 
              key={idx}
              className={`glass-card p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] relative overflow-hidden border border-soft-lavender/10 ${story.borderColor}`}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${story.borderLine}`} />

              {/* Tinted background overlay */}
              <div className={`absolute inset-0 ${story.bgColor} opacity-[0.06] pointer-events-none`} />

              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-bold tracking-wider font-mono text-slate-500 uppercase">{story.merchant}</span>
                    <div className="text-right">
                      <span className="text-lg font-black text-emerald-green font-mono">{story.uplift}</span>
                      <div className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">{story.metric}</div>
                    </div>
                  </div>

                  <p className="text-slate-500 text-xs italic leading-relaxed mb-6">
                    "{story.quote}"
                  </p>
                </div>

                {/* Before vs After */}
                <div className="border-t border-soft-lavender/5 pt-4 flex justify-between text-[10px] font-mono">
                  <div>
                    <span className="text-slate-500 block uppercase">Previous Platform</span>
                    <span className="text-coral-pink font-semibold">{story.before}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block uppercase">paydiya Engine</span>
                    <span className="text-emerald-green font-semibold">{story.after}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 9. MOBILE APP SHOWCASE */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-electric-violet">On The Go</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Your entire payment catalog. In your pocket.
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Track settlement dispatches, view disputes, monitor live refund queues, and generate instant invoice QRs right from the paydiya mobile app.
            </p>
            
            <div className="flex gap-4 pt-4">
              <button className="px-5 py-2.5 rounded-lg text-xs font-bold bg-[#0d142b] border border-soft-lavender/10 text-white flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <span>Download iOS App</span>
              </button>
              <button className="px-5 py-2.5 rounded-lg text-xs font-bold bg-[#0d142b] border border-soft-lavender/10 text-white flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <span>Download Android App</span>
              </button>
            </div>
          </div>

          {/* Floating Phone Mockup constructed with CSS */}
          <div className="flex justify-center relative">
            <div className="w-[260px] h-[520px] rounded-[36px] bg-midnight-navy border-4 border-slate-700 shadow-2xl relative p-3 flex flex-col justify-between overflow-hidden">
              {/* Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-700 rounded-b-xl z-20" />
              
              {/* Internal layout */}
              <div className="flex-1 flex flex-col justify-between pt-4 font-sans text-xs">
                
                {/* Header */}
                <div className="flex justify-between items-center px-1 mb-4">
                  <div>
                    <div className="text-[9px] text-slate-500">Live Balance</div>
                    <div className="text-sm font-bold text-white">₹4,28,940</div>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-electric-violet/20 flex items-center justify-center text-[10px] text-electric-violet font-bold">QP</span>
                </div>

                {/* mini chart */}
                <div className="bg-slate-900/40 rounded-xl p-2.5 border border-soft-lavender/5 mb-3 flex-1 flex flex-col justify-between">
                  <div className="text-[8px] text-slate-400">Sales Trend Today</div>
                  <div className="h-20 w-full relative">
                    <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <path d="M0,25 C10,25 18,12 25,12 C32,12 42,18 50,18 C58,18 67,6 75,6 C83,6 92,12 100,12 L100,30 L0,30 Z" fill="rgba(34,211,238,0.1)" />
                      <path d="M0,25 C10,25 18,12 25,12 C32,12 42,18 50,18 C58,18 67,6 75,6 C83,6 92,12 100,12" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>

                {/* status updates */}
                <div className="space-y-1.5 mb-2">
                  <div className="text-[8px] text-slate-500 uppercase font-semibold">Active Settlements</div>
                  <div className="bg-[#0b1022] p-2 rounded-lg flex items-center justify-between text-[10px] border border-soft-lavender/5">
                    <span className="text-slate-300">Set_9921_Dispatched</span>
                    <span className="text-emerald-green font-bold">₹24,500</span>
                  </div>
                  <div className="bg-[#0b1022] p-2 rounded-lg flex items-center justify-between text-[10px] border border-soft-lavender/5">
                    <span className="text-slate-300">Set_9920_Dispatched</span>
                    <span className="text-emerald-green font-bold">₹1,20,000</span>
                  </div>
                </div>
              </div>

              {/* Bottom bar indicator */}
              <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
            </div>

            {/* floating helper items */}
            <div className="absolute top-1/4 -left-12 bg-indigo-950/90 border border-indigo-500/20 p-3 rounded-lg shadow-lg text-[10px] w-36 hidden md:block">
              <div className="text-slate-400 font-medium">Auto-Payouts</div>
              <div className="text-emerald-green font-bold mt-0.5">99.98% Automation</div>
            </div>
            <div className="absolute bottom-1/4 -right-12 bg-cyan-950/90 border border-cyan-500/20 p-3 rounded-lg shadow-lg text-[10px] w-36 hidden md:block">
              <div className="text-slate-400 font-medium">Refund Dispatches</div>
              <div className="text-neon-cyan font-bold mt-0.5">&lt; 2 Minutes Average</div>
            </div>
          </div>

        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-20 bg-[#080d1e] border-t border-b border-soft-lavender/5 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-neon-cyan">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div 
                key={idx}
                className="bg-midnight-navy/60 border border-soft-lavender/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-slate-800/20 transition-colors"
                >
                  <span className="text-sm font-semibold text-white flex items-center gap-2">
                    <span className="text-[10px] bg-electric-violet/10 text-soft-lavender px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                      {item.category}
                    </span>
                    {item.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs text-slate-400 leading-relaxed border-t border-soft-lavender/5">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden">
        {/* Dynamic mesh glow background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-electric-violet/10 via-midnight-navy to-neon-cyan/5 z-0" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-electric-violet/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-cyan/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            The Future of Payments Starts Here.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Launch faster, scale confidently, and process payments globally with enterprise-grade reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => setActiveTab('pricing')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-neon-cyan to-electric-violet text-midnight-navy hover:scale-[1.02] active:scale-95 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-pointer"
            >
              Get Started
            </button>
            <button 
              onClick={() => setActiveTab('partners')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold border border-soft-lavender/10 bg-midnight-navy/60 hover:bg-slate-800 text-black hover:text-white cursor-pointer"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
