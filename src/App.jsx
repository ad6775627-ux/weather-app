import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import StatGrid from "./components/StatGrid";
import Forecast from "./components/Forecast";
import useWeather from "./hooks/useWeather";

export default function App() {
  const { weather, forecast, loading, error, fetchWeather } = useWeather();

  return (
    <div style={{
      maxWidth: "480px",
      margin: "2rem auto",
      padding: "1.5rem",
      fontFamily: "DM Sans, sans-serif",
    }}>
      <h1 style={{ fontSize: "22px", fontWeight: "500", marginBottom: "1.5rem" }}>
        Weather App
      </h1>

      <SearchBar onSearch={fetchWeather} />

      {loading && <p style={{ color: "#888" }}>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <WeatherCard weather={weather} />
      <StatGrid weather={weather} />
      <Forecast forecast={forecast} />
    </div>
  );
}