import revelation from "./kjv/revelation.json";

export type Verse = { verse: number; text: string };

export function getRevelationChapter(chapter: number) {
  const record = revelation.chapters.find((item) => item.chapter === chapter);
  if (!record) {
    throw new Error(`Missing Revelation ${chapter}`);
  }
  return record;
}

export const REVELATION_CHAPTERS = revelation.chapters.map((item) => item.chapter);

export function licensedPassageUrl(version: "NKJV" | "NIV", chapter: number) {
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(`Revelation ${chapter}`)}&version=${version}`;
}
