import { useNavigate } from "react-router-dom";

export function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">מוכנים לקדם את הפרויקט שלכם?</h2>
        <p className="cta-text">
          בין אם אתם צריכים מספר ספק, תכנון מטווח או פתרון מיגון הנדסי –
          הצוות שלנו כאן כדי לחבר בין השטח לרגולציה.
        </p>
        <button 
          onClick={() => navigate("/contact")}
          className="btn btn-primary"
          style={{ padding: "0.8rem 2rem", fontSize: "1.1rem" }}
        >
          תיאום שיחת ייעוץ ←
        </button>
      </div>
    </section>
  );
}