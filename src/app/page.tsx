import Link from "next/link";
import { SiteFrame } from "@/components/site-frame";

export default function HomePage() {
  return (
    <SiteFrame>
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h1 className="font-display text-5xl leading-tight sm:text-6xl">
          Bible Prophecy Platform
        </h1>
        <Link href="/contents" className="capsule capsule-green mt-8 text-base">
          Enter
        </Link>
      </div>
    </SiteFrame>
  );
}
