import Image from 'next/image';

import { PokemonTypes } from '@/shared-types/pokemonTypes';

type TypeProps = {
  type: PokemonTypes;
  disabled?: boolean;
};

export const Type = ({ type, disabled = false }: TypeProps) => {
  const colorVariantsBg = {
    normal: 'bg-pokemon-types-normal',
    fighting: 'bg-pokemon-types-fighting',
    flying: 'bg-pokemon-types-flying',
    poison: 'bg-pokemon-types-poison',
    ground: 'bg-pokemon-types-ground',
    rock: 'bg-pokemon-types-rock',
    bug: 'bg-pokemon-types-bug',
    ghost: 'bg-pokemon-types-ghost',
    steel: 'bg-pokemon-types-steel',
    fire: 'bg-pokemon-types-fire',
    water: 'bg-pokemon-types-water',
    grass: 'bg-pokemon-types-grass',
    electric: 'bg-pokemon-types-electric',
    psychic: 'bg-pokemon-types-psychic',
    ice: 'bg-pokemon-types-ice',
    dragon: 'bg-pokemon-types-dragon',
    dark: 'bg-pokemon-types-dark',
    fairy: 'bg-pokemon-types-fairy'
  };

  return (
    <button
      disabled={disabled}
      className={`${colorVariantsBg[type]} flex flex-shrink-0 gap-1 justify-center items-center rounded-full px-2 py-1.5 font-semibold text-sm uppercase`}
    >
      <Image
        src={`/assets/icons/${type}.svg`}
        alt="Icon pokémon type"
        width={20}
        height={20}
      />
      {type}
    </button>
  );
};