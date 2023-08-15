'use client';

import { useState } from 'react';

import { Card } from '@/components/Card';
import { Pagination } from '@/components/Pagination';
import { SearchPokemon } from '@/components/SearchPokemon';
import { SearchTypes } from '@/components/SearchTypes';
import { SkeletonCard } from '@/components/ui/SkeletonCard';
import { Wrapper } from '@/components/Wrapper';
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
    <Wrapper>
      <header className="w-full max-w-[958px] mt-10 flex justify-between gap-4 max-md:flex-wrap max-md:justify-center">
        <SearchTypes />
        <SearchPokemon />
      </header>

      {isLoading ? (
        <SkeletonCard lenght={data?.results.length} />
      ) : (
        <section className="container_cards">
          {data?.results.map((pokemon, index) => (
            <Card
              key={`${pokemon.name}-${index}`}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </section>
      )}

      <div className="mb-10">
        <Pagination count={112} setPage={setPage} />
      </div>
    </Wrapper>
  );
}
