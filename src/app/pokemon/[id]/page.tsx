'use client';

import Image from 'next/image';
import { GiWeightScale } from 'react-icons/gi';
import { LiaRulerVerticalSolid } from 'react-icons/lia';
import { TbPokeball } from 'react-icons/tb';

import { AbilitiesModal } from '@/components/AbilitiesModal';
import { ContainerEvolution } from '@/components/ContainerEvolution';
import { PokemonStats } from '@/components/PokemonStats';
import { Type } from '@/components/Type';
import { SkeletonDetails } from '@/components/ui/SkeletonDetails';
import { useEvolution } from '@/hooks/useEvolution';
import { useFetch } from '@/hooks/useFetch';
import { PokemonProps } from '@/shared-types/pokemon';

export default function Pokemon({ params }: { params: { id: string } }) {
  const { data, isLoading } = useFetch<PokemonProps>(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const { evolutions } = useEvolution(params.id);

  const pokemonId =
    data !== undefined && data.id <= 9
      ? `00${data.id}`
      : data !== undefined && data.id <= 99
      ? `0${data.id}`
      : data?.id;

  const img =
    data?.sprites.other['official-artwork'].front_default ??
    '/assets/imgs/pokemon-not-found.svg';

  return (
    <div className="w-full flex flex-col items-center justify-center mt-6">
      <section className="flex w-full justify-center gap-16 px-10 py-6 bg-card-primary drop-shadow-sm rounded-xl max-[950px]:flex-wrap max-[950px]:max-w-[500px]">
        {isLoading ? (
          <SkeletonDetails />
        ) : (
          <>
            <div className="w-full flex flex-col items-center text-center gap-3">
              <Image
                src={img}
                alt={data ? data.name : 'no pokemon'}
                width={300}
                height={300}
                priority
                className="contrast-125 drop-shadow-[8px_2px_4px_rgba(0,0,0,0.35)]"
              />
              <div className="text-xl font-semibold tracking-wider">
                <p>#{pokemonId}</p>
                <p className="capitalize">{data?.name}</p>
              </div>
              <div className="w-full flex justify-center gap-8">
                {data?.types.map((type) => (
                  <Type key={type.type.name} type={type.type.name} />
                ))}
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <div className="container_pokemon_info">
                    <LiaRulerVerticalSolid className="text-3xl" />
                    <div>
                      <p className="text-lg font-medium">Height</p>
                      <p>{data && data.height / 10}m</p>
                    </div>
                  </div>
                  <div className="container_pokemon_info">
                    <GiWeightScale className="text-3xl" />
                    <div>
                      <p className="text-lg font-medium">Weight</p>
                      <p>{data && data.weight / 10}kg</p>
                    </div>
                  </div>
                </div>
                <AbilitiesModal abilities={data?.abilities} />
              </div>
            </div>
            <div className="relative max-w-[1px] flex flex-col justify-center items-center gap-4 max-[950px]:flex-row max-[950px]:max-w-none max-[950px]:w-full max-[950px]:h-[1px] after:content-[''] after:w-[2px] after:h-full after:bg-white after:m-auto after:max-[950px]:h-[2px] after:max-[950px]:w-full before:content-[''] before:w-[2px] before:h-full before:m-auto before:bg-white before:max-[950px]:h-[2px] before:max-[950px]:w-full">
              <TbPokeball className="rotate-90 text-9xl max-[950px]:rotate-0" />
            </div>
            <PokemonStats stats={data?.stats} />
          </>
        )}
      </section>
      <section className="my-12 space-y-12 text-center">
        <h2 className="text-5xl text-center font-bold tracking-wide">
          Evolutions
        </h2>
        {evolutions.length === 0 && !isLoading ? (
          <p className="mt-4 text-xl">No Evolutions</p>
        ) : (
          <ContainerEvolution evolutions={evolutions} />
        )}
      </section>
    </div>
  );
}
