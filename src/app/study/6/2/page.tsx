import type { Metadata } from "next";
import { SealScene } from "../seal-scene";

export const metadata: Metadata = {
  title: "Seal 2",
};

export default function Chapter6SealTwoPage() {
  return (
    <SealScene
      imageSrc="/images/chapter-6/seal-2.png"
      backHref="/study/6/1"
      nextHref="/study/6/3"
    />
  );
}
