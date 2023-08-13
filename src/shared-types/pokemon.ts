import { PokemonTypes } from './pokemonTypes';

export type StatsProps = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonProps = {
  id: number;
  name: string;
  order: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default?: string;
      };
    };
  };
  species: {
    name: string;
    url: string;
  };
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  types: {
    type: {
      name: PokemonTypes;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
  stats: StatsProps[];
  height: number;
  weight: number;
};
