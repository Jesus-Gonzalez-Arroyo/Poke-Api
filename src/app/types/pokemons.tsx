export interface infoPokemon {
  name: string;
  url: string;
}

export interface PokemonData {
  name: string;
  url: string;
  data: object;
}

export interface Pokemon {
    data: {
        id: string;
        sprites: {
            front_default: string;
        };
    }
    name: string;
}

export interface Props {
    data: Pokemon[];
    itemsPerPage?: number;
    onSelect?: (pokemon: Pokemon) => void;
}