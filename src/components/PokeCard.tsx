import { PokemonCardProps } from "@/types/interfaces";

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <li key={pokemon.id} className="text-center">
      <p className="text-lg">{pokemon.name}</p>
      <img
        src={pokemon.sprite}
        alt={pokemon.name}
        className="w-32 h-32 mx-auto"
      />
    </li>
  );
}
