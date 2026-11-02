import type { Metadata } from "next";
import { ThroneScene } from "./throne-scene";

export const metadata: Metadata = {
  title: "The throne room",
};

export default function ThroneRoomPage() {
  return (
    <ThroneScene
      imageSrc="/images/chapters-4-5/throne.png"
      scrollName="1"
      scrollText="Welcome to the Throne Room of God"
      backHref="/study/4-5"
      forwardHref="/study/4-5/throne/2"
    />
  );
}
