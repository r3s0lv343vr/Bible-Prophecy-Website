"use client";

import Link from "next/link";
import { useState } from "react";
import { PreloadImage, SceneImage } from "@/components/scene-image";
import "../room.css";
import "./throne-room.css";

export function SceneNine() {
  const [showChrist, setShowChrist] = useState(false);

  return (
    <div className="throne-room">
      <PreloadImage src="/images/chapters-4-5/throne-10.webp" />
      <div className="throne-room-stack">
        <SceneImage src="/images/chapters-4-5/throne-9.webp" className="throne-room-image" />
        <SceneImage
          src="/images/chapters-4-5/throne-9-christ.webp"
          className={`throne-room-image throne-room-overlay${showChrist ? " is-visible" : ""}`}
          priority={false}
        />
      </div>
      <div className="throne-jewels" aria-label="Reveal">
        <button
          type="button"
          className={`throne-jewel is-lamb${showChrist ? "" : " is-active"}`}
          aria-label="Show the Lamb"
          aria-pressed={!showChrist}
          onClick={() => setShowChrist(false)}
        />
        <button
          type="button"
          className={`throne-jewel is-christ${showChrist ? " is-active" : ""}`}
          aria-label="Show Christ"
          aria-pressed={showChrist}
          onClick={() => setShowChrist(true)}
        />
      </div>
      <Link href="/contents" className="capsule chapter-room-toc">
        Table of contents
      </Link>
      <aside className="throne-scroll" aria-label="9">
        <div className="throne-scroll-rod">
          <span className="throne-scroll-name">9</span>
        </div>
        <div className="throne-scroll-sheet" />
        <div className="throne-scroll-rod is-bottom" />
      </aside>
      <nav className="throne-nav" aria-label="Scene">
        <Link href="/study/4-5/throne/8" className="throne-nav-btn" aria-label="Back">
          ←
        </Link>
        <Link href="/study/4-5/throne/10" className="throne-nav-btn" aria-label="Forward">
          →
        </Link>
      </nav>
    </div>
  );
}
