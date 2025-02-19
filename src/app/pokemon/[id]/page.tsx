"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getIndividualPokemon } from "@/lib/getIndividualPokemon";
import { getPokemonEvolutions } from "@/lib/getPokemonEvolutions";
import { IndividualPokemonDetails, EvolutionDetails } from "@/types/interfaces";
import IndividualPokeCard from "@/components/IndividualPokeCard";
import EvolutionPokeCard from "@/components/EvolutionPokeCard";

export default function PokemonPage() {
  const params = useParams();
  const id = params.id as string | undefined;
  const router = useRouter();

  const [pokemon, setPokemon] = useState<IndividualPokemonDetails | null>(null);
  const [evolutions, setEvolutions] = useState<EvolutionDetails[]>([]);
  const [isLoadingEvolutions, setIsLoadingEvolutions] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchPokemon() {
      const data = await getIndividualPokemon(String(id));
      setPokemon(data);
    }

    fetchPokemon();
  }, [id]);

  useEffect(() => {
    if (!pokemon) return;

    async function fetchEvolutions() {
      setIsLoadingEvolutions(true);
      const evoData = await getPokemonEvolutions(String(id));
      setEvolutions(evoData);
      setIsLoadingEvolutions(false);
    }

    fetchEvolutions();
  }, [pokemon]);

  if (!pokemon) return null;

  return (
    <main className="container mx-auto text-center p-4">
      <IndividualPokeCard pokemon={pokemon} />

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-cyan-900 bg-white bg-opacity-75 px-4 py-2 rounded-lg inline-block mb-6">
          Evolutions
        </h2>

        {isLoadingEvolutions ? (
          <p>Loading evolutions...</p>
        ) : (
          <div
            className="flex flex-wrap justify-center gap-4 mt-4"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            {evolutions.length > 0 ? (
              evolutions.map((evo) => (
                <EvolutionPokeCard key={evo.id} evolution={evo} />
              ))
            ) : (
              <p className="w-full text-center">No evolutions available.</p>
            )}
          </div>
        )}
      </div>

      <button
        onClick={() => router.replace("/")}
        className="mt-6 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
      >
        Back to Home
      </button>
    </main>
  );
}
