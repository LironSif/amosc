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
    <section className="pt-10 pb-6">
      <div className="mx-auto max-w-5xl px-4">
       
          {eyebrow && (
            <p className="mb-2 text-xs font-medium text-blue-300/90">
              {eyebrow}
            </p>
          )}

          <h1 className="mb-3 text-xl font-semibold leading-relaxed text-slate-50 sm:text-2xl md:text-3xl">
            {title}
          </h1>

          {subtitle && (
            <p className="max-w-3xl text-sm leading-relaxed text-slate-200/90 sm:text-base">
              {subtitle}
            </p>
          )}

          {(primaryActionText || secondaryActionText) && (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {primaryActionText && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onPrimaryClick}
                >
                  {primaryActionText}
                </button>
              )}

              {secondaryActionText && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onSecondaryClick}
                >
                  {secondaryActionText}
                </button>
              )}
            </div>
          )}
      
      </div>
    </section>
  );
}
