"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  getRevelationChapter,
  licensedPassageUrl,
  REVELATION_CHAPTERS,
} from "@/content/scripture";

const versions = ["NKJV", "KJV", "NIV"] as const;
type Version = (typeof versions)[number];

export function ScriptureReader({ startChapter = 1 }: { startChapter?: number }) {
  const [chapter, setChapter] = useState(startChapter);
  const [version, setVersion] = useState<Version>("NKJV");
  const kjv = useMemo(() => getRevelationChapter(chapter), [chapter]);
  const licensedUrl =
    version === "KJV" ? null : licensedPassageUrl(version, chapter);

  return (
    <div className="flex items-start gap-4 lg:gap-6">
      <aside className="sticky top-4 flex h-[calc(100vh-2rem)] w-[6.5rem] shrink-0 flex-col sm:w-44">
        <p className="px-2 pb-2 text-[11px] uppercase tracking-[0.2em] text-[#86f0c8]">
          Chapters
        </p>
        <div className="glass min-h-0 flex-1 overflow-y-auto rounded-[1.4rem] p-2">
          {REVELATION_CHAPTERS.map((number) => (
            <button
              key={number}
              type="button"
              onClick={() => setChapter(number)}
              className={`capsule mb-2 w-full text-left text-sm last:mb-0 ${
                chapter === number ? "capsule-active" : ""
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#86f0c8]">
              The Book Of Revelation
            </p>
            <h1 className="font-display text-3xl sm:text-4xl">Chapter {chapter}</h1>
          </div>
          <Link
            href={chapter === 1 ? "/study/1" : "/contents"}
            className="capsule text-sm"
          >
            {chapter === 1 ? "Go to this study" : "Back to contents"}
          </Link>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {versions.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setVersion(item)}
              className={`capsule text-sm ${version === item ? "capsule-active" : ""}`}
            >
              {item}
              {item === "NKJV" ? " · primary" : ""}
            </button>
          ))}
        </div>

        {licensedUrl ? (
          <div className="glass mt-5 rounded-[1.6rem] p-5">
            <p className="text-sm leading-7 text-[#d5dcf5]">
              {version} is under copyright, so it opens in its own window from a
              licensed source. We work primarily from the NKJV.
            </p>
            <a
              href={licensedUrl}
              target="_blank"
              rel="noreferrer"
              className="capsule capsule-blue mt-4 inline-flex text-sm"
            >
              Open Revelation {chapter} in {version}
            </a>
          </div>
        ) : null}

        <article className="glass scripture mt-5 rounded-[1.6rem] p-5 sm:p-7">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#ff8ad4]">
            Public domain · King James Version
          </p>
          <div
            className="mt-4 text-[1.05rem] leading-8"
            style={{ fontFamily: "var(--font-source-serif), ui-serif, Georgia, serif" }}
          >
            {kjv.verses.map((verse) => (
              <p key={verse.verse} id={`v${verse.verse}`}>
                <sup className="mr-2 text-[11px] text-[#6ee7ff]">{verse.verse}</sup>
                {verse.text}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
