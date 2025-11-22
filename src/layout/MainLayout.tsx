import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CallToAction } from "../components/CallToAction";
import { TrustBar } from "../components/TrustBar";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ScrollToTop } from "../components/ScrollToTop";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  // 1. Pages where the lower sections are fully hidden on all breakpoints
  const isContactPage = location.pathname === "/contact";
  const isComingSoonPage = location.pathname === "/coming-soon";
  const shouldHideBottomSections = isContactPage || isComingSoonPage;

  // 2. Pages where the TrustBar is hidden on mobile only
  // Make sure these paths match the Router configuration exactly
  const mobileHiddenPaths = ["/about", "/team"];
  const shouldHideTrustBarOnMobile = mobileHiddenPaths.includes(location.pathname);

  return (
    <div className="app-root">
      {/* Invisible helper that scrolls to top on each navigation */}
      <ScrollToTop />

      <Header />

      <main className="app-main">
        {/* TrustBar visibility logic */}
        {!shouldHideBottomSections && (
          /* If the current path is in the "mobile hidden" list:
             hidden   = hide by default on mobile
             md:block = show from tablet/desktop upward

             Otherwise (regular pages): visible across all breakpoints.
          */
          <div className={shouldHideTrustBarOnMobile ? "hidden md:block" : ""}>
            <TrustBar />
          </div>
        )}

        {children}

        {/* Display CTA on every page unless explicitly hidden */}
        {!shouldHideBottomSections && <CallToAction />}
      </main>

      <Footer />

      {/* Floating WhatsApp button that always stays on top */}
      <WhatsAppButton />
    </div>
  );
}
