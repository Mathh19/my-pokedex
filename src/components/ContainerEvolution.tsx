'use client';

import { MdArrowRightAlt } from 'react-icons/md';

import { useEvolution } from '@/hooks/useEvolution';

import { PokemonEvolution } from './PokemonEvolution';

type ContainerEvolutionProps = {
  id: string;
};

export const ContainerEvolution = ({ id }: ContainerEvolutionProps) => {
  const { evolutions } = useEvolution(id);

  return (
    <section className="my-12 space-y-12 text-center">
      <h2 className="text-5xl text-center font-bold tracking-wide">
        Evolutions
      </h2>
      <div className="space-y-8">
        {evolutions.map((evolution) => (
          <div key={evolution.next.name} className="flex items-center gap-4">
            <PokemonEvolution name={evolution.current.name} />
            <MdArrowRightAlt className="text-7xl" />
            <PokemonEvolution name={evolution.next.name} />
          </div>
        ))}
        {evolutions.length === 0 && (
          <div>
            <p className="mt-4 text-xl">No Evolutions</p>
          </div>
        )}
      </div>
    </section>
  );
};
