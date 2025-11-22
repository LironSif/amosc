import { useState, useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Section } from "../components/Section";

// רכיב קטן לאייקונים - נשאר זהה
function StatusIcon({ type }: { type: 'success' | 'error' }) {
  if (type === 'success') {
    return (
      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  return (
    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setFeedback(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFeedback({ type: 'error', message: "שגיאת קונפיגורציה: חסרים מפתחות שליחה." });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setFeedback({ type: 'success', message: "ההודעה נשלחה בהצלחה! נחזור אליך בהקדם." });
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setFeedback({ type: 'error', message: "אירעה שגיאה בשליחה. אנא נסו שנית או צרו קשר בטלפון." });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Section title="צור קשר">
        <p className="mb-10 max-w-3xl mx-auto text-center text-slate-300">
          מעוניינים בייעוץ? יש לכם פרויקט מורכב שדורש פתרון יצירתי?
          השאירו פרטים ונחזור אליכם בהקדם.
        </p>

        <div className="contact-split-layout">
          
          <div className="contact-info-box h-fit">
            <h3 className="text-xl font-bold text-white mb-6">פרטי התקשרות</h3>
            <div className="contact-detail-item">
              <div className="contact-icon">📍</div>
              <div>
                <span className="contact-label">כתובת</span>
                <span>רחוב הברזל 1, תל אביב (מתחם רמת החייל)</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-icon">📞</div>
              <div>
                <span className="contact-label">טלפון</span>
                <a href="tel:0500000000" className="hover:text-blue-400 transition-colors">050-0000000</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-icon">✉️</div>
              <div>
                <span className="contact-label">דוא"ל</span>
                <a href="mailto:info@kahlon.co.il" className="hover:text-blue-400 transition-colors">info@kahlon.co.il</a>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h3 className="text-xl font-bold text-white mb-6">שלחו לנו הודעה</h3>
            
            <div className="form-row">
              <label htmlFor="user_name">שם מלא</label>
              <input type="text" name="user_name" id="user_name" required placeholder="ישראל ישראלי" />
            </div>
            <div className="form-row">
              <label htmlFor="user_phone">טלפון</label>
              <input type="tel" name="user_phone" id="user_phone" required placeholder="050-0000000" dir="ltr" className="text-right" />
            </div>
            <div className="form-row">
              <label htmlFor="user_email">דוא"ל</label>
              <input type="email" name="user_email" id="user_email" required placeholder="name@example.com" dir="ltr" className="text-right" />
            </div>
            <div className="form-row">
              <label htmlFor="subject">נושא הפנייה</label>
              <input type="text" name="subject" id="subject" required placeholder="לדוגמה: ייעוץ למטווח חדש" />
            </div>
            <div className="form-row">
              <label htmlFor="message">פרטי הבקשה</label>
              <textarea name="message" id="message" rows={4} required placeholder="ספר לנו בקצרה על הפרויקט..." />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`btn btn-primary w-full mt-4 flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  שולח...
                </>
              ) : (
                "שליחת ההודעה"
              )}
            </button>

            {/* --- התיקון: שימוש ב-Class CSS ייעודי --- */}
            {feedback && (
              <div className={`form-feedback ${
                feedback.type === 'success' ? 'form-feedback-success' : 'form-feedback-error'
              }`}>
                <div className="mt-0.5">
                  <StatusIcon type={feedback.type} />
                </div>
                <div>
                  <p className="font-medium text-sm">
                    {feedback.type === 'success' ? 'הצלחה!' : 'שגיאה'}
                  </p>
                  <p className="text-sm opacity-90">
                    {feedback.message}
                  </p>
                </div>
              </div>
            )}
            {/* ------------------------------------------- */}

          </form>
        </div>
      </Section>
    </>
  );
}