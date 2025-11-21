export function TrustBar() {
  return (
    <div className="trust-section">
      <p className="trust-title">מומחיות מוכחת בעבודה מול הגופים המובילים</p>
      <div className="trust-grid">
        {/* מכיוון שאין לנו לוגואים כרגע, נשתמש בתגיות טקסט מעוצבות */}
        <div className="trust-badge">משרד הביטחון</div>
        <div className="trust-badge">משטרת ישראל</div>
        <div className="trust-badge">רשם הקבלנים</div>
        <div className="trust-badge">עיריות ורשויות מקומיות</div>
        <div className="trust-badge">מפעלי תעשייה ופלדה</div>
        <div className="trust-badge">פיקוד העורף</div>
      </div>
    </div>
  );
}