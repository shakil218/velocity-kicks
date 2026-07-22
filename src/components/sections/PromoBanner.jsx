import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock, ArrowRight, Zap } from 'lucide-react';
import Button from '../common/Button';

export default function PromoBanner() {
  const scrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-orange-400/30">
          
          {/* Background Ambient Floating Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Promo Text */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-amber-200">
                <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                <span>LIMITED TIME FLASH DROP • ENDS SOON</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
                GET 20% OFF YOUR FIRST DROP
              </h2>

              <p className="text-sm sm:text-base text-orange-100 max-w-xl leading-relaxed opacity-90">
                Join the Velocity Athletes Club. Use promotional promo code <span className="font-mono bg-black/30 px-2 py-0.5 rounded text-white font-bold">VELOCITY20</span> at checkout to claim instant discounts across all high-top and running models.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  variant="dark"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={scrollToProducts}
                  className="shadow-xl"
                >
                  Claim 20% Discount
                </Button>
              </div>
            </div>

            {/* Right Interactive Tag */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-slate-950/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center shadow-2xl max-w-xs w-full space-y-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 fill-orange-400" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white">
                  Exclusive Access
                </h3>
                <p className="text-xs text-slate-300">
                  Early drop alerts & rare colorway notifications delivered directly.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold block">
                    CODE: VELOCITY20
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
