import axios from "axios";
import { Pokemon } from "@/types/interfaces";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const LIMIT = 151;

export async function getPokemon(): Promise<Pokemon[]> {
  const result = await axios.get(`${BASE_URL}?limit=${LIMIT}&offset=0`);
  console.log(result.data.results);
  return result.data.results.map((pokemon: { name: string; url: string }) => {
    const id = pokemon.url.split("/").slice(-2, -1)[0];
    return {
      id: Number(id),
      name: pokemon.name,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      types: [],
    };
  });
}
