export function HistoricMap({
  title,
  src,
  caption,
}: {
  title: string;
  src: string;
  caption: string;
}) {
  return (
    <figure className="glass overflow-hidden rounded-[1.6rem]">
      <div className="px-5 pt-4">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#6ee7ff]">
          Free map · OpenStreetMap
        </p>
        <h3 className="mt-1 font-display text-2xl">{title}</h3>
      </div>
      <iframe
        title={title}
        src={src}
        className="mt-3 h-72 w-full border-0 sm:h-96"
      />
      <figcaption className="px-5 py-4 text-sm leading-7 text-[#b7c0e0]">
        {caption}
      </figcaption>
    </figure>
  );
}
