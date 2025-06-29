import { useState } from "react";
import { PropsGridCards } from '../types/pokemons'

export default function GridCard({
    data,
    itemsPerPage = 20,
    onSelect,
}: PropsGridCards) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full px-4">
                {paginatedData.map((pokemon) => (
                    <div
                        key={pokemon.data.id}
                        onClick={() => onSelect?.(pokemon)}
                        className="bg-white rounded-xl shadow hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer relative"
                    >
                        <span className="absolute top-2 left-2 text-xs font-bold text-gray-500">#{pokemon.data.id}</span>
                        <img
                            src={pokemon.data.sprites.front_default}
                            alt={pokemon.name}
                            className="w-full h-24 object-contain mt-4"
                        />
                        <div className="text-center py-2 font-semibold capitalize">
                            {pokemon.name}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-1 mt-4 flex-wrap text-sm mb-10">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(
                        (page) =>
                            page === 1 ||
                            page === totalPages ||
                            Math.abs(page - currentPage) <= 1
                    )
                    .map((page, idx, arr) => (
                        <div key={page}>
                            {idx > 0 && page - arr[idx - 1] > 1 && (
                                <span className="px-1">…</span>
                            )}

                            <button
                                onClick={() => goToPage(page)}
                                className={`px-2 py-1 rounded ${currentPage === page
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-100 hover:bg-gray-300"
                                    }`}
                            >
                                {page}
                            </button>
                        </div>
                    ))}

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
