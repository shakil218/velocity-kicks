import React, { useState } from 'react';
import { Send, Mail, CheckCircle2, Sparkles } from 'lucide-react';
import Button from '../common/Button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-slate-900/40 border-t border-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-orange-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
          
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              NEVER MISS A LIMITED DROP
            </h2>
            <p className="text-sm text-slate-400">
              Subscribe to the Velocity Newsletter and unlock secret drop notifications, restock updates, and exclusive VIP discounts.
            </p>
          </div>

          {subscribed ? (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center gap-2 max-w-md mx-auto animate-fade-in">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-semibold">
                You're on the VIP drop list! Check your inbox for your 10% coupon.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              />
              <Button type="submit" variant="primary" icon={Send} iconPosition="right">
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-[11px] text-slate-500">
            No spam ever. Unsubscribe at any time with a single click.
          </p>

        </div>
      </div>
    </section>
  );
}
