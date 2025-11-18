import { useNavigate } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";

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

      <Section title="מי אנחנו">
        <p>
          כחלון יועצים היא חברה מובילה בתחום הייעוץ הביטחוני הנדסי, המעניקה
          ליווי מקצועי לרשויות מקומיות, קבלנים וגופים מוסדיים. אנו מחברים בין
          רגולציה ביטחונית, תכנון הנדסי ויישום בשטח.
        </p>
      </Section>

      <Section title="תחומי המומחיות שלנו">
        <ul className="cards-grid">
          <li className="card" onClick={() => navigate("/services")}>
            <h3>ליווי לקבלת מספר ספק משרד הביטחון</h3>
            <p>תהליך מסודר ומקצועי עד קבלת האישור.</p>
          </li>
          <li className="card" onClick={() => navigate("/services")}>
            <h3>תכנון והקמה של מטווחים ובתי ירי</h3>
            <p>מטווחים סגורים ופתוחים, בתי ירי ומתקני אימון מתקדמים.</p>
          </li>
          <li className="card" onClick={() => navigate("/services")}>
            <h3>מיגון מבנים וחדרי ביטחון</h3>
            <p>פתרונות מיגון וחיזוק מבנים לרשויות ולקבלנים.</p>
          </li>
        </ul>
      </Section>
    </>
  );
}
