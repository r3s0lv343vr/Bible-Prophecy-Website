import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HistoricMap } from "@/components/historic-map";
import { SiteFrame } from "@/components/site-frame";
import { chapter1 } from "@/content/chapter1";
import { getRevelationChapter, licensedPassageUrl } from "@/content/scripture";

export const metadata: Metadata = {
  title: "Chapter study",
};

export default async function StudyPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const chapter = Number((await params).chapter);
  if (chapter !== 1) {
    notFound();
  }

  const kjv = getRevelationChapter(1);
  const nkjvUrl = licensedPassageUrl("NKJV", 1);

  return (
    <SiteFrame>
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#6ee7ff]">
        {chapter1.nkjvRef} · NKJV primary
      </p>
      <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">
        {chapter1.title}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-[#d5dcf5]">
        {chapter1.frame}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/read?chapter=1" target="_blank" className="capsule capsule-blue text-sm">
          Open Revelation 1
        </Link>
        <a href={nkjvUrl} target="_blank" rel="noreferrer" className="capsule text-sm">
          NKJV window
        </a>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="glass scripture rounded-[1.8rem] p-5 sm:p-7">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#ff8ad4]">
            Scripture beside the study · KJV on site
          </p>
          <div
            className="mt-4 max-h-[36rem] overflow-y-auto pr-2 text-[1.05rem] leading-8"
            style={{ fontFamily: "var(--font-source-serif), ui-serif, Georgia, serif" }}
          >
            {kjv.verses.map((verse) => (
              <p key={verse.verse}>
                <sup className="mr-2 text-[11px] text-[#6ee7ff]">{verse.verse}</sup>
                {verse.text}
              </p>
            ))}
          </div>
        </article>
        <div className="grid gap-4">
          {chapter1.beats.map((beat) => (
            <article key={beat.title} className="glass rounded-[1.6rem] p-5">
              <h2 className="font-display text-2xl">{beat.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#d5dcf5]">{beat.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="glass rounded-[1.6rem] p-5">
          <h2 className="font-display text-2xl">Fulfillment on the ground</h2>
          <p className="mt-3 text-sm leading-7 text-[#d5dcf5]">{chapter1.fulfillment}</p>
        </article>
        <article className="glass rounded-[1.6rem] p-5">
          <h2 className="font-display text-2xl">Archaeology</h2>
          <p className="mt-3 text-sm leading-7 text-[#d5dcf5]">{chapter1.archaeology}</p>
        </article>
      </div>

      <div className="mt-5">
        <HistoricMap
          title="Patmos"
          src="https://www.openstreetmap.org/export/embed.html?bbox=26.3%2C37.2%2C26.8%2C37.45&layer=mapnik&marker=37.325%2C26.548"
          caption="The island where the book begins. Free OpenStreetMap tiles."
        />
      </div>
    </SiteFrame>
  );
}
