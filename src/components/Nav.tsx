import { SearchPokemon } from './SearchPokemon';
import { SearchTypes } from './SearchTypes';

export const Nav = () => {
  return (
    <nav className="w-full mt-10 flex justify-between gap-4 max-md:flex-wrap max-md:justify-center">
      <SearchTypes />
      <SearchPokemon />
    </nav>
  );
};
