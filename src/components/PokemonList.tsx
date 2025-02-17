"use client";

import { useState, useEffect } from "react";
import { getPokemon } from "@/lib/getPokemon";
import { Pokemon, PokemonListProps } from "@/types/interfaces";
import GenerationButtons from "@/components/GenerationButtons";
import SearchBar from "@/components/SearchBar";

export default function PokemonList({ initialPokemon }: PokemonListProps) {
  const [currentGen, setCurrentGen] = useState(1);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(initialPokemon);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <GenerationButtons currentGen={currentGen} setGen={setCurrentGen} />
      <SearchBar onSearch={setSearchTerm} />

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemon.map((pokemon) => (
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
