import { useEffect, useState } from "react";
import Spinner from "./Spinner";

  // Mock API data (scoped to this component)
const weatherData = {
    NewYork: {
      summary: "Sunny, 25°C",
      details: "Clear skies throughout the day with mild temperatures.",
    },
    London: {
      summary: "Cloudy, 18°C",
      details: "Overcast with occasional light rain in the afternoon.",
    },
    Tokyo: {
      summary: "Rainy, 22°C",
      details: "Continuous rain expected throughout the day.",
    },
  };

export default function CityForecast({ cityKey, onBack }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [forecast, setForecast] = useState(null);

    // Simulate fetching weather data whenever the selected city changes
    useEffect(() => {
        if (!cityKey) return;

        setLoading(true); //initialized so that it calls
        setError("");
        setForecast(null);

        const id = setTimeout(() => {
            const data = weatherData[cityKey];
            
            if (data) {
                setForecast(data);
            } else {
                setError("No forecast data for that city.")
            }
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(id);
        };

    }, [cityKey]);

    if (!cityKey) return null;

    return (
        <section>
        <h3 className="h3">Forecast for {cityKey === "NewYork" ? "New York" : cityKey}</h3>

        <div>
            {loading && (
                <div>
                    <Spinner />
                    <p>Fetching forecast data…</p>
                </div>
            )}
            {!loading && error && <p className="error">{error}</p>}
            {!loading && !error && forecast && (
            <div>
                <p>{forecast.summary}</p>
                <p>{forecast.details}</p>
            </div>
            )}
            <button onClick={onBack}>Back</button>
        </div>
        </section>
    );
}