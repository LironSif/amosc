import { Section } from "../components/Section";

// נתוני השירותים - קל לערוך מכאן
const servicesData = [
  {
    id: 1,
    title: "רישום ספק וליווי מול משהב\"ט",
    description:
      "ליווי מלא לקבלת מספר ספק משרד הביטחון, העלאת סיווג קבלני והסדרה רגולטורית מול רשם הקבלנים וגופים מוסדיים.",
    iconImage: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763729401/Gemini_Generated_Image_8a4yc28a4yc28a4y_uchuxo.png",
    linkText: "לפרטים על תהליך הספק",
  },
  {
    id: 2,
    title: "חדרי ביטחון ומיגון פלדה",
    description:
      "ייעוץ ותכנון למרחבים מוגנים, ממ\"מים ומבני פלדה בליסטיים. פתרונות לחיזוק מבנים קיימים והצבה בשטחים ציבוריים.",
    iconImage: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715774/Gemini_Generated_Image_ktfdo7ktfdo7ktfd_dz0q2m.png",
    linkText: "לפתרונות המיגון שלנו",
  },
  {
    id: 3,
    title: "מטווחים ואימון טקטי",
    description:
      "תכנון הנדסי ובליסטי למטווחים פתוחים וסגורים. בניית תפיסת הפעלה, שילוב מטרות חכמות ושימוש ברחפנים לאימון.",
    iconImage: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763755548/Gemini_Generated_Image_7fuw9p7fuw9p7fuw_wti8hj.png",
    linkText: "לעולם המטווחים",
  },
];

export function ServicesPage() {
  return (
    <>
      {/* --- פתיח --- */}
      <Section title="תחומי השירות שלנו">
        <div className="max-w-3xl">
          <p className="text-lg text-slate-300 mb-6">
            כחלון יועצים מחברת בין ניסיון צבאי, הבנה הנדסית ויכולות ביצוע. 
            אנו מספקים מעטפת מקצועית לקבלנים, יזמים ורשויות המבקשים לפעול מול מערכת הביטחון בצורה יעילה ובטוחה.
          </p>
        </div>

        {/* --- הגריד החדש (כרטיסים) --- */}
        <div className="services-grid-container">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card-modern">
              
              {/* תמונה קטנה/אייקון */}
              <div className="service-icon-wrapper">
                <img 
                  src={service.iconImage} 
                  alt={service.title} 
                  className="service-icon-img"
                />
              </div>

              {/* תוכן הכרטיס */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                
                {/* כפתור/לינק עדין */}
                <div className="service-link-wrapper">
                  <span className="service-link">
                    {service.linkText} <span className="arrow">←</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- הבהרת אחריות --- */}
      <Section>
        <div className="legal-note-container">
           <p className="legal-note text-center">
            * כחלון יועצים מספקת שירותי ייעוץ אסטרטגי בלבד. כל תכנון הנדסי
            מחייב, חישובים וחתימות מקצועיות מבוצעים על ידי מהנדסים ויועצים
            מוסמכים מטעם הלקוח.
          </p>
        </div>
      </Section>
    </>
  );
}