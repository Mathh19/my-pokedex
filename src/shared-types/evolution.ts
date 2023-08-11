export type DataEvolutionProps = {
  name: string;
  evolution_chain: {
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  } | null;
};

export type EvolutionChainProps = {
  evolves_to: {
    evolves_to: {
      species: {
        name: string;
        url: string;
      };
    }[];
    species: {
      name: string;
      url: string;
    };
  }[];
  species: {
    name: string;
    url: string;
  };
};

export type PokemonEvolutionProps = {
  chain: EvolutionChainProps;
};
