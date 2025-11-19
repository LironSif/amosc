import { useState } from "react";
import type { FormEvent } from "react";
import { Section } from "../components/Section";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS environment variables are missing");
      setStatus("error");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_phone: phone,
          from_email: email,
          subject: topic,
          message,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setTopic("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error", err);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section title="צור קשר">
      <p>
        נשמח לסייע לכם בכל שאלה בנוגע למטווחים, מיגון, חדרי ביטחון וליווי מול
        משרד הביטחון ורשויות.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            שם מלא
            <input
              type="text"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            טלפון
            <input
              type="tel"
              name="from_phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            דוא"ל
            <input
              type="email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            נושא הפנייה
            <input
              type="text"
              name="subject"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            פרטי הבקשה
            <textarea
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSending}>
          {isSending ? "שולח..." : "שליחה"}
        </button>

        {status === "success" && (
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#4ade80" }}>
            ההודעה נשלחה בהצלחה. נחזור אליך בהקדם.
          </p>
        )}

        {status === "error" && (
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#f97373" }}>
            אירעה שגיאה בשליחת ההודעה. נסה שוב מאוחר יותר.
          </p>
        )}
      </form>
    </Section>
  );
}
