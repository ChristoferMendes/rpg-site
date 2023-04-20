export function HStack({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`flex ${className}`}>
      {children}
    </div>
  );
}
