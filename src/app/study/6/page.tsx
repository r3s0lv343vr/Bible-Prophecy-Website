import type { Metadata } from "next";
import Link from "next/link";
import "./room.css";

export const metadata: Metadata = {
  title: "Chapter 6",
};

export default function Chapter6RoomPage() {
  return (
    <>
      <iframe
        className="chapter-room"
        src="/images/chapter-6/index.html?v=seal-1"
        title="Chapter 6"
      />
      <Link href="/contents" className="capsule chapter-room-toc">
        Table of contents
      </Link>
    </>
  );
}
