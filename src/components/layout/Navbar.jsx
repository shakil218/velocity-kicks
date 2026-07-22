import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Search, Menu, X, Flame, ArrowRight } from 'lucide-react';
import SearchInput from '../common/SearchInput';
import Button from '../common/Button';

export default function Navbar({
  searchQuery,
  setSearchQuery,
  wishlistCount = 0,
  cartCount = 2,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Featured Drops', href: '#products-section' },
    { name: 'Categories', href: '#categories-section' },
    { name: 'Reviews', href: '#reviews-section' },
    { name: 'About', href: '#footer-section' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-5'
      }`}
    >
      {/* Top Banner Announcement */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2 tracking-wide -mt-5 mb-3">
        <Flame className="w-3.5 h-3.5 animate-pulse" />
        <span>LIMITED DROP: Free Express Shipping on orders over $150 with code <strong>VELOCITY2026</strong></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Branding Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
              <Flame className="w-6 h-6 text-slate-950 fill-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-orange-400 transition-colors">
                VELOCITY<span className="text-orange-500">KICKS</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono -mt-1 uppercase">
                Elite Footwear Store
              </span>
            </div>
          </a>

          {/* Desktop Search Bar */}
          <div className="hidden lg:block flex-1 max-w-sm mx-4">
            <SearchInput value={searchQuery} onChange={setSearchQuery} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-orange-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-3">
            {/* Mobile Search Toggle Button */}
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="lg:hidden p-2 text-slate-300 hover:text-orange-400 hover:bg-slate-900 rounded-xl transition-colors"
              aria-label="Toggle mobile search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Icon Counter */}
            <a
              href="#products-section"
              className="relative p-2 text-slate-300 hover:text-orange-400 hover:bg-slate-900 rounded-xl transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* Cart Icon Counter Mockup */}
            <button
              type="button"
              className="relative p-2 text-slate-300 hover:text-orange-400 hover:bg-slate-900 rounded-xl transition-colors"
              title="Shopping Cart (Mockup)"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-amber-400 text-slate-950 text-[10px] font-extrabold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Action CTA Button */}
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => {
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Store
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown Bar */}
        <AnimatePresence>
          {showMobileSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden mt-3 pt-2 pb-1 overflow-hidden"
            >
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search products by name or tag..."
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-slate-950/95 border-l border-slate-800 backdrop-blur-2xl z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Flame className="w-6 h-6 text-orange-500" />
                  <span className="font-heading font-bold text-lg text-white">
                    VELOCITY<span className="text-orange-500">KICKS</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-slate-200 hover:text-orange-400 transition-colors py-2 border-b border-slate-900"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-800">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Shop Collection Now
              </Button>
              <p className="text-center text-xs text-slate-500 font-mono">
                © 2026 Velocity Kicks Inc.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
