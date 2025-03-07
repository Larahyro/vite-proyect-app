const SearchBar = ({ setSearch }) => {
    return (
        <input
            type="text"
            placeholder="Buscar país..."
            className="w-full p-2 border rounded"
            onChange={(e) => setSearch(e.target.value)}
        />
            );
    };

    export default SearchBar;
