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
