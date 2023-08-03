'use client';

import { useRef, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { TbPokeball } from 'react-icons/tb';

import { Card } from '@/components/Card';
import { SearchTypes } from '@/components/SearchTypes';
import { SekeletonCard } from '@/components/ui/SkeletonCard';
import { useFetch } from '@/hooks/useFetch';
import { TypeProps } from '@/shared-types/type';

export default function Type({ params }: { params: { type: string } }) {
  const { data, isLoading } = useFetch<TypeProps>(
    `https://pokeapi.co/api/v2/type/${params.type}`
  );
  const [limit, setLimit] = useState(9);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const pokemons = data?.pokemon.slice(0, limit);

  const handleToBottom = () => {
    setLimit((prevLimit) => prevLimit + 3);
    setTimeout(() => {
      buttonRef.current?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 180);
  };

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="my-10">
        <SearchTypes />
      </div>
      {isLoading ? (
        <SekeletonCard lenght={limit} />
      ) : (
        <div className="container_cards">
          {pokemons?.map((pokemon) => (
            <Card
              key={pokemon.pokemon.name}
              name={pokemon.pokemon.name}
              url={pokemon.pokemon.url}
            />
          ))}
        </div>
      )}
      {pokemons?.length === data?.pokemon.length ? (
        <button
          aria-label="to the top of the page"
          ref={buttonRef}
          onClick={handleToTop}
          className="my-4 text-4xl text-slate-300 duration-200 hover:text-slate-600"
        >
          <BsFillArrowUpCircleFill />
        </button>
      ) : (
        <button
          onClick={handleToBottom}
          ref={buttonRef}
          className="flex justify-center items-center gap-2 my-4 bg-card-primary px-3.5 py-2.5 rounded-md duration-100 hover:bg-slate-700"
        >
          <TbPokeball className="text-2xl" />
          See more Pokémon
        </button>
      )}
    </div>
  );
}
