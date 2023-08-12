import { EvolutionChainProps } from '@/shared-types/evolution';

export type EvolutionProps = {
  current: {
    name: string;
  };
  next: {
    name: string;
  };
};

export function evolutionChain(chain: EvolutionChainProps): EvolutionProps[] {
  const { species, evolves_to } = chain;

  if (!evolves_to.length) {
    return [];
  }

  const evolutions = evolves_to.flatMap((evolution) => {
    const current = { name: species.name };
    const next = { name: evolution.species.name };

    const nextEvolutions = evolutionChain(evolution as EvolutionChainProps);

    return [{ current, next }, ...nextEvolutions];
  });
  return evolutions;
}
