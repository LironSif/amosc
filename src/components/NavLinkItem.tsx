import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

type NavLinkItemProps = {
  to: string;
  children: ReactNode;
  onClick?: () => void;
};

export function NavLinkItem({ to, children, onClick }: NavLinkItemProps) {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          isActive ? "nav-link nav-link-active" : "nav-link"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
