type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-5">
      {eyebrow ? (
        <p
          className={`font-mono text-xs font-black uppercase tracking-normal ${
            inverted ? "text-school-yellow" : "text-school-blue"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-1 text-2xl font-black leading-tight sm:text-3xl ${
          inverted ? "chalk-text" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 max-w-3xl text-base leading-8 sm:text-lg ${
            inverted ? "text-chalk/90" : "text-ink/80"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
