export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-lg font-medium tracking-tight text-foreground">
          LA.
        </div>
        
        <p className="text-sm text-muted-foreground font-light text-center md:text-left">
          &copy; {currentYear} Lamis Alharbi. Designed with precision.
        </p>
        
        <div className="text-sm text-muted-foreground font-light">
          Riyadh, SA
        </div>
      </div>
    </footer>
  );
}
