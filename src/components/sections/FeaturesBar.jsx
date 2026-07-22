import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headset } from 'lucide-react';

export default function FeaturesBar() {
  const features = [
    {
      icon: Truck,
      title: 'Free Express Shipping',
      description: 'On all domestic orders over $150',
      color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    },
    {
      icon: ShieldCheck,
      title: '100% Authentic Guaranteed',
      description: 'Verified 12-point quality inspect',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: RefreshCw,
      title: '30-Day Easy Returns',
      description: 'Hassle-free instant exchanges',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: Headset,
      title: '24/7 Athlete Support',
      description: 'Live assistance from sneaker experts',
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
  ];

  return (
    <section className="bg-slate-900/60 border-y border-slate-800/80 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-slate-700 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${feature.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white font-heading">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
