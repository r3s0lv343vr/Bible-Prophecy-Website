export function ContentSlot({
  label,
  kind = "text",
}: {
  label: string;
  kind?: "text" | "image" | "map" | "explore";
}) {
  const height =
    kind === "image" ? "min-h-48" : kind === "map" || kind === "explore" ? "min-h-80" : "min-h-32";

  return (
    <div className={`glass flex ${height} items-center justify-center rounded-[1.4rem] p-5 text-center`}>
      <p className="text-sm leading-7 text-[#b7c0e0]">
        {label}
        <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-[#86f0c8]">
          Content to be uploaded
        </span>
      </p>
    </div>
  );
}
