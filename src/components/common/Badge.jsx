import React from 'react';

export default function Badge({ children, variant = 'primary', className = '' }) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200';
  
  const variants = {
    primary: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
    secondary: 'bg-slate-800 text-slate-300 border border-slate-700',
    accent: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
    sale: 'bg-rose-500/20 text-rose-400 border border-rose-500/30',
    dark: 'bg-slate-900/80 text-slate-200 border border-slate-700/80 backdrop-blur-md',
  };

  const getVariant = () => {
    if (children?.toString().includes('%') || children?.toString().toLowerCase().includes('sale')) {
      return variants.sale;
    }
    if (children?.toString().toLowerCase().includes('trending') || children?.toString().toLowerCase().includes('hot')) {
      return variants.primary;
    }
    if (children?.toString().toLowerCase().includes('new')) {
      return variants.accent;
    }
    return variants[variant] || variants.primary;
  };

  return (
    <span className={`${baseStyles} ${getVariant()} ${className}`}>
      {children}
    </span>
  );
}
