export default function Loader() {
    return (
        <div className="flex flex-col items-center justify-center h-64 gap-4">
            <div className="w-12 h-12 border-4 border-black-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white text-2xl">Llamando a los Pokémons...</p>
        </div>
    )
}