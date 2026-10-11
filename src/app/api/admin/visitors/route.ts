import { NextResponse } from "next/server";
import { getAdminSession, ipAllowed, requestIp } from "@/lib/admin-auth";
import { pageLabel } from "@/lib/page-label";
import { listVisitors } from "@/lib/visitor-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const ip = requestIp(request.headers);
  if (!ipAllowed(ip)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }

  const visitors = await listVisitors();
  return NextResponse.json({
    visitors: visitors.map((visitor) => ({
      id: visitor.id,
      shortId: visitor.id.slice(0, 8),
      firstSeen: visitor.firstSeen,
      lastSeen: visitor.lastSeen,
      page: visitor.currentPage,
      pageLabel: pageLabel(visitor.currentPage),
      tab: visitor.currentTab,
      timeOnViewMs: visitor.currentDurationMs,
      active: visitor.active,
      visits: visitor.visits.map((visit) => ({
        page: visit.page,
        pageLabel: pageLabel(visit.page),
        tab: visit.tab,
        startedAt: visit.startedAt,
        endedAt: visit.endedAt,
        durationMs: visit.durationMs,
      })),
    })),
  });
}
