/** A thin rule broken by a small diamond, the site's one decorative mark. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-muted/40" />
      <span className="size-1.5 rotate-45 bg-accent" />
      <span className="h-px flex-1 bg-muted/40" />
    </div>
  );
}
