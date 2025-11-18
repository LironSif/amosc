import { NavLinkItem } from "./NavLinkItem";

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-main">כחלון יועצים</span>
          <span className="logo-sub">
            אינטליגנציה ביטחונית לפרויקטי תשתית, מטווחים ומיגון
          </span>
        </div>

        <nav className="nav">
          <ul>
            <NavLinkItem to="/">דף הבית</NavLinkItem>
            <NavLinkItem to="/about">אודות</NavLinkItem>
            <NavLinkItem to="/services">שירותים</NavLinkItem>
            <NavLinkItem to="/projects">פרויקטים</NavLinkItem>
            <NavLinkItem to="/team">הצוות</NavLinkItem>
            <NavLinkItem to="/contact">צור קשר</NavLinkItem>
          </ul>
        </nav>
      </div>
    </header>
  );
}
