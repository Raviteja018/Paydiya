import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ShoppingCart, Cpu, Building2, ShieldCheck, Store, ChevronRight } from 'lucide-react';

const FLOW_STEPS = [
  {
    id: 'customer',
    label: 'Customer',
    icon: User,
    color: '#D97706',
    glow: 'rgba(217, 119, 6, 0.15)',
    desc: 'Customer initiates payment by selecting UPI, credit card, net banking, or wallet on the merchant page.',
    payload: {
      event: "payment.initiated",
      method: "UPI_intent",
      amount: 2450.00,
      currency: "INR",
      checkoutType: "SDK_native"
    }
  },
  {
    id: 'checkout',
    label: 'Checkout',
    icon: ShoppingCart,
    color: '#B08F35',
    glow: 'rgba(176, 143, 53, 0.15)',
    desc: 'The native checkout interface secures payment details and initiates secure tokenization procedures.',
    payload: {
      modalState: "rendered",
      cardVaultToken: "tok_9f82d_sec",
      nativeUPI: true,
      sdkVersion: "v4.2.1",
      deviceSecure: true
    }
  },
  {
    id: 'gateway',
    label: 'Paydia AI Engine',
    icon: Cpu,
    color: '#0F764E',
    glow: 'rgba(15, 118, 78, 0.2)',
    desc: 'Performs sub-millisecond AI smart routing to choose the highest-success gateway, applying fraud scoring filters.',
    payload: {
      smartRoute: "acq_hdfc_node",
      fraudCheck: "passed",
      riskScore: 0.01,
      payloadEncrypt: "AES_256",
      latency: "12ms"
    }
  },
  {
    id: 'bank',
    label: 'Acquiring Bank',
    icon: Building2,
    color: '#064E3B',
    glow: 'rgba(6, 78, 59, 0.15)',
    desc: 'The bank core authorizes the transaction and settles checks with the credit card issuer network.',
    payload: {
      authStatus: "00_APPROVED",
      authCode: "502189",
      isoResponse: "SUCCESS",
      acquirerNode: "node_hdfc_3"
    }
  },
  {
    id: 'settlement',
    label: 'Settlement',
    icon: ShieldCheck,
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.15)',
    desc: 'Instant settlement rail dispatches merchant ledger funds, balancing clearing ledger books instantly.',
    payload: {
      rail: "IMPS_direct",
      settledAt: "17:51:52",
      clearingSplit: "success",
      ledgerVolumeCredited: "2450.00"
    }
  },
  {
    id: 'merchant',
    label: 'Merchant',
    icon: Store,
    color: '#E25B45',
    glow: 'rgba(226, 91, 69, 0.15)',
    desc: 'Merchant receives an instant settlement payload and confirmation via active webhook stream.',
    payload: {
      webhookId: "wh_event_98a72b",
      delivered: true,
      retries: 0,
      merchantAck: true,
      event: "payment.captured"
    }
  },
];

export default function PaymentFlow() {
  const [activeStep, setActiveStep] = useState<string>('gateway');
  const activeStepData = FLOW_STEPS.find(s => s.id === activeStep) || FLOW_STEPS[2];

  return (
    <div 
      className="w-full py-12 px-6 md:px-10 bg-[#FAF9F5] border border-[#EBE8E0] rounded-[24px] shadow-[0_20px_50px_rgba(27,27,38,0.02)] relative overflow-hidden"
    >
      {/* Structural Tech Grid Lines to disrupt plain flat spaces */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8E4D9] to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8E4D9] to-transparent" />
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E8E4D9] to-transparent" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E8E4D9] to-transparent" />
      </div>

      {/* Dynamic Background Blurs that track the active step colors */}
      <div 
        className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full filter blur-[130px] opacity-20 pointer-events-none transition-all duration-700 ease-out z-0" 
        style={{ backgroundColor: activeStepData.color }}
      />
      <div className="absolute bottom-0 right-10 w-[250px] h-[250px] bg-[#10B981]/5 rounded-full filter blur-[90px] pointer-events-none z-0" />

      {/* Header - Tightened margins to compress empty layout blocks */}
      <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
        <span className="text-[9px] font-bold tracking-[0.25em] text-slate-400 uppercase block mb-2">
          OPERATIONAL LIFECYCLE
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-2 tracking-tight font-sans">
          How the Payment Flow Works
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed font-medium">
          Select any processing vector block below to audit interactive telemetry schemas.
        </p>
      </div>

      {/* Diagram Section Content Wrapper (Fills space beautifully with a glass track) */}
      <div className="relative max-w-5xl mx-auto p-4 md:p-6 bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_10px_30px_rgba(0,0,0,0.01)] z-10">
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2 xl:gap-4 py-2">
          
          {/* Centralized High-fidelity Flow Tracking Line */}
          <div className="absolute top-[36px] left-[5%] right-[5%] h-[2px] hidden lg:block z-0">
            <div className="w-full h-full bg-[#E5E1D4] rounded-full relative overflow-hidden">
              <motion.div 
                className="absolute top-0 h-full w-[160px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${activeStepData.color} 50%, transparent)`,
                }}
                animate={{ left: ['-20%', '120%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>

          {FLOW_STEPS.map((step, idx) => {
            const StepIcon = step.icon;
            const isActive = activeStep === step.id;

            return (
              <Fragment key={step.id}>
                {/* Node Container */}
                <div 
                  className="relative z-10 flex flex-col items-center cursor-pointer group w-full max-w-[130px]"
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="relative">
                    {/* Breathing Active Glow Halo */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1.25, opacity: 1 }}
                          exit={{ scale: 1.4, opacity: 0 }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{ border: `1px solid ${step.color}50` }}
                        />
                      )}
                    </AnimatePresence>
                    
                    {/* Circle Card Block */}
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-500 relative z-10"
                      style={{
                        backgroundColor: isActive ? '#FFFFFF' : '#FAF9F5',
                        borderColor: isActive ? step.color : '#E5E1D4',
                        boxShadow: isActive 
                          ? `0 12px 30px -8px ${step.glow}, inset 0 2px 4px rgba(255,255,255,0.9)` 
                          : 'inset 0 2px 4px rgba(255,255,255,0.6)',
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <StepIcon 
                        className="w-5 h-5 transition-all duration-500" 
                        style={{ 
                          color: isActive ? step.color : '#64748B',
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Step Title Label */}
                  <span className={`mt-3 text-[10px] font-bold uppercase tracking-wider text-center transition-all duration-300 ${
                    isActive ? 'text-[#0F172A] font-black' : 'text-slate-400 group-hover:text-slate-600'
                  }`}>
                    {step.label}
                  </span>

                  {/* Micro Base Active Pin */}
                  <div className="h-1.5 mt-1 flex items-center justify-center">
                    {isActive && (
                      <motion.div 
                        layoutId="active-flow-dot"
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: step.color }}
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}
                  </div>
                </div>

                {/* Mobile Spacing Separators */}
                {idx < FLOW_STEPS.length - 1 && (
                  <div className="flex items-center justify-center lg:hidden my-0.5 opacity-40">
                    <ChevronRight className="w-4 h-4 text-slate-400 rotate-90" />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Step Details Panel (Brings content closer together natively) */}
      <AnimatePresence mode="wait">
        {activeStep && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mt-8 max-w-5xl mx-auto rounded-xl bg-white border border-[#EBE8E0] shadow-[0_20px_40px_-10px_rgba(27,27,38,0.02)] relative overflow-hidden z-10"
          >
            <div 
              className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500" 
              style={{ background: `linear-gradient(90deg, transparent, ${activeStepData.color} 30%, ${activeStepData.color} 70%, transparent)` }}
            />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 items-stretch">
              
              {/* Left Details block */}
              <div className="p-6 md:p-8 md:col-span-3 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#FAF9F5] pb-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeStepData.color }} />
                      <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: activeStepData.color }}>
                        STAGE 0{FLOW_STEPS.findIndex(s => s.id === activeStep) + 1}
                      </span>
                      <span className="text-slate-300">/</span>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
                        {activeStepData.label} Telemetry
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans font-medium">
                    {activeStepData.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[8px] text-slate-400 font-mono pt-3 border-t border-slate-50">
                  <span>SECURE ACCESS PROTOCOL</span>
                  <span>COMPLIANCE ASSET // ISO_20022</span>
                </div>
              </div>

              {/* Right Terminal Block */}
              <div className="md:col-span-2 bg-[#0A0D14] p-5 flex flex-col font-mono text-[11px] border-t md:border-t-0 md:border-l border-slate-900 relative min-h-[160px]">
                <div className="flex items-center justify-between border-b border-slate-800/40 pb-2 mb-3">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444]/60" />
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]/60" />
                    <span className="w-2 h-2 rounded-full bg-[#10B981]/60" />
                  </div>
                  <span className="text-[8px] text-slate-500 tracking-wider">stream.json</span>
                </div>

                {/* Styled JSON Block to pop cleanly off the dark block background */}
                <div className="flex-1 overflow-y-auto max-h-[160px] scrollbar-none text-slate-300 space-y-0.5 text-left leading-relaxed">
                  <div><span className="text-purple-400">{"{"}</span></div>
                  {Object.entries(activeStepData.payload).map(([key, value], idx, arr) => (
                    <div key={key} className="pl-4">
                      <span className="text-amber-100/80">"{key}"</span>
                      <span className="text-slate-400">: </span>
                      {typeof value === 'string' ? (
                        <span className="text-emerald-400">"{value}"</span>
                      ) : typeof value === 'boolean' ? (
                        <span className="text-blue-400">{String(value)}</span>
                      ) : (
                        <span className="text-cyan-400">{value}</span>
                      )}
                      {idx < arr.length - 1 && <span className="text-slate-500">,</span>}
                    </div>
                  ))}
                  <div><span className="text-purple-400">{"}"}</span></div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}