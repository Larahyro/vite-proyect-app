import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [id]);

  if (!country) return <p className="text-center">Cargando...</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Link to="/" className="text-blue-500">🔙 Volver</Link>
      <h1 className="text-2xl font-bold mt-4">{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common} className="w-64 my-4 rounded-lg shadow-md" />
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      <p><strong>Región:</strong> {country.region}</p>
      <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Idioma(s):</strong> {Object.values(country.languages || {}).join(", ") || "N/A"}</p>
      <p><strong>Moneda(s):</strong> {Object.values(country.currencies || {}).map(c => `${c.name} (${c.symbol})`).join(", ") || "N/A"}</p>
      <p><strong>Área:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Zona horaria:</strong> {country.timezones.join(", ")}</p>
    </div>
  );
};

export default CountryDetails;
