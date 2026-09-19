import { SiteFrame } from "@/components/site-frame";
import { TableOfContents } from "@/components/table-of-contents";

export default function HomePage() {
  return (
    <SiteFrame>
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#6ee7ff]">
        Historicist study · NKJV primary
      </p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
        Walk Revelation in order. Open a capsule. Keep the book beside you.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-[#d5dcf5]">
        Built for teenagers, young adults, and older adults. Easy to follow.
        Each ready title opens a pane, then a study. Chapters 2–6 wait for the
        next command.
      </p>
      <div className="mt-8">
        <TableOfContents />
      </div>
    </SiteFrame>
  );
}
