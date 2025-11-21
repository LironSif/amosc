import { Section } from "../components/Section";

export function AboutPage() {
  return (
    <>
      {/* --- חלק עליון: טקסט + תמונה עם ה-Class החדש --- */}
      <Section title="על כחלון יועצים">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="text-lg font-medium text-blue-100 mb-4">
              כחלון יועצים היא חברת ייעוץ אסטרטגי־ביטחוני המתמחה בליווי פרויקטים
              בתחומי המיגון, המטווחים, התשתיות והרגולציה הביטחונית.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              אנו פועלים מול משרד הביטחון, רשויות מקומיות, רשם הקבלנים וגופי פיקוח נוספים,
              ומאפשרים ללקוחות לקבל מענה מקצועי, אמין ושיטתי מהשלב הראשוני ועד קבלת כל
              האישורים הנדרשים.
            </p>
            <p className="text-gray-300 leading-relaxed">
              החברה משלבת ניסיון שטח רב שנים, ידע בליסטי־טכני, הבנה הנדסית,
              תובנות רגולטוריות ויכולות ניהול פרויקטים ברמה גבוהה.
            </p>
          </div>
          
          {/* כאן השימוש ב-Class המיוחד שיצרנו */}
          <img 
            src="https://res.cloudinary.com/dfxw7cfie/image/upload/v1763727673/IMG-20250703-WA0006_bvz8av.jpg" 
            alt="סיור שטח הנדסי" 
            className="about-hero-image"
          />
        </div>
      </Section>

      <div className="section-divider" />

      {/* --- התמחות מקצועית --- */}
      <Section title="התמחות מקצועית">
        <ul className="cards-grid cards-grid--3">
          <li className="card">
            <h3 className="text-blue-400 font-bold text-lg mb-2">ספקים וקבלנים</h3>
            <p className="text-sm text-gray-300">ליווי קבלנים ומפעלי פלדה לקבלת מספר ספק משרד הביטחון ורישום מול רשם הקבלנים.</p>
          </li>
          <li className="card">
            <h3 className="text-blue-400 font-bold text-lg mb-2">מטווחים ובתי ירי</h3>
            <p className="text-sm text-gray-300">תכנון, ליווי וניהול פרויקטים מורכבים של מטווחים, כולל היבטי בטיחות ובליסטיקה.</p>
          </li>
          <li className="card">
            <h3 className="text-blue-400 font-bold text-lg mb-2">מיגון ותשתיות</h3>
            <p className="text-sm text-gray-300">פתרונות מיגון מתקדמים, חדרי ביטחון מפלדה ומיגון תשתיות קריטיות.</p>
          </li>
          <li className="card">
            <h3 className="text-blue-400 font-bold text-lg mb-2">הדמיות ותכנון</h3>
            <p className="text-sm text-gray-300">בדיקות היתכנות, בניית תפיסות הפעלה והדמיות ויזואליות לקבלת החלטות.</p>
          </li>
          <li className="card">
            <h3 className="text-blue-400 font-bold text-lg mb-2">רגולציה ורישוי</h3>
            <p className="text-sm text-gray-300">עבודה שוטפת מול רשויות מקומיות, חברות כלכליות וגופים מוסדיים.</p>
          </li>
        </ul>
      </Section>

      {/* --- ערכי החברה --- */}
      <Section title="ערכי החברה">
        <ul className="cards-grid cards-grid--3">
          <li className="card">
            <h3 className="text-blue-400 font-bold text-lg mb-2">מקצועיות ושקיפות</h3>
            <p className="text-sm text-gray-300">אנו מחויבים לדיוק מקצועי, סטנדרטים גבוהים ושקיפות מלאה מול הלקוח בכל שלב.</p>
          </li>
          <li className="card">
            <h3 className="text-blue-400 font-bold text-lg mb-2">שילוב הנדסי־ביטחוני</h3>
            <p className="text-sm text-gray-300">ראייה המשלבת חשיבה הנדסית עם הבנה עמוקה של צרכי הביטחון והשטח.</p>
          </li>
          <li className="card">
            <h3 className="text-blue-400 font-bold text-lg mb-2">אחריות ועמידה ביעדים</h3>
            <p className="text-sm text-gray-300">תפיסה מערכתית רחבה, הקפדה על לוחות זמנים ועמידה בכל הדרישות הרגולטוריות.</p>
          </li>
        </ul>
      </Section>

      <Section title="אופן העבודה שלנו">
        {/* שימוש באותו עיצוב של כרטיס כדי לשמור על אחידות */}
        <div className="card">
          <p className="text-gray-300 leading-relaxed">
            אנו עובדים בגישה פרקטית ושיתופית: החל מאפיון הצרכים, דרך תכנון
            והדמיות, ועד סגירת תהליכים מול משרד הביטחון ורשויות. הצוות משלב
            מומחים בתחומים שונים כדי לספק פתרון כולל, מסודר ויעיל.
          </p>
        </div>
      </Section>

      <Section title="הבהרת אחריות">
        <p className="text-xs text-slate-500 border-t border-slate-800 pt-4 mt-4">
          * כחלון יועצים מספקת שירותי ייעוץ אסטרטגי בלבד. כל תכנון הנדסי מפורט,
          חישובי קונסטרוקציה וחתימות מקצועיות מבוצעים על ידי מהנדסים מוסמכים
          מטעם הלקוח.
        </p>
      </Section>
    </>
  );
}