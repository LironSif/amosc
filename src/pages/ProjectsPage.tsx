import { useState } from "react";
import { Section } from "../components/Section";

// ------------------------------------------------------------------
// 1. הגדרת מבנה הנתונים
// ------------------------------------------------------------------

const projectsData = [
  {
    id: 1,
    // שינוי: הורדתי את "פרויקט דגל"
    title: "מטווח מטולה", 
    description:
      "פרויקט מקיף הכולל אפיון, הדמיה, חלוקת שטחים ותכנון מסלולי ירי. הפרויקט בוצע משלב הרעיון ועד מודל היתכנות מלא, כולל פתרונות לוגיסטיים, מיגון והצבות, תוך שימוש בהדמיות תלת-ממד מתקדמות להמחשת התוצר הסופי.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1753569875/20250727_0142_Futuristic_Shooting_Range_Transformation_simple_compose_01k14ecze7f4691xek9xnspdb3_qdd69t.mp4",
        // נשתמש בפוסטר רק לתמונה הקטנה למטה, לא לוידאו הראשי
        poster: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715487/steel_large_constrction_object_jty0ki.jpg",
        alt: "הדמיית וידאו מטווח מטולה",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1753569567/Architectural_Visualization_Video_Creation_1_qosmad.mp4",
        poster: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715487/steel_large_constrction_object_jty0ki.jpg",
        alt: "הדמיית וידאו מטווח מטולה 2",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1753569014/Architectural_Visualization_Video_Creation_oy7eok.mp4",
        poster: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715487/steel_large_constrction_object_jty0ki.jpg",
        alt: "הדמיית וידאו מטווח מטולה 3",
      },
    ],
  },
  {
    id: 2,
    title: "פתרונות מיגון וחדרי ביטחון מפלדה",
    description:
      "תכנון וביצוע של חדרי ביטחון בליסטיים ומבני פלדה לחיזוק מבנים קיימים. הפרויקטים משלבים יכולות ייצור מתקדמות עם עמידה בתקנים בליסטיים מחמירים, ומיועדים להצבה מהירה בשטחים ציבוריים ומוסדות.",
    media: [
       {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1752956705/Barrier_Structure_Video_Showcase_crs3yq.mp4",
        alt: "וידאו מיגון",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1763724709/%D7%A1%D7%A8%D7%98%D7%95%D7%9F_%D7%9E%D7%91%D7%A0%D7%94_%D7%9E%D7%AA%D7%9B%D7%AA_%D7%9B%D7%A7%D7%95%D7%91%D7%99%D7%99%D7%AA_%D7%9C%D7%92%D7%95_orkgq7.mp4",
        alt: "וידאו מיגון",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1752954879/WhatsApp_Image_2025-07-18_at_12.09.08_PM_bci0mx.jpg",
        alt: "מבנה ממוגן 1",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1752954880/WhatsApp_Image_2025-07-19_at_10.42.06_PM_nqxshu.jpg",
        alt: "מבנה ממוגן 2",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1752098003/Gemini_Generated_Image_kt7uomkt7uomkt7u_jx8qfi.png",
        alt: "מבנה ממוגן 3",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1751743025/WhatsApp_Image_2025-07-05_at_10.07.41_AM_jeh8cn.jpg",
        alt: "מבנה ממוגן 4",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715774/Gemini_Generated_Image_ktfdo7ktfdo7ktfd_dz0q2m.png",
        alt: "מבנה ממוגן 5",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715775/Gemini_Generated_Image_yoihthyoihthyoih_l4wqpt.png",
        alt: "מבנה ממוגן 6",
      },
    ],
  },
  {
    id: 3,
    title: "הדמיות ותכנון תלת־ממד",
    description:
      "שימוש במודלים ויזואליים מתקדמים לבדיקת היתכנות ותכנון ראשוני. ההדמיות מאפשרות ללקוח 'לסייר' בפרויקט עוד לפני שהונחה האבן הראשונה ולתכנן נכון את חלוקת השטח וקווי הירי.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1753569014/Architectural_Visualization_Video_Creation_oy7eok.mp4",
        alt: "וידאו הדמיה",
      },
    ],
  },
  {
    id: 4,
    title: "יכולות ושטח — הצוות בפעולה",
    description:
      "החיבור בין המשרד לשטח הוא סוד ההצלחה שלנו. הגלריה מציגה תיעוד של בדיקות שטח, ליווי ייצור במפעלים, בדיקות בליסטיקה ושימוש ברחפנים למיפוי ופיקוח.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715487/Liron_in_F16_atxoh1.jpg",
        alt: "לירון במטוס",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715495/Liron_and_drone_avata_g8xhy9.jpg",
        alt: "רחפן",
      },
      
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715778/amos_in_steel_factory3_t5pscz.jpg",
        alt: "פלדה",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715793/amos_in_steel_factory2_mg2dex.jpg",
        alt: "פלד1ה",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715795/Liron_and_drone_avata_macsqu.jpg",
        alt: "פל2ה",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763724551/Liron_in_shooting_rang3_fnues7.png",
        alt: "פלד3ה",
      },
       {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715779/Liron_in_f16_2_ghxl4x.jpg",
        alt: "פלד3ה",
      },
         {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715778/amos_in_steel_factory3_t5pscz.jpg",
        alt: "פלד3ה",
      },
          {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763727673/IMG-20250703-WA0006_bvz8av.jpg",
        alt: "פלד3ה",
      },
    ],
  },
];

// ------------------------------------------------------------------
// 2. קומפוננטת כרטיס פרויקט חכם (עם סליידר פנימי ולוגיקת חלון)
// ------------------------------------------------------------------

function ProjectCard({ project }: { project: any }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMedia = project.media[activeIndex];
  const totalItems = project.media.length;

  // פונקציות ניווט
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? totalItems - 1 : prev - 1
    );
  };

  // --- לוגיקת מניעת ריצוד (Sliding Window) ---
  // מציג מקסימום 4 תמונות קטנות, ומזיז את החלון לפי התמונה הפעילה
  const MAX_THUMBNAILS = 4;
  
  let startWindow = Math.max(0, activeIndex - 1);
  if (startWindow + MAX_THUMBNAILS > totalItems) {
    startWindow = Math.max(0, totalItems - MAX_THUMBNAILS);
  }
  
  // יצירת מערך מצומצם לתצוגה
  const visibleThumbnails = project.media
    .map((item: any, originalIndex: number) => ({ item, originalIndex }))
    .slice(startWindow, startWindow + MAX_THUMBNAILS);

  return (
    <article className="project-full-card">
      {/* כותרת וטקסט */}
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
      </div>

      {/* אזור המדיה */}
      <div className="card-media-area">
        
        {/* תצוגה ראשית */}
        <div className="media-main-container">
          {/* הצגת חיצים רק אם יש יותר מפריט אחד */}
          {totalItems > 1 && (
            <>
              <button
                className="slider-arrow arrow-right"
                onClick={handleNext}
                aria-label="הבא"
              >
                ❮
              </button>
              <button
                className="slider-arrow arrow-left"
                onClick={handlePrev}
                aria-label="הקודם"
              >
                ❯
              </button>
            </>
          )}

          {/* תוכן ראשי */}
          {activeMedia.type === "video" ? (
            <video
              key={activeMedia.src} // מאפס את הנגן בהחלפה
              controls
              className="media-content"
              // כאן הסרתי את ה-poster כבקשתך, הוידאו יוצג מיד
            >
              <source src={activeMedia.src} type="video/mp4" />
              הדפדפן שלך לא תומך בוידאו.
            </video>
          ) : (
            <img
              src={activeMedia.src}
              alt={activeMedia.alt}
              className="media-content"
            />
          )}
        </div>

        {/* תמונות קטנות - מציג רק 4 כדי למנוע ריצוד וגלילה */}
        {totalItems > 1 && (
          <div className="media-thumbnails">
            {visibleThumbnails.map(({ item, originalIndex }: any) => (
              <button
                key={originalIndex}
                onClick={() => setActiveIndex(originalIndex)}
                className={`thumbnail-btn ${
                  originalIndex === activeIndex ? "thumbnail-active" : ""
                }`}
              >
                {/* בתמונות הקטנות נשתמש בפוסטר אם זה וידאו, אחרת תמונה שבורה */}
                <img
                  src={item.type === "video" ? (item.poster || item.src) : item.src} 
                  alt="thumbnail"
                  className="thumbnail-img"
                  onError={(e) => {
                    // אם אין תמונה (למשל וידאו בלי פוסטר), נשים אייקון גנרי או צבע
                    e.currentTarget.style.display = 'none'; 
                    e.currentTarget.parentElement!.style.backgroundColor = '#334155'; // ריבוע אפור
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

// ------------------------------------------------------------------
// 3. הדף הראשי
// ------------------------------------------------------------------

export function ProjectsPage() {
  return (
    <>
      <Section title="פרויקטים נבחרים">
        <p className="mb-8">
          בעמוד זה מוצגים פרויקטים נבחרים אותם ליוותה כחלון יועצים. כל פרויקט
          הוא שילוב של אתגר הנדסי, צורך ביטחוני ופתרון יצירתי בשטח.
        </p>

        <div className="projects-stack">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}