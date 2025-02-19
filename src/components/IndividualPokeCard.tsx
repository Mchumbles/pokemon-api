"use client";

import { IndividualPokemonDetails } from "@/types/interfaces";
import TypeBadge from "@/components/TypeBadge";

interface IndividualPokeCardProps {
  pokemon: IndividualPokemonDetails;
}

export default function IndividualPokeCard({
  pokemon,
}: IndividualPokeCardProps) {
  return (
    <div className="bg-gray-400 border-4 rounded-lg border-yellow-400 p-6 mt-8 text-center max-w-sm mx-auto shadow-lg">
      <h1 className="text-4xl font-bold text-black capitalize">
        {pokemon.name}
      </h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-40 h-40 mx-auto"
      />

      <p className="mt-4 text-lg">Height: {pokemon.height / 10} m</p>
      <p className="text-lg">Weight: {pokemon.weight / 10} kg</p>

      <div className="flex justify-center gap-2 mt-3">
        {pokemon.types.map((t) => (
          <TypeBadge key={t.type.name} type={t.type.name} />
        ))}
      </div>
    </div>
  );
}
