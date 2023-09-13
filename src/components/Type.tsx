import Image from 'next/image';
import { useRouter } from 'next/navigation';

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

  const router = useRouter();

  const handleNavigateToType = (value: string) => {
    router.push(`/type/${value}`);
  };

  return (
    <button
      disabled={disabled}
      aria-label={`button to navigate to details about ${type} type`}
      value={type}
      onClick={() => handleNavigateToType(type)}
      className={`${colorVariantsBg[type]} flex gap-1.5 justify-center items-center rounded-full px-2.5 py-1.5 font-semibold tracking-wider text-base uppercase max-sm:py-2`}
    >
      <Image
        src={`/assets/icons/${type}.svg`}
        alt={`${type} pokemon type icon`}
        width={24}
        height={24}
      />
      <span className="max-sm:hidden">{type}</span>
    </button>
  );
};
