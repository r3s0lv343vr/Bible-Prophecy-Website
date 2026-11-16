import type { Metadata } from "next";
import { ThroneScene } from "../throne-scene";

export const metadata: Metadata = {
  title: "The throne room",
};

export default function ThroneRoomSceneEightPage() {
  return (
    <ThroneScene
      imageSrc="/images/chapters-4-5/throne-8.webp"
      scrollName="8"
      backHref="/study/4-5/throne/7"
      forwardHref="/study/4-5/throne/9"
    />
  );
}
