import type { Metadata } from "next";
import { ThroneScene } from "../throne-scene";

export const metadata: Metadata = {
  title: "The throne room",
};

export default function ThroneRoomSceneSevenPage() {
  return (
    <ThroneScene
      imageSrc="/images/chapters-4-5/throne-7.png"
      scrollName="7"
      backHref="/study/4-5/throne/6"
      forwardHref="/study/4-5/throne/8"
    />
  );
}
