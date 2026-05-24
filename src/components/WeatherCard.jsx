export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const { name, main, weather: w, sys } = weather;

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <p style={{ fontSize: "13px", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
        {name}, {sys.country}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: "72px", fontWeight: "300", lineHeight: 1 }}>
            {Math.round(main.temp)}°
          </div>
          <div style={{ fontSize: "15px", color: "#666", marginTop: "6px" }}>
            {w[0].description} · Feels like {Math.round(main.feels_like)}°
          </div>
        </div>
        <div style={{ fontSize: "64px" }}>
          {getWeatherEmoji(w[0].main)}
        </div>
      </div>
    </div>
  );
}

function getWeatherEmoji(condition) {
  const map = {
    Clear: "☀️",
    Clouds: "⛅",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Fog: "🌫️",
    Haze: "🌫️",
  };
  return map[condition] || "🌡️";
}