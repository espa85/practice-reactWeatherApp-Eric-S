import { useState } from "react";
import CityList from "./components/CityList";
import CityForecast from "./components/CityForecast";
import "./index.css";

export default function App() {
  const [selectedCity, setSelectedCity] = useState(""); //falsy
  const cities = ["NewYork", "London", "Tokyo"]; //keys array, reference CityForecast.jsx

  return (
    <div className="page">
      <header>
        <h1 className="h1">City Weather App</h1>
        <p>Click a city to fetch a mock forecast. Use the button to scroll to details.</p>
      </header>

      {!selectedCity && ( //if no city is selected, i.e. setSelectedCity state is 0.
                          //show buttons as per CityList.jsx with data as sent
        <CityList
          cities={cities} 
          selectedCity={selectedCity}
          onSelect={setSelectedCity}
        />
      )}

      {selectedCity && ( //if city is selected, i.e. send 
        <CityForecast
          cityKey={selectedCity}
          onBack={() => setSelectedCity("")}
        />
      )}
      <footer>
        <h6>Group: Michael L., Austin R., Eric S.</h6>
      </footer>
    </div>
  );
}