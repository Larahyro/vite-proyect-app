import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-4 bg-white">
      <img src={country.flags.png} alt={country.name.common} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{country.name.common}</h2>
        <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
        <p><strong>Idioma:</strong> {Object.values(country.languages || {}).join(", ") || "N/A"}</p>
        <p><strong>Moneda:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ") || "N/A"}</p>
        <p><strong>Región:</strong> {country.region}</p>
        <Link to={`/country/${country.cca3}`} className="block mt-2 text-blue-500 font-semibold">
          Más detalles →
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
