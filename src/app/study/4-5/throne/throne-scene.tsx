import Link from "next/link";
import "../room.css";
import "./throne-room.css";

export function ThroneScene({
  imageSrc,
  scrollName,
  scrollText,
  backHref,
  forwardHref,
}: {
  imageSrc: string;
  scrollName: string;
  scrollText?: string;
  backHref: string;
  forwardHref?: string;
}) {
  return (
    <div className="throne-room">
      <img className="throne-room-image" src={imageSrc} alt="" />
      <Link href="/contents" className="capsule chapter-room-toc">
        Table of contents
      </Link>
      <aside className="throne-scroll" aria-label={scrollName}>
        <div className="throne-scroll-rod">
          <span className="throne-scroll-name">{scrollName}</span>
        </div>
        <div className="throne-scroll-sheet">
          {scrollText ? <p className="throne-scroll-text">{scrollText}</p> : null}
        </div>
        <div className="throne-scroll-rod is-bottom" />
      </aside>
      <nav className="throne-nav" aria-label="Scene">
        <Link href={backHref} className="throne-nav-btn" aria-label="Back">
          ←
        </Link>
        {forwardHref ? (
          <Link href={forwardHref} className="throne-nav-btn" aria-label="Forward">
            →
          </Link>
        ) : (
          <span className="throne-nav-btn is-disabled" aria-disabled="true">
            →
          </span>
        )}
      </nav>
    </div>
  );
}
