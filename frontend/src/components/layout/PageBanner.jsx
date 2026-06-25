import { Link } from "wouter";
import { ChevronRight } from "lucide-react";



export default function PageBanner({ title, crumbs }) {
  return (
    <div className="w-full bg-gradient-to-r from-primary to-[#5c1c24] text-white py-12 px-4 relative overflow-hidden">
      {/* Decorative pattern hint */}
      <div className="absolute right-0 top-0 w-64 h-full opacity-10 bg-[url('@/assets/pattern.png')] bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 drop-shadow-sm">{title}</h1>
        
        {crumbs && crumbs.length > 0 && (
          <nav className="flex items-center text-sm text-white/70 font-medium">
            <Link href="/"><span className="hover:text-secondary transition-colors cursor-pointer">Home</span></Link>
            {crumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1 opacity-50" />
                {crumb.href ? (
                  <Link href={crumb.href}><span className="hover:text-secondary transition-colors cursor-pointer">{crumb.label}</span></Link>
                ) : (
                  <span className="text-secondary">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}