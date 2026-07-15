export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={`surface p-6 ${hover ? 'surface-hover' : ''} ${className}`}>
      {children}
    </div>
  );
}
