//data sent is:
//cities = array of keys (derived from object keys in weatherData, reference CityForecast.jsx)
//selectedCity = '' (falsy)

export default function CityList({ cities, selectedCity, onSelect }) {
  return (
    <div className="panel">
      <h2 className="h2">Choose a city</h2>
      <div>
        {cities.map((key) => ( //an array of buttons
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`${selectedCity === key ? "active" : ""}`}
          >
            <div>{key === "NewYork" ? "New York" : key}</div>
            <div>View forecast</div>
          </button>
        ))}
      </div>
    </div>
  );
}
