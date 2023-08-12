import { Skeleton } from './Skeleton';

export const SkeletonDetails = () => {
  return (
    <>
      <div className="space-y-4 w-full flex flex-col items-center">
        <Skeleton type="img" />
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} type="text" />
        ))}
      </div>
      <div className="w-full flex gap-3 flex-col justify-end">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton type="text" size="md" />
            <Skeleton type="text" />
          </div>
        ))}
        <Skeleton type="text" size="md" />
      </div>
    </>
  );
};
