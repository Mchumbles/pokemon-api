import { generations } from "@/constants/generations";
import { GenerationProps } from "@/types/interfaces";

export default function GenerationButtons({
  currentGen,
  setGen,
}: GenerationProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 my-4">
      {generations.map((gen) => (
        <button
          key={gen.id}
          className={`px-4 py-2 rounded-lg text-white font-bold transition ${
            currentGen === gen.id
              ? "bg-blue-600"
              : "bg-blue-400 hover:bg-blue-500"
          }`}
          onClick={() => setGen(gen.id)}
        >
          Gen {gen.id}
        </button>
      ))}
    </div>
  );
}
