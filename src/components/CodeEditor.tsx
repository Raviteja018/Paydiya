import { useState } from 'react';
import { Play, Copy, Check, Terminal, FileCode } from 'lucide-react';

const CODE_EXAMPLES = {
  javascript: `// Initialize paydiya client-side checkout
import { paydiya } from '@paydiya/sdk-js';

const pg = paydiya.initialize('pk_live_51M9e2h117fS8');

async function triggerCheckout() {
  const session = await pg.createCheckoutSession({
    amount: 145000, // ₹1,450.00
    currency: 'INR',
    orderId: 'order_ref_99218',
    customer: {
      name: 'Aditya Sen',
      email: 'aditya@domain.com',
      phone: '+919900088888'
    }
  });

  // Launch the smart overlay sheet
  session.launch({
    onSuccess: (data) => console.log('Capture ID:', data.paymentId),
    onDismiss: () => console.log('User dismissed checkout')
  });
}`,
  node: `// Create payment intent server-side
const paydiya = require('@paydiya/node')('sk_live_21f8a8bc81b2');

app.post('/create-charge', async (req, res) => {
  try {
    const charge = await paydiya.charges.create({
      amount: 4800000, // ₹48,000.00
      currency: 'INR',
      payment_method_types: ['upi', 'card', 'nb'],
      receipt_email: 'finance@enterprise.com',
      metadata: {
        department: 'Infrastructure AWS'
      }
    });

    res.status(200).send({
      clientSecret: charge.client_secret,
      status: charge.status
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});`,
  react: `import { paydiya, useCheckout } from '@paydiya/react-sdk';

export default function PremiumCheckout() {
  const { initCheckout, isLoading } = useCheckout();

  const handlePay = async () => {
    await initCheckout({
      amount: 250000,
      currency: 'INR',
      onSuccess: (res) => {
        alert(\`Transaction Successful! ID: \${res.id}\`);
      }
    });
  };

  return (
    <button
      onClick={handlePay}
      disabled={isLoading}
      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
    >
      {isLoading ? 'Loading Vault...' : 'Pay with paydiya'}
    </button>
  );
}`,
  python: `# Verify webhook signature securely
import paydiya
from flask import Flask, request, jsonify

paydiya.api_key = "sk_live_21f8a8bc81b2"
endpoint_secret = "whsec_28ab98..."

@app.route('/webhooks/paydiya', methods=['POST'])
def webhook():
    payload = request.data
    sig_header = request.headers.get('PAYDIYA_SIGNATURE')

    try:
        event = paydiya.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except Exception as e:
        return jsonify(error=str(e)), 400

    if event['type'] == 'payment.settled':
        process_order_settlement(event['data']['object'])

    return jsonify(success=True), 200`,
};

export default function CodeEditor() {
  const [lang, setLang] = useState<keyof typeof CODE_EXAMPLES>('javascript');
  const [copied, setCopied] = useState(false);
  const [explorerResponse, setExplorerResponse] = useState<any>(null);
  const [isSending, setIsSending] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_EXAMPLES[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestAPI = () => {
    setIsSending(true);
    setExplorerResponse(null);
    setTimeout(() => {
      setIsSending(false);
      setExplorerResponse({
        object: 'payment_intent',
        id: 'pi_live_' + Math.random().toString(36).substring(2, 12),
        amount: 145000,
        currency: 'INR',
        status: 'succeeded',
        smart_routed: true,
        routing_acquirer: 'HDFC_CORE_SECURE',
        fraud_risk_score: 2,
        charges: {
          object: 'list',
          data: [
            {
              id: 'ch_live_8a8f8b8a8b',
              captured: true,
              payment_method_details: {
                type: 'upi',
                upi: { vpa: 'aditya@okhdfc' }
              }
            }
          ]
        },
        created_at: new Date().toISOString()
      });
    }, 1200);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Code Editor Console - 7 Cols */}
      <div className="lg:col-span-7 dark-code-block flex flex-col rounded-xl border border-soft-lavender/10 bg-[#070b18] overflow-hidden shadow-2xl h-[480px]">
        {/* Editor Titlebar */}
        <div className="bg-[#0b1022] px-4 py-3 border-b border-soft-lavender/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-coral-pink" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-gold" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-green" />
            <span className="text-xs font-mono text-slate-400 ml-4 flex items-center gap-1.5">
              <FileCode className="w-3.5 h-3.5 text-electric-violet" /> paydiya_integration.{lang === 'python' ? 'py' : lang === 'javascript' || lang === 'node' ? 'js' : 'tsx'}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded bg-midnight-navy hover:bg-slate-800 text-white hover:text-white transition-colors cursor-pointer"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-green" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Language Tabs Selector */}
        <div className="bg-midnight-navy/60 border-b border-soft-lavender/5 px-2 py-1 flex items-center gap-1">
          {(Object.keys(CODE_EXAMPLES) as Array<keyof typeof CODE_EXAMPLES>).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                lang === l 
                  ? 'bg-electric-violet/20 text-neon-cyan border border-electric-violet/35' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {l === 'javascript' ? 'JavaScript' : l === 'node' ? 'Node.js' : l === 'react' ? 'React' : 'Python'}
            </button>
          ))}
        </div>

        {/* Code Content Editor Area */}
        <div className="flex-1 p-4 overflow-auto font-mono text-xs text-white bg-[#070b18] select-text">
          <pre className="whitespace-pre text-white">
            {CODE_EXAMPLES[lang].split('\n').map((line, idx) => (
              <div key={idx} className="table-row">
                <span className="table-cell text-white text-right pr-4 select-none w-8 text-[10px]">{idx + 1}</span>
                <span className="table-cell text-white">
                  {/* Basic highlights */}
                  {line.startsWith('//') || line.startsWith('#') ? (
                    <span className="text-white italic">{line}</span>
                  ) : (
                    line
                      .split(/(\bimport\b|\bfrom\b|\bconst\b|\bawait\b|\basync\b|\bfunction\b|\breturn\b|\btry\b|\bcatch\b|\bdef\b|\bif\b|\bimport\b)/)
                      .map((word, wIdx) => {
                        const keywords = ['import', 'from', 'const', 'await', 'async', 'function', 'return', 'try', 'catch', 'def', 'if'];
                        if (keywords.includes(word)) {
                          return <span key={wIdx} className="text-electric-violet font-semibold">{word}</span>;
                        }
                        return <span key={wIdx} className="text-slate-100">{word}</span>;
                      })
                  )}
                </span>
              </div>
            ))}
          </pre>
        </div>
      </div>

      {/* Live API Explorer Panel - 5 Cols */}
      <div className="lg:col-span-5 dark-code-block flex flex-col rounded-xl border border-soft-lavender/10 bg-[#070b18] overflow-hidden shadow-2xl h-[480px]">
        {/* Title */}
        <div className="bg-[#0b1022] px-4 py-3 border-b border-soft-lavender/10 flex items-center gap-1.5">
          <Terminal className="w-4 h-4 text-neon-cyan" />
          <span className="text-xs font-bold z-30 text-white uppercase tracking-wider">Live Sandbox API Explorer</span>
        </div>

        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-xs text-white">
              Run a simulated transaction request. The explorer invokes a sandbox ledger node directly.
            </p>

            <div className="bg-midnight-navy/60 border border-soft-lavender/10 rounded-lg p-3">
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mb-2">
                <span>REQUEST METHOD</span>
                <span className="text-neon-cyan font-bold">POST</span>
              </div>
              <div className="text-xs font-mono text-white">
                https://api.paydiya.com/v1/charges
              </div>
            </div>
          </div>

          {/* JSON Explorer Response */}
          <div className="flex-1 my-4 bg-midnight-navy/30 border border-soft-lavender/5 rounded-lg p-3 overflow-auto font-mono text-[10px] text-slate-400 select-text">
            {isSending ? (
              <div className="h-full flex flex-col items-center justify-center space-y-2 text-neon-cyan">
                <span className="w-5 h-5 rounded-full border-2 border-t-transparent border-neon-cyan animate-spin" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Contacting acquirer network...</span>
              </div>
            ) : explorerResponse ? (
              <pre className="text-emerald-green">
                {JSON.stringify(explorerResponse, null, 2)}
              </pre>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-600">
                <Terminal className="w-8 h-8 mb-2 opacity-30" />
                <span>Click "Send Request" to trigger API call.</span>
              </div>
            )}
          </div>

          {/* Send Trigger */}
          <button
            onClick={handleTestAPI}
            disabled={isSending}
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-electric-violet to-royal-indigo hover:from-royal-indigo hover:to-electric-violet text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-lg cursor-pointer disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Send Request
          </button>
        </div>
      </div>
    </div>
  );
}
