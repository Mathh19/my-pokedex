import { useCallback, useEffect, useState } from 'react';

import {
  DataEvolutionProps,
  PokemonEvolutionProps
} from '@/shared-types/evolution';

import { EvolutionProps, formatEvolutionChain } from '@/utils/evolutionChain';

import { useFetch } from './useFetch';

export const useEvolution = (id: string) => {
  const { data: evolutionFrom } = useFetch<DataEvolutionProps>(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const [evolutions, setEvolutions] = useState<EvolutionProps[]>([]);

  const fetchEvolution = useCallback(async () => {
    if (evolutionFrom) {
      try {
        const evolutionResults = await fetch(evolutionFrom.evolution_chain.url);
        const evolutionChainData: PokemonEvolutionProps =
          await evolutionResults.json();

        setEvolutions(formatEvolutionChain(evolutionChainData.chain));
      } catch (err) {
        console.log(err);
      }
    }
  }, [evolutionFrom]);

  useEffect(() => {
    fetchEvolution();
  }, [fetchEvolution]);

  return { evolutions: evolutions };
};
