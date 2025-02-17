import { PokemonCardProps } from "@/types/interfaces";

export default function PokemonCard({ id, name, sprite }: PokemonCardProps) {
  return (
    <li key={id} className="text-center">
      <p className="text-lg">{name}</p>
      <img src={sprite} alt={name} className="w-32 h-32 mx-auto" />
    </li>
  );
}
