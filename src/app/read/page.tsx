import type { Metadata } from "next";
import { ScriptureReader } from "@/components/scripture-reader";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "The Book Of Revelation",
};

export default async function ReadPage({
  searchParams,
}: {
  searchParams: Promise<{ chapter?: string }>;
}) {
  const chapter = Number((await searchParams).chapter ?? "1");
  const startChapter = Number.isInteger(chapter) && chapter >= 1 && chapter <= 22 ? chapter : 1;

  return (
    <SiteFrame>
      <ScriptureReader startChapter={startChapter} />
    </SiteFrame>
  );
}
