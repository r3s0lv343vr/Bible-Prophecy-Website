import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { recordVisit } from "@/lib/visitor-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VISITOR_COOKIE = "bp_vid";

function clean(value: unknown, fallback = "") {
  if (typeof value !== "string") {
    return fallback;
  }
  return value.replace(/[\u0000-\u001f]/g, "").trim().slice(0, 200);
}

export async function POST(request: Request) {
  let body: { page?: unknown; tab?: unknown };
  try {
    body = (await request.json()) as { page?: unknown; tab?: unknown };
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const page = clean(body.page);
  if (!page.startsWith("/") || page.startsWith("/admin") || page.startsWith("/api/")) {
    return NextResponse.json({ ok: true });
  }

  const tabValue = clean(body.tab);
  const tab = tabValue.length ? tabValue : null;
  const cookie = request.headers.get("cookie") ?? "";
  const existing = cookie.match(/(?:^|;\s*)bp_vid=([^;]+)/)?.[1];
  const visitorId = existing && /^[a-zA-Z0-9-]{8,64}$/.test(existing) ? existing : randomUUID();

  await recordVisit(visitorId, page, tab);

  const response = NextResponse.json({ ok: true });
  if (!existing) {
    response.cookies.set(VISITOR_COOKIE, visitorId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 180,
    });
  }
  return response;
}
