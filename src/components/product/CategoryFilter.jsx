import React from 'react';
import { CATEGORIES } from '../../data/products';
import { SlidersHorizontal, RotateCcw, Flame } from 'lucide-react';
import Button from '../common/Button';

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  filteredCount,
  totalCount,
  searchQuery,
  onReset,
}) {
  return (
    <div id="categories-section" className="space-y-6 mb-10">
      
      {/* Category Pills Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        
        {/* Category Pills scrollable container */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 border border-orange-400 font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Sort Controls & Counter */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300">
            <SlidersHorizontal className="w-4 h-4 text-orange-400" />
            <span className="hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent text-slate-200 font-medium text-xs focus:outline-none cursor-pointer"
            >
              <option value="featured" className="bg-slate-900">Featured</option>
              <option value="price-low" className="bg-slate-900">Price: Low to High</option>
              <option value="price-high" className="bg-slate-900">Price: High to Low</option>
              <option value="rating" className="bg-slate-900">Highest Rated</option>
            </select>
          </div>

          {(selectedCategory !== 'All' || searchQuery !== '' || sortBy !== 'featured') && (
            <Button
              variant="outline"
              size="sm"
              icon={RotateCcw}
              onClick={onReset}
              title="Reset Filters"
            >
              Reset
            </Button>
          )}
        </div>

      </div>

      {/* Active Filter Info Banner */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <p>
          Showing <span className="font-semibold text-white">{filteredCount}</span> of{' '}
          <span className="font-semibold text-white">{totalCount}</span> products
          {searchQuery && (
            <span>
              {' '}matching "<span className="text-orange-400 font-medium">{searchQuery}</span>"
            </span>
          )}
        </p>

        {selectedCategory !== 'All' && (
          <span className="inline-flex items-center gap-1 text-orange-400 font-medium">
            <Flame className="w-3.5 h-3.5" /> Category: {selectedCategory}
          </span>
        )}
      </div>

    </div>
  );
}
