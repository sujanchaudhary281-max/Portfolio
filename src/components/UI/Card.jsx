export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={`glass-card p-6 transition-all duration-300 ${hover ? 'glass-card-hover cursor-pointer' : ''} ${className}`}>
      {children}
    </div>
  );
}
