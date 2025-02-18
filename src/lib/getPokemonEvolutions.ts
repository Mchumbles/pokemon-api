export async function getPokemonEvolutions(pokemonId: string) {
  try {
    const speciesResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
    );
    const speciesData = await speciesResponse.json();

    const evoChainUrl = speciesData.evolution_chain.url;

    const evoResponse = await fetch(evoChainUrl);
    const evoData = await evoResponse.json();

    const evoChain = [];
    let currentEvo = evoData.chain;

    while (currentEvo) {
      const evoId = currentEvo.species.url.split("/").slice(-2, -1)[0];
      evoChain.push({
        id: evoId,
        name: currentEvo.species.name,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evoId}.png`,
      });

      currentEvo = currentEvo.evolves_to[0] || null;
    }

    return evoChain;
  } catch (error) {
    console.error("Error fetching evolution chain:", error);
    return [];
  }
}
