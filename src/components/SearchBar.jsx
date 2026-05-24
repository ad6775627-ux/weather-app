import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "2rem" }}>
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          flex: 1,
          padding: "10px 14px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          fontSize: "14px",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          borderRadius: "12px",
          border: "none",
          background: "#1a1a1a",
          color: "#fff",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
}