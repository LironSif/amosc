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
  
  // בדיקה: האם אנחנו כרגע בדף צור קשר?
  const isContactPage = location.pathname === "/contact";

  return (
    <div className="app-root">
      {/* רכיב "בלתי נראה" שמבטיח גלילה למעלה בכל מעבר דף */}
      <ScrollToTop />
      
      <Header />
      
      <main className="app-main">
        {/* הצגת TrustBar בכל דף למעט צור קשר */}
        {!isContactPage && <TrustBar />}
        
        {children}
        
        {/* הצגת הנעה לפעולה (CTA) בכל דף למעט דף צור קשר עצמו */}
        {!isContactPage && <CallToAction />}
      </main>
      
      <Footer />
      
      {/* כפתור וואטסאפ צף שמופיע תמיד מעל הכל */}
      <WhatsAppButton />
    </div>
  );
}