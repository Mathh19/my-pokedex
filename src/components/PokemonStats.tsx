import { StatsProps } from '@/shared-types/pokemon';

type PokemonStatsProps = {
  stats?: StatsProps[];
};

export const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <div className="w-full tracking-wide">
      <h2 className="text-5xl">Stats</h2>
      <ul className="mt-5 text-lg font-medium space-y-3">
        {stats?.map((stat) => (
          <li key={stat.stat.name}>
            <span className="uppercase">{stat.stat.name}</span>
            <div className="flex items-center gap-2.5 font-normal">
              {stat.base_stat}
              <div className="w-full relative bg-zinc-500 h-2.5 rounded-full">
                <div
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                  className="block rounded-full h-full bg-green-400"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
