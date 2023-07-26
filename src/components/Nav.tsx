import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';

export const Nav = () => {
  return (
    <nav className="bg-nav-primary drop-shadow-md py-2 px-4 flex justify-between items-center">
      <div className="flex gap-1 mr-4">
        <Image
          src="/assets/imgs/logo-pokeball.svg"
          width={64}
          height={64}
          alt="pokeball icon"
        />
        <Image
          src="/assets/imgs/logo-text.svg"
          width={160}
          height={160}
          alt="pokedex written text icon"
          className="max-sm:hidden"
        />
      </div>

      <form className="group relative flex mr-3 w-full max-w-xs justify-end items-center">
        <input
          type="text"
          placeholder="Search pokémon..."
          className="rounded-full w-full shadow-[0px_0px_5px] text-zinc-950 px-3 py-1"
        />
        <button
          type="submit"
          className="absolute outline-1 right-0 shadow-[0px_0px_5px_black] flex text-xl justify-center items-center cursor-pointer w-11 h-11 rounded-full bg-black group-focus-within:bg-neutral-900 group-focus-within:outline"
        >
          <BiSearch />
        </button>
      </form>
    </nav>
  );
};
