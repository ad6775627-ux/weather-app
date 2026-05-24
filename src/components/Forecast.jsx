export default function Forecast({ forecast }) {
  if (!forecast) return null;

  const daily = forecast.list.filter((_, i) => i % 8 === 0).slice(0, 5);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getEmoji = (condition) => {
    const map = {
      Clear: "☀️", Clouds: "⛅", Rain: "🌧️",
      Drizzle: "🌦️", Thunderstorm: "⛈️", Snow: "❄️", Mist: "🌫️",
    };
    return map[condition] || "🌡️";
  };

  return (
    <div>
      <div style={{ fontSize: "11px", color: "#999", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px" }}>
        5-day forecast
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
        {daily.map((item, i) => {
          const date = new Date(item.dt * 1000);
          return (
            <div key={i} style={{ background: "#f5f5f5", borderRadius: "10px", padding: "10px 6px", textAlign: "center" }}>
              <div style={{ fontSize: "11px", color: "#888", marginBottom: "6px" }}>
                {days[date.getDay()]}
              </div>
              <div style={{ fontSize: "22px", marginBottom: "6px" }}>
                {getEmoji(item.weather[0].main)}
              </div>
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                {Math.round(item.main.temp_max)}°
              </div>
              <div style={{ fontSize: "12px", color: "#aaa" }}>
                {Math.round(item.main.temp_min)}°
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}