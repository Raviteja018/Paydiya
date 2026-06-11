import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, ArrowUpRight, ShieldAlert, CheckCircle, 
  Activity, Clock, CreditCard, Landmark, Smartphone, Zap 
} from 'lucide-react';

interface Transaction {
  id: string;
  amount: string;
  method: 'UPI' | 'Card' | 'NetBanking' | 'Wallet';
  status: 'success' | 'fraud_prevented' | 'processing';
  time: string;
  merchant: string;
}

const INITIAL_TRANSACTIONS: Transaction[] = [
  { id: 'tx_9823', amount: '₹12,450', method: 'UPI', status: 'success', time: 'Just now', merchant: 'Zara India' },
  { id: 'tx_9822', amount: '₹48,000', method: 'Card', status: 'success', time: '1m ago', merchant: 'AWS Infrastructure' },
  { id: 'tx_9821', amount: '₹2,500', method: 'Wallet', status: 'fraud_prevented', time: '3m ago', merchant: 'Unknown Client' },
  { id: 'tx_9820', amount: '₹1,20,000', method: 'NetBanking', status: 'success', time: '5m ago', merchant: 'Flipkart Seller' },
];

const MERCHANTS = ['Amazon Pay', 'FoodSprint', 'Zomato', 'RideWave', 'Netflix India', 'StyleLane', 'MakeMyTrip'];
const METHODS = ['UPI', 'Card', 'NetBanking', 'Wallet'] as const;

export default function DashboardPreview() {
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [revenue, setRevenue] = useState(489240);
  const [successRate, setSuccessRate] = useState(99.94);
  const [activeUsers, setActiveUsers] = useState(1482);

  // Live simulation ticks
  useEffect(() => {
    const interval = setInterval(() => {
      // Tick revenue
      setRevenue((prev) => prev + Math.floor(Math.random() * 2500) + 100);
      
      // Update success rate slightly
      setSuccessRate((prev) => {
        const delta = (Math.random() - 0.5) * 0.02;
        return Math.min(100, Math.max(99.8, prev + delta));
      });

      // Tick active users
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 7) - 3);

      // Add new transaction
      const randomMethod = METHODS[Math.floor(Math.random() * METHODS.length)];
      const randomMerchant = MERCHANTS[Math.floor(Math.random() * MERCHANTS.length)];
      const randomStatus = Math.random() > 0.08 ? 'success' : 'fraud_prevented';
      const randomAmount = '₹' + (Math.floor(Math.random() * 25000) + 500).toLocaleString('en-IN');
      const newTx: Transaction = {
        id: 'tx_' + Math.floor(1000 + Math.random() * 9000),
        amount: randomAmount,
        method: randomMethod,
        status: randomStatus as any,
        time: 'Just now',
        merchant: randomMerchant,
      };

      setTransactions((prev) => [
        newTx,
        ...prev.map((t) => (t.time === 'Just now' ? { ...t, time: '1m ago' } : t)).slice(0, 4)
      ]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:ml-auto select-none">
      
      {/* Floating 3D Cards container */}
      <div className="absolute -top-10 -left-12 z-20 hidden md:block">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card p-4 rounded-xl flex items-center space-x-3 shadow-lg border border-neon-cyan/20 w-48 bg-midnight-navy/90"
        >
          <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
            <Zap className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Settlement Speed</div>
            <div className="text-sm font-semibold text-white">Instant (0.2s)</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-8 -right-8 z-20 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="glass-card p-4 rounded-xl flex items-center space-x-3 shadow-lg border border-electric-violet/20 w-52 bg-midnight-navy/90"
        >
          <div className="w-10 h-10 rounded-lg bg-electric-violet/10 flex items-center justify-center text-electric-violet">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Tokenized Vault</div>
            <div className="text-sm font-semibold text-white">PCI DSS Shield Active</div>
          </div>
        </motion.div>
      </div>

      {/* Main Operations Dashboard Container */}
      <div className="glass-panel p-6 rounded-2xl border border-soft-lavender/10 shadow-2xl relative overflow-hidden">
        
        {/* Glow behind dashboard */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-electric-violet/10 rounded-full filter blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-neon-cyan/10 rounded-full filter blur-[80px] pointer-events-none" />

        {/* Dashboard Header */}
        <div className="flex items-center justify-between pb-4 border-b border-soft-lavender/10 mb-6">
          <div className="flex items-center space-x-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-green animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
              Live Operations <Activity className="w-3.5 h-3.5 text-neon-cyan animate-pulse" />
            </span>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            ID: <span className="text-soft-lavender">paydiya_live_prod</span>
          </div>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {/* Revenue */}
          <div className="glass-card p-4 rounded-xl relative overflow-hidden">
            <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
              Revenue Volume <TrendingUp className="w-3.5 h-3.5 text-amber-gold" />
            </div>
            <div className="text-lg md:text-xl font-bold text-white tracking-tight">
              ₹{revenue.toLocaleString('en-IN')}.00
            </div>
            <div className="text-[10px] text-emerald-green mt-1 flex items-center gap-0.5">
              <ArrowUpRight className="w-3 h-3" /> +12.4% today
            </div>
          </div>

          {/* Success Rate */}
          <div className="glass-card p-4 rounded-xl relative overflow-hidden">
            <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
              Success Rate <CheckCircle className="w-3.5 h-3.5 text-emerald-green" />
            </div>
            <div className="text-lg md:text-xl font-bold text-white tracking-tight">
              {successRate.toFixed(2)}%
            </div>
            <div className="text-[10px] text-slate-400 mt-1">
              Smart-routed active
            </div>
          </div>

          {/* Active Transactions */}
          <div className="glass-card p-4 rounded-xl col-span-2 md:col-span-1 relative overflow-hidden">
            <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
              Active Users <Activity className="w-3.5 h-3.5 text-neon-cyan" />
            </div>
            <div className="text-lg md:text-xl font-bold text-white tracking-tight">
              {activeUsers.toLocaleString()}
            </div>
            <div className="text-[10px] text-neon-cyan mt-1">
              Global API connections
            </div>
          </div>
        </div>

        {/* Chart + Fraud Monitoring Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {/* Custom SVG Mini Graph - 3 Cols */}
          <div className="glass-card p-4 rounded-xl md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="text-xs text-slate-400 mb-1">Settlement Efficiency</div>
              <div className="text-sm font-semibold text-white">Instant Dispatch Protocol</div>
            </div>
            <div className="h-16 w-full mt-2 relative">
              {/* Dynamic visual graph line */}
              <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,25 C8,25 14,12 20,12 C26,12 34,18 40,18 C48,18 57,6 65,6 C73,6 79,14 85,14 C91,14 96,8 100,8 L100,30 L0,30 Z"
                  fill="url(#chart-grad)"
                />
                <motion.path
                  d="M0,25 C8,25 14,12 20,12 C26,12 34,18 40,18 C48,18 57,6 65,6 C73,6 79,14 85,14 C91,14 96,8 100,8"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </svg>
            </div>
            <div className="flex justify-between items-center text-[9px] text-slate-500 mt-1 font-mono">
              <span>10:00 AM</span>
              <span>11:00 AM (Settled)</span>
            </div>
          </div>

          {/* Fraud Monitoring Gauge - 2 Cols */}
          <div className="glass-card p-4 rounded-xl md:col-span-2 flex flex-col items-center justify-center text-center">
            <div className="text-xs text-slate-400 mb-2 w-full text-left flex items-center justify-between">
              <span>Risk Sentinel</span>
              <ShieldAlert className="w-3.5 h-3.5 text-coral-pink" />
            </div>
            <div className="relative w-20 h-20 flex items-center justify-center">
              {/* SVG circular progress */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="30"
                  className="stroke-slate-800"
                  strokeWidth="5"
                  fill="transparent"
                />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="30"
                  className="stroke-electric-violet"
                  strokeWidth="5"
                  fill="transparent"
                  strokeDasharray={188.4}
                  initial={{ strokeDashoffset: 188.4 }}
                  animate={{ strokeDashoffset: 188.4 * 0.1 }} // 90% clean rate
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center mt-1">
                <span className="text-sm font-bold text-white">99.9%</span>
                <span className="text-[8px] text-slate-500 uppercase tracking-widest">Clean</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-soft-lavender" /> Live Transaction Stream
          </div>
          <div className="space-y-2 max-h-48 overflow-hidden">
            <AnimatePresence initial={false}>
              {transactions.map((tx) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto' }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  className="p-3 rounded-lg bg-midnight-navy/40 border border-soft-lavender/5 flex items-center justify-between text-xs transition-colors hover:border-soft-lavender/10"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      tx.status === 'success' 
                        ? 'bg-emerald-green/10 text-emerald-green' 
                        : 'bg-coral-pink/10 text-coral-pink'
                    }`}>
                      {tx.method === 'UPI' && <Smartphone className="w-4 h-4" />}
                      {tx.method === 'Card' && <CreditCard className="w-4 h-4" />}
                      {tx.method === 'NetBanking' && <Landmark className="w-4 h-4" />}
                      {tx.method === 'Wallet' && <CreditCard className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{tx.merchant}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{tx.id} • {tx.method}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-white">{tx.amount}</div>
                    <div className={`text-[10px] flex items-center justify-end gap-1 ${
                      tx.status === 'success' ? 'text-emerald-green' : 'text-coral-pink'
                    }`}>
                      {tx.status === 'success' ? 'Captured' : 'AI Shielded'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
