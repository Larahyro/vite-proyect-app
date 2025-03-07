import { useEffect, useState } from "react";
import { fetchCountries } from "../api";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
/*import NavBar from "../components/NavBar";*/

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchCountries().then(setCountries);
    }, []);

    const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    return (
    <div className="p-4">
        <SearchBar setSearch={setSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredCountries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
        ))}
        </div>
    </div>
    );
};

export default Home;
