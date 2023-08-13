'use client';

import { useFetch } from '@/hooks/useFetch';

type DataAbilitiesProps = {
  name: string;
  effect_entries: {
    short_effect: string;
    language: {
      name: string;
    };
  }[];
};

export const AbilitiesDetails = ({ url }: { url: string }) => {
  const { data } = useFetch<DataAbilitiesProps>(url);

  const abilityDescriptionEn = data?.effect_entries.find(
    (effect) => effect.language.name === 'en'
  );

  return (
    <div className="flex gap-3">
      <h2 className="capitalize text-start text-lg font-medium">
        {data?.name}:
      </h2>
      <p key={abilityDescriptionEn?.short_effect} className="text-start">
        {data?.effect_entries.length === 0
          ? 'Without description'
          : abilityDescriptionEn?.short_effect}
      </p>
    </div>
  );
};
