"use client";

import PokemonTable from "./components/table";
import usePokemons from "./hooks/usePokemons";
import Loader from "./components/loader";
import GridCard from "./components/gridCards";
import Modal from "./components/modal";

export default function Home() {
  const {
    pokemons,
    loading,
    isGrid,
    changeView,
    selectedPokemon,
    setSelectedPokemon,
    selectedType,
    setSelectedType,
    types
  } = usePokemons();
  return (
    <div>
      <h1 className="text-3xl text-center my-7">Explorador Pokémons</h1>
      <button
        className="bg-blue-500 p-2 w-[150px] rounded m-auto block mb-5"
        onClick={changeView}
      >
        {isGrid ? "Ver Cuadricula" : "Ver Tabla"}
      </button>
      {loading ? (
        <Loader />
      ) : isGrid ? (
        <div className="w-[90%] m-auto bg-blue-500 p-1 mb-5">
          <div className="mb-4">
            <label className="mr-2 font-semibold">Filtrar por tipo:</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border px-2 py-1 rounded"
            >
              <option value="todos">Todos</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <PokemonTable data={pokemons} selectType={selectedType} />
        </div>
      ) : (
        <div>
          <GridCard
            onSelect={(poke) => setSelectedPokemon(poke)}
            data={pokemons}
          />
        </div>
      )}

      {selectedPokemon && (
        <Modal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
}
