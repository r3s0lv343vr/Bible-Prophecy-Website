import type { Metadata } from "next";
import Link from "next/link";
import "../room.css";
import "./throne-room.css";

export const metadata: Metadata = {
  title: "The throne room",
};

export default function ThroneRoomPage() {
  return (
    <div className="throne-room">
      <img
        className="throne-room-image"
        src="/images/chapters-4-5/throne.png"
        alt=""
      />
      <Link href="/contents" className="capsule chapter-room-toc">
        Table of contents
      </Link>
      <aside className="throne-scroll" aria-label="1">
        <div className="throne-scroll-rod">
          <span className="throne-scroll-name">1</span>
        </div>
        <div className="throne-scroll-sheet" />
        <div className="throne-scroll-rod is-bottom" />
      </aside>
    </div>
  );
}
