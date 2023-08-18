import { EvolutionChainProps } from '@/shared-types/evolution';

export type EvolutionProps = {
  current: {
    name: string;
  };
  next: {
    name: string;
  };
};

export function formatEvolutionChain(
  evolutionChain: EvolutionChainProps
): EvolutionProps[] {
  const { species, evolves_to } = evolutionChain;

  if (!evolves_to.length) {
    return [];
  }

  const evolutions = evolves_to.flatMap((evolution) => {
    const current = { name: species.name };
    const next = { name: evolution.species.name };

    const nextEvolutions = formatEvolutionChain(
      evolution as EvolutionChainProps
    );

    return [{ current, next }, ...nextEvolutions];
  });
  return evolutions;
}
