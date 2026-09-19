import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChurchStudy, ChurchStudyHeader } from "@/components/church-study";
import { SiteFrame } from "@/components/site-frame";
import { churches, getChurch } from "@/content/churches";

export function generateStaticParams() {
  return churches.map((church) => ({ church: church.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ church: string }>;
}): Promise<Metadata> {
  const church = getChurch((await params).church);
  return { title: church ? church.name : "The Seven Churches" };
}

export default async function ChurchPage({
  params,
}: {
  params: Promise<{ church: string }>;
}) {
  const church = getChurch((await params).church);
  if (!church) {
    notFound();
  }

  return (
    <SiteFrame>
      <ChurchStudyHeader church={church} />
      <ChurchStudy church={church} />
    </SiteFrame>
  );
}
