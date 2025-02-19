import Image from "next/image";
import { getPokemon } from "@/lib/getPokemon";
import PokemonList from "@/components/PokemonList";
import { Pokemon } from "@/types/interfaces";
import GitHub from "@/components/GitHub";

export default async function Home() {
  const initialPokemon: Pokemon[] = await getPokemon(1);

  return (
    <main className="container mx-auto p-4">
      <GitHub />

      <div className="flex justify-center mb-6">
        <Image
          src="/images/Pokemon-Logo.png"
          alt="Pokémon Logo"
          width={600}
          height={200}
          className="w-3/4 md:w-1/2 lg:w-1/3 object-contain "
        />
      </div>

      <PokemonList initialPokemon={initialPokemon} />
    </main>
  );
}
