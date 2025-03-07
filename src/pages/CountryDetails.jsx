import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [id]);

  if (!country) return <p className="text-center">Cargando...</p>;

  const latlng = country.latlng || [0, 0];

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <Link to="/" className="text-blue-500">🔙 Volver</Link>
      <h1 className="text-3xl font-bold mt-4">{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common} className="w-64 my-4 rounded-lg shadow-md" />
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      <p><strong>Región:</strong> {country.region}</p>
      <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Idioma(s):</strong> {Object.values(country.languages || {}).join(", ") || "N/A"}</p>
      <p><strong>Moneda(s):</strong> {Object.values(country.currencies || {}).map(c => `${c.name} (${c.symbol})`).join(", ") || "N/A"}</p>
      <p><strong>Área:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Zona horaria:</strong> {country.timezones.join(", ")}</p>

      {/* 🌍 Mapa del país */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Ubicación en el mapa:</h2>
        <MapContainer center={latlng} zoom={5} className="h-64 w-full rounded-lg shadow-md">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={latlng}>
            <Popup>{country.name.common}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default CountryDetails;
