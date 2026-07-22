import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Star } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

export default function Hero() {
  const scrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-orange-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>SPRING 2026 EDITION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span className="text-orange-400">Air Jordan & Ultraboost Drops</span>
            </div>

            {/* Headline Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
              ELEVATE YOUR <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                EVERY STRIDE.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Discover engineered perfection for the court, track, and urban jungle. Authenticity guaranteed on every pair of iconic retro highs, speed runners, and court heritage kicks.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={scrollToProducts}
                className="w-full sm:w-auto"
              >
                Shop Collection (10+ Drops)
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('categories-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto"
              >
                Explore Categories
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-8 border-t border-slate-900 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-heading text-white">50K+</p>
                <p className="text-xs text-slate-400">Happy Runners & Athletes</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-heading text-amber-400 flex items-center gap-1">
                  4.9 <Star className="w-4 h-4 fill-amber-400" />
                </p>
                <p className="text-xs text-slate-400">Over 12,000 Reviews</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-heading text-cyan-400">100%</p>
                <p className="text-xs text-slate-400">Authentic Guarantee</p>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Interactive Shoe Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-20 transform -rotate-3 scale-95" />

              {/* Main Shoe Showcase Panel */}
              <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl overflow-hidden group">
                
                {/* Floating Tag */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="primary">FEATURED DROP</Badge>
                  <span className="text-xs font-mono text-slate-400">REF: AJ1-RETRO</span>
                </div>

                {/* Hero Image */}
                <div className="relative h-64 sm:h-72 w-full flex items-center justify-center my-4 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80">
                  <motion.img
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
                    alt="Air Jordan Retro High OG"
                    className="object-contain max-h-full drop-shadow-[0_20px_30px_rgba(249,115,22,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                  />
                </div>

                {/* Shoe Details Card Footer */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white">Air Jordan Retro High OG</h3>
                      <p className="text-xs text-slate-400">Basketball / Iconic Leather Edition</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-orange-400 font-heading">$180.00</span>
                      <span className="block text-xs line-through text-slate-500">$210.00</span>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={scrollToProducts}
                  >
                    View Product Details
                  </Button>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
