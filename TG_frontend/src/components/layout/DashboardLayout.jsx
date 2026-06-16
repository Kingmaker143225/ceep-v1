





import React, { useState } from "react";
import { Menu, LogOut, X } from "lucide-react";
import { useLocation } from "wouter";

export default function DashboardLayout({
  title,
  role,
  navItems,
  active,
  onSelect,
  children,
}) {
  const [, setLocation] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    setLocation("/login");
  };

  const NavLinks = ({ mobile = false }) => (
    <nav className="space-y-1">
      {navItems.map((item) => {
        const isActive = active === item.key;
        const Icon = item.icon;

        return (
          <button
            key={item.key}
            onClick={() => {
              onSelect(item.key);
              if (mobile) setIsMobileOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {Icon && (
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              />
            )}
            {item.label}
          </button>
        );
      })}

      <div className="pt-4 mt-4 border-t border-border">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-[100dvh] flex flex-col bg-muted/20">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6 shadow-sm">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="lg:hidden p-2 -ml-2 text-muted-foreground hover:bg-muted rounded-md"
        >
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </button>

        <div className="hidden lg:flex items-center gap-2 font-serif font-bold text-xl text-primary">
          PGCET <span className="text-secondary">Portal</span>
        </div>

        <div className="flex-1 flex justify-between items-center lg:ml-6">
          <h1 className="text-lg font-semibold truncate">{title}</h1>

          <div className="flex items-center gap-4">
            <div className="text-sm text-right hidden sm:block">
              <div className="font-semibold leading-none">
                {role === "admin" ? "System Admin" : "Rahul Sharma"}
              </div>
              <div className="text-muted-foreground text-xs">
                {role === "admin" ? "admin@pgcet.ts" : "PGCET2026001"}
              </div>
            </div>

            <div className="h-9 w-9 rounded-full border flex items-center justify-center bg-primary/10 text-primary font-bold text-sm">
              {role === "admin" ? "AD" : "RS"}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsMobileOpen(false)}
          />

          <aside className="relative h-full w-72 sm:w-80 bg-background p-6 shadow-lg animate-in slide-in-from-left">
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>

            <div className="flex items-center gap-2 font-serif font-bold text-xl mb-6 text-primary">
              PGCET <span className="text-secondary">Portal</span>
            </div>

            <NavLinks mobile />
          </aside>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-64 flex-col border-r bg-background p-4 h-[calc(100vh-4rem)] sticky top-16">
          <NavLinks />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}