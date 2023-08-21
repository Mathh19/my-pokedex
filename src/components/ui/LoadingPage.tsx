import Image from 'next/image';

export const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center">
      <div className="loading_pokeball">
        <Image
          src="/assets/imgs/pokeball-loading.svg"
          alt="loading"
          width={180}
          height={180}
          priority
          className="contrast-150"
        />
      </div>
      <p className="text-3xl tracking-wide font-semibold">Loading...</p>
    </div>
  );
};
