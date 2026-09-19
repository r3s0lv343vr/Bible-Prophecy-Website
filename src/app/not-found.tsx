import Link from "next/link";
import { SiteFrame } from "@/components/site-frame";

export default function NotFound() {
  return (
    <SiteFrame>
      <h1 className="font-display text-4xl">This study is not open yet</h1>
      <p className="mt-4 max-w-xl text-base leading-8 text-[#d5dcf5]">
        Chapters 4–6 wait for the next command. Use the table of contents, the
        introduction, Chapter 1, the seven churches, or the book itself.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/contents" className="capsule capsule-blue text-sm">
          Table of contents
        </Link>
        <Link href="/read" target="_blank" className="capsule text-sm">
          Open Revelation
        </Link>
      </div>
    </SiteFrame>
  );
}
