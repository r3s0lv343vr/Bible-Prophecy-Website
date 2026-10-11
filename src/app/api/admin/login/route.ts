import { NextResponse } from "next/server";
import {
  adminCookieName,
  adminPasswordConfigured,
  clearLoginFailures,
  createSessionToken,
  ipAllowed,
  loginAllowed,
  passwordsMatch,
  recordLoginFailure,
  requestIp,
  sessionCookieOptions,
} from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const ip = requestIp(request.headers);
  if (!ipAllowed(ip)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (!adminPasswordConfigured()) {
    return NextResponse.json({ error: "Admin password is not configured." }, { status: 503 });
  }

  if (!loginAllowed(ip)) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  let password = "";
  try {
    const body = (await request.json()) as { password?: unknown };
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!passwordsMatch(password)) {
    recordLoginFailure(ip);
    return NextResponse.json({ error: "The password is not correct." }, { status: 401 });
  }

  clearLoginFailures(ip);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminCookieName(), createSessionToken(), sessionCookieOptions());
  return response;
}
