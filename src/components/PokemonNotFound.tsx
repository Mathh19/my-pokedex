import Image from 'next/image';

export const PokemonNotFound = () => {
  return (
    <div className="flex flex-col mt-10 gap-6 items-center">
      <p className="text-2xl font-medium tracking-wide text-center">
        Ops, an error occurred, Pokémon not found :(
      </p>
      <Image
        src="/assets/imgs/not-found-search-pokemon.svg"
        alt="image of an empty pokeball"
        width={200}
        height={200}
      />
    </div>
  );
};
