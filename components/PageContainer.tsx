import type { ReactNode } from "react";

type PageContainerProps = {
  title: string;
  eyebrow: string;
  children: ReactNode;
};

export function PageContainer({ title, eyebrow, children }: PageContainerProps) {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="notebook-panel pixel-frame mx-auto max-w-3xl p-5 sm:p-8">
        <p className="font-mono text-sm font-black text-school-blue">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">
          {title}
        </h1>
        <div className="mt-6 space-y-5 text-base leading-8 sm:text-lg">{children}</div>
      </div>
    </section>
  );
}
