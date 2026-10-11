import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "bp_admin";
const SESSION_MS = 12 * 60 * 60 * 1000;

type Session = {
  issuedAt: number;
  expiresAt: number;
};

function secret() {
  const explicit = process.env.ADMIN_SECRET?.trim();
  if (explicit) {
    return explicit;
  }

  const password = process.env.ADMIN_PASSWORD?.trim();
  if (!password) {
    return "";
  }

  return createHash("sha256").update(`bp-admin:${password}`).digest("hex");
}

export function adminPasswordConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD?.trim());
}

export function passwordsMatch(candidate: string) {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  if (!expected || !candidate) {
    return false;
  }

  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  if (a.length !== b.length) {
    timingSafeEqual(createHash("sha256").update(a).digest(), createHash("sha256").update(b).digest());
    return false;
  }

  return timingSafeEqual(a, b);
}

function sign(value: string) {
  const key = secret();
  if (!key) {
    return "";
  }
  return createHmac("sha256", key).update(value).digest("hex");
}

export function createSessionToken() {
  const issuedAt = Date.now();
  const expiresAt = issuedAt + SESSION_MS;
  const payload = `${issuedAt}.${expiresAt}.${randomBytes(8).toString("hex")}`;
  return `${payload}.${sign(payload)}`;
}

export function readSession(token: string | undefined): Session | null {
  if (!token || !secret()) {
    return null;
  }

  const parts = token.split(".");
  if (parts.length !== 4) {
    return null;
  }

  const [issuedAtRaw, expiresAtRaw, nonce, signature] = parts;
  const payload = `${issuedAtRaw}.${expiresAtRaw}.${nonce}`;
  const expected = sign(payload);
  if (!expected || expected.length !== signature.length) {
    return null;
  }

  if (!timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) {
    return null;
  }

  const issuedAt = Number(issuedAtRaw);
  const expiresAt = Number(expiresAtRaw);
  if (!Number.isFinite(issuedAt) || !Number.isFinite(expiresAt) || expiresAt < Date.now()) {
    return null;
  }

  return { issuedAt, expiresAt };
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "strict" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MS / 1000,
  };
}

export async function getAdminSession() {
  const store = await cookies();
  return readSession(store.get(COOKIE)?.value);
}

export function adminCookieName() {
  return COOKIE;
}

const loginAttempts = new Map<string, { count: number; firstAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

export function loginAllowed(ip: string) {
  const now = Date.now();
  const record = loginAttempts.get(ip);
  if (!record || now - record.firstAt > WINDOW_MS) {
    return true;
  }
  return record.count < MAX_ATTEMPTS;
}

export function recordLoginFailure(ip: string) {
  const now = Date.now();
  const record = loginAttempts.get(ip);
  if (!record || now - record.firstAt > WINDOW_MS) {
    loginAttempts.set(ip, { count: 1, firstAt: now });
    return;
  }
  record.count += 1;
}

export function clearLoginFailures(ip: string) {
  loginAttempts.delete(ip);
}

export function requestIp(headers: Headers) {
  const forwarded = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || headers.get("x-real-ip")?.trim() || "unknown";
}

export function ipAllowed(ip: string) {
  const raw = process.env.ADMIN_IPS?.trim();
  if (!raw) {
    return true;
  }

  const allowed = raw.split(",").map((item) => item.trim()).filter(Boolean);
  return allowed.includes(ip);
}
