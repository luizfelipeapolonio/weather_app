// Css 
import styles from "./WeatherContainer.module.css";

// Components
import Loading from "./Loading";

// Icons
import { 
    BsFillGeoAltFill, 
    BsThermometerHigh, 
    BsThermometerLow, 
    BsWind,
    BsDroplet,
    BsClouds,
    BsThermometerHalf
} from "react-icons/bs";

// Hooks
import { useRef } from "react";
import { useGetDate } from "../hooks/useGetDate";

const WeatherContainer = ({ city, handleSubmit, loading, weather }) => {
    const suggestionsRef = useRef();

    const countryFlag = process.env.REACT_APP_COUNTRY_FLAG;
    const weatherIcon = process.env.REACT_APP_WEATHER_ICON;

    const { weekDay, month, time } = useGetDate(weather);

    // Send text button to cityName state in component App
    const handleClick = (e) => {
        handleSubmit(e.target.innerText);
    }

    // if(weather) {
    //     console.log("weather description ", weather);
    //     console.log("COD ", weather.cod);
    // }

    // Hide the suggested cities
    if(loading) {
        suggestionsRef.current.style.display = "none";
    }

    return (
        <div className={styles.container}>
            <div ref={suggestionsRef} className={styles.suggestions}>
                {city && (
                    city.map((city) => (
                        <button key={city.id} onClick={handleClick}>
                            {city.name}
                        </button>
                    ))
                )}
            </div>
            {loading && <Loading />}
            {!loading && weather && weather.cod === "404" && (
                <h1 className={styles.error}>
                    Não foi possível encontrar o clima da cidade digitada!
                </h1>
            )}
            {!loading && weather && weather.cod !== "404" && (
                <>
                <div className={styles.weather}>
                    <div className={styles.weather_state}>
                        <div className={styles.city}>
                            <BsFillGeoAltFill />
                            <h2>{weather.name}</h2>
                            <img 
                                src={`${countryFlag}${weather.sys.country}`} 
                                alt="Country Flag"
                            />
                        </div>
                        <h1>{parseInt(weather.main.temp)}&deg; C</h1>
                        <div className={styles.desc}>
                            <h2>
                                {weather.weather[0].description}
                            </h2>
                            <img 
                                src={`${weatherIcon}${weather.weather[0].icon}.png`}
                                alt="Representing weather icon"
                            />
                        </div>
                    </div>
                    <div className={styles.date}>
                        <h2>{weekDay}</h2>
                        <h3>{month}</h3>
                        <h3>{time}</h3>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.feels_like}>
                        <h3>Sensação Térmica</h3>
                        <p>
                            <BsThermometerHalf /> 
                            {parseInt(weather.main.feels_like)}&deg; C
                        </p>
                    </div>
                    <div className={styles.humidity}>
                        <h3>Humidade</h3>
                        <p>
                            <BsDroplet /> 
                            {weather.main.humidity} %
                        </p>
                    </div>
                    <div className={styles.temp_max}>
                        <h3>Temp. Máx. Recente</h3>
                        <p>
                            <BsThermometerHigh /> 
                            {parseInt(weather.main.temp_max)}&deg; C
                        </p>
                    </div>
                    <div className={styles.temp_min}>
                        <h3>Temp. Min. Recente</h3>
                        <p>
                            <BsThermometerLow /> 
                            {parseInt(weather.main.temp_min)}&deg; C
                        </p>
                    </div>
                    <div className={styles.wind}>
                        <h3>Velocidade do vento</h3>
                        <p>
                            <BsWind /> 
                            {weather.wind.speed} m/s
                        </p>
                    </div>
                    <div className={styles.clouds}>
                        <h3>Nebulosidade</h3>
                        <p>
                            <BsClouds /> 
                            {weather.clouds.all} %
                        </p>
                    </div>
                </div>
                </>
            )}
        </div>
    );
}

export default WeatherContainer;