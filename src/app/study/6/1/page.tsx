import type { Metadata } from "next";
import { SealScene } from "../seal-scene";

export const metadata: Metadata = {
  title: "Seal 1",
};

export default function Chapter6SealOnePage() {
  return (
    <SealScene
      imageSrc="/images/chapter-6/seal-1.webp"
      backHref="/study/6"
      nextHref="/study/6/2"
    />
  );
}
