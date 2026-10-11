"use client";

import { FormEvent, useEffect, useState } from "react";

type VisitRow = {
  page: string;
  pageLabel: string;
  tab: string | null;
  startedAt: number;
  endedAt: number | null;
  durationMs: number;
};

type VisitorRow = {
  id: string;
  shortId: string;
  firstSeen: number;
  lastSeen: number;
  page: string;
  pageLabel: string;
  tab: string | null;
  timeOnViewMs: number;
  active: boolean;
  visits: VisitRow[];
};

function formatDuration(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  }
  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }
  return `${seconds}s`;
}

function formatTime(value: number) {
  return new Date(value).toLocaleString();
}

export function AdminApp({
  signedIn,
  passwordConfigured,
}: {
  signedIn: boolean;
  passwordConfigured: boolean;
}) {
  const [authed, setAuthed] = useState(signedIn);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [visitors, setVisitors] = useState<VisitorRow[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (!authed) {
      return;
    }

    let cancelled = false;

    const load = async () => {
      const response = await fetch("/api/admin/visitors", { cache: "no-store" });
      if (response.status === 401) {
        if (!cancelled) {
          setAuthed(false);
        }
        return;
      }
      if (!response.ok) {
        return;
      }
      const data = (await response.json()) as { visitors: VisitorRow[] };
      if (!cancelled) {
        setVisitors(data.visitors);
      }
    };

    void load();
    const timer = window.setInterval(() => {
      void load();
    }, 5000);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [authed]);

  async function onLogin(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "Sign in failed.");
      return;
    }

    setPassword("");
    setAuthed(true);
  }

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setVisitors([]);
  }

  return (
    <div className="mx-auto min-h-full max-w-6xl px-4 py-8 sm:px-6">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#6ee7ff]">Private</p>
          <h1 className="mt-1 font-display text-4xl">Admin</h1>
        </div>
        {authed ? (
          <button type="button" className="capsule text-sm" onClick={() => void onLogout()}>
            Sign out
          </button>
        ) : null}
      </header>

      {!passwordConfigured ? (
        <section className="glass rounded-[1.4rem] p-6">
          <h2 className="font-display text-2xl">Admin is locked</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#b7c0e0]">
            Set <code className="text-[#6ee7ff]">ADMIN_PASSWORD</code> in the server environment,
            then return to this page. This address is not linked from the public site.
          </p>
        </section>
      ) : null}

      {passwordConfigured && !authed ? (
        <form onSubmit={(event) => void onLogin(event)} className="glass max-w-md rounded-[1.4rem] p-6">
          <h2 className="font-display text-2xl">Sign in</h2>
          <p className="mt-2 text-sm leading-7 text-[#b7c0e0]">
            Only the site owner can open visitor records.
          </p>
          <label className="mt-5 block text-xs uppercase tracking-[0.18em] text-[#c4b5fd]">
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-[#07060f] px-3 py-3 text-sm text-[#eef2ff] outline-none focus:border-[#6ee7ff]"
            />
          </label>
          {error ? <p className="mt-3 text-sm text-[#ff8ad4]">{error}</p> : null}
          <button type="submit" className="capsule capsule-blue mt-5 text-sm" disabled={busy}>
            {busy ? "Checking…" : "Open admin"}
          </button>
        </form>
      ) : null}

      {authed ? (
        <section className="glass overflow-x-auto rounded-[1.4rem]">
          <div className="flex items-center justify-between px-4 py-3">
            <h2 className="font-display text-2xl">Visitors</h2>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#86f0c8]">
              {visitors.filter((visitor) => visitor.active).length} active
            </p>
          </div>
          <table className="w-full min-w-[48rem] text-left text-sm">
            <thead>
              <tr className="border-y border-white/10 text-[11px] uppercase tracking-[0.18em] text-[#6ee7ff]">
                <th className="px-4 py-3">Visitor</th>
                <th className="px-4 py-3">Page</th>
                <th className="px-4 py-3">Tab</th>
                <th className="px-4 py-3">Time here</th>
                <th className="px-4 py-3">Last seen</th>
              </tr>
            </thead>
            <tbody>
              {visitors.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-[#b7c0e0]">
                    No visitors recorded yet.
                  </td>
                </tr>
              ) : (
                visitors.map((visitor) => (
                  <tr
                    key={visitor.id}
                    className="cursor-pointer border-b border-white/8 last:border-0"
                    onClick={() => setOpenId(openId === visitor.id ? null : visitor.id)}
                  >
                    <td className="px-4 py-4 align-top font-medium">
                      {visitor.shortId}
                      <span className="ml-2 text-[11px] uppercase tracking-[0.14em] text-[#86f0c8]">
                        {visitor.active ? "Active" : "Away"}
                      </span>
                      {openId === visitor.id && visitor.visits.length ? (
                        <ol className="mt-3 space-y-2 text-[12px] font-normal text-[#b7c0e0]">
                          {visitor.visits
                            .slice()
                            .reverse()
                            .map((visit, index) => (
                              <li key={`${visit.startedAt}-${index}`}>
                                {visit.pageLabel}
                                {visit.tab ? ` · ${visit.tab}` : ""}
                                {` · ${formatDuration(visit.durationMs)}`}
                              </li>
                            ))}
                        </ol>
                      ) : null}
                    </td>
                    <td className="px-4 py-4 align-top text-[#b7c0e0]">{visitor.pageLabel}</td>
                    <td className="px-4 py-4 align-top text-[#b7c0e0]">{visitor.tab ?? "—"}</td>
                    <td className="px-4 py-4 align-top text-[#b7c0e0]">
                      {formatDuration(visitor.timeOnViewMs)}
                    </td>
                    <td className="px-4 py-4 align-top text-[#b7c0e0]">
                      {formatTime(visitor.lastSeen)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      ) : null}
    </div>
  );
}
