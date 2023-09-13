'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useFetch } from '@/hooks/useFetch';
import { PokemonProps } from '@/shared-types/pokemon';

import { extractIdFromUrl } from '@/utils/extractIdFromUrl';

import { Type } from './Type';
import { Skeleton } from './ui/Skeleton';

type CardProps = {
  name: string;
  url: string;
};

export const Card = ({ name, url }: CardProps) => {
  const { data, isLoading } = useFetch<PokemonProps>(url);

  const id = data?.id.toString().padStart(3, '0');

  const img =
    data?.sprites.other['official-artwork'].front_default ??
    '/assets/imgs/pokemon-not-found.svg';

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center gap-4 p-7 rounded-xl bg-card-primary drop-shadow-3xl">
          <Skeleton type="img" />
          <div className="flex flex-col items-center gap-2">
            <Skeleton type="text" size="sm" />
            <Skeleton type="text" size="md" />
            <Skeleton type="text" size="md" />
          </div>
        </div>
      ) : (
        <Link href={`/pokemon/${extractIdFromUrl(data?.species.url)}`}>
          <div className="relative group font-medium text-lg tracking-wide p-7 rounded-xl bg-card-primary drop-shadow-3xl delay-100 duration-300 ease-in-out hover:-translate-y-2 animate-card">
            <div className="w-full flex flex-col items-center gap-2">
              <Image
                src="/assets/imgs/logo-pokeball.svg"
                width={60}
                height={60}
                alt="pokeball icon"
                className="absolute left-0 top-0 m-1.5 group-hover:rotate-45 delay-100 duration-300 ease-in-out"
              />
              <div className="contrast-125">
                <Image
                  src={img}
                  alt={`${name} image`}
                  width={320}
                  height={320}
                  priority
                  className="drop-shadow-[8px_2px_4px_rgba(0,0,0,0.35)] p-1.5"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-3 text-xl">
                <p>#{id}</p>
                <p className="capitalize text-center whitespace-nowrap max-sm:whitespace-normal">
                  {name}
                </p>
                {data?.types && (
                  <div className="flex gap-4">
                    {data?.types.map((type) => (
                      <Type
                        key={type.type.name}
                        disabled={true}
                        type={type.type.name}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
