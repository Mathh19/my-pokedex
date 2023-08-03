import { Skeleton } from './Skeleton';

type SekeletonCardProps = {
  lenght?: number;
};

export const SekeletonCard = ({ lenght = 9 }: SekeletonCardProps) => {
  return (
    <div className="container_cards">
      {[...Array(lenght)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 bg-card-primary rounded-xl p-4"
        >
          <Skeleton type="img" />
          <div className="mt-4 flex flex-col items-center gap-2">
            <Skeleton type="text" size="sm" />
            <Skeleton type="text" size="md" />
            <Skeleton type="text" size="full" />
          </div>
        </div>
      ))}
    </div>
  );
};
