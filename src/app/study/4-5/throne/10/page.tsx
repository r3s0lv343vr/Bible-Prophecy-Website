import type { Metadata } from "next";
import { ThroneScene } from "../throne-scene";

export const metadata: Metadata = {
  title: "The throne room",
};

export default function ThroneRoomSceneTenPage() {
  return (
    <ThroneScene
      imageSrc="/images/chapters-4-5/throne-10.webp"
      scrollName="10"
      backHref="/study/4-5/throne/9"
    />
  );
}
