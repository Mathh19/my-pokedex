import Image from 'next/image';

export const PokemonNotFound = () => {
  return (
    <div className="flex flex-col mt-10 gap-6 items-center">
      <h2 className="text-2xl font-medium tracking-wide text-center">
        Ops, an error occurred, Pokémon not found :(
      </h2>
      <Image
        src="/assets/imgs/not-found-search-pokemon.svg"
        alt="image of a pokemon not found"
        width={200}
        height={200}
      />
    </div>
  );
};
