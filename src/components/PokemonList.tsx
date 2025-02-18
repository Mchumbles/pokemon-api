"use client";

import { useState, useEffect } from "react";
import { getPokemon } from "@/lib/getPokemon";
import { Pokemon, PokemonListProps } from "@/types/interfaces";
import GenerationButtons from "@/components/GenerationButtons";
import SearchBar from "@/components/SearchBar";
import PokemonCard from "@/components/PokeCard";

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

  const filteredPokemon = pokemonList.filter((pokemon) => {
    const searchLower = searchTerm.toLowerCase();
    const pokemonId = pokemon.id.toString();
    const pokemonName = pokemon.name.toLowerCase();
    return (
      pokemonName.includes(searchLower) || pokemonId.startsWith(searchLower)
    );
  });

  return (
    <>
      <GenerationButtons currentGen={currentGen} setGen={setCurrentGen} />
      <SearchBar onSearch={setSearchTerm} />

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
}
