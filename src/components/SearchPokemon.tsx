'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

export const SearchPokemon = () => {
  const [searchPokemon, setSearchPokemon] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (searchPokemon === '') return;
    router.push(`/search/${searchPokemon.toLowerCase()}`);
  };

  return (
    <form className="group relative flex w-full max-w-[420px] justify-end items-center">
      <input
        type="text"
        placeholder="Search pokémon..."
        value={searchPokemon}
        onChange={(e) => setSearchPokemon(e.target.value)}
        className="rounded-full w-full shadow-[0px_0px_5px] font-semibold text-zinc-950 px-3 py-1.5 placeholder:font-medium"
      />
      <button
        type="submit"
        aria-label="search"
        onClick={handleSubmit}
        className="absolute outline-1 -right-[1px] shadow-[0px_0px_5px_black] flex text-xl justify-center items-center cursor-pointer w-12 h-12 rounded-full bg-black group-focus-within:bg-neutral-900 group-focus-within:outline"
      >
        <BiSearch />
      </button>
    </form>
  );
};
