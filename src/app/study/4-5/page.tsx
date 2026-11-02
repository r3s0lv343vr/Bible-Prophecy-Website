import type { Metadata } from "next";
import "./room.css";

export const metadata: Metadata = {
  title: "Chapters 4 and 5",
};

export default function Chapters45RoomPage() {
  return (
    <div className="chapter-room">
      <img src="/images/chapters-4-5/room.png" alt="" />
    </div>
  );
}
