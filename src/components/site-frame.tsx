import Link from "next/link";
import type { ReactNode } from "react";
import { Aurora } from "@/components/aurora";

export function SiteFrame({
  children,
  showNav = true,
}: {
  children: ReactNode;
  showNav?: boolean;
}) {
  return (
    <>
      <Aurora />
      <div className="mx-auto flex min-h-full max-w-6xl flex-col px-4 py-5 sm:px-6">
        {showNav ? (
          <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <Link href="/" className="font-display text-lg text-[#eef2ff] sm:text-xl">
              Bible Prophecy Platform
            </Link>
            <nav className="flex flex-wrap gap-2 text-sm">
              <Link href="/contents" className="capsule">
                Contents
              </Link>
              <Link href="/introduction" className="capsule">
                Introduction
              </Link>
              <Link href="/read" target="_blank" className="capsule">
                Revelation
              </Link>
            </nav>
          </header>
        ) : null}
        {children}
      </div>
    </>
  );
}
