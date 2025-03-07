export const fetchCountries = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) throw new Error("Error al obtener los datos");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
    };
