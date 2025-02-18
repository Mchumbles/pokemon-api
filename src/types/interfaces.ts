export interface Pokemon {
  id: number;
  name: string;
  sprite: string;
}

export interface PokemonCardProps {
  pokemon: Pokemon;
}

export interface PokemonListProps {
  initialPokemon: Pokemon[];
}

export interface GenerationProps {
  currentGen: number;
  setGen: (gen: number) => void;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface IndividualPokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
}

export interface EvolutionDetails {
  id: string;
  name: string;
  sprite: string;
}
