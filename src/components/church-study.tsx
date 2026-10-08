"use client";

import Link from "next/link";
import { ContentSlot } from "@/components/content-slot";
import { CommendationsRebukesShell } from "@/components/commendations-rebukes-shell";
import { StudyTabs } from "@/components/study-tabs";
import { churchTabs, type ChurchRecord } from "@/content/churches";
import {
  churchSocieties,
  churchSocietyPictures,
  type SocietySection,
} from "@/content/church-societies";

export function ChurchStudy({ church }: { church: ChurchRecord }) {
  return (
    <StudyTabs
      variant="folder"
      tabs={churchTabs.map((tab) => ({
        id: tab.id,
        label: tab.label,
        content: <ChurchTabBody tabId={tab.id} church={church} />,
      }))}
    />
  );
}

function ChurchTabBody({
  tabId,
  church,
}: {
  tabId: string;
  church: ChurchRecord;
}) {
  if (tabId === "society") {
    const society = churchSocieties[church.id];
    const pictures = churchSocietyPictures[church.id];
    return (
      <div className="grid gap-6">
        {society ? <SocietyArticle sections={society} /> : null}
        <div className="grid gap-4 md:grid-cols-2">
          {pictures?.length ? (
            pictures.map((picture) => (
              <div
                key={picture.src}
                className="glass flex min-h-48 items-center justify-center overflow-hidden rounded-[1.4rem]"
              >
                <img
                  src={picture.src}
                  alt={`${church.name} · ${picture.kind === "artefact" ? "artefact picture" : "society picture"}`}
                  className="block max-h-80 w-full object-contain"
                />
              </div>
            ))
          ) : (
            <>
              <ContentSlot kind="image" label={`${church.name} · society picture`} />
              <ContentSlot kind="image" label={`${church.name} · society picture`} />
              <ContentSlot kind="image" label={`${church.name} · artefact picture`} />
              <ContentSlot kind="image" label={`${church.name} · artefact picture`} />
            </>
          )}
        </div>
      </div>
    );
  }

  if (tabId === "maps") {
    return (
      <div className="glass flex min-h-80 items-center justify-center overflow-hidden rounded-[1.4rem]">
        <img
          src="/images/churches/seven-churches-map.jpg"
          alt={`${church.name} · map of the seven churches`}
          className="block w-full object-contain"
        />
      </div>
    );
  }

  if (tabId === "commendation-rebuke") {
    return <CommendationsRebukesShell />;
  }

  if (tabId === "explore") {
    return (
      <div className="grid gap-3">
        <p className="text-sm text-[#b7c0e0]">
          A rebuilt society that can be virtually explored.
        </p>
        <ContentSlot kind="explore" label={`${church.name} · virtual exploration`} />
      </div>
    );
  }

  return <ContentSlot label={`${church.name} · ${labelFor(tabId)}`} />;
}

function SocietyArticle({ sections }: { sections: SocietySection[] }) {
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="font-display text-2xl leading-tight text-[#eef2ff] sm:text-3xl">
            {section.title}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-sm leading-7 text-[#d5dcf5]">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

function labelFor(tabId: string) {
  return churchTabs.find((tab) => tab.id === tabId)?.label ?? tabId;
}

export function ChurchStudyHeader({ church }: { church: ChurchRecord }) {
  return (
    <div className="mb-6">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#6ee7ff]">
        Revelation {church.scriptureChapter}:{church.startVerse}–{church.endVerse}
      </p>
      <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">
        {church.name}
      </h1>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link href="/study/churches?tab=seven" className="capsule text-sm">
          The 7 Churches
        </Link>
        <Link
          href={`/read?chapter=${church.scriptureChapter}`}
          target="_blank"
          className="capsule capsule-blue text-sm"
        >
          Open the letter
        </Link>
      </div>
    </div>
  );
}
