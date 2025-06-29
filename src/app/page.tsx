"use client";

import PokemonTable from "./components/table";
import usePokemons from "./hooks/usePokemons";
import Loader from "./components/loader";
import GridCard from "./components/gridCards";
import Modal from "./components/modal";
import Selector from "./components/selector";

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
    <div className="bg-[url(https://wallpapers.com/images/featured/pokemon-va6139eg5csznzmw.jpg)] bg-cover bg-center h-full p-8">
      <h1 className="text-6xl text-center mb-7 text-white">Explorador Pokémons</h1>
      <button
        className="bg-blue-500 p-2 w-[150px] rounded m-auto block mb-5"
        onClick={changeView}
      >
        {isGrid ? "Ver Cuadricula" : "Ver Tabla"}
      </button>
      {loading ? (
        <Loader />
      ) : isGrid ? (
        <div className="w-[90%] m-auto bg-blue-500 p-1">
          <Selector
            types={types}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <PokemonTable
            name="Pokémon Table"
            data={pokemons.map(poke => ({
              id: poke.id,
              name: poke.name,
              data: {
                id: poke.id,
                height: poke.data.height,
                weight: poke.data.weight,
                sprites: poke.data.sprites,
                types: poke.data.types,
                stats: poke.data.stats
              }
            }))}
            selectType={selectedType}
          />
        </div>
      ) : (
        <div>
          <GridCard
            onSelect={(poke) =>
              setSelectedPokemon({
                id: poke.id,
                name: poke.name,
                data: {
                  types: poke.data.types,
                  weight: poke.data.weight,
                  height: poke.data.height,
                  stats: poke.data.stats,
                  sprites: poke.data.sprites,
                  id: poke.data.id,
                },
              })
            }
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
