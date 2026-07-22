import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchInput({ value, onChange, placeholder = 'Search sneakers by name or tag...', className = '' }) {
  return (
    <div className={`relative flex items-center w-full max-w-md ${className}`}>
      <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-9 py-2.5 bg-slate-900/90 hover:bg-slate-900 border border-slate-800 focus:border-orange-500 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all duration-200"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 p-0.5 text-slate-400 hover:text-slate-200 rounded-full hover:bg-slate-800 transition-colors"
          aria-label="Clear search input"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
