import { webpSrc } from "@/lib/scene-image";

export function SceneImage({
  src,
  className,
  priority = true,
}: {
  src: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      className={className}
      src={webpSrc(src)}
      alt=""
      fetchPriority={priority ? "high" : "low"}
      decoding="async"
    />
  );
}

export function PreloadImage({ src }: { src?: string }) {
  if (!src) {
    return null;
  }
  return <link rel="preload" as="image" href={webpSrc(src)} />;
}
