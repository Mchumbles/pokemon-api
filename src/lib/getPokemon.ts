import { generations } from "@/constants/generations";
import { Pokemon } from "@/types/interfaces";
import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemon(gen: number): Promise<Pokemon[]> {
  const selectedGen = generations.find((g) => g.id === gen);
  if (!selectedGen) throw new Error("Invalid generation");

  const result = await axios.get(
    `${BASE_URL}?limit=${selectedGen.end - selectedGen.start + 1}&offset=${
      selectedGen.start - 1
    }`
  );

  return result.data.results.map((pokemon: { name: string; url: string }) => {
    const id = Number(pokemon.url.split("/").slice(-2, -1)[0]);
    return {
      id,
      name: pokemon.name,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });
}
