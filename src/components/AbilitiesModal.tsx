'use client';

import { useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';

import { AbilitiesDetails } from './AbilitiesDetails';

type AbilitiesModalProps = {
  abilities?: {
    ability: {
      name: string;
      url: string;
    };
  }[];
};

export const AbilitiesModal = ({ abilities }: AbilitiesModalProps) => {
  const [open, setOpen] = useState(false);

  const filteredAbilities = abilities?.filter((ability, index, array) => {
    const firstIndex = array.findIndex(
      (item) => item.ability.name === ability.ability.name
    );
    return index === firstIndex;
  });

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-medium mb-1">Abilities</h3>
      {filteredAbilities?.map((ability, index) => (
        <p key={`${ability.ability.name}${index}`}>{ability.ability.name}</p>
      ))}
      <button
        aria-label="open and close abilities modal"
        onClick={() => setOpen(!open)}
        className="mt-2 text-2xl text-[#007BCD] duration-150"
      >
        <BsPlusCircle />
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="absolute z-10 bg-zinc-800 w-full max-w-lg rounded-xl drop-shadow-md flex flex-col gap-4 p-4 animate-modal-abilities max-[950px]:-translate-x-[65px]"
        >
          {filteredAbilities?.map((ability, index) => (
            <AbilitiesDetails
              key={`${ability.ability.name}${index}`}
              url={ability.ability.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};
