const PAGE_LABELS: Record<string, string> = {
  "/": "Home",
  "/contents": "Table of contents",
  "/introduction": "Introduction",
  "/read": "Revelation",
  "/study/churches": "The Seven Churches",
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
