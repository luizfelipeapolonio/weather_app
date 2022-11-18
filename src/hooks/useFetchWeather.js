// Hooks
import { useEffect, useState } from "react";

// Environment Variables
const api = process.env.REACT_APP_API_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const useFetchWeather = (cityName) => {
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const searchConfig = "&lang=pt_br&units=metric";

    useEffect(() => {
        // Fetch weather informations by city name
        const fetchWeather = async () => {
            if(!cityName) {
                return;
            }

            setLoading(true);

            try {
                const data = await fetch(api + cityName + apiKey + searchConfig)
                    .then((resp) => resp.json())
                    .catch((err) => err);

                setWeatherInfo(data);

                setLoading(false);

            } catch(error) {
                console.log(error);
                setLoading(false);
            }
            
        }

        fetchWeather();
    }, [cityName]);

    return { weatherInfo, loading };
}