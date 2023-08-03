type DamageProps = {
  name: string;
  url: string;
};

export type TypeProps = {
  name: string;
  damage_relations: {
    double_damage_from: DamageProps[];
    double_damage_to: DamageProps[];
    half_damage_from: DamageProps[];
    half_damage_to: DamageProps[];
    no_damage_from: DamageProps[];
    no_damage_to: DamageProps[];
  };
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};
