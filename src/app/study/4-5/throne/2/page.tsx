import type { Metadata } from "next";
import { ThroneScene } from "../throne-scene";

export const metadata: Metadata = {
  title: "The throne room",
};

export default function ThroneRoomSceneTwoPage() {
  return (
    <ThroneScene
      imageSrc="/images/chapters-4-5/throne-2.png"
      scrollName="2"
      backHref="/study/4-5/throne"
      forwardHref="/study/4-5/throne/3"
    />
  );
}
