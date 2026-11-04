import type { Metadata } from "next";
import { ThroneScene } from "../throne-scene";

export const metadata: Metadata = {
  title: "The throne room",
};

export default function ThroneRoomSceneFourPage() {
  return (
    <ThroneScene
      imageSrc="/images/chapters-4-5/throne-4.png"
      scrollName="4"
      backHref="/study/4-5/throne/3"
      forwardHref="/study/4-5/throne/5"
    />
  );
}
