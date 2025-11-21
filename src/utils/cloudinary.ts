// src/utils/cloudinary.ts

export function optimizeCloudinary(url: string, width: number = 800) {
  if (!url) return "";
  if (!url.includes("cloudinary.com")) return url; // אם זו לא תמונה של קלאודינרי, תחזיר אותה כמו שהיא

  // הוספת פרמטרים לאופטימיזציה:
  // f_auto = פורמט אוטומטי (webp/avif)
  // q_auto = איכות אוטומטית
  // w_ = רוחב התמונה בפיקסלים
  // c_limit = לא למתוח את התמונה אם היא קטנה מהרוחב המבוקש
  
  const params = `f_auto,q_auto,w_${width},c_limit`;

  // הטריק הוא להכניס את הפרמטרים אחרי ה-"/upload/"
  return url.replace("/upload/", `/upload/${params}/`);
}