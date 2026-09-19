import Link from "next/link";
import { SiteFrame } from "@/components/site-frame";

export default function HomePage() {
  return (
    <SiteFrame>
      <div className="flex min-h-[70vh] flex-col items-start justify-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#6ee7ff]">
          Historicist study · NKJV primary
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight sm:text-6xl">
          Bible Prophecy Platform
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-[#d5dcf5]">
          A Seventh-day Adventist reading of Revelation. The book, the method,
          and the studies — in order.
        </p>
        <Link href="/contents" className="capsule capsule-green mt-8 text-base">
          Enter
        </Link>
      </div>
    </SiteFrame>
  );
}
