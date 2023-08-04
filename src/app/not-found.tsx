import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center my-10 gap-5">
      <h1 className="text-9xl font-bold tracking-[3rem] max-[420px]:text-7xl max-[420px]:tracking-[2rem]">
        404
      </h1>
      <p className="text-6xl font-semibold max-[420px]:text-4xl">
        This page could not be found.
      </p>
      <Image
        src="/assets/imgs/error-404.svg"
        alt="error 404"
        width={350}
        height={350}
        className="mt-6"
      />
      <Link
        href="/"
        className="bg-[#FFCB05] text-black rounded-full text-4xl font-black px-7 py-2 drop-shadow-md"
      >
        Go Home
      </Link>
    </div>
  );
}