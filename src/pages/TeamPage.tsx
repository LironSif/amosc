import { Section } from "../components/Section";

export function TeamPage() {
  return (
    <>
      <Section title="הצוות של כחלון יועצים">
        <p className="mb-10 max-w-3xl">
          כחלון יועצים היא חברת ייעוץ אסטרטגי ביטחוני שמבוססת על ניסיון שטח,
          הבנה הנדסית, חשיבה עסקית ויכולות ביצוע. הצוות משלב רקע צבאי,
          לוגיסטי, טכני, ניהולי ומשפטי כדי להוביל פרויקטים מורכבים.
        </p>

        <div className="team-container">
          
          {/* --- מנהיג הצוות (עמוס) - בנפרד למעלה --- */}
          <div className="team-leader-section">
            <div className="team-member-card leader-card">
              <div className="member-image-wrapper">
                <img
                  src="https://res.cloudinary.com/dfxw7cfie/image/upload/v1752950818/IMG-20250719-WA0012_wuybys.jpg"
                  alt="עמוס כחלון"
                  className="member-image"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">עמוס כחלון</h3>
                <p className="member-role">מייסד ובעלים</p>
                <div className="member-bio">
                  <p>
                    בעל ניסיון צבאי עשיר בתחומי לוגיסטיקה ותמיכה מבצעית. לאחר השירות
                    הצבאי ניהל במשך שנים חברת יבוא ורשת פנצ&apos;ריות, מה שהעניק לו
                    הבנה מעשית עמוקה בעולם היבוא והתפעול.
                  </p>
                  <p>
                    החיבור בין עולם הגומי לתחומי המיגון הוביל לפיתוח ידע ייחודי
                    בבלימת רסיסים והגנה על תשתיות, ומשם נפתח השער לעולם הביטחוני,
                    למטווחים ולמטרות חכמות.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- שאר הצוות (לירון, משה, אופיר) - בשורה מתחת --- */}
          <div className="team-grid">
            
            {/* לירון */}
            <div className="team-member-card">
              <div className="member-image-wrapper">
                <img
                  src="https://res.cloudinary.com/dfxw7cfie/image/upload/v1752950818/IMG-20250719-WA0008_csgsqq.jpg"
                  alt="לירון"
                  className="member-image"
                />
              </div>
              <h3 className="member-name" >לירון סיפדו</h3>
              <p className="member-role">יועץ בליסטיקה וטכנולוגיה</p>
              <div className="member-bio">
                <p>
                  מומחה לבליסטיקה הנדסית ופורנזית. בעל ידע אזרחי נרחב בעולם הרחפנים
                  והנגד-רחפנים, ממנועים ועד לוחמה אלקטרונית. מוביל את תחום הטכנולוגיה
        .
                </p>
              </div>
            </div>

            {/* משה הרוש */}
            <div className="team-member-card">
              <div className="member-image-wrapper">
                <img
                  src="https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715774/Gemini_Generated_Image_ktfdo7ktfdo7ktfd_dz0q2m.png"
                  alt="משה הרוש"
                  className="member-image"
                />
              </div>
              <h3 className="member-name">משה הרוש</h3>
              <p className="member-role">ניהול פרויקטים ותפעול</p>
              <div className="member-bio">
                <p>
                  מנהל פרויקטים ותיק עם ניסיון בפרויקטים תשתיתיים מורכבים (כמו המטרו).
                  מביא סדר, שיטתיות ויכולת תיאום בין רשויות, קבלנים וגופי ביטחון
                  תחת אילוצי תקציב ולוחות זמנים.
                </p>
              </div>
            </div>

            {/* אופיר */}
            <div className="team-member-card">
              <div className="member-image-wrapper">
                <img
                  src="https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715775/Gemini_Generated_Image_yoihthyoihthyoih_l4wqpt.png"
                  alt="אופיר כהן"
                  className="member-image"
                />
              </div>
              <h3 className="member-name">אופיר כהן</h3>
              <p className="member-role">ליווי משפטי ורגולטורי</p>
              <div className="member-bio">
                <p>
                  עורך דין המלווה את הפרויקטים בהיבטים חוזיים ורגולטוריים.
                  מסייע בתרגום צרכים מבצעיים למסמכים משפטיים מול רשויות, ספקים
                  ושותפים, תוך שמירה על האינטרסים של הלקוח.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Section>

      <Section title="אופי העבודה שלנו">
        <p>
          הצוות פועל בגישה שיתופית. כל פרויקט נבחן דרך הפריזמה המבצעית, ההנדסית,
          המשפטית והעסקית כדי לייצר פתרונות ברי-ביצוע.
        </p>
        <p className="legal-note">
          * כחלון יועצים מספקת שירותי ייעוץ אסטרטגי בלבד. תכנון הנדסי מפורט
          וחתימות מבוצעים ע&quot;י מהנדסים מוסמכים מטעם הלקוח.
        </p>
      </Section>
    </>
  );
}