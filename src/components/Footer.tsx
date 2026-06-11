import { useState } from 'react';
import { MessageSquare, Send, ShieldCheck, Heart } from 'lucide-react';
import logoImg from '../assets/paydiya_logo.png';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-6 md:px-12 lg:px-24 text-slate-600 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-violet/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
        {/* Brand details and newsletter */}
        <div className="lg:col-span-2 space-y-6">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src={logoImg} alt="paydiya" className="h-8 w-auto mr-2 object-contain hover:scale-102 transition-transform duration-300" />
          <span className="text-base font-extrabold tracking-tight text-slate-900 font-sans">Paydia</span>

          </div>
          <p className="text-sm leading-relaxed text-slate-500">
            Accept payments at the speed of business. Processing transactions globally with sub-second settlements, state-of-the-art encryption, and AI-driven smart routing.
          </p>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-800">Subscribe to our Developer newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-sm text-slate-800 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-electric-violet to-royal-indigo hover:from-royal-indigo hover:to-electric-violet text-white text-sm rounded-lg flex items-center justify-center transition-all shadow-lg cursor-pointer"
              >
                {subscribed ? 'Sent' : <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>

        {/* Product Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Product</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#payments" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }} className="hover:text-electric-violet transition-colors text-slate-600">Payments</a></li>
            <li><a href="#payouts" onClick={(e) => { e.preventDefault(); setActiveTab('solutions'); }} className="hover:text-electric-violet transition-colors text-slate-600">Payouts</a></li>
            <li><a href="#subscriptions" onClick={(e) => { e.preventDefault(); setActiveTab('solutions'); }} className="hover:text-electric-violet transition-colors text-slate-600">Subscriptions</a></li>
            <li><a href="#invoices" onClick={(e) => { e.preventDefault(); setActiveTab('solutions'); }} className="hover:text-electric-violet transition-colors text-slate-600">Invoices</a></li>
          </ul>
        </div>

        {/* Developers Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Developers</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#docs" onClick={(e) => { e.preventDefault(); setActiveTab('developers'); }} className="hover:text-electric-violet transition-colors text-slate-600">API Docs</a></li>
            <li><a href="#sdks" onClick={(e) => { e.preventDefault(); setActiveTab('developers'); }} className="hover:text-electric-violet transition-colors text-slate-600">SDKs</a></li>
            <li><a href="#webhooks" onClick={(e) => { e.preventDefault(); setActiveTab('developers'); }} className="hover:text-electric-violet transition-colors text-slate-600">Webhooks</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); setActiveTab('company'); }} className="hover:text-electric-violet transition-colors text-slate-600">About</a></li>
            <li><a href="#careers" onClick={(e) => { e.preventDefault(); setActiveTab('company'); }} className="hover:text-electric-violet transition-colors text-slate-600">Careers</a></li>
            <li><a href="#blog" onClick={(e) => { e.preventDefault(); setActiveTab('company'); }} className="hover:text-electric-violet transition-colors text-slate-600">Blog</a></li>
          </ul>
        </div>

        {/* Support & Legal Columns merged (visual alignment) */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Support</h4>
          <ul className="space-y-2.5 text-sm mb-6">
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); setActiveTab('partners'); }} className="hover:text-electric-violet transition-colors text-slate-600">Contact</a></li>
            <li><a href="#help" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }} className="hover:text-electric-violet transition-colors text-slate-600">Help Center</a></li>
          </ul>
          <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#privacy" className="hover:text-electric-violet transition-colors text-slate-600">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-electric-violet transition-colors text-slate-600">Terms of Service</a></li>
          </ul>
        </div>
      </div>


      <hr className="border-slate-200 my-8" />

      {/* Footer Bottom: Trust indicators, status and copyright */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded border border-slate-200 shadow-sm text-slate-600">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-green" /> PCI DSS Level 1 Certified
          </span>
          <span className="bg-white px-2.5 py-1 rounded border border-slate-200 shadow-sm text-slate-600">
            RBI Compliant
          </span>
          <span className="bg-white px-2.5 py-1 rounded border border-slate-200 shadow-sm text-slate-600">
            ISO 27001 Certified
          </span>
          <span className="flex items-center gap-1.5 cursor-pointer hover:text-slate-800 transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-green animate-pulse" />
            <span className="text-emerald-700 font-medium">All systems operational</span>
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-600 hover:text-electric-violet border border-slate-200 flex items-center justify-center transition-all duration-300 shadow-sm">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-600 hover:text-electric-violet border border-slate-200 flex items-center justify-center transition-all duration-300 shadow-sm">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-600 hover:text-electric-violet border border-slate-200 flex items-center justify-center transition-all duration-300 shadow-sm">
            <MessageSquare className="w-4 h-4 text-slate-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-600 hover:text-electric-violet border border-slate-200 flex items-center justify-center transition-all duration-300 shadow-sm">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center gap-1">
        <span>© {new Date().getFullYear()} paydiya. Built with</span>
        <Heart className="w-3 h-3 text-coral-pink fill-coral-pink" />
        <span>for enterprise security & lightning speed.</span>
      </div>
    </footer>
  );
}
