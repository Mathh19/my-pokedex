import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-header-primary w-full drop-shadow-md py-2 px-4 flex justify-between items-center">
      <Link href="/">
        <div className="flex gap-1">
          <Image
            src="/assets/imgs/logo-pokeball.svg"
            width={64}
            height={64}
            alt="pokeball icon"
          />
          <p className="inline-block font-mono text-[40px]/tight font-medium tracking-wide">
            Pokédex
          </p>
        </div>
      </Link>
    </header>
  );
};
