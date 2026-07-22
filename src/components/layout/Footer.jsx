import React from 'react';
import { Flame, Send, ShieldCheck, Truck, RefreshCw, Heart, Github, Instagram, Twitter, Youtube } from 'lucide-react';
import Button from '../common/Button';

export default function Footer() {
  return (
    <footer id="footer-section" className="bg-slate-950 border-t border-slate-900 text-slate-400 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Flame className="w-5 h-5 text-slate-950 fill-slate-950" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                VELOCITY<span className="text-orange-500">KICKS</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineered for champions, styled for the street. Velocity Kicks brings you authentic, high-performance running, basketball, and luxury lifestyle footwear.
            </p>

            {/* Social Hooks */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Youtube, href: 'https://youtube.com' },
                { icon: Github, href: 'https://github.com/shakil218/velocity-kicks' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 hover:text-orange-400 hover:bg-slate-800 flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Explore Store
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['New Season Drops', 'Best Sellers', 'Trending Kicks', 'Pro Series', 'Discounted Items'].map((item) => (
                <li key={item}>
                  <a href="#products-section" className="hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Basketball', 'Running', 'Casual Lifestyle', 'Skateboarding', 'Gym & Training'].map((item) => (
                <li key={item}>
                  <a href="#products-section" className="hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Help & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Order Tracking', 'Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Assessment Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Velocity Kicks. Assessment Task built for MOH Technology.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
