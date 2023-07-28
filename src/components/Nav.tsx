import Image from 'next/image';

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
          priority
          className="max-sm:hidden"
        />
      </div>
    </nav>
  );
};
