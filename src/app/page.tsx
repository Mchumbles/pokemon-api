import { getPokemon } from "@/lib/getPokemon";
import PokemonList from "@/components/PokemonList";
import { Pokemon } from "@/types/interfaces";

export default async function Home() {
  const initialPokemon: Pokemon[] = await getPokemon(1);

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-center">
        <div className="rounded-lg bg-white bg-opacity-80 px-6 py-4">
          <h1 className="text-center text-7xl font-bold text-yellow-500">
            Pokémon
          </h1>
        </div>
      </div>
      <PokemonList initialPokemon={initialPokemon} />
    </main>
  );
}
