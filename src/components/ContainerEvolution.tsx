import { MdArrowRightAlt } from 'react-icons/md';

import { EvolutionProps } from '@/utils/evolutionChain';

import { PokemonEvolution } from './PokemonEvolution';

type ContainerEvolutionProps = {
  evolutions: EvolutionProps[];
};

export const ContainerEvolution = ({ evolutions }: ContainerEvolutionProps) => {
  return (
    <div className="space-y-8">
      {evolutions.map((evolution) => (
        <div key={evolution.next.name} className="flex items-center gap-4">
          <PokemonEvolution name={evolution.current.name} />
          <MdArrowRightAlt className="text-7xl" />
          <PokemonEvolution name={evolution.next.name} />
        </div>
      ))}
    </div>
  );
};
