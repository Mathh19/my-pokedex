'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useFetch } from '@/hooks/useFetch';
import { PokemonProps } from '@/shared-types/pokemon';

import { Type } from './Type';

type CardProps = {
  name: string;
  url: string;
};

export const Card = ({ name, url }: CardProps) => {
  const { data } = useFetch<PokemonProps>(url);

  const id =
    data !== undefined && data.id <= 9
      ? `00${data.id}`
      : data !== undefined && data.id <= 99
      ? `0${data.id}`
      : data?.id;

  const img = data?.sprites.other['official-artwork'].front_default
    ? data?.sprites.other['official-artwork'].front_default
    : '/assets/imgs/pokemon-not-found.svg';

  return (
    <Link href="/" className="group max-w-[290px]">
      <div className="relative font-semibold text-lg p-4 rounded-xl bg-card-primary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.35)] animate-card">
        <div className="flex flex-col items-center w-full">
          <Image
            src="/assets/imgs/logo-pokeball.svg"
            width={45}
            height={45}
            alt="pokeball icon"
            className="absolute left-0 top-0 m-1 group-hover:rotate-45 delay-100 duration-300 ease-in-out"
          />
          <Image
            src={img}
            alt={name}
            width={250}
            height={250}
            priority
            className="contrast-125 m-4 drop-shadow-[8px_2px_4px_rgba(0,0,0,0.35)]"
          />
          <div className="flex flex-col justify-center items-center gap-2">
            <p>#{id}</p>
            <p className="capitalize whitespace-nowrap">{name}</p>
            {data?.types && (
              <div className="flex gap-3">
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
  );
};
