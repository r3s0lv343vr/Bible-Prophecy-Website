import Link from "next/link";
import { PreloadImage, SceneImage } from "@/components/scene-image";
import { nextSceneImage } from "@/lib/scene-image";
import "./room.css";

export function SealScene({
  imageSrc,
  backHref,
  nextHref,
}: {
  imageSrc?: string;
  backHref: string;
  nextHref?: string;
}) {
  return (
    <div className="seal-scene">
      <PreloadImage src={nextSceneImage(nextHref)} />
      {imageSrc ? <SceneImage src={imageSrc} className="seal-scene-image" /> : null}
      <Link href="/contents" className="capsule chapter-room-toc">
        Table of contents
      </Link>
      <nav className="seal-scene-nav" aria-label="Seal">
        <Link href={backHref} className="seal-scene-back" aria-label="Back">
          ←
        </Link>
        {nextHref ? (
          <Link href={nextHref} className="capsule capsule-blue seal-scene-next">
            Next seal
          </Link>
        ) : (
          <span className="capsule capsule-blue seal-scene-next is-disabled" aria-disabled="true">
            Next seal
          </span>
        )}
      </nav>
    </div>
  );
}
