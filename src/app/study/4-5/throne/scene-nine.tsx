"use client";

import Link from "next/link";
import { useState } from "react";
import "../room.css";
import "./throne-room.css";

export function SceneNine() {
  const [showChrist, setShowChrist] = useState(false);

  return (
    <div className="throne-room">
      <div className="throne-room-stack">
        <img
          className="throne-room-image"
          src="/images/chapters-4-5/throne-9.png"
          alt=""
        />
        <img
          className={`throne-room-image throne-room-overlay${showChrist ? " is-visible" : ""}`}
          src="/images/chapters-4-5/throne-9-christ.png"
          alt=""
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
        <span className="throne-nav-btn is-disabled" aria-disabled="true">
          →
        </span>
      </nav>
    </div>
  );
}
