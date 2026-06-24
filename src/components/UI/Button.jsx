const variants = {
  primary: 'bg-primary hover:bg-primary-light text-canvas font-semibold btn-glow hover:scale-[1.02] active:scale-[0.98]',
  secondary: 'border border-hairline-strong hover:border-primary text-body hover:text-primary hover:bg-primary/5',
  ghost: 'text-body hover:text-primary',
};

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-pill px-6 py-2.5 text-sm transition-all duration-300 ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
