import type { Metadata } from "next";
import { SealScene } from "../seal-scene";

export const metadata: Metadata = {
  title: "Seal 2",
};

export default function Chapter6SealTwoPage() {
  return <SealScene backHref="/study/6/1" />;
}
