

type HeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  primaryActionText?: string;
  secondaryActionText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

export function Hero({
  title,
  subtitle,
  eyebrow,
  primaryActionText,
  secondaryActionText,
  onPrimaryClick,
  onSecondaryClick,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}

        {(primaryActionText || secondaryActionText) && (
          <div className="hero-actions">
            {primaryActionText && (
              <button className="btn btn-primary" onClick={onPrimaryClick}>
                {primaryActionText}
              </button>
            )}
            {secondaryActionText && (
              <button className="btn btn-secondary" onClick={onSecondaryClick}>
                {secondaryActionText}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
