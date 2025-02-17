import { getPokemon } from "@/lib/getPokemon";
import PokemonList from "@/components/PokemonList";

export default async function Home() {
  const initialPokemon = await getPokemon(1);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold text-cyan-800 mt-10">
        Pokémon
      </h1>

      <PokemonList initialPokemon={initialPokemon} />
    </main>
  );
}
