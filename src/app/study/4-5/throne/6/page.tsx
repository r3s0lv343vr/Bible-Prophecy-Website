import type { Metadata } from "next";
import { ThroneScene } from "../throne-scene";

export const metadata: Metadata = {
  title: "The throne room",
};

export default function ThroneRoomSceneSixPage() {
  return (
    <ThroneScene
      imageSrc="/images/chapters-4-5/throne-6.png"
      scrollName="6"
      backHref="/study/4-5/throne/5"
    />
  );
}
