import type { ReactNode } from "react";

type SchoolSectionProps = {
  id?: string;
  title: string;
  eyebrow: string;
  children: ReactNode;
  variant?: "plain" | "board" | "notice";
};

export function SchoolSection({
  id,
  title,
  eyebrow,
  children,
  variant = "plain",
}: SchoolSectionProps) {
  const wrapperClass =
    variant === "board"
      ? "chalkboard"
      : variant === "notice"
        ? "bulletin-board"
        : "bg-paper";

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12" id={id}>
      <div className={`mx-auto max-w-6xl ${wrapperClass} pixel-frame p-4 sm:p-6`}>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-4 w-4 border-2 border-ink bg-school-red shadow-pixel-sm" />
          <div>
            <p
              className={`font-mono text-xs font-black uppercase tracking-normal ${
                variant === "board" ? "text-chalk" : "text-school-blue"
              }`}
            >
              {eyebrow}
            </p>
            <h2
              className={`text-xl font-black sm:text-2xl ${
                variant === "board" ? "chalk-text" : "text-ink"
              }`}
            >
              {title}
            </h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
