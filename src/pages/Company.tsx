import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Compass, Users, Zap, Shield, CreditCard, RefreshCw, CheckCircle } from 'lucide-react';

const VALUES = [
  {
    title: 'Trust',
    desc: 'Building long-term relationships through transparency and accountability.',
    icon: Users,
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
    borderColor: 'group-hover:border-neon-cyan/30',
  },
  {
    title: 'Innovation',
    desc: 'Developing technology that solves real-world payment challenges.',
    icon: Zap,
    color: 'text-electric-violet',
    bgColor: 'bg-electric-violet/10',
    borderColor: 'group-hover:border-electric-violet/30',
  },
  {
    title: 'Security',
    desc: 'Maintaining strong safeguards for customer data and transactions.',
    icon: Shield,
    color: 'text-emerald-green',
    bgColor: 'bg-emerald-green/10',
    borderColor: 'group-hover:border-emerald-green/30',
  },
  {
    title: 'Customer Success',
    desc: 'Ensuring every client receives measurable business value.',
    icon: Award,
    color: 'text-amber-gold',
    bgColor: 'bg-amber-gold/10',
    borderColor: 'group-hover:border-amber-gold/30',
  },
];

function TransactionVisualizer() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel p-6 rounded-2xl border border-soft-lavender/10 shadow-2xl relative overflow-hidden h-[320px] flex flex-col justify-between">
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-electric-violet to-emerald-green" />

      {/* Tinted background hue */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-electric-violet/5 opacity-[0.1] pointer-events-none" />

      {/* Background gradients inside the card */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/5 rounded-full filter blur-xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-electric-violet/5 rounded-full filter blur-xl pointer-events-none" />

      {/* Header of the visualizer card */}
      <div className="flex justify-between items-center z-10">
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Live Transaction Gateway</h4>
          <p className="text-[10px] text-slate-500 font-mono">Status: ACTIVE • Latency: 12ms</p>
        </div>
        <span className="text-[9px] bg-emerald-green/10 border border-emerald-green/20 text-emerald-green px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider animate-pulse">
          99.98% SUCCESS
        </span>
      </div>

      {/* Flow Nodes Diagram */}
      <div className="relative flex items-center justify-between w-full my-6 px-4 z-10">
        {/* Connection line background */}
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-4/5 h-[2px] bg-slate-800/20 -translate-x-1/2 z-0" />
        
        {/* Animated flow line */}
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-4/5 h-[2px] -translate-x-1/2 z-0 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-neon-cyan via-electric-violet to-emerald-green"
            initial={{ left: '-100%' }}
            animate={
              step === 0 
                ? { left: '-100%' } 
                : step === 1 
                ? { left: '0%' } 
                : { left: '100%' }
            }
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ width: '50%', position: 'absolute' }}
          />
        </div>

        {/* Node 1: Customer Card */}
        <div className="flex flex-col items-center space-y-2 relative z-10">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 bg-[#F8FAFC] ${
            step === 0 
              ? 'border-neon-cyan shadow-[0_0_15px_rgba(217,119,6,0.3)]' 
              : 'border-soft-lavender/10'
          }`}>
            <CreditCard className={`w-5 h-5 ${step === 0 ? 'text-neon-cyan font-bold' : 'text-slate-400'}`} />
          </div>
          <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">Checkout</span>
        </div>

        {/* Node 2: Paydia AI Engine */}
        <div className="flex flex-col items-center space-y-2 relative z-10">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 bg-[#F8FAFC] ${
            step === 1 
              ? 'border-electric-violet shadow-[0_0_15px_rgba(15,118,78,0.3)]' 
              : 'border-soft-lavender/10'
          }`}>
            {step === 1 ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              >
                <RefreshCw className="w-5 h-5 text-electric-violet" />
              </motion.div>
            ) : (
              <Shield className={`w-5 h-5 ${step === 2 ? 'text-emerald-green' : 'text-slate-400'}`} />
            )}
          </div>
          <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">Paydia AI</span>
        </div>

        {/* Node 3: Acquiring Bank */}
        <div className="flex flex-col items-center space-y-2 relative z-10">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 bg-[#F8FAFC] ${
            step === 2 
              ? 'border-emerald-green shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
              : 'border-soft-lavender/10'
          }`}>
            <CheckCircle className={`w-5 h-5 ${step === 2 ? 'text-emerald-green' : 'text-slate-400'}`} />
          </div>
          <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">Settled</span>
        </div>
      </div>

      {/* Description Panel */}
      <div className="h-16 flex flex-col justify-center bg-[#F8FAFC] border border-soft-lavender/5 rounded-xl px-4 z-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-xs text-slate-500 leading-relaxed font-mono"
            >
              <span className="text-neon-cyan font-bold">•</span> customer initiates payment request (UPI, Card)...
            </motion.div>
          )}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-xs text-slate-500 leading-relaxed font-mono"
            >
              <span className="text-electric-violet font-bold">•</span> paydiya routing & tokenizing payload...
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-xs text-slate-500 leading-relaxed font-mono"
            >
              <span className="text-emerald-green font-bold">•</span> transaction authorized & settled instantly.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-[9px] text-slate-500 text-center font-mono z-10">
        Real-time settlement dispatcher sandbox demo.
      </div>
    </div>
  );
}

export default function Company() {
  return (
    <div className="w-full py-20 px-6 md:px-12 lg:px-24 bg-transparent text-white relative overflow-hidden">

      {/* Background radial effects */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-electric-violet/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-6 relative z-10">

        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
          Pioneering next-gen <span className="gradient-text-cyan-violet">payment infrastructure</span>.
        </h1>
      </div>

      {/* Company Overview Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center relative z-10">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Company Overview</h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
            Paydia Fintech Private Limited is a technology-driven financial solutions provider focused on simplifying digital payment acceptance, processing, and settlement management.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Headquartered in Hyderabad, India, Paydia delivers payment infrastructure that enables businesses and institutions to operate efficiently in an increasingly digital economy.
          </p>
        </div>

        {/* Column 2: Animated Visualizer */}
        <div className="w-full">
          <TransactionVisualizer />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 relative z-10">
        {/* Mission Card */}
        <div className="glass-panel p-8 rounded-2xl border border-soft-lavender/10 shadow-lg relative overflow-hidden group hover:border-neon-cyan/30 transition-all duration-300">
          {/* Top Accent Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-neon-cyan" />
          
          {/* Tinted background hue */}
          <div className="absolute inset-0 bg-neon-cyan/5 opacity-[0.1] pointer-events-none" />

          <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/5 rounded-full filter blur-[20px] pointer-events-none" />
          <div className="flex items-center space-x-4 mb-4 text-neon-cyan relative z-10">
            <div className="p-3 bg-neon-cyan/10 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed relative z-10">
            To empower organizations with reliable, secure, and scalable payment technologies that drive operational efficiency and business growth.
          </p>
        </div>

        {/* Vision Card */}
        <div className="glass-panel p-8 rounded-2xl border border-soft-lavender/10 shadow-lg relative overflow-hidden group hover:border-electric-violet/30 transition-all duration-300">
          {/* Top Accent Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-electric-violet" />
          
          {/* Tinted background hue */}
          <div className="absolute inset-0 bg-electric-violet/5 opacity-[0.1] pointer-events-none" />

          <div className="absolute top-0 right-0 w-24 h-24 bg-electric-violet/5 rounded-full filter blur-[20px] pointer-events-none" />
          <div className="flex items-center space-x-4 mb-4 text-electric-violet relative z-10">
            <div className="p-3 bg-electric-violet/10 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed relative z-10">
            To become one of India's most trusted financial technology infrastructure providers powering the future of digital commerce.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-4">Core Values</h2>
        <p className="text-xs text-slate-400 text-center max-w-md mx-auto mb-16">
          The foundational principles driving our team, product design, and business relationships.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => {
            const IconComponent = val.icon;
            const baseBgColorClass = val.bgColor.split('/')[0];
            return (
              <div 
                key={idx}
                className={`glass-card p-6 rounded-2xl flex flex-col justify-between group border border-soft-lavender/10 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden ${val.borderColor}`}
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${baseBgColorClass}`} />

                {/* Tinted background hue */}
                <div className={`absolute inset-0 ${val.bgColor} opacity-[0.08] pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${val.bgColor} flex items-center justify-center ${val.color} mb-4 shadow`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-neon-cyan transition-colors">{val.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
