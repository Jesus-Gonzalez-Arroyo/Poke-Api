export const columnsTable = (onSelect) => [
  {
    name: "Imagen",
    selector: (row: any) => (
      <img className="w-[80px] h-[80px]" src={row.data.sprites.front_default} alt={row.name} width={50} />
    ),
  },
  {
    name: "Nombre",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Tipo",
    selector: (row: any) => (
      <div>
        {row.data.types.map((item: any) => (
          <div key={item.slot}>{item.type.name}</div>
        ))}
      </div>
    ),
    sortable: true,
  },
  {
    name: "Peso",
    selector: (row: any) => (
        <p>{row.data.weight} kg</p>
    ),
    sortable: true,
  },
  {
    name: "Altura",
    selector: (row: any) => (
        <p>{row.data.height} m</p>
    ),
    sortable: true,
  },
  {
    name: "Salud base",
    selector: (row: any) => row.data.stats[0].base_stat,
    sortable: true,
  },
  {
    name: "Ataque base",
    selector: (row: any) => row.data.stats[1].base_stat,
    sortable: true,
  },
  {
    name: "Defensa base",
    selector: (row: any) => row.data.stats[2].base_stat,
    sortable: true,
  },
  {
    name: "Ataque especial",
    selector: (row: any) => row.data.stats[3].base_stat,
    sortable: true,
  },
  {
    name: "Defensa especial",
    selector: (row: any) => row.data.stats[4].base_stat,
    sortable: true,
  },
  {
    name: "Velocidad",
    selector: (row: object) => row.data.stats[5].base_stat,
    sortable: true,
  },
  {
    name: "Detalles",
    cell: (row: object) => (
        <p onClick={() => onSelect(row)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Ver detalles</p>
    )
  },
];
