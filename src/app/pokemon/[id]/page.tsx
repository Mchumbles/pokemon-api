"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getIndividualPokemon } from "@/lib/getIndividualPokemon";
import { IndividualPokemonDetails } from "@/types/interfaces";
import IndividualPokeCard from "@/components/IndividualPokeCard";

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
      <IndividualPokeCard pokemon={pokemon} />
      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
      >
        Back to Home
      </button>
    </main>
  );
}
