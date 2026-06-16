import React from "react";
import TopContactStrip from "./TopContactStrip";
import OfficialHeader from "./OfficialHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function SiteLayout({ children }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background font-sans text-foreground">
      <div className="no-print">
        <TopContactStrip />
        <OfficialHeader />
        <Navbar />
      </div>
      <main id="main" className="flex-1 flex flex-col relative w-full">
        {children}
      </main>
      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
}