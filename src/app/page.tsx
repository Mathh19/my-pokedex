'use client';

import { useState } from 'react';

import { Card } from '@/components/Card';
import { Pagination } from '@/components/Pagination';
import { SearchPokemon } from '@/components/SearchPokemon';
import { SearchTypes } from '@/components/SearchTypes';
import { SekeletonCard } from '@/components/ui/SkeletonCard';
import { useFetch } from '@/hooks/useFetch';

type DataPokemonProps = {
  name: string;
  url: string;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const offset = 9 * (page - 1);
  const { data, isLoading } = useFetch<{ results: DataPokemonProps[] }>(
    `https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${offset}`
  );

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-full max-w-[958px] my-10 flex justify-between gap-4 max-md:flex-wrap max-md:justify-center">
        <SearchTypes />
        <SearchPokemon />
      </div>

      {isLoading ? (
        <SekeletonCard lenght={data?.results.length} />
      ) : (
        <div className="container_cards">
          {data?.results.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      )}

      <div className="my-10">
        <Pagination count={143} setPage={setPage} />
      </div>
    </div>
  );
}
