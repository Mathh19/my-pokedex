import { Metadata } from 'next';

import { ContainerEvolution } from '@/components/ContainerEvolution';
import { PokemonDetails } from '@/components/PokemonDetails';
import { PokemonProps } from '@/shared-types/pokemon';

import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

export type MetadataProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params
}: MetadataProps): Promise<Metadata> {
  const id = params.id;

  const pokemon: PokemonProps = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  ).then((res) => res.json());

  return {
    title: `My pokédex | ${capitalizeFirstLetter(pokemon.name)}`,
    description: `See details about ${pokemon.name}, what are the stats, height, weight, abilities, type and if it has evolution and what they are.`
  };
}

export default function Pokemon({ params }: { params: { id: string } }) {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-6">
      <PokemonDetails id={params.id} />
      <ContainerEvolution id={params.id} />
    </div>
  );
}
