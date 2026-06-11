import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/paydiya_logo.png';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'developers', label: 'Developers' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'company', label: 'Company' },
  { id: 'partners', label: 'Partners' },
];

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 w-full px-4 md:px-12 lg:px-24 pointer-events-none">
      <nav className="mx-auto max-w-6xl glass-panel border border-slate-200/80 rounded-full py-3 px-6 md:px-8 flex items-center justify-between shadow-xl backdrop-blur-lg pointer-events-auto transition-all duration-300">

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer gap-2.5 group relative z-10"
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src={logoImg} alt="paydiya" className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          <span className="text-base font-extrabold tracking-tight text-slate-900 font-sans">Paydia</span>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full cursor-pointer ${isActive ? 'text-electric-violet' : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-electric-violet/10 border border-electric-violet/20 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors duration-300 cursor-pointer flex items-center gap-1 group">
            Sign In
            <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className="relative overflow-hidden px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-electric-violet to-royal-indigo hover:from-royal-indigo hover:to-electric-violet text-white transition-all duration-300 shadow-[0_4px_15px_rgba(15,118,78,0.2)] hover:-translate-y-0.5 cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-600 hover:text-slate-900 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[54px] left-4 right-4 glass-panel border border-slate-200/80 rounded-3xl flex flex-col p-6 space-y-4 md:hidden shadow-2xl z-50"
            >
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 text-xs font-bold uppercase tracking-wider border-b border-slate-100/50 ${activeTab === item.id ? 'text-electric-violet' : 'text-slate-600'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-3">
                <button className="py-2.5 text-center text-xs font-semibold uppercase tracking-wider border border-slate-200 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer">
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setActiveTab('pricing');
                    setMobileMenuOpen(false);
                  }}
                  className="py-2.5 text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-electric-violet to-royal-indigo text-white rounded-full transition-all shadow-[0_4px_15px_rgba(15,118,78,0.2)] cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
