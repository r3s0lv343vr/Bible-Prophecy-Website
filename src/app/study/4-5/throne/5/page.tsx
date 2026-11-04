import type { Metadata } from "next";
import { ThroneScene } from "../throne-scene";

export const metadata: Metadata = {
  title: "The throne room",
};

export default function ThroneRoomSceneFivePage() {
  return (
    <ThroneScene
      imageSrc="/images/chapters-4-5/throne-5.png"
      scrollName="5"
      backHref="/study/4-5/throne/4"
      forwardHref="/study/4-5/throne/6"
    />
  );
}
