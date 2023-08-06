import { DamageRelationsProps } from '@/shared-types/type';

import { Type } from './Type';

type PokemonTypeDetailsProps = {
  damageRelations?: DamageRelationsProps;
};

export const PokemonTypeDetails = ({
  damageRelations
}: PokemonTypeDetailsProps) => {
  return (
    <ul className="list_types">
      {damageRelations && (
        <>
          <li>
            Weakness:{' '}
            {damageRelations.double_damage_from.length > 0
              ? damageRelations.double_damage_from.map((weakness) => (
                  <Type key={weakness.name} type={weakness.name} />
                ))
              : '--'}
          </li>
          <li>
            Super effective against:{' '}
            {damageRelations.double_damage_to.length > 0
              ? damageRelations.double_damage_to.map((weakness) => (
                  <Type key={weakness.name} type={weakness.name} />
                ))
              : '--'}
          </li>
          <li>
            Not very effective against:{' '}
            {damageRelations.half_damage_to.length > 0
              ? damageRelations.half_damage_to.map((weakness) => (
                  <Type key={weakness.name} type={weakness.name} />
                ))
              : '--'}
          </li>
          <li>
            Resistence:{' '}
            {damageRelations.half_damage_from.length > 0
              ? damageRelations.half_damage_from.map((weakness) => (
                  <Type key={weakness.name} type={weakness.name} />
                ))
              : '--'}
          </li>
          <li>
            Immune:{' '}
            {damageRelations.no_damage_from.length > 0
              ? damageRelations.no_damage_from.map((weakness) => (
                  <Type key={weakness.name} type={weakness.name} />
                ))
              : '--'}
          </li>
          <li>
            Ineffective :{' '}
            {damageRelations.no_damage_to.length > 0
              ? damageRelations.no_damage_to.map((weakness) => (
                  <Type key={weakness.name} type={weakness.name} />
                ))
              : '--'}
          </li>
        </>
      )}
    </ul>
  );
};
