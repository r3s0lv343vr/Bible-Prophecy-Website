import type { Metadata } from "next";
import { SealScene } from "../seal-scene";

export const metadata: Metadata = {
  title: "Seal 4",
};

export default function Chapter6SealFourPage() {
  return (
    <SealScene
      imageSrc="/images/chapter-6/seal-4.png"
      backHref="/study/6/3"
    />
  );
}
