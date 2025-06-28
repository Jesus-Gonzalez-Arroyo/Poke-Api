import React from "react";

interface Props {
  pokemon: any;
  onClose: () => void;
}

export default function PokemonModal({ pokemon, onClose }: Props) {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-xs bg-opacity-100 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          ×
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold capitalize mb-2">
            {pokemon.name} #{pokemon.data.id}
          </h2>
          <img
            src={pokemon.data.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto mb-4 w-[150px] h-[150px]"
          />
        </div>

        <div className="space-y-2 text-sm">
          <p><strong>Tipo:</strong> {pokemon.data.types.map((poke: any) => poke.type.name).join(", ")}</p>
          <p><strong>Altura:</strong> {pokemon.data.height / 10} m</p>
          <p><strong>Peso:</strong> {pokemon.data.weight / 10} kg</p>

          <div>
            <strong>Estadísticas:</strong>
            <ul className="list-disc list-inside">
              {pokemon.data.stats.map((stat: any) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
