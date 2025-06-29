export interface infoPokemon {
  name: string;
  url: string;
}

export interface Pokemon {
  data: {
    id: number;
    sprites: {
      front_default: string;
    };
    types: PokemonType[];
    weight: number;
    height: number;
    stats: PokemonStat[];
  }
  name: string;
  id: number;
}

export interface PropsGridCards {
  data: Pokemon[];
  itemsPerPage?: number;
  onSelect?: (pokemon: Pokemon) => void;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  weight: number;
  height: number;
  stats: PokemonStat[];
  id: number;
}

export interface PokemonRow {
  id: number;
  name: string;
  data: {
    id: number;
    height: number;
    weight: number;
    sprites: {
      front_default: string;
    };
    types: PokemonType[];
    stats: PokemonStat[];
  };
}

export interface Column {
  name: string;
  selector?: (row: PokemonRow) => React.ReactNode | string | number;
  cell?: (row: PokemonRow) => React.ReactNode;
  sortable?: boolean;
}

export interface PokemonTableProps {
  name: string;
  data: PokemonRow[];
  selectType: string;
}

export interface SelectorProps {
  types: string[];
  selectedType: string;
  setSelectedType: (type: string) => void;
}

export interface PropsModal {
  pokemon: {
    name: string;
    data: {
      id: number;
      sprites: {
        front_default: string;
      };
      types: { type: { name: string } }[];
      height: number;
      weight: number;
      stats: { stat: { name: string }; base_stat: number }[];
    };
  };
  onClose: () => void;
}