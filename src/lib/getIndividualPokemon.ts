import axios from "axios";
import { IndividualPokemonDetails } from "@/types/interfaces";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getIndividualPokemon(
  id: string
): Promise<IndividualPokemonDetails> {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Pokémon");
  }
}
