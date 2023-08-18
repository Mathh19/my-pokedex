'use client';

import { useEffect, useState } from 'react';

import { Card } from '@/components/Card';
import { PokemonNotFound } from '@/components/PokemonNotFound';
import { Wrapper } from '@/components/Wrapper';
import { useFetch } from '@/hooks/useFetch';
import { DataPokemonProps } from '@/shared-types/pokemon';

export default function SearchPage({ params }: { params: { name: string } }) {
  const { data, isLoading } = useFetch<DataPokemonProps>(
    'https://pokeapi.co/api/v2/pokemon/?limit=1281'
  );
  const [filteredPokemon, setFilteredPokemon] =
    useState<{ name: string; url: string }[]>();

  useEffect(() => {
    if (data) {
      const filteredResults = data.results.filter((pokemon) =>
        pokemon.name.startsWith(params.name.toLowerCase())
      );
      setFilteredPokemon(filteredResults);
    }
  }, [data, params.name]);

  return (
    <Wrapper>
      {!isLoading && filteredPokemon?.length === 0 && <PokemonNotFound />}
      {filteredPokemon && filteredPokemon.length > 0 && (
        <>
          <h2 className="mt-10 text-3xl font-medium text-center">
            Search results for{' '}
            <span className="text-header-primary">{params.name}</span>
          </h2>
          <div className="container_cards">
            {filteredPokemon.map((pokemon) => (
              <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
}
