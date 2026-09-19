"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ContentSlot } from "@/components/content-slot";
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

function CommendationsRebukesShell() {
  return (
    <div className="grid gap-6">
      <div className="glass overflow-x-auto rounded-[1.6rem]">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-[11px] uppercase tracking-[0.18em] text-[#6ee7ff]">
              <th className="px-4 py-3">Church</th>
              <th className="px-4 py-3">Commendations</th>
              <th className="px-4 py-3">Rebukes</th>
            </tr>
          </thead>
          <tbody>
            {churches.map((church) => (
              <tr key={church.id} className="border-b border-white/8 last:border-0">
                <td className="px-4 py-4 font-medium">{church.name}</td>
                <td className="px-4 py-4 text-[#b7c0e0]">To be uploaded</td>
                <td className="px-4 py-4 text-[#b7c0e0]">To be uploaded</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChiasticColumn title="Commendations" />
        <ChiasticColumn title="Rebukes" />
      </div>
    </div>
  );
}

function ChiasticColumn({ title }: { title: string }) {
  const indents = ["pl-0", "pl-6", "pl-12", "pl-16", "pl-12", "pl-6", "pl-0"];

  return (
    <section className="glass rounded-[1.6rem] p-5">
      <h3 className="font-display text-2xl">{title}</h3>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#c4b5fd]">
        Chiastic structure
      </p>
      <ol className="mt-4 space-y-2">
        {churches.map((church, index) => (
          <li key={`${title}-${church.id}`} className={indents[index]}>
            <div className="capsule w-full text-sm">
              {church.name}
              <span className="ml-2 text-[11px] text-[#b7c0e0]">To be uploaded</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
