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
  
  // 1. דפים בהם מסתירים את האלמנטים התחתונים לגמרי (בכל המסכים)
  const isContactPage = location.pathname === "/contact";
  const isComingSoonPage = location.pathname === "/coming-soon";
  const shouldHideBottomSections = isContactPage || isComingSoonPage;

  // 2. דפים בהם מסתירים את ה-TrustBar *רק במובייל*
  // וודא שהנתיבים כאן תואמים בדיוק למה שהגדרת ב-Router
  const mobileHiddenPaths = ['/about', '/team']; 
  const shouldHideTrustBarOnMobile = mobileHiddenPaths.includes(location.pathname);

  return (
    <div className="app-root">
      {/* רכיב "בלתי נראה" שמבטיח גלילה למעלה בכל מעבר דף */}
      <ScrollToTop />
      
      <Header />
      
      <main className="app-main">
        
        {/* הלוגיקה החדשה: */}
        {!shouldHideBottomSections && (
          /* אם הדף הנוכחי נמצא ברשימה של "הסתר במובייל":
             hidden = מוסתר כברירת מחדל (מובייל)
             md:block = מוצג החל מגודל מסך בינוני (טאבלט/דסקטופ) ומעלה
             
             אחרת (אם זה לא דף מיוחד): אין מחלקות מיוחדות והוא מוצג תמיד.
          */
          <div className={shouldHideTrustBarOnMobile ? "hidden md:block" : ""}>
            <TrustBar />
          </div>
        )}
        
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