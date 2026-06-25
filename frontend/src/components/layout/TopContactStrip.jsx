import { Link } from "wouter";
import { Phone, Mail, Accessibility, Settings } from "lucide-react";

export default function TopContactStrip() {
  return (
    <div className="bg-[#06254D] text-white text-xs py-1.5 px-4 hidden md:block border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-6">
          <a href="tel:+91 8331997314" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <Phone className="w-3 h-3" />
            <span>Helpline: +91 8331997314</span>
          </a>
          <a href="mailto:collegetechsuprt.cst@gmail.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <Mail className="w-3 h-3" />
            <span>collegetechsuprt.cst@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#main" className="hover:text-secondary transition-colors font-medium">Skip to main content</a>
          <div className="w-px h-3 bg-primary-foreground/20"></div>
          {/* <button className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <Accessibility className="w-3 h-3" />
            <span>Accessibility</span>
          </button> */}
          <div className="w-px h-3 bg-primary-foreground/20"></div>
          {/* <span className="opacity-80">Government of Telangana</span> */}
        </div>
      </div>
    </div>
  );
}

