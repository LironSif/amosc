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
  
  // בדיקה: האם אנחנו בדף "צור קשר"?
  const isContactPage = location.pathname === "/contact";
  
  // בדיקה: האם אנחנו בדף "בבניה"?
  const isComingSoonPage = location.pathname === "/coming-soon";

  // משתנה עזר: האם להסתיר את החלקים התחתונים (TrustBar + CTA)
  // אנחנו מסתירים אותם גם ב"צור קשר" וגם ב"בבניה" כדי שהדף יהיה נקי
  const shouldHideBottomSections = isContactPage || isComingSoonPage;

  return (
    <div className="app-root">
      {/* רכיב "בלתי נראה" שמבטיח גלילה למעלה בכל מעבר דף */}
      <ScrollToTop />
      
      <Header />
      
      <main className="app-main">
        {/* הצגת TrustBar בכל דף, אלא אם כן זה דף מיוחד (צור קשר או בבניה) */}
        {!shouldHideBottomSections && <TrustBar />}
        
        {children}
        
        {/* הצגת הנעה לפעולה (CTA) בכל דף, אלא אם כן זה דף מיוחד */}
        {!shouldHideBottomSections && <CallToAction />}
      </main>
      
      <Footer />
      
      {/* כפתור וואטסאפ צף שמופיע תמיד מעל הכל */}
      <WhatsAppButton />
    </div>
  );
}