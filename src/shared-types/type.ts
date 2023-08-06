import { PokemonTypes } from './pokemonTypes';

type DamageProps = {
  name: PokemonTypes;
  url: string;
};

export type DamageRelationsProps = {
  double_damage_from: DamageProps[];
  double_damage_to: DamageProps[];
  half_damage_from: DamageProps[];
  half_damage_to: DamageProps[];
  no_damage_from: DamageProps[];
  no_damage_to: DamageProps[];
};

export type TypeProps = {
  name: string;
  damage_relations: DamageRelationsProps;
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};
