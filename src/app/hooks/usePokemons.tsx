import { useEffect, useState } from "react";
import { infoPokemon, PokemonData } from "../types/pokemons";

export default function usePokemons() {
    const [pokemons, setPokemons] = useState<PokemonData[]>([]);
    const [loading, setLoading] = useState(true);
    const [isGrid, setIsGrid] = useState(false)
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [selectedType, setSelectedType] = useState("todos");
    const [types, setTypes] = useState([])

    useEffect(() => {
        const getInfoPokemons = async () => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
                const { results } = await res.json();

                const dataPokemons = await Promise.all(
                    results.map(async (pokemon: infoPokemon) => {
                        const res = await fetch(pokemon.url);
                        const data = await res.json();
                        return { ...pokemon, data };
                    })
                );

                const allTypes = Array.from(
                    new Set(
                        dataPokemons.flatMap(pokemon =>
                            pokemon.data.types.map((t: any) => t.type.name)
                        )
                    )
                ).sort();

                console.log('al', allTypes)

                setPokemons(dataPokemons);
                setTypes(allTypes)
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getInfoPokemons();
    }, []);

    function changeView() {
        setIsGrid(prev => !prev)
        console.log('hola')
    }

    return { pokemons, loading, changeView, isGrid, selectedPokemon, setSelectedPokemon, selectedType, setSelectedType, types };
}
