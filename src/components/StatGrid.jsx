export default function StatGrid({ weather }) {
  if (!weather) return null;

  const { main, wind, visibility } = weather;

  const stats = [
    { label: "Humidity", value: `${main.humidity}%` },
    { label: "Wind", value: `${Math.round(wind.speed * 3.6)} km/h` },
    { label: "Visibility", value: `${(visibility / 1000).toFixed(1)} km` },
    { label: "Feels Like", value: `${Math.round(main.feels_like)}°` },
    { label: "Min Temp", value: `${Math.round(main.temp_min)}°` },
    { label: "Max Temp", value: `${Math.round(main.temp_max)}°` },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "1.5rem" }}>
      {stats.map((s) => (
        <div key={s.label} style={{ background: "#f5f5f5", borderRadius: "10px", padding: "12px" }}>
          <div style={{ fontSize: "11px", color: "#999", textTransform: "uppercase", marginBottom: "4px" }}>
            {s.label}
          </div>
          <div style={{ fontSize: "18px", fontWeight: "500" }}>{s.value}</div>
        </div>
      ))}
    </div>
  );
}
