export interface Pokemon {
  id: number;
  name: string;
  sprite: string;
}

export interface PokemonCardProps {
  id: number;
  name: string;
  sprite: string;
}

export interface PokemonListProps {
  initialPokemon: Pokemon[];
}

export interface GenerationProps {
  currentGen: number;
  setGen: (gen: number) => void;
}
