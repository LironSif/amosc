import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="section">
      {(title || subtitle) && (
        <header className="section-header">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
      )}
      <div className="section-body">{children}</div>
    </section>
  );
}
