import { PokemonTypes } from './pokemonTypes';

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
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
};
