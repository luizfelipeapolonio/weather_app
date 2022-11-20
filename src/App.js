import styles from './App.module.css';

// Cities Suggestions
import { cities } from "./data/CitySuggestions";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import WeatherContainer from "./components/WeatherContainer";

// Hooks
import { useState } from "react";
import { useFetchWeather } from "./hooks/useFetchWeather";

function App() {
  const [cityName, setCityName] = useState(null);
  const { weatherInfo, loading } = useFetchWeather(cityName);

  return (
    <div>
      <Header />
        <main className={styles.main}>
          <SearchForm handleSubmit={setCityName} />
          <WeatherContainer 
            city={cities} 
            handleSubmit={setCityName} 
            loading={loading}
            weather={weatherInfo} 
          />
        </main>
      <Footer />
    </div>
  );
}

export default App;
