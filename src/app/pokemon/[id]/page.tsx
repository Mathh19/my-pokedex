import { ContainerEvolution } from '@/components/ContainerEvolution';
import { PokemonDetails } from '@/components/PokemonDetails';

export default function Pokemon({ params }: { params: { id: string } }) {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-6">
      <PokemonDetails id={params.id} />
      <ContainerEvolution id={params.id} />
    </div>
  );
}
