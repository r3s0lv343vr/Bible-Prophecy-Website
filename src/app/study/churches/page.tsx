import type { Metadata } from "next";
import Link from "next/link";
import { ChurchHub } from "@/components/church-hub";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "Chapters 2 and 3: The Seven Churches",
};

export default function ChurchesPage() {
  return (
    <SiteFrame>
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#ff8ad4]">
        Revelation 2–3
      </p>
      <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">
        The Seven Churches
      </h1>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link href="/read?chapter=2" target="_blank" className="capsule capsule-blue text-sm">
          Open Revelation 2–3
        </Link>
        <Link href="/contents" className="capsule text-sm">
          Table of contents
        </Link>
      </div>
      <div className="mt-8">
        <ChurchHub />
      </div>
    </SiteFrame>
  );
}
