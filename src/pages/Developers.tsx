import { useState, useEffect } from 'react';
import { Terminal, Key, Download } from 'lucide-react';
import CodeEditor from '../components/CodeEditor';

const SDK_PACKAGES = [
  { lang: 'Node.js', pkg: 'npm i @paydiya/node', version: 'v4.1.2', size: '2.4MB' },
  { lang: 'Python', pkg: 'pip install paydiya', version: 'v3.8.0', size: '1.8MB' },
  { lang: 'React', pkg: 'npm i @paydiya/react-sdk', version: 'v1.0.8', size: '540KB' },
  { lang: 'Go', pkg: 'go get github.com/paydiya/go', version: 'v2.1.0', size: '3.1MB' },
  { lang: 'Ruby', pkg: 'gem install paydiya', version: 'v2.0.4', size: '1.2MB' },
  { lang: 'PHP', pkg: 'composer require paydiya/php', version: 'v5.0.0', size: '4.8MB' },
];

export default function Developers() {
  const [copiedPkg, setCopiedPkg] = useState<string | null>(null);
  const [sandboxLogs, setSandboxLogs] = useState<string[]>([
    '11:10:02 [Gateway] Connected to node_in_south_primary',
    '11:10:05 [API] GET /v1/merchants/me - 200 OK (14ms)',
    '11:12:14 [Webhook] Sent payment.captured (id: evt_99818) - Delivery Succeeded (200)',
  ]);

  const handleCopyPkg = (pkg: string) => {
    navigator.clipboard.writeText(pkg);
    setCopiedPkg(pkg);
    setTimeout(() => setCopiedPkg(null), 2000);
  };

  useEffect(() => {
    const logInterval = setInterval(() => {
      const paths = ['GET /v1/settlements', 'POST /v1/charges', 'GET /v1/refunds', 'POST /v1/checkout/token'];
      const statuses = ['200 OK', '201 Created', '200 OK', '400 Bad Request'];
      const latencies = ['12ms', '42ms', '18ms', '8ms'];
      
      const randomIdx = Math.floor(Math.random() * paths.length);
      const now = new Date().toLocaleTimeString();
      const newLog = `${now} [API] ${paths[randomIdx]} - ${statuses[randomIdx]} (${latencies[randomIdx]})`;

      setSandboxLogs((prev) => [newLog, ...prev].slice(0, 5));
    }, 6000);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <div className="w-full pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-transparent text-white relative overflow-hidden">

      {/* Aurora glow layer */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-electric-violet/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Hero Title */}
      <div className="max-w-5xl mx-auto text-left mb-16 space-y-4">

        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
          Engineered for <span className="gradient-text-cyan-violet">Developers</span>.
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
          Integrate transaction checkout sheets, query account ledgers, and track payouts via clean, composable REST endpoints. Build fast and never look back.
        </p>
      </div>

      {/* Editor & Sandbox Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <CodeEditor />
      </div>

      {/* SDK Downloads & Webhook logs row */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* SDK Packages List */}
        <div className="glass-panel p-6 rounded-2xl border border-soft-lavender/10 shadow-xl">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-neon-cyan" /> Official SDK Packages
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Install language packages to interact with the paydiya ledger node.
          </p>

          <div className="space-y-3">
            {SDK_PACKAGES.map((pkg, idx) => (
              <div 
                key={idx}
                className="p-3 bg-midnight-navy/60 border border-soft-lavender/5 rounded-lg flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-white block">{pkg.lang}</span>
                  <span className="font-mono text-slate-500 text-[10px]">{pkg.version} • {pkg.size}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="font-mono bg-[#070b18] dark-code-block px-3 py-1.5 rounded border border-soft-lavender/10 text-[10px] text-slate-100">
                    {pkg.pkg}
                  </span>
                  <button
                    onClick={() => handleCopyPkg(pkg.pkg)}
                    className="p-2 rounded bg-electric-violet/10 hover:bg-electric-violet/20 text-soft-lavender hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedPkg === pkg.pkg ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Sandbox Logs */}
        <div className="glass-panel p-6 rounded-2xl border border-soft-lavender/10 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Key className="w-5 h-5 text-amber-gold" /> Live Sandbox Stream
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Track requests routed through API nodes in real-time.
            </p>
          </div>

          <div className="flex-1 bg-[#070b18] dark-code-block border border-soft-lavender/10 rounded-xl p-4 font-mono text-[10px] text-slate-400 space-y-3 h-64 overflow-y-auto mb-4">
            {sandboxLogs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-slate-600 select-none">&gt;</span>
                <span className={log.includes('200') || log.includes('201') ? 'text-emerald-green' : 'text-slate-300'}>
                  {log}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-soft-lavender/5 pt-3 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-green animate-pulse" /> Sandbox Core operational
            </span>
            <span>API Version: v4.0.0</span>
          </div>
        </div>

      </div>

    </div>
  );
}
