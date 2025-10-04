import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  onClick?: () => void;
}
export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  onClick
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 relative overflow-hidden';
  const variantClasses = {
    primary: 'bg-amber text-charcoal hover:bg-amber-light shadow-lg hover:shadow-xl',
    secondary: 'bg-forest text-cream hover:bg-forest-light shadow-lg hover:shadow-xl',
    outline: 'border-2 border-amber text-amber hover:bg-amber/10'
  };
  return <button className={`${baseClasses} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} group`} onClick={onClick}>
      {/* Firefly glow effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </button>;
}