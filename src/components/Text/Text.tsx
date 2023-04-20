export function Text({ children, className }: { children: React.ReactNode, className?: string}) {
  return (
    <p className={`text-zinc-200 ${className}`}>{children}</p>
  );
}
