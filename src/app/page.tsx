'use client';

import { useState } from 'react';

import { Card } from '@/components/Card';
import { Pagination } from '@/components/Pagination';
import { LoadingPage } from '@/components/ui/LoadingPage';
import { Wrapper } from '@/components/Wrapper';
import { useFetch } from '@/hooks/useFetch';
import { DataPokemonProps } from '@/shared-types/pokemon';

export default function Home() {
  const [page, setPage] = useState(1);
  const offset = 9 * (page - 1);
  const { data, isLoading } = useFetch<DataPokemonProps>(
    `https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${offset}`
  );

  return (
    <Wrapper>
      {isLoading ? (
        <LoadingPage />
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
