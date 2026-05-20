type HowToPlayCardProps = {
  step: number;
  text: string;
};

export function HowToPlayCard({ step, text }: HowToPlayCardProps) {
  return (
    <li className="pixel-frame-sm notebook-panel p-4">
      <p className="font-mono text-xs font-black text-school-red">
        STEP {step}
      </p>
      <p className="mt-2 text-base font-bold leading-7">{text}</p>
    </li>
  );
}
