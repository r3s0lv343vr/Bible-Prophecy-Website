export type TocItem = {
  id: string;
  title: string;
  ready: boolean;
  studyHref?: string;
  openInNewTab?: boolean;
  structure: string[];
  approach: string;
  overview: string;
};

export const tocItems: TocItem[] = [
  {
    id: "introduction",
    title: "Introduction to Revelation",
    ready: true,
    studyHref: "/introduction",
    structure: [
      "Historical analysis",
      "Theological analysis",
      "How to Approach the Book of Revelation and Understand It",
    ],
    approach:
      "Start here. Meet the island, the emperor, the churches, and the method before you open a vision.",
    overview:
      "Three short doors into the book: what was happening in history, what the book is saying about God and the war behind history, and how to read it without getting lost.",
  },
  {
    id: "book",
    title: "The Book Of Revelation",
    ready: true,
    studyHref: "/read",
    openInNewTab: true,
    structure: [
      "All 22 chapters",
      "NKJV in its own window (primary)",
      "KJV on this site",
      "NIV in its own window",
    ],
    approach:
      "Read the text first. Every later study points back here, and every chapter here can send you to its study.",
    overview:
      "The whole book, chapter by chapter. We work from the NKJV. KJV stays on the site because it is public domain. NKJV and NIV open in their own window from a licensed source.",
  },
  {
    id: "chapter-1",
    title: "Chapter 1: Christ in Control",
    ready: true,
    studyHref: "/study/1",
    structure: [
      "Patmos and the risen Christ",
      "The lampstands are churches",
      "Scripture beside the study",
    ],
    approach:
      "The book opens with Jesus, not with monsters. Chapter 1 tells you who holds the churches before any seal is broken.",
    overview:
      "John is a prisoner. Rome looks unbreakable. Then Christ walks among the lampstands. The first study keeps that picture in front of you.",
  },
  {
    id: "chapters-2-3",
    title: "Chapters 2 and 3: The Seven Churches",
    ready: true,
    studyHref: "/study/churches",
    structure: [
      "The General Historical Profile of the Churches",
      "The 7 Churches",
      "Commendations and Rebukes",
    ],
    approach:
      "Open the study. Church pages are shelled. Content for each church will be uploaded next.",
    overview:
      "Three tabs at the door. Each church capsule opens its own set of tabs. The words, pictures, and virtual streets wait for the upload.",
  },
  {
    id: "chapters-4-5",
    title: "Chapters 4 and 5: The Coronation of the Lamb and The Seven Seals",
    ready: false,
    structure: [
      "The throne",
      "The sealed book",
      "The Lamb takes the scroll",
    ],
    approach:
      "Heaven’s control room opens before the seals ride. This study waits for the next command.",
    overview:
      "Ready in the table of contents. Not built out yet.",
  },
  {
    id: "chapter-6",
    title: "Chapter 6: The Revelation of the Seven Seals",
    ready: false,
    structure: [
      "The first six seals",
      "History on the ground",
      "Evidence of fulfillment",
    ],
    approach:
      "After Chapter 6 is built, the site is inspected, then Hostinger is considered. That work waits for your command.",
    overview:
      "Ready in the table of contents. Not built out yet.",
  },
];
