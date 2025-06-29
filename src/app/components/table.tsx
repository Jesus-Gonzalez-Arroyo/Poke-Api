import { PokemonTableProps } from "../types/pokemons"
import { columnsTable } from "../constants/columnsTable"
import DataTable from "react-data-table-component";
import usePokemons from "../hooks/usePokemons";
import Modal from "../components/modal"

export default function TableDatePokemons({ data, selectType }: PokemonTableProps) {

  const { setSelectedPokemon, selectedPokemon } = usePokemons();

   const filteredPokemons = selectType === "todos"
    ? data
    : data.filter(pokemon =>
      pokemon.data.types.some((item: {type: {name: string}}) => item.type.name === selectType)
    );

  return (
    <div>
      <DataTable
        columns={columnsTable((row) => setSelectedPokemon(row))}
        data={filteredPokemons.map(pokemon => ({
          id: pokemon.data.id,
          name: pokemon.name,
          data: {
            id: pokemon.data.id,
            name: pokemon.name,
            sprites: pokemon.data.sprites,
            types: pokemon.data.types,
            height: pokemon.data.height,
            weight: pokemon.data.weight,
            stats: pokemon.data.stats,
          }
        }))}
        pagination
        striped
      />

      {selectedPokemon && (
        <Modal
          pokemon={{
            ...selectedPokemon,
            data: {
              id: selectedPokemon.data.id,
              sprites: selectedPokemon.data.sprites,
              types: selectedPokemon.data.types,
              height: selectedPokemon.data.height,
              weight: selectedPokemon.data.weight,
              stats: selectedPokemon.data.stats,
            }
          }}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
}
