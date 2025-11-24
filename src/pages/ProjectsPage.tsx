import { useState } from "react";
import { Section } from "../components/Section";
import { optimizeCloudinary } from "../utils/cloudinary";

// ------------------------------------------------------------------
// 1. הגדרת פרויקטים לגריד
// ------------------------------------------------------------------

const gridProjects = [
  {
    id: 1,
    title: "מטווח מטולה",
    description:
      "ביצוע סיור שטח מקצועי עם גורמי המועצה והכנת הדמיות תלת-ממד מתקדמות לצורך המחשה, בדיקת היתכנות וקידום התכנון מול הגורמים הרלוונטיים.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1763754655/PXL_20250721_074205524.LS_l9simm.mp4",
          poster: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763756431/poster1_nlttjq.png",
        alt: "וידאו מהשטח במטולה",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763754633/PXL_20250721_074221520_utyoci.jpg",
        alt: "תמונה מהשטח במטולה",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1753569875/20250727_0142_Futuristic_Shooting_Range_Transformation_simple_compose_01k14ecze7f4691xek9xnspdb3_qdd69t.mp4",
        poster: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763756431/poster1_nlttjq.png", 
        alt: "הדמיית וידאו מטווח מטולה",
      },
    ],
  },
  {
    id: 2,
    title: "מטווח  12 * 50",
    description:
      "תכנון מקיף וטיפול בבירוקרטיה מול הרשויות וגורמי הרישוי. הפרויקט כולל התאמת המתווה לדרישות הבטיחות והרגולציה.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763755633/Gemini_Generated_Image_wl7fbhwl7fbhwl7f_gdrgnk.png",
        alt: "תכנון מטווח אלי הכט",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763755548/Gemini_Generated_Image_7fuw9p7fuw9p7fuw_wti8hj.png",
        alt: "שטח מטווח",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763730076/Gemini_Generated_Image_iiuardiiuardiiua_gg6ecl.png",
        alt: "שטח מטווח נוסף",
      },
    ],
  },
  {
    id: 3,
    title: "פתרונות מיגון וחדרי ביטחון מפלדה",
    description:
      "תכנון וביצוע של חדרי ביטחון בליסטיים ומבני פלדה לחיזוק מבנים קיימים. הפרויקטים משלבים יכולות ייצור מתקדמות עם עמידה בתקנים בליסטיים מחמירים.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1763724709/%D7%A1%D7%A8%D7%98%D7%95%D7%9F_%D7%9E%D7%91%D7%A0%D7%94_%D7%9E%D7%AA%D7%9B%D7%AA_%D7%9B%D7%A7%D7%95%D7%91%D7%99%D7%99%D7%AA_%D7%9C%D7%92%D7%95_orkgq7.mp4",
        poster: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715774/Gemini_Generated_Image_ktfdo7ktfdo7ktfd_dz0q2m.png",
        alt: "וידאו מיגון מבנה",
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
    id: 4,
    title: "הדמיות ותכנון תלת־ממד",
    description:
      "שימוש במודלים ויזואליים מתקדמים לבדיקת היתכנות ותכנון ראשוני. ההדמיות מאפשרות ללקוח 'לסייר' בפרויקט עוד לפני שהונחה האבן הראשונה ולתכנן נכון את חלוקת השטח וקווי הירי.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1753569567/Architectural_Visualization_Video_Creation_1_qosmad.mp4",
        poster: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763756438/poster2_zm4z2s.png",
        alt: "הדמיה 1",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1753569875/20250727_0142_Futuristic_Shooting_Range_Transformation_simple_compose_01k14ecze7f4691xek9xnspdb3_qdd69t.mp4",
        poster: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763756431/poster1_nlttjq.png",
        alt: "הדמיה 2",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1753569014/Architectural_Visualization_Video_Creation_oy7eok.mp4",
        poster: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763756438/poster2_zm4z2s.png",
        alt: "הדמיה 3",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1752956705/Barrier_Structure_Video_Showcase_crs3yq.mp4",
        poster: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763756438/poster3_gcu4yv.png",
        alt: "הדמיה 4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dfxw7cfie/video/upload/v1752083593/Drone_vs_Tank_Cage_Test_vywlni.mp4",
        poster: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1752098157/Gemini_Generated_Image_2p3u0a2p3u0a2p3u_j7nycq.png",
        alt: "בדיקת רחפן וכלוב",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1752098157/Gemini_Generated_Image_2p3u0a2p3u0a2p3u_j7nycq.png",
        alt: "הדמיה סטטית 1",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1752098004/Gemini_Generated_Image_kt7uomkt7uomkt7u_1_eorqex.png",
        alt: "הדמיה סטטית 2",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1751988605/ChatGPT_Image_Jul_8_2025_06_29_43_PM_eyylnr.png",
        alt: "הדמיה סטטית 3",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715776/Gemini_Generated_Image_r92iemr92iemr92i_b4xpzj.png",
        alt: "הדמיה סטטית 4",
      },
    ],
  },
];

// ------------------------------------------------------------------
// 2. הפרויקט הרחב: יכולות ושטח
// ------------------------------------------------------------------

const teamActionProject = {
  id: "team-action",
  title: "יכולות ושטח — הצוות בפעולה",
  description:
    "החיבור בין המשרד לשטח הוא סוד ההצלחה שלנו. הגלריה מציגה תיעוד של בדיקות שטח, ליווי ייצור במפעלים, בדיקות בליסטיקה ושימוש ברחפנים למיפוי ופיקוח.",
  media: [
    { type: "image", src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763752427/IMG-20251121-WA0047_fe7sj2.jpg", alt: "פעילות שטח 1" },
    { type: "image", src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763752421/IMG-20251121-WA0053_vutoda.jpg", alt: "פעילות שטח 2" },
    { type: "image", src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715487/Liron_in_F16_atxoh1.jpg", alt: "לירון בטייסת" },
    { type: "image", src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715778/amos_in_steel_factory3_t5pscz.jpg", alt: "עמוס במפעל פלדה" },
    { type: "image", src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715793/amos_in_steel_factory2_mg2dex.jpg", alt: "עמוס במפעל 2" },
    { type: "image", src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715795/Liron_and_drone_avata_macsqu.jpg", alt: "לירון ורחפן" },
    { type: "image", src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763724551/Liron_in_shooting_rang3_fnues7.png", alt: "מטווח" },
    { type: "image", src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763715779/Liron_in_f16_2_ghxl4x.jpg", alt: "F16" },
    { type: "image", src: "https://res.cloudinary.com/dfxw7cfie/image/upload/v1763727673/IMG-20250703-WA0006_bvz8av.jpg", alt: "שטח 3" },
  ],
};

// ------------------------------------------------------------------
// 3. קומפוננטת כרטיס פרויקט חכם + סליידר נקודות
// ------------------------------------------------------------------

function ProjectCard({ project }: { project: any, desktopThumbnails?: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // --- לוגיקה למגע (Swipe) ---
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };
  // ---------------------------

  const activeMedia = project.media[activeIndex];
  const totalItems = project.media.length;

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % totalItems);
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));

  return (
    <article className="project-full-card">
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
      </div>

      <div className="card-media-area">
        {/* Media Container */}
        <div 
          className="media-main-container touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {totalItems > 1 && (
            <>
              <button className="slider-arrow arrow-right" onClick={handleNext} aria-label="הבא">❮</button>
              <button className="slider-arrow arrow-left" onClick={handlePrev} aria-label="הקודם">❯</button>
            </>
          )}
          
          {activeMedia.type === "video" ? (
            <video 
              key={activeMedia.src} 
              controls 
              className="media-content"
              poster={activeMedia.poster ? optimizeCloudinary(activeMedia.poster, 800) : undefined}
            >
              <source src={activeMedia.src} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={optimizeCloudinary(activeMedia.src, 800)} 
              alt={activeMedia.alt} 
              className="media-content select-none pointer-events-none" 
            />
          )}
        </div>
        
        {/* --- שינוי: נקודות (Dots) במקום תמונות --- */}
        {totalItems > 1 && (
          <div className="slider-pagination">
            {project.media.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`pagination-dot ${index === activeIndex ? "pagination-dot-active" : ""}`}
                aria-label={`עבור לתמונה ${index + 1}`}
              />
            ))}
          </div>
        )}
        {/* ------------------------------------------- */}

      </div>
    </article>
  );
}

// ------------------------------------------------------------------
// 4. עמוד הפרויקטים הראשי
// ------------------------------------------------------------------

export function ProjectsPage() {
  return (
    <>
      <Section title="פרויקטים נבחרים">
        <p className="mb-12 max-w-3xl mx-auto text-slate-300">
          בעמוד זה מוצגים פרויקטים נבחרים אותם ליוותה כחלון יועצים. כל פרויקט
          הוא שילוב של אתגר הנדסי, צורך ביטחוני ופתרון יצירתי בשטח.
        </p>

        <div className="projects-stack w-full">
          {/* הפרויקטים הקטנים */}
          {gridProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* הפרויקט הגדול - תופס את כל הרוחב */}
          <div style={{ gridColumn: "1 / -1" }} className="mt-8 md:mt-12 w-full"> 
            <ProjectCard project={teamActionProject} />
          </div>
        </div>
      </Section>
    </>
  );
}