import { Section } from "../components/Section";
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Section>
      <div className="text-center py-20">
        <h1 className="text-6xl font-bold text-slate-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-6">
          העמוד שחיפשת לא נמצא
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          יתכן שהעמוד הוסר, שמו שונה או שהוא אינו זמין כרגע.
        </p>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          חזרה לדף הבית
        </button>
      </div>
    </Section>
  );
}