type FeatureCardProps = {
  index: number;
  text: string;
};

export function FeatureCard({ index, text }: FeatureCardProps) {
  return (
    <li className="pixel-frame-sm bg-paper p-4">
      <span className="mb-3 inline-flex h-8 w-8 items-center justify-center border-2 border-ink bg-school-blue font-mono text-xs font-black text-white">
        {String(index).padStart(2, "0")}
      </span>
      <p className="text-base font-bold leading-7">{text}</p>
    </li>
  );
}
