import React from 'react';
import { Flame, Heart } from 'lucide-react';

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

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
                { icon: TwitterIcon, href: 'https://twitter.com' },
                { icon: InstagramIcon, href: 'https://instagram.com' },
                { icon: YoutubeIcon, href: 'https://youtube.com' },
                { icon: GithubIcon, href: 'https://github.com/shakil218/velocity-kicks' },
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
