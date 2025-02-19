import { typeColours } from "@/constants/typeColours";

export default function TypeBadge({ type }: { type: string }) {
  const colours = typeColours[type] || { bg: "#A8A8A8", border: "#6D6D6D" };

  return (
    <span
      className="px-3 py-1 text-white font-bold rounded-full border-2"
      style={{
        backgroundColor: colours.bg,
        borderColor: colours.border,
      }}
    >
      {type.toUpperCase()}
    </span>
  );
}
