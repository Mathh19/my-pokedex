'use client';

import { useRef } from 'react';
import { MdNavigateNext } from 'react-icons/md';

import { useFetch } from '@/hooks/useFetch';
import { PokemonTypes } from '@/shared-types/pokemonTypes';

import { Type } from './Type';
import { Skeleton } from './ui/Skeleton';

type SearchTypesDataProps = {
  results: {
    name: ('unknown' | 'shadow') & PokemonTypes;
    url: string;
  }[];
};

export const SearchTypes = () => {
  const { data, isLoading } = useFetch<SearchTypesDataProps>(
    'https://pokeapi.co/api/v2/type/'
  );
  const listRef = useRef<HTMLUListElement>(null);

  const scrollTypes = (scrollTo: 'prev' | 'next') => {
    const listElement = listRef.current;
    if (listElement) {
      scrollTo === 'next'
        ? (listElement.scrollLeft += 230)
        : (listElement.scrollLeft -= 230);
    }
  };

  const filterType = data?.results.filter(
    (type) => type.name !== 'unknown' && type.name !== 'shadow'
  );

  return (
    <div className="flex items-center gap-3">
      <button
        aria-label="prev"
        onClick={() => scrollTypes('prev')}
        className="btn_slide"
      >
        <MdNavigateNext className="rotate-180" />
      </button>
      <ul
        ref={listRef}
        className="flex gap-2 w-full max-w-[280px] overflow-hidden scroll-smooth max-sm:overflow-x-scroll max-[394px]:max-w-[230px]"
      >
        {isLoading
          ? [...Array(4)].map((_, index) => (
              <li key={index}>
                <Skeleton type="text" size="md" />
              </li>
            ))
          : filterType?.map((type) => (
              <li key={type.name} className="flex flex-shrink-0">
                <Type type={type.name} />
              </li>
            ))}
      </ul>
      <button
        aria-label="next"
        onClick={() => scrollTypes('next')}
        className="btn_slide"
      >
        <MdNavigateNext />
      </button>
    </div>
  );
};
