import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import { SearchX, RotateCcw } from 'lucide-react';
import Button from '../common/Button';

export default function ProductGrid({
  products,
  onQuickView,
  wishlist = [],
  onToggleFavorite,
  onResetFilters,
}) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 glass-card rounded-3xl border border-slate-800 my-8">
        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-4">
          <SearchX className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-heading text-white mb-2">No Kicks Found</h3>
        <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
          We couldn't find any products matching your active search or category filters. Try resetting your search query.
        </p>
        <Button variant="primary" icon={RotateCcw} onClick={onResetFilters}>
          Reset All Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <AnimatePresence>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
            isFavorite={wishlist.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
