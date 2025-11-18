import { Section } from "../components/Section";

export function ContactPage() {
  return (
    <Section title="צור קשר">
      <p>
        נשמח לסייע לכם בכל שאלה או פרויקט. השאירו פרטים או צרו קשר בטלפון או
        בדוא"ל.
      </p>

      <form className="contact-form">
        <div className="form-row">
          <label>
            שם מלא
            <input type="text" name="name" />
          </label>
        </div>
        <div className="form-row">
          <label>
            טלפון
            <input type="tel" name="phone" />
          </label>
        </div>
        <div className="form-row">
          <label>
            דוא"ל
            <input type="email" name="email" />
          </label>
        </div>
        <div className="form-row">
          <label>
            נושא הפנייה
            <textarea name="message" rows={4} />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          שליחה
        </button>
      </form>
    </Section>
  );
}
