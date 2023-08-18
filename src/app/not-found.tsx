import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center my-10 gap-5">
      <h1 className="text-6xl font-semibold max-[420px]:text-4xl">
        <span className="block text-9xl font-bold tracking-[3rem] max-[420px]:text-7xl max-[420px]:tracking-[2rem]">
          404
        </span>
        This page could not be found.
      </h1>
      <Image
        src="/assets/imgs/error-404.svg"
        alt="error 404"
        width={800}
        height={800}
        className="my-8"
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
