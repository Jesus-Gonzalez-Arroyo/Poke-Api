import DataTable from "react-data-table-component";
import { columnsTable } from "../constants/columnsTable"
import usePokemons from "../hooks/usePokemons";
import Modal from '../components/modal'

export default function TableDatePokemons({ data, selectType }: { data: any[], selectType: string }) {

  const { setSelectedPokemon, selectedPokemon } = usePokemons();

   const filteredPokemons = selectType === "todos"
    ? data
    : data.filter(p =>
      p.data.types.some((item: any) => item.type.name === selectType)
    );

  return (
    <div>
      <DataTable
        columns={columnsTable(setSelectedPokemon)}
        data={filteredPokemons}
        pagination
        striped
      />

      {selectedPokemon && (
        <Modal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
}
