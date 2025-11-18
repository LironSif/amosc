import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

type NavLinkItemProps = {
  to: string;
  children: ReactNode;
};

export function NavLinkItem({ to, children }: NavLinkItemProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "nav-link nav-link-active" : "nav-link"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
