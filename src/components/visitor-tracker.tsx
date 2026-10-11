"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function currentTab() {
  const selected = document.querySelector('[role="tab"][aria-selected="true"]');
  if (selected?.textContent) {
    return selected.textContent.trim();
  }

  const folder = document.querySelector(".folder-tab-active");
  if (folder?.textContent) {
    return folder.textContent.trim();
  }

  const capsule = document.querySelector(".capsule-active");
  if (capsule?.textContent) {
    return capsule.textContent.trim();
  }

  return "";
}

function currentPage() {
  return `${window.location.pathname}${window.location.search}`;
}

function send(page: string, tab: string) {
  if (page.startsWith("/admin") || page.startsWith("/api/")) {
    return;
  }

  void fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ page, tab }),
    keepalive: true,
    credentials: "same-origin",
  });
}

export function VisitorTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      return;
    }

    let lastPage = "";
    let lastTab = "";

    const pulse = () => {
      const page = currentPage();
      const tab = currentTab();
      if (page === lastPage && tab === lastTab && document.visibilityState === "hidden") {
        return;
      }
      lastPage = page;
      lastTab = tab;
      send(page, tab);
    };

    pulse();
    const catchTabs = window.setTimeout(pulse, 400);
    const interval = window.setInterval(pulse, 10_000);
    const onClick = () => window.setTimeout(pulse, 50);
    const onVisibility = () => pulse();

    document.addEventListener("click", onClick);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", pulse);

    return () => {
      window.clearTimeout(catchTabs);
      window.clearInterval(interval);
      document.removeEventListener("click", onClick);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", pulse);
    };
  }, [pathname, searchParams]);

  return null;
}
