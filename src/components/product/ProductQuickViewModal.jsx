import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Check, ShieldCheck, Truck, Star } from 'lucide-react';
import RatingStars from '../common/RatingStars';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function ProductQuickViewModal({ product, onClose, isFavorite, onToggleFavorite }) {
  const [selectedSize, setSelectedSize] = useState('9.5');
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const sizes = ['7.5', '8.0', '8.5', '9.0', '9.5', '10.0', '10.5', '11.0'];

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Close X Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-800 rounded-full border border-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Product Image Preview */}
            <div className="relative bg-slate-950 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800 min-h-[300px]">
              {product.tag && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge>{product.tag}</Badge>
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="max-h-80 w-full object-contain rounded-2xl drop-shadow-[0_15px_25px_rgba(249,115,22,0.25)]"
              />
            </div>

            {/* Right Product Details & Options */}
            <div className="p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono uppercase text-orange-400 tracking-wider">
                    {product.category}
                  </span>
                  <RatingStars rating={product.rating} reviewsCount={product.reviewsCount} />
                </div>

                <h2 className="text-2xl font-bold font-heading text-white">
                  {product.name}
                </h2>

                {/* Price Display */}
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold font-heading text-orange-400">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-base text-slate-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold ml-auto">
                    In Stock
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {product.description}
                </p>

                {/* Colors list if available */}
                {product.colors && (
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Available Colorways
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="px-3 py-1 bg-slate-800 text-slate-200 text-xs rounded-lg border border-slate-700"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selector Pills */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Select Size (US)
                    </label>
                    <button type="button" className="text-[11px] text-orange-400 hover:underline">
                      Size Guide
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {sizes.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`py-2 text-xs font-semibold rounded-xl border transition-all duration-200 ${
                          selectedSize === sz
                            ? 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/20'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex gap-3">
                  <Button
                    variant={added ? 'secondary' : 'primary'}
                    size="lg"
                    icon={added ? Check : ShoppingBag}
                    onClick={handleAddToCart}
                    className={`flex-1 ${added ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' : ''}`}
                  >
                    {added ? 'Added to Cart' : `Add to Cart • Size ${selectedSize}`}
                  </Button>

                  <button
                    type="button"
                    onClick={() => onToggleFavorite(product.id)}
                    className={`p-3.5 rounded-xl border transition-all duration-200 ${
                      isFavorite
                        ? 'bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/30'
                        : 'bg-slate-950 text-slate-400 hover:text-white border-slate-800'
                    }`}
                    title="Add to wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-white' : ''}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-orange-400" /> Free 2-Day Shipping
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Authentic Guarantee
                  </span>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
