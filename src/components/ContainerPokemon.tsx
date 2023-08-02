import { PokemonProps } from '@/shared-types/pokemon';

import { Card } from './Card';

type ContainerPokemonProps = {
  pokemons?: PokemonProps[];
};

export const ContainerPokemon = ({ pokemons }: ContainerPokemonProps) => {
  return (
    <div className="inline-grid min-h-screen grid-cols-3 gap-x-11 gap-y-11 max-[1050px]:grid-cols-2 max-md:grid-cols-1">
      {pokemons?.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};
