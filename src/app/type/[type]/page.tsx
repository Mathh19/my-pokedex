'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { TbPokeball } from 'react-icons/tb';

import { Card } from '@/components/Card';
import { PokemonTypeDetails } from '@/components/PokemonTypeDetails';
import { SkeletonPokemonType } from '@/components/ui/SkeletonPokemonType';
import { useFetch } from '@/hooks/useFetch';
import { PokemonTypes } from '@/shared-types/pokemonTypes';
import { TypeProps } from '@/shared-types/type';

export default function TypePage({
  params
}: {
  params: { type: PokemonTypes };
}) {
  const { data, isLoading } = useFetch<TypeProps>(
    `https://pokeapi.co/api/v2/type/${params.type}`
  );
  const colorVariants = {
    normal: 'bg-pokemon-types-normal',
    fighting: 'bg-pokemon-types-fighting',
    flying: 'bg-pokemon-types-flying',
    poison: 'bg-pokemon-types-poison',
    ground: 'bg-pokemon-types-ground',
    rock: 'bg-pokemon-types-rock',
    bug: 'bg-pokemon-types-bug',
    ghost: 'bg-pokemon-types-ghost',
    steel: 'bg-pokemon-types-steel',
    fire: 'bg-pokemon-types-fire',
    water: 'bg-pokemon-types-water',
    grass: 'bg-pokemon-types-grass',
    electric: 'bg-pokemon-types-electric',
    psychic: 'bg-pokemon-types-psychic',
    ice: 'bg-pokemon-types-ice',
    dragon: 'bg-pokemon-types-dragon',
    dark: 'bg-pokemon-types-dark',
    fairy: 'bg-pokemon-types-fairy'
  };

  const [limit, setLimit] = useState(9);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const pokemons = data?.pokemon.slice(0, limit);

  const handleLoadMorePokemons = () => {
    setLimit((prevLimit) => prevLimit + 3);
    setTimeout(() => {
      buttonRef.current?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 180);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col items-center">
      {isLoading ? (
        <SkeletonPokemonType />
      ) : (
        <section
          style={{
            backgroundImage: "url('/assets/imgs/bg-triangle.svg')"
          }}
          className="container_type_info bg-contain bg-no-repeat bg-right-bottom"
        >
          <h2 className="text-3xl tracking-wider font-bold capitalize flex items-center justify-center text-center gap-3 flex-wrap">
            {params.type} type information
            <div className={`${colorVariants[params.type]} rounded-full p-2`}>
              <Image
                src={`/assets/icons/${params.type}.svg`}
                alt={params.type}
                width={24}
                height={24}
              />
            </div>
          </h2>
          <PokemonTypeDetails damageRelations={data?.damage_relations} />
        </section>
      )}
      <section className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">
          <span className="capitalize">{params.type}</span> type pokemons
        </h2>
        <div className="container_cards">
          {pokemons?.map((pokemon) => (
            <Card
              key={pokemon.pokemon.name}
              name={pokemon.pokemon.name}
              url={pokemon.pokemon.url}
            />
          ))}
        </div>
        {pokemons?.length === data?.pokemon.length ? (
          <button
            aria-label="to the top of the page"
            ref={buttonRef}
            onClick={handleScrollToTop}
            className="mb-10 text-4xl text-slate-300 duration-200 hover:text-slate-600"
          >
            <BsFillArrowUpCircleFill />
          </button>
        ) : (
          <button
            onClick={handleLoadMorePokemons}
            ref={buttonRef}
            className="flex justify-center items-center gap-2 mb-10 bg-card-primary px-3.5 py-2.5 rounded-md duration-100 hover:bg-slate-700"
          >
            <TbPokeball className="text-2xl" />
            See more Pokémon
          </button>
        )}
      </section>
    </div>
  );
}
