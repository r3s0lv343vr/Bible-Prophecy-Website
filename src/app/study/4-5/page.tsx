import type { Metadata } from "next";
import { DoorChamber } from "./door-chamber";

export const metadata: Metadata = {
  title: "Chapters 4 and 5",
};

export default function Chapters45DoorsPage() {
  return <DoorChamber />;
}
