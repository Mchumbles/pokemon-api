"use client";

import { useState, useEffect } from "react";
import { getPokemon } from "@/lib/getPokemon";
import { Pokemon } from "@/types/interfaces";
import GenerationButtons from "@/components/GenerationButtons";
import { PokemonListProps } from "@/types/interfaces";

export default function PokemonList({ initialPokemon }: PokemonListProps) {
  const [currentGen, setCurrentGen] = useState(1);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(initialPokemon);

  useEffect(() => {
    async function fetchPokemon() {
      if (currentGen === 1) {
        setPokemonList(initialPokemon);
      } else {
        const data = await getPokemon(currentGen);
        setPokemonList(data);
      }
    }
    fetchPokemon();
  }, [currentGen, initialPokemon]);

  return (
    <>
      <GenerationButtons currentGen={currentGen} setGen={setCurrentGen} />
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id} className="text-center">
            <p className="text-lg">{pokemon.name}</p>
            <img
              src={pokemon.sprite}
              alt={pokemon.name}
              className="w-32 h-32 mx-auto"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
