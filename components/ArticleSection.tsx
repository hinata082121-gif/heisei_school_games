import type { ArticleSectionData } from "@/data/guides";

type ArticleSectionProps = {
  section: ArticleSectionData;
};

export function ArticleSection({ section }: ArticleSectionProps) {
  return (
    <section className="notebook-panel pixel-frame p-5 sm:p-7">
      <h2 className="text-2xl font-black leading-tight sm:text-3xl">
        {section.heading}
      </h2>
      {section.body ? (
        <p className="mt-4 whitespace-pre-line text-base leading-8 sm:text-lg">
          {section.body}
        </p>
      ) : null}
      {section.list ? (
        <ul className="mt-5 grid gap-3">
          {section.list.map((item) => (
            <li
              className="pixel-frame-sm bg-paper px-4 py-3 text-base font-bold leading-7"
              key={item}
            >
              ・{item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
