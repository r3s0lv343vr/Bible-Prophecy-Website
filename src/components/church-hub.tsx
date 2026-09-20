"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ContentSlot } from "@/components/content-slot";
import { CommendationsRebukesShell } from "@/components/commendations-rebukes-shell";
import { StudyTabs } from "@/components/study-tabs";
import { churches } from "@/content/churches";

const hubTabs = ["profile", "seven", "table"] as const;

export function ChurchHub() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("tab");
  const initialId = hubTabs.includes(requested as (typeof hubTabs)[number])
    ? requested!
    : "profile";

  return (
    <StudyTabs
      key={initialId}
      initialId={initialId}
      tabs={[
        {
          id: "profile",
          label: "The General Historical Profile of the Churches",
          content: (
            <ContentSlot label="The General Historical Profile of the Churches" />
          ),
        },
        {
          id: "seven",
          label: "The 7 Churches",
          content: (
            <div className="flex flex-col gap-3">
              {churches.map((church) => (
                <Link
                  key={church.id}
                  href={`/study/churches/${church.id}`}
                  className="capsule text-left"
                >
                  {church.sequence}. {church.name}
                </Link>
              ))}
            </div>
          ),
        },
        {
          id: "table",
          label: "Commendations and Rebukes",
          content: <CommendationsRebukesShell />,
        },
      ]}
    />
  );
}
