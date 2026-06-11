import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CreditCard, Shield, Zap, RefreshCw, Award } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Developers from './pages/Developers';
import Pricing from './pages/Pricing';
import Company from './pages/Company';
import Partners from './pages/Partners';

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-midnight-navy flex flex-col justify-between select-none relative overflow-hidden">
      {/* Global Ambient Glow Highlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[40%] bg-electric-violet/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[40%] bg-neon-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />
      
      {/* Global Animated Grid Background */}
      <div className="absolute inset-0 moving-grid-full opacity-90 z-0 pointer-events-none" />

      {/* Floating Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Credit Card (Top Left) */}
        <div className="absolute top-[18%] left-[6%] opacity-[0.06] text-electric-violet animate-float pointer-events-none">
          <CreditCard size={110} strokeWidth={0.75} />
        </div>

        {/* Floating Shield (Middle Right) */}
        <div className="absolute top-[45%] right-[7%] opacity-[0.05] text-neon-cyan animate-float-delayed pointer-events-none">
          <Shield size={90} strokeWidth={0.75} />
        </div>

        {/* Floating Zap / Lightning (Bottom Left) */}
        <div className="absolute bottom-[25%] left-[8%] opacity-[0.06] text-neon-cyan animate-float pointer-events-none">
          <Zap size={80} strokeWidth={0.75} />
        </div>

        {/* Floating Refresh Ring (Bottom Right) */}
        <div className="absolute bottom-[12%] right-[12%] opacity-[0.05] text-electric-violet animate-float-delayed pointer-events-none">
          <RefreshCw size={85} strokeWidth={0.75} />
        </div>

        {/* Floating Award (Top Right) */}
        <div className="absolute top-[15%] right-[10%] opacity-[0.05] text-royal-indigo animate-float pointer-events-none">
          <Award size={95} strokeWidth={0.75} />
        </div>
      </div>

      {/* Sticky Premium Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Router with Slide & Opacity Transition */}
      <main className="flex-1 w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
            {activeTab === 'solutions' && <Solutions />}
            {activeTab === 'developers' && <Developers />}
            {activeTab === 'pricing' && <Pricing />}
            {activeTab === 'company' && <Company />}
            {activeTab === 'partners' && <Partners />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Site Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
