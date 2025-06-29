import React from "react";
import { PokemonRow, PokemonType } from '../types/pokemons'
import { TableColumn } from "react-data-table-component";

export const columnsTable = (onSelect: (row: PokemonRow) => void): TableColumn<PokemonRow>[] => [
  {
    name: "Imagen",
    selector: (row: PokemonRow) => row.data.sprites.front_default,
    cell: (row: PokemonRow) => (
      <img className="w-[80px] h-[80px]" src={row.data.sprites.front_default} alt={row.name} width={50} />
    ),
  },
  {
    name: "Nombre",
    selector: (row: PokemonRow) => row.name,
    sortable: true,
  },
  {
    name: "Tipo",
    selector: (row: PokemonRow) => row.data.types.map((item: PokemonType) => item.type.name).join(", "),
    cell: (row: PokemonRow) => (
      <div>
        {row.data.types.map((item: PokemonType) => (
          <div key={item.slot}>{item.type.name}</div>
        ))}
      </div>
    ),
    sortable: true,
  },
  {
    name: "Peso",
    selector: (row: PokemonRow) => row.data.weight,
    cell: (row: PokemonRow) => (
      <p>{row.data.weight} kg</p>
    ),
    sortable: true,
  },
  {
    name: "Altura",
    selector: (row: PokemonRow) => row.data.height,
    cell: (row: PokemonRow) => (
      <p>{row.data.height} m</p>
    ),
    sortable: true,
  },
  {
    name: "Salud base",
    selector: (row: PokemonRow) => row.data.stats[0].base_stat,
    cell: (row: PokemonRow) => (
      <p className={`${row.data.stats[0].base_stat >= 80 ? 'bg-green-500' : 'bg-red-500'} w-[50px] p-2 text-center rounded-md text-white`}>{row.data.stats[0].base_stat}</p>
    ),
    sortable: true,
  },
  {
    name: "Ataque base",
    selector: (row: PokemonRow) => row.data.stats[1].base_stat,
    cell: (row: PokemonRow) => (
      <p className={`${row.data.stats[1].base_stat >= 60 ? 'bg-green-500' : 'bg-red-500'} w-[50px] p-2 text-center rounded-md text-white`}>{row.data.stats[1].base_stat}</p>
    ),
    sortable: true,
  },
  {
    name: "Defensa base",
    selector: (row: PokemonRow) => row.data.stats[2].base_stat,
    cell: (row: PokemonRow) => (
      <p className={`${row.data.stats[2].base_stat >= 70 ? 'bg-green-500' : 'bg-red-500'} w-[50px] p-2 text-center rounded-md text-white`}>{row.data.stats[2].base_stat}</p>
    ),
    sortable: true,
  },
  {
    name: "Ataque especial",
    selector: (row: PokemonRow) => row.data.stats[3].base_stat,
    cell: (row: PokemonRow) => (
      <p className={`${row.data.stats[3].base_stat >= 60 ? 'bg-green-500' : 'bg-red-500'} w-[50px] p-2 text-center rounded-md text-white`}>{row.data.stats[3].base_stat}</p>
    ),
    sortable: true,
  },
  {
    name: "Defensa especial",
    selector: (row: PokemonRow) => row.data.stats[5].base_stat,
    cell: (row: PokemonRow) => (
      <p className={`${row.data.stats[4].base_stat >= 70 ? 'bg-green-500' : 'bg-red-500'} w-[50px] p-2 text-center rounded-md text-white`}>{row.data.stats[4].base_stat}</p>
    ),
    sortable: true,
  },
  {
    name: "Velocidad",
    selector: (row: PokemonRow) => row.data.stats[5].base_stat,
    cell: (row: PokemonRow) => (
      <p className={`${row.data.stats[5].base_stat >= 50 ? 'bg-green-500' : 'bg-red-500'} w-[50px] p-2 text-center rounded-md text-white`}>
        {row.data.stats[5].base_stat}
      </p>
    ),
    sortable: true,
  },
  {
    name: "Detalles",
    cell: (row: PokemonRow) => (
      <p onClick={() => onSelect(row)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Ver detalles</p>
    )
  },
];
