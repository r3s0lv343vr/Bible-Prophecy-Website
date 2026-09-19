export type ChurchId =
  | "ephesus"
  | "smyrna"
  | "pergamos"
  | "thyatira"
  | "sardis"
  | "philadelphia"
  | "laodicea";

export type ChurchRecord = {
  id: ChurchId;
  name: string;
  sequence: number;
  scriptureChapter: 2 | 3;
  startVerse: number;
  endVerse: number;
};

export const churches: ChurchRecord[] = [
  { id: "ephesus", name: "Ephesus", sequence: 1, scriptureChapter: 2, startVerse: 1, endVerse: 7 },
  { id: "smyrna", name: "Smyrna", sequence: 2, scriptureChapter: 2, startVerse: 8, endVerse: 11 },
  { id: "pergamos", name: "Pergamos", sequence: 3, scriptureChapter: 2, startVerse: 12, endVerse: 17 },
  { id: "thyatira", name: "Thyatira", sequence: 4, scriptureChapter: 2, startVerse: 18, endVerse: 29 },
  { id: "sardis", name: "Sardis", sequence: 5, scriptureChapter: 3, startVerse: 1, endVerse: 6 },
  { id: "philadelphia", name: "Philadelphia", sequence: 6, scriptureChapter: 3, startVerse: 7, endVerse: 13 },
  { id: "laodicea", name: "Laodicea", sequence: 7, scriptureChapter: 3, startVerse: 14, endVerse: 22 },
];

export const churchTabs = [
  { id: "society", label: "The Society this Church was in" },
  { id: "maps", label: "Maps" },
  { id: "profile", label: "Church Profile" },
  { id: "commendation-rebuke", label: "Commendations and Rebuke on this Church" },
  { id: "theology", label: "Theological Themes and Analysis" },
  { id: "focus", label: "Focus on the Commendation and Rebuke" },
  { id: "explore", label: "Explore the Society" },
] as const;

export function getChurch(id: string) {
  return churches.find((church) => church.id === id);
}
