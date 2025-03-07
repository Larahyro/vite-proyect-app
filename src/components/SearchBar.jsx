const SearchBar = ({ setSearch }) => {
    return (
    <div className="flex justify-center my-4">
        <input
            type="text"
            placeholder="Buscar país..."
            className="w-2/3 sm:w-1/2 p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSearch(e.target.value)}
        />
    </div>
    );
    };

export default SearchBar;
