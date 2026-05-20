import { ShareButton } from "@/components/ShareButton";

type SharePanelProps = {
  title: string;
  text: string;
  url?: string;
  hashtags?: string[];
};

export function SharePanel({ title, text, url, hashtags }: SharePanelProps) {
  return (
    <section className="bulletin-board pixel-frame p-5 sm:p-7">
      <p className="font-mono text-xs font-black uppercase text-school-blue">
        Share
      </p>
      <h2 className="mt-1 text-2xl font-black leading-tight">
        このページを共有する
      </h2>
      <p className="mt-3 text-base leading-8">
        懐かしいと思ったら、友だちにも教えてください。
      </p>
      <div className="mt-5">
        <ShareButton
          hashtags={hashtags}
          text={text}
          title={title}
          url={url}
        />
      </div>
    </section>
  );
}
