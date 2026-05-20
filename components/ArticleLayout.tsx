import type { ReactNode } from "react";

type ArticleLayoutProps = {
  children: ReactNode;
};

export function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <article className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl space-y-8">{children}</div>
    </article>
  );
}
