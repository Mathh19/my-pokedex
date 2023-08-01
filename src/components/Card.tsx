import Image from 'next/image';
import Link from 'next/link';

import { PokemonProps } from '@/shared-types/pokemon';

import { Type } from './Type';

type CardProps = {
  pokemon: PokemonProps;
};

export const Card = ({ pokemon }: CardProps) => {
  const id =
    pokemon.id <= 9
      ? `00${pokemon.id}`
      : pokemon.id <= 99
      ? `0${pokemon.id}`
      : pokemon.id;

  const img = pokemon.sprites.other.home.front_default
    ? pokemon.sprites.other.home.front_default
    : '/assets/imgs/pokemon-not-found.svg';

  return (
    <Link href="/" className="group">
      <div className="relative font-semibold text-lg border p-4 border-zinc-400 rounded-xl bg-gradient-to-b from-1% from-zinc-700 to-bg-primary to-80% animate-card">
        <>
          <Image
            src="/assets/imgs/logo-pokeball.svg"
            width={45}
            height={45}
            alt="pokeball icon"
            className="absolute left-0 top-0 m-1 group-hover:rotate-45 delay-100 duration-300 ease-in-out"
          />
          <Image
            src={img}
            alt={pokemon.name}
            width={250}
            height={250}
            priority
          />
          <div className="flex flex-col mt-4 justify-center items-center gap-2">
            <p>#{id}</p>
            <p className="capitalize whitespace-nowrap">{pokemon.name}</p>
            {pokemon.types && (
              <div className="flex gap-3">
                {pokemon.types.map((type) => (
                  <Type
                    key={type.type.name}
                    disabled={true}
                    type={type.type.name}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      </div>
    </Link>
  );
};
