import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type Visit = {
  page: string;
  tab: string | null;
  startedAt: number;
  endedAt: number | null;
  durationMs: number;
};

export type Visitor = {
  id: string;
  firstSeen: number;
  lastSeen: number;
  currentPage: string;
  currentTab: string | null;
  currentStartedAt: number;
  visits: Visit[];
};

type StoreFile = {
  visitors: Record<string, Visitor>;
};

const MAX_VISITORS = 200;
const MAX_VISITS = 50;
const STALE_MS = 30 * 24 * 60 * 60 * 1000;

function storePath() {
  if (process.env.VERCEL) {
    return "/tmp/bible-prophecy-visitors.json";
  }
  return path.join(process.cwd(), ".data", "visitors.json");
}

let memory: StoreFile = { visitors: {} };
let loaded = false;
let writeChain = Promise.resolve();

function withLock<T>(fn: () => Promise<T>) {
  const run = writeChain.then(fn, fn);
  writeChain = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function load() {
  if (loaded) {
    return memory;
  }

  try {
    const raw = await readFile(storePath(), "utf8");
    const parsed = JSON.parse(raw) as StoreFile;
    if (parsed && typeof parsed === "object" && parsed.visitors) {
      memory = parsed;
    }
  } catch {
    memory = { visitors: {} };
  }

  loaded = true;
  return memory;
}

async function persist() {
  const file = storePath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(memory), "utf8");
}

function prune(now: number) {
  const rows = Object.values(memory.visitors)
    .filter((visitor) => now - visitor.lastSeen < STALE_MS)
    .sort((a, b) => b.lastSeen - a.lastSeen)
    .slice(0, MAX_VISITORS);

  memory.visitors = Object.fromEntries(rows.map((visitor) => [visitor.id, visitor]));
}

function sameView(visitor: Visitor, page: string, tab: string | null) {
  return visitor.currentPage === page && visitor.currentTab === tab;
}

function closeCurrent(visitor: Visitor, now: number) {
  visitor.visits.push({
    page: visitor.currentPage,
    tab: visitor.currentTab,
    startedAt: visitor.currentStartedAt,
    endedAt: now,
    durationMs: Math.max(0, now - visitor.currentStartedAt),
  });
  if (visitor.visits.length > MAX_VISITS) {
    visitor.visits = visitor.visits.slice(-MAX_VISITS);
  }
}

export async function recordVisit(id: string, page: string, tab: string | null) {
  return withLock(async () => {
    await load();
    const now = Date.now();
    const existing = memory.visitors[id];

    if (!existing) {
      memory.visitors[id] = {
        id,
        firstSeen: now,
        lastSeen: now,
        currentPage: page,
        currentTab: tab,
        currentStartedAt: now,
        visits: [],
      };
    } else if (sameView(existing, page, tab)) {
      existing.lastSeen = now;
    } else {
      closeCurrent(existing, now);
      existing.currentPage = page;
      existing.currentTab = tab;
      existing.currentStartedAt = now;
      existing.lastSeen = now;
    }

    prune(now);
    await persist();
    return memory.visitors[id];
  });
}

export async function listVisitors() {
  return withLock(async () => {
    await load();
    const now = Date.now();
    return Object.values(memory.visitors)
      .map((visitor) => ({
        ...visitor,
        currentDurationMs: Math.max(0, now - visitor.currentStartedAt),
        active: now - visitor.lastSeen < 45_000,
      }))
      .sort((a, b) => b.lastSeen - a.lastSeen);
  });
}
