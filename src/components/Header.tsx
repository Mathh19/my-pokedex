import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-header-primary w-full flex drop-shadow-md py-2 px-4">
      <Link href="/" className="flex gap-1 max-sm:items-center">
        <Image
          src="/assets/imgs/logo-pokeball.svg"
          width={64}
          height={64}
          alt="pokeball icon"
        />
        <p className="font-mono text-[2.5rem]/tight font-medium tracking-wide">
          Pokédex
        </p>
      </Link>
    </header>
  );
};
