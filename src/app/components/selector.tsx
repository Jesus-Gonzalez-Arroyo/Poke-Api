import {SelectorProps} from "../types/pokemons";
import {Capitalize} from "../utils/capitalize";

export default function Selector({ types, selectedType, setSelectedType }: SelectorProps) {

    return (
        <div className="my-4 ml-5">
            <label className="mr-2 font-semibold">Filtrar por tipo:</label>
            <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border px-2 py-1 rounded"
            >
                <option value="todos">Todos</option>
                {types.map((type) => (
                    <option key={type} value={type}>
                        {Capitalize(type)}
                    </option>
                ))}
            </select>
        </div>
    )
}
