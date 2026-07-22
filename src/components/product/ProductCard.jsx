import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import Badge from '../common/Badge';
import RatingStars from '../common/RatingStars';
import Button from '../common/Button';

export default function ProductCard({
  product,
  onQuickView,
  isFavorite = false,
  onToggleFavorite,
}) {
  const [addedToCart, setAddedToCart] = React.useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group glass-card rounded-2xl border border-slate-800/80 hover:border-orange-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 relative"
    >
      <div>
        {/* Card Header Top Actions & Image */}
        <div className="relative h-60 w-full overflow-hidden bg-slate-900/90 flex items-center justify-center p-4">
          
          {/* Top Tag Badge */}
          {product.tag && (
            <div className="absolute top-3 left-3 z-10">
              <Badge>{product.tag}</Badge>
            </div>
          )}

          {/* Wishlist Favorite Heart Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(product.id);
            }}
            className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
              isFavorite
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                : 'bg-slate-950/60 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
          </button>

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover Overlay with Quick View Button */}
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
            <Button
              variant="primary"
              size="sm"
              icon={Eye}
              onClick={() => onQuickView(product)}
              className="shadow-lg"
            >
              Quick View
            </Button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="p-5 space-y-3">
          
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-orange-400/90 uppercase tracking-wider">
              {product.category}
            </span>
            <RatingStars rating={product.rating} reviewsCount={product.reviewsCount} />
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-heading font-bold text-base text-slate-100 group-hover:text-orange-400 transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

        </div>
      </div>

      {/* Card Footer: Price & Add to Cart Action */}
      <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-slate-900/60 mt-2">
        <div>
          <span className="text-xl font-bold font-heading text-white">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-xs text-slate-500 line-through ml-2">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <Button
          variant={addedToCart ? 'secondary' : 'outline'}
          size="sm"
          icon={addedToCart ? Check : ShoppingBag}
          onClick={handleAddToCart}
          className={addedToCart ? 'text-green-400 border-green-500/40 bg-green-500/10' : ''}
        >
          {addedToCart ? 'Added' : 'Cart'}
        </Button>
      </div>

    </motion.div>
  );
}
