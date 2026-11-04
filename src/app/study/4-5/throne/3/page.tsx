import type { Metadata } from "next";
import { ThroneScene } from "../throne-scene";

export const metadata: Metadata = {
  title: "The throne room",
};

export default function ThroneRoomSceneThreePage() {
  return (
    <ThroneScene
      imageSrc="/images/chapters-4-5/throne-3.png"
      scrollName="3"
      backHref="/study/4-5/throne/2"
      forwardHref="/study/4-5/throne/4"
    />
  );
}
