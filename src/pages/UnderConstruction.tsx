import { useNavigate } from "react-router-dom";

export function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* אלמנט רקע עדין */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-2xl mx-auto z-10">
        {/* אייקון */}
        <div className="text-[8rem] md:text-[10rem] leading-none mb-8 animate-pulse drop-shadow-2xl filter">
          🚧
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          אנחנו בונים כאן משהו <span className="text-blue-400">מצוין</span>
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl mb-12 leading-relaxed font-light max-w-xl mx-auto">
          העמוד הזה נמצא כרגע בעבודות תשתית.
          <br className="hidden md:block" />
          אנו פועלים במרץ כדי להעלות את התוכן המקצועי והמדויק ביותר בקרוב.
        </p>

        {/* שינויים:
           1. gap-6: נותן רווח אוויר טוב גם לגובה וגם לרוחב.
           2. min-w-[200px]: מגדיר רוחב מינימלי מכובד לכפתורים.
           3. py-3: נותן להם קצת יותר גובה.
        */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-secondary min-w-[220px] py-3"
          >
            חזור לדף הקודם
          </button>
         <div className="mt-4">.</div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary m-0 min-w-[220px] py-3"
          >
            מעבר לדף הבית
          </button>
        </div>
      </div>
    </div>
  );
}