import PokemonCard from "@/components/PokeCard";
import { getPokemon } from "@/lib/getPokemon";

export default async function Home() {
  const pokemonList = await getPokemon();

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-center text-bold text-cyan-800 text-4xl mt-10 mb-10">
        Pokemon
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprite}
          />
        ))}
      </ul>
    </main>
  );
}
