import type { Metadata } from "next";
import "./room.css";

export const metadata: Metadata = {
  title: "Chapters 4 and 5",
};

export default function Chapters45RoomPage() {
  return (
    <iframe
      className="chapter-room"
      src="/images/chapters-4-5/Heavenly_Gates_Arched_Animated.html"
      title="Chapters 4 and 5"
    />
  );
}
