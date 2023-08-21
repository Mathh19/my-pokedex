type SkeletonProps = {
  size?: 'sm' | 'md' | 'full';
  type: 'img' | 'text';
};

export const Skeleton = ({ type, size = 'full' }: SkeletonProps) => {
  const classVariants = {
    img: 'w-[250px] h-[250px] rounded-full max-[337px]:w-[200px] max-[337px]:h-[200px]',
    text: `${
      size === 'sm'
        ? 'w-16 rounded-md'
        : size === 'md'
        ? 'w-48 rounded-md max-[432px]:w-32'
        : 'w-full rounded-md'
    } h-7`
  };

  return (
    <div
      className={`${classVariants[type]} bg-gradient-to-r from-zinc-800 to-zinc-700 animate-pulse`}
    ></div>
  );
};
