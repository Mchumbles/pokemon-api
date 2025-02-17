import { getPokemon } from "@/lib/getPokemon";

export default async function Home() {
  const pokemonList = await getPokemon();

  return (
    <main className="container mx-auto px-4 max-w-screen-lg">
      <h1 className="text-center text-bold text-cyan-800 text-9xl mt-10 mb-10">
        Pokemon
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </main>
  );
}
