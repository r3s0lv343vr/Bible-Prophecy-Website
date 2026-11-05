import Link from "next/link";
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
      {imageSrc ? (
        <img className="seal-scene-image" src={imageSrc} alt="" />
      ) : null}
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
