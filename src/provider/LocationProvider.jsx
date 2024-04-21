import { useState } from "react";
import { LocationContext } from "../context/contextIndex";
const LocationProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });

  return (
    <LocationContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
