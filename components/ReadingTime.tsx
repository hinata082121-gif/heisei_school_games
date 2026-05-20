type ReadingTimeProps = {
  readingTime: string;
};

export function ReadingTime({ readingTime }: ReadingTimeProps) {
  return (
    <span className="inline-flex min-h-8 items-center border-2 border-ink bg-paper px-3 py-1 font-mono text-xs font-black text-ink shadow-pixel-sm">
      読了時間：{readingTime}
    </span>
  );
}
