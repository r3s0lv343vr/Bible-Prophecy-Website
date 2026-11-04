const PAGE_LABELS: Record<string, string> = {
  "/": "Home",
  "/contents": "Table of contents",
  "/introduction": "Introduction",
  "/read": "Revelation",
  "/study/churches": "The Seven Churches",
  "/study/4-5": "Chapters 4 and 5 · The room",
  "/study/4-5/throne": "Chapters 4 and 5 · The throne room",
  "/study/4-5/throne/2": "Chapters 4 and 5 · The throne room",
  "/study/4-5/throne/3": "Chapters 4 and 5 · The throne room",
  "/study/4-5/throne/4": "Chapters 4 and 5 · The throne room",
  "/study/4-5/throne/5": "Chapters 4 and 5 · The throne room",
  "/study/4-5/throne/6": "Chapters 4 and 5 · The throne room",
  "/study/4-5/throne/7": "Chapters 4 and 5 · The throne room",
};

export function pageLabel(page: string) {
  const [pathname, query] = page.split("?");
  const known = PAGE_LABELS[pathname];
  if (known) {
    return query ? `${known} (${query})` : known;
  }

  const church = pathname.match(/^\/study\/churches\/([^/]+)$/);
  if (church) {
    return church[1].replace(/^\w/, (letter) => letter.toUpperCase());
  }

  const chapter = pathname.match(/^\/study\/(\d+)$/);
  if (chapter) {
    return `Chapter ${chapter[1]}`;
  }

  return page;
}
