'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useFetch } from '@/hooks/useFetch';
import { PokemonProps } from '@/shared-types/pokemon';

import { extractIdFromUrl } from '@/utils/extractIdFromUrl';

type PokemonEvolutionProps = {
  name: string;
};

export const PokemonEvolution = ({ name }: PokemonEvolutionProps) => {
  const { data } = useFetch<PokemonProps>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const img =
    data?.sprites.other['official-artwork'].front_default ??
    '/assets/imgs/pokemon-not-found.svg';

  return (
    <>
      {data && (
        <Link href={`/pokemon/${extractIdFromUrl(data.species.url)}`}>
          <div className="flex flex-col items-center text-center gap-1">
            <div className="p-8 border-4 border-white rounded-full">
              <Image
                src={img}
                alt={`${name} image`}
                width={200}
                height={200}
                priority
              />
            </div>
            <p className="capitalize text-2xl font-semibold">{data?.name}</p>
          </div>
        </Link>
      )}
    </>
  );
};
