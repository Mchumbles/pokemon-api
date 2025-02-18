"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getIndividualPokemon } from "@/lib/getIndividualPokemon";
import { IndividualPokemonDetails } from "@/types/interfaces";

export default function PokemonPage() {
  const params = useParams();
  const id = params.id as string | undefined;
  const router = useRouter();

  const [pokemon, setPokemon] = useState<IndividualPokemonDetails | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      const data = await getIndividualPokemon(String(id));
      setPokemon(data);
    }

    fetchData();
  }, [id]);

  if (!pokemon) return null;

  return (
    <main className="container mx-auto text-center p-4">
      <h1 className="text-4xl font-bold text-cyan-800 capitalize">
        {pokemon.name}
      </h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-40 h-40 mx-auto"
      />
      <p className="mt-4 text-lg">Height: {pokemon.height / 10} m</p>
      <p className="text-lg">Weight: {pokemon.weight / 10} kg</p>
      <p className="text-lg">
        Types: {pokemon.types.map((t) => t.type.name).join(", ")}
      </p>

      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
      >
        Back to Home
      </button>
    </main>
  );
}
