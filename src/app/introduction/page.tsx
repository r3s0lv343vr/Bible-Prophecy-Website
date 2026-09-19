import type { Metadata } from "next";
import Link from "next/link";
import { HistoricMap } from "@/components/historic-map";
import { SiteFrame } from "@/components/site-frame";
import { introduction } from "@/content/introduction";

export const metadata: Metadata = {
  title: "Introduction to Revelation",
};

const patmosMap =
  "https://www.openstreetmap.org/export/embed.html?bbox=25.8%2C36.8%2C28.6%2C38.6&layer=mapnik&marker=37.325%2C26.548";

export default function IntroductionPage() {
  return (
    <SiteFrame>
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#ff8ad4]">
        Introduction to Revelation
      </p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
        How the book sits in history, in theology, and in your hands
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-[#d5dcf5]">
        {introduction.lead}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/read" target="_blank" className="capsule capsule-blue text-sm">
          Open the book
        </Link>
        <Link href="/study/1" className="capsule text-sm">
          Chapter 1 study
        </Link>
      </div>

      <div className="mt-8 grid gap-5">
        {introduction.sections.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="glass rounded-[1.8rem] p-5 sm:p-7"
          >
            <h2 className="font-display text-3xl">{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-8 text-[#d5dcf5]">
                {paragraph}
              </p>
            ))}
          </article>
        ))}
        <HistoricMap
          title="Patmos and the coast of Asia"
          src={patmosMap}
          caption="Patmos is marked. The seven churches lie on the mainland to the east. OpenStreetMap is free to use. The letters themselves wait for the Chapters 2–3 command."
        />
      </div>
    </SiteFrame>
  );
}
