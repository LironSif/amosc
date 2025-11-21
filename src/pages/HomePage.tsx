import { useNavigate } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { ProjectSlider } from "../components/ProjectSlider";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Hero
        eyebrow="ייעוץ ביטחוני הנדסי לרשויות, קבלנים וגופים מוסדיים"
        title="כחלון יועצים. אינטליגנציה ביטחונית לפרויקטי תשתית, מטווחים ומיגון."
        subtitle="ליווי אסטרטגי והנדסי מול משרד הביטחון, רשויות מקומיות וגופי פיקוח. מומחיות בהקמת מטווחים, מיגון מבנים ופרויקטים ביטחוניים מורכבים."
        primaryActionText="תיאום פגישת היכרות"
        secondaryActionText="צפייה בפרויקטים נבחרים"
        onPrimaryClick={() => navigate("/contact")}
        onSecondaryClick={() => navigate("/projects")}
      />

      {/* --- MINI HERO GALLERY --- */}
      <section className="mini-hero-gallery">
        <div className="mini-gallery-track">
          <img src="https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715781/Liron_in_F16_gwntwm.jpg" alt="לירון בטייסת" />
          
          {/* התיקון לתמונה של עמוס במפעל */}
          <img 
            src="https://res.cloudinary.com/dfxw7cfie/image/upload/v1763755548/Gemini_Generated_Image_7fuw9p7fuw9p7fuw_wti8hj.png" 
            alt="עמוס במפעל פלדה" 
         style={{ objectPosition: "50% 40%" }}
          />
          
          <img src="https://res.cloudinary.com/dfxw7cfie/image/upload/v1763752427/IMG-20251121-WA0047_fe7sj2.jpg" alt="מבנה פלדה גדול" />
          <img src="https://res.cloudinary.com/dfxw7cfie/image/upload/v1763727673/IMG-20250703-WA0006_bvz8av.jpg" alt="לירון באתר פלדה" />
        </div>
      </section>

      <Section title="מי אנחנו">
        <p>
          כחלון יועצים היא חברה המתמחה בייעוץ ביטחוני הנדסי לפרויקטי תשתית,
          מטווחים ומיגון. אנו מלווים רשויות מקומיות, קבלנים וגופים מוסדיים
          משלב הרעיון הראשוני ועד קבלת כל האישורים הנדרשים.
        </p>
        <p>
          הייחוד שלנו הוא בחיבור בין ניסיון מעשי במערכת הביטחון לבין הבנה
          הנדסית ורגולטורית עמוקה, המאפשרת ללקוחות לקבל החלטות בטוחות ומבוססות.
        </p>
      </Section>

      <Section title="מה מייחד אותנו">
        <ul className="cards-grid">
          <li className="card">
            <h3>היכרות מלאה עם מערכת הביטחון</h3>
            <p>ניסיון מעשי בליווי פרויקטים מול משרד הביטחון, משטרת ישראל וגופי פיקוח נוספים.</p>
          </li>
          <li className="card">
            <h3>שילוב הנדסה, מיגון ובליסטיקה</h3>
            <p>ידע הנדסי עמוק בתכנון מטווחים, חדרי ביטחון ומיגון פרויקטים.</p>
          </li>
          <li className="card">
            <h3>ליווי מלא משלב הרעיון ועד אישור</h3>
            <p>הקפדה על תהליך שלם ומסודר מול כל הגורמים הרלוונטיים.</p>
          </li>
        </ul>
      </Section>

      <div className="section-divider" />

      <Section title="תהליך העבודה שלנו">
        <ol className="timeline">
          <li className="timeline-item">
            <div className="timeline-badge">1</div>
            <div className="timeline-content">
              <h3>אפיון צרכים ובדיקת היתכנות</h3>
              <p>פגישה ראשונית להבנת צרכים, מגבלות ויעדים.</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-badge">2</div>
            <div className="timeline-content">
              <h3>תכנון הנדסי וביטחוני</h3>
              <p>חלוקת שטחים, מיגון, קווי ירי ותפיסת הפעלה.</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-badge">3</div>
            <div className="timeline-content">
              <h3>ליווי מול רשויות וגופי פיקוח</h3>
              <p>פעילות מול משרד הביטחון, משטרה ופיקוד העורף.</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-badge">4</div>
            <div className="timeline-content">
              <h3>ביצוע ובקרה</h3>
              <p>ליווי בפרויקט עד לתוצר מוגמר.</p>
            </div>
          </li>
        </ol>
      </Section>

      <Section title="פרויקטים נבחרים - מבט מהיר">
        <ProjectSlider />
      </Section>

      <Section title="מול אנחנו עובדים">
        <ul className="tags-list">
          <li className="tag-pill">רשויות מקומיות ותאגידים עירוניים</li>
          <li className="tag-pill">קבלני תשתיות ובנייה</li>
          <li className="tag-pill">יזמים פרטיים</li>
          <li className="tag-pill">גופים מוסדיים וציבוריים</li>
          <li className="tag-pill">גופי ביטחון פנים</li>
        </ul>
      </Section>
    </>
  );
}