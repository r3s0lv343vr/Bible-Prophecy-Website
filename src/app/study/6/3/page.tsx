import type { Metadata } from "next";
import { SealScene } from "../seal-scene";

export const metadata: Metadata = {
  title: "Seal 3",
};

export default function Chapter6SealThreePage() {
  return (
    <SealScene
      imageSrc="/images/chapter-6/seal-3.webp"
      backHref="/study/6/2"
      nextHref="/study/6/4"
    />
  );
}
