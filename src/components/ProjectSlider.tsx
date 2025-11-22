import { useState } from "react";

type ProjectSlide = {
  id: number;
  title: string;
  location?: string;
  summary: string;
  details: string[];
};

const slides: ProjectSlide[] = [
  {
    id: 1,
    title: "מטווח אלי הכט - נשר",
    location: "נשר, אזור תעשייה",
    summary:
      "ליווי תכנוני ורגולטורי להקמת מטווח עירוני מתקדם, כולל מיגון בליסטי ותכנון קווי ירי.",
    details: [
      "מטווח סגור לנשק קל",
      "התאמה לדרישות משטרת ישראל והרשות המקומית",
      "דגש על בטיחות, מיגון ותפעול שוטף",
    ],
  },
  {
    id: 2,
    title: "מודל מטווח סגור 50×12",
    location: "מודל טיפוסי לפריסה במספר אתרים",
    summary:
      "מודל הנדסי מלא למתחם ירי סגור, כולל חלוקת שטחים, שכבות מיגון וכתבי כמויות.",
    details: [
      "מספר קווי ירי במבנה אחד",
      "תכנון שכבות מיגון לקירות ותקרה",
      "בסיס עבודה למהנדסים וקבלנים בשטח",
    ],
  },
  {
    id: 3,
    title: "פתרונות מיגון וחדרי ביטחון מפלדה",
    location: "רשויות ומתקנים ציבוריים",
    summary:
      "ליווי בבחירת והצבת חדרי ביטחון מפלדה כמרחב מוגן בליסטי בשטחים ציבוריים ומבנים קיימים.",
    details: [
      "בלימת רסיסים ועומסי הדף בהתאם לתקנים רלוונטיים",
      "שילוב במבנים קיימים - כולל קומת עמודים",
      "עבודה בשיתוף מהנדסי קונסטרוקציה ויועצי מיגון",
    ],
  },
];

export function ProjectSlider() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[current];

  return (
    <div className="project-slider">
      <div className="project-slider-viewport">
        <div className="project-slide">
          <header className="project-header">
            <h3>{currentSlide.title}</h3>
            {currentSlide.location && (
              <p className="project-location">{currentSlide.location}</p>
            )}
          </header>

          <p className="project-summary">{currentSlide.summary}</p>

          <ul className="project-meta">
            {currentSlide.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-slider-controls">
        <button
          type="button"
          className="btn btn-secondary btn-small"
          onClick={goNext}
        >
          הקודם
        </button>
        <span className="project-slider-counter">
          {current + 1} / {total}
        </span>
        <button
          type="button"
          className="btn btn-secondary btn-small"
          onClick={goPrev}
        >
          הבא
        </button>
      </div>

      <div className="project-slider-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={
              "project-slider-dot" +
              (index === current ? " project-slider-dot-active" : "")
            }
            onClick={() => setCurrent(index)}
            aria-label={`מעבר לפרויקט ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
