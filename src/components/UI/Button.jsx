const variants = {
  primary: 'bg-primary hover:bg-primary-light text-canvas font-medium',
  secondary: 'border border-hairline-strong text-ink hover:border-primary/60 hover:bg-white/[0.03]',
  ghost: 'text-body hover:text-ink',
};

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm transition-colors duration-200 ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
