import { motion } from "framer-motion";

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
        <motion.div
          className="rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/95 px-5 py-7 shadow-xl shadow-slate-950/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
