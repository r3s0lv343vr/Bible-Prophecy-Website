"use client";

import { useState, type ReactNode } from "react";

export type StudyTab = {
  id: string;
  label: string;
  content: ReactNode;
};

export function StudyTabs({ tabs, initialId }: { tabs: StudyTab[]; initialId?: string }) {
  const [active, setActive] = useState(initialId ?? tabs[0]?.id);

  return (
    <div>
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`capsule shrink-0 text-sm ${active === tab.id ? "capsule-active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-2">
        {tabs.map((tab) => (
          <div key={tab.id} hidden={tab.id !== active}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
