interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={`text-2xl font-bold tracking-tight ${className ?? ""}`}
    >
      {children}
      <div aria-hidden="true" className="mt-2 h-0.5 w-12 rounded bg-primary" />
    </h2>
  );
}
