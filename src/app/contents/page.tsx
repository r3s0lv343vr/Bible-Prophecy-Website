import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-frame";
import { TableOfContents } from "@/components/table-of-contents";

export const metadata: Metadata = {
  title: "Table of Contents",
};

export default function ContentsPage() {
  return (
    <SiteFrame>
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#6ee7ff]">
        Table of contents
      </p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
        Open a capsule. Keep the book beside you.
      </h1>
      <div className="mt-8">
        <TableOfContents />
      </div>
    </SiteFrame>
  );
}
