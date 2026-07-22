import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon = null,
  iconPosition = 'left',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl cursor-pointer select-none active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 shadow-sm';

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-semibold',
    icon: 'p-2 text-sm',
  };

  const variants = {
    primary: 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white glow-orange-sm hover:glow-orange border border-orange-400/30',
    secondary: 'bg-slate-800/90 hover:bg-slate-700 text-slate-100 border border-slate-700/80 backdrop-blur-md',
    outline: 'border border-slate-700 hover:border-orange-500/60 text-slate-300 hover:text-orange-400 bg-slate-900/40 hover:bg-slate-900',
    ghost: 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50',
    dark: 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-800',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
