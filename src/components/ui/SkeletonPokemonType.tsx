import { Skeleton } from './Skeleton';

export const SkeletonPokemonType = () => {
  return (
    <div className="container_type_info">
      <div className="flex justify-center items-center">
        <Skeleton type="text" />
      </div>
      <div className="space-y-3 max-w-lg">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} type="text" />
        ))}
      </div>
    </div>
  );
};
