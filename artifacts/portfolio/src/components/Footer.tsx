export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-serif text-xl font-normal text-foreground tracking-tight select-none">
          LA<span className="text-primary">.</span>
        </a>

        <p className="text-xs font-mono text-muted-foreground text-center">
          &copy; {currentYear} Lamis Alharbi &mdash; Designed with precision.
        </p>

        <p className="text-xs font-mono text-muted-foreground">
          Riyadh, Saudi Arabia
        </p>
      </div>
    </footer>
  );
}
