import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import StatGrid from "./components/StatGrid";
import Forecast from "./components/Forecast";
import useWeather from "./hooks/useWeather";
import "./App.css";

export default function App() {
  const { weather, forecast, loading, error, fetchWeather } = useWeather();

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h1 className="app-title">Weather App</h1>
        <SearchBar onSearch={fetchWeather} />
        {loading && <div className="loading">Fetching weather...</div>}
        {error && <div className="error">{error}</div>}
        <WeatherCard weather={weather} />
        <StatGrid weather={weather} />
        <Forecast forecast={forecast} />
        <div className="footer">Created by Aman Deep</div>
      </div>
    </div>
  );
}