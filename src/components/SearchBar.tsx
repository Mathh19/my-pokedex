import { SearchPokemon } from './SearchPokemon';
import { SearchTypes } from './SearchTypes';

export const SearchBar = () => {
  return (
    <div className="w-full max-w-[958px] mt-10 flex justify-between gap-4 max-md:flex-wrap max-md:justify-center">
      <SearchTypes />
      <SearchPokemon />
    </div>
  );
};