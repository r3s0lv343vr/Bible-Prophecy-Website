"use client";

import Link from "next/link";
import { useState } from "react";
import { tocItems, type TocItem } from "@/content/toc";

export function TableOfContents() {
  const [activeId, setActiveId] = useState(tocItems[0].id);
  const active = tocItems.find((item) => item.id === activeId) ?? tocItems[0];

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(16rem,20rem)_1fr]">
      <aside className="flex flex-col gap-3">
        <p className="px-2 text-[11px] uppercase tracking-[0.28em] text-[#86f0c8]">
          Table of contents
        </p>
        {tocItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className={`capsule text-left text-sm sm:text-base ${
              item.id === activeId ? "capsule-active" : ""
            }`}
          >
            {item.title}
          </button>
        ))}
      </aside>
      <Pane item={active} />
    </div>
  );
}

function Pane({ item }: { item: TocItem }) {
  return (
    <section className="glass relative min-h-[28rem] rounded-[2rem] p-5 sm:p-7">
      <div className="mb-6 flex justify-end">
        {item.ready && item.studyHref ? (
          <Link
            href={item.studyHref}
            target={item.openInNewTab ? "_blank" : undefined}
            rel={item.openInNewTab ? "noreferrer" : undefined}
            className="capsule capsule-blue text-sm"
          >
            Go to Study
          </Link>
        ) : (
          <span className="capsule cursor-not-allowed text-sm text-[#b7c0e0] opacity-70">
            Awaiting command
          </span>
        )}
      </div>
      <p className="text-[11px] uppercase tracking-[0.24em] text-[#ff8ad4]">
        {item.ready ? "Open" : "Listed · not built yet"}
      </p>
      <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">{item.title}</h2>
      <p className="mt-4 text-base leading-8 text-[#d5dcf5]">{item.overview}</p>
      <div className="mt-6">
        <h3 className="text-sm uppercase tracking-[0.2em] text-[#6ee7ff]">Structure</h3>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-[#d5dcf5]">
          {item.structure.map((line) => (
            <li key={line}>• {line}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-sm uppercase tracking-[0.2em] text-[#c4b5fd]">Approach</h3>
        <p className="mt-3 text-sm leading-7 text-[#d5dcf5]">{item.approach}</p>
      </div>
    </section>
  );
}
