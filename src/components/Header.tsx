import { useState } from "react";
import { Link } from "react-router-dom"; // 1. ייבוא הרכיב Link
import { NavLinkItem } from "./NavLinkItem";
import logoKahlon from "../assets/kahlon-logo.svg";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        
        {/* 2. החלפנו את ה-div החיצוני ב-Link
            הוספנו no-underline ו-text-inherit כדי שלא ייראה כמו קישור כחול.
            הוספנו hover:opacity-90 כדי שתהיה אינדיקציה עדינה מאוד שזה לחיץ.
        */}
        <Link 
          to="/" 
          className="flex items-center gap-2 no-underline text-inherit hover:opacity-90 transition-opacity"
          onClick={closeMenu} // אופציונלי: סוגר את התפריט אם לוחצים על הלוגו במובייל
        >
          <img
            src={logoKahlon}
            alt="לוגו כחלון יועצים"
            className="logo-icon"
          />
          <div>
            <div className="logo-main">כחלון יועצים</div>
            <span className="logo-sub">אינטליגנציה ביטחונית לפרויקטי תשתית, מטווחים ומיגון</span>
          </div>
        </Link>

        {/* ניווט בדסקטופ */}
        <nav className="nav nav-desktop">
          <ul>
            <NavLinkItem to="/">דף הבית</NavLinkItem>
            <NavLinkItem to="/about">אודות</NavLinkItem>
            <NavLinkItem to="/services">שירותים</NavLinkItem>
            <NavLinkItem to="/projects">פרויקטים</NavLinkItem>
            <NavLinkItem to="/team">הצוות</NavLinkItem>
            <NavLinkItem to="/contact">צור קשר</NavLinkItem>
          </ul>
        </nav>

        {/* כפתור מובייל */}
        <button
          type="button"
          className="nav-toggle"
          onClick={toggleMenu}
        >
          {isOpen ? "סגור" : "תפריט"}
        </button>
      </div>

      {/* תפריט מובייל */}
      {isOpen && (
        <nav className="nav nav-mobile">
          <ul>
            <NavLinkItem to="/" onClick={closeMenu}>
              דף הבית
            </NavLinkItem>
            <NavLinkItem to="/about" onClick={closeMenu}>
              אודות
            </NavLinkItem>
            <NavLinkItem to="/services" onClick={closeMenu}>
              שירותים
            </NavLinkItem>
            <NavLinkItem to="/projects" onClick={closeMenu}>
              פרויקטים
            </NavLinkItem>
            <NavLinkItem to="/team" onClick={closeMenu}>
              הצוות
            </NavLinkItem>
            <NavLinkItem to="/contact" onClick={closeMenu}>
              צור קשר
            </NavLinkItem>
          </ul>
        </nav>
      )}
    </header>
  );
}