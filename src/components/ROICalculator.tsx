import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ROICalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(5000000); // 50 Lakhs default
  const [currentSuccessRate, setCurrentSuccessRate] = useState<number>(85); // 85% default

  // Calculators
  // With paydiya, success rate bumps to ~99.9% (let's say 99.5%)
  const expectedSuccessRate = 99.5;
  const successRateDiff = Math.max(0, expectedSuccessRate - currentSuccessRate);
  
  // Recaptured revenue: monthly volume * successRateDiff%
  const recapturedRevenue = monthlyVolume * (successRateDiff / 100);
  
  // Standard gateway fees: ~2%
  // paydiya fees: ~1.5% at this volume
  const feeSaved = monthlyVolume * 0.005; // 0.5% savings

  const totalMonthlyGain = recapturedRevenue + feeSaved;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="w-full glass-panel rounded-2xl border border-soft-lavender/10 p-6 md:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Mesh bg glow */}
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-neon-cyan/5 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-electric-violet/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        
        {/* Left Side: Inputs - 3 Cols */}
        <div className="lg:col-span-3 space-y-6">
          <div>
            <div className="inline-flex items-center space-x-1 bg-amber-gold/10 border border-amber-gold/20 px-2.5 py-0.5 rounded-full text-xs font-semibold text-amber-gold mb-3">
              <Sparkles className="w-3 h-3" />
              <span>ROI Optimizer</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Calculate Your Merchant Revenue Uplift
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Adjust your volume metrics to view the potential fee reductions and transaction recapture when moving to paydiya.
            </p>
          </div>

          {/* Volume Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-medium">Monthly Processing Volume</span>
              <span className="text-neon-cyan font-bold font-mono">{formatCurrency(monthlyVolume)}</span>
            </div>
            <input
              type="range"
              min="100000"
              max="100000000"
              step="500000"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>₹1 Lakh</span>
              <span>₹10 Cr</span>
            </div>
          </div>

          {/* Current Success Rate Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-medium">Current Payment Success Rate</span>
              <span className="text-coral-pink font-bold font-mono">{currentSuccessRate}%</span>
            </div>
            <input
              type="range"
              min="70"
              max="98"
              step="1"
              value={currentSuccessRate}
              onChange={(e) => setCurrentSuccessRate(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-electric-violet"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>70% (Poor routing)</span>
              <span>98% (High Tier)</span>
            </div>
          </div>
        </div>

        {/* Right Side: Outputs - 2 Cols */}
        <div className="lg:col-span-2 bg-midnight-navy/60 border border-soft-lavender/10 rounded-xl p-5 md:p-6 space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Estimated Monthly Gains</h4>

          <div className="space-y-4">
            {/* Value Saved in Fees */}
            <div className="flex justify-between items-center pb-3 border-b border-soft-lavender/5">
              <div>
                <div className="text-xs text-slate-400">Fee Reductions (0.5% Saved)</div>
                <div className="text-xs text-slate-500">Smart routing optimization</div>
              </div>
              <div className="text-sm font-bold text-white font-mono">{formatCurrency(feeSaved)}</div>
            </div>

            {/* Recaptured from failures */}
            <div className="flex justify-between items-center pb-3 border-b border-soft-lavender/5">
              <div>
                <div className="text-xs text-slate-400">Recaptured Failures (+{successRateDiff.toFixed(1)}%)</div>
                <div className="text-xs text-slate-500">Auto retry & multi-acquirer check</div>
              </div>
              <div className="text-sm font-bold text-white font-mono">{formatCurrency(recapturedRevenue)}</div>
            </div>

            {/* Total gain display */}
            <div className="pt-2">
              <div className="text-xs text-slate-400 mb-1">Cumulative Monthly Growth</div>
              <div className="text-2xl font-black text-emerald-green font-mono tracking-tight">
                {formatCurrency(totalMonthlyGain)}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Approx. {formatCurrency(totalMonthlyGain * 12)} per annum
              </div>
            </div>
          </div>

          <button className="w-full py-2.5 rounded-lg text-xs font-bold bg-gradient-to-r from-neon-cyan to-electric-violet text-midnight-navy hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1 cursor-pointer">
            Unlock This Rate Now <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
