import { useEffect, useState } from 'react';

import {
  DataEvolutionProps,
  PokemonEvolutionProps
} from '@/shared-types/evolution';

import { EvolutionProps, evolutionChain } from '@/utils/evolutionChain';

import { useFetch } from './useFetch';

export const useEvolution = (name: string) => {
  const { data: evolutionFrom } = useFetch<DataEvolutionProps>(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  const [evolutions, setEvolutions] = useState<EvolutionProps[]>([]);

  useEffect(() => {
    const fetchEvolution = async () => {
      if (evolutionFrom) {
        try {
          const res = await fetch(evolutionFrom.evolution_chain.url);
          const data: PokemonEvolutionProps = await res.json();

          setEvolutions(evolutionChain(data.chain));
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchEvolution();
  }, [evolutionFrom]);

  return { evolutions: evolutions };
};
