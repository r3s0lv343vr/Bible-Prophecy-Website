import type { Metadata } from "next";
import { SceneNine } from "../scene-nine";

export const metadata: Metadata = {
  title: "The throne room",
};

export default function ThroneRoomSceneNinePage() {
  return <SceneNine />;
}
