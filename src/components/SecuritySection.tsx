import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Cpu, Fingerprint, EyeOff, Shield, RefreshCw } from 'lucide-react';

const SECURITY_CARDS = [
  {
    icon: Lock,
    title: 'End-to-End AES 256 Encryption',
    desc: 'All payloads are encrypted at the client level and decrypted only in HSM-isolated bank environments.',
  },
  {
    icon: RefreshCw,
    title: 'PCI-Compliant Tokenization',
    desc: 'Never store raw card credentials. Exchange card credentials for highly secure cross-network cryptographic tokens.',
  },
  {
    icon: Cpu,
    title: 'Real-time AI Fraud Sentinel',
    desc: 'Analyses IP reputation, device fingerprints, and purchase patterns to halt fraud before it is authorized.',
  },
  {
    icon: Fingerprint,
    title: 'Biometric 3D Secure v2',
    desc: 'Integrated fingerprint, face ID, and authentication tokens directly within the checkout sheet.',
  },
];

export default function SecuritySection() {
  const [inputText, setInputText] = useState('4111 2222 3333 4444');
  const [tokenText, setTokenText] = useState('tok_paydiya_98a28e8f8b898a8c');
  const [isEncrypting, setIsEncrypting] = useState(false);

  const handleEncryptDemo = () => {
    setIsEncrypting(true);
    setTimeout(() => {
      setIsEncrypting(false);
      // Generate a random mock token
      const randHex = Array.from({ length: 16 }, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      setTokenText(`tok_paydiya_${randHex}`);
    }, 1200);
  };

  return (
    <div className="w-full py-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-electric-violet/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text and Badges */}
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-electric-violet/10 border border-electric-violet/20 px-3 py-1 rounded-full text-xs font-semibold text-soft-lavender">
            <Shield className="w-3.5 h-3.5 text-neon-cyan" />
            <span>Bank-Grade Cyber Security</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Security That Inspires Absolute Trust.
          </h2>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            paydiya is built on a zero-trust model, matching the world’s strictest military encryption standards. Fully compliant with national and global directives to keep user data sealed and immutable.
          </p>

          {/* Grid of Security points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {SECURITY_CARDS.map((card, index) => {
              const CardIcon = card.icon;
              return (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-midnight-navy/40 border border-soft-lavender/5 hover:border-soft-lavender/15 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-electric-violet/10 flex items-center justify-center text-electric-violet mb-3">
                    <CardIcon className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{card.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Badges footer */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center space-x-2 bg-white border border-soft-lavender/10 rounded-lg p-2 px-3">
              <span className="text-xs text-white font-semibold">PCI DSS v4.0</span>
              <span className="text-[10px] text-emerald-green px-1.5 py-0.5 rounded bg-emerald-green/10 border border-emerald-green/20 font-bold">Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-white border border-soft-lavender/10 rounded-lg p-2 px-3">
              <span className="text-xs text-white font-semibold">RBI Guidelines</span>
              <span className="text-[10px] text-emerald-green px-1.5 py-0.5 rounded bg-emerald-green/10 border border-emerald-green/20 font-bold">Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-white border border-soft-lavender/10 rounded-lg p-2 px-3">
              <span className="text-xs text-white font-semibold">SOC 2 Type II</span>
              <span className="text-[10px] text-emerald-green px-1.5 py-0.5 rounded bg-emerald-green/10 border border-emerald-green/20 font-bold">Verified</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Tokenization Flow Simulator */}
        <div className="glass-panel p-6 rounded-2xl border border-soft-lavender/10 shadow-2xl relative overflow-hidden flex flex-col justify-between h-[450px]">
          <div>
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-1.5">
              <EyeOff className="w-4 h-4 text-neon-cyan" /> Cryptographic Tokenizer Sandbox
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Enter sensitive payload variables to simulate PCI vault tokenization on the paydiya engine.
            </p>
          </div>

          {/* Simulator Visual Flow */}
          <div className="space-y-6 flex-1 flex flex-col justify-center">
            
            {/* Input state */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Sensitive Card Payload</label>
              <div className="relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full bg-midnight-navy border border-soft-lavender/10 rounded-lg p-3 text-sm text-slate-300 font-mono focus:outline-none focus:border-electric-violet"
                  placeholder="Card Credentials"
                />
                <span className="absolute right-3 top-3 text-[10px] text-coral-pink bg-coral-pink/10 border border-coral-pink/20 rounded px-1.5 py-0.5 font-bold">Raw / Exposed</span>
              </div>
            </div>

            {/* Middle connecting line with pulse action */}
            <div className="flex flex-col items-center justify-center relative my-2">
              <button 
                onClick={handleEncryptDemo}
                disabled={isEncrypting}
                className="z-10 w-12 h-12 rounded-full bg-gradient-to-r from-electric-violet to-neon-cyan flex items-center justify-center text-white cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all active:scale-95 disabled:opacity-60"
              >
                {isEncrypting ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  >
                    <RefreshCw className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <ShieldCheck className="w-5 h-5" />
                )}
              </button>
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-800 z-0" />
            </div>

            {/* Tokenized output state */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Vault Token Reference</label>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={isEncrypting ? 'Generating secure vault key...' : tokenText}
                  className={`w-full bg-white border border-soft-lavender/10 rounded-lg p-3 text-sm font-mono focus:outline-none transition-all ${
                    isEncrypting ? 'text-neon-cyan animate-pulse' : 'text-emerald-green'
                  }`}
                />
                <span className="absolute right-3 top-3 text-[10px] text-emerald-green bg-emerald-green/10 border border-emerald-green/20 rounded px-1.5 py-0.5 font-bold">Secure Token</span>
              </div>
            </div>

          </div>

          <div className="mt-4 text-[10px] text-slate-500 text-center font-mono">
            *All transactions processed inside paydiya are fully masked and signed.
          </div>
        </div>

      </div>
    </div>
  );
}
