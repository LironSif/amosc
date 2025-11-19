import { useState } from "react";
import { NavLinkItem } from "./NavLinkItem";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-main">כחלון יועצים</span>
          <span className="logo-sub">
            אינטליגנציה ביטחונית לפרויקטי תשתית, מטווחים ומיגון
          </span>
        </div>

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
