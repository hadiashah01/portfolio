import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

export type MainLayoutProps = {
  children: ReactNode;
  showScrollProgress?: boolean;
};

export function MainLayout({
  children,
  showScrollProgress = true,
}: MainLayoutProps) {
  return (
    <div className="bg-background relative flex min-h-screen flex-col">
      {showScrollProgress ? <ScrollProgress /> : null}
      <Navbar />
      <main
        id="main-content"
        className="site-canvas relative z-10 flex-1 rounded-b-2xl shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)] md:rounded-b-[2rem]"
      >
        {children}
      </main>
      <div className="z-0 md:sticky md:bottom-0">
        <Footer />
      </div>
    </div>
  );
}
