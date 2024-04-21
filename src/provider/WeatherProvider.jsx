import { WeatherContext } from "../context/contextIndex";
import useWeather from "../Hooks/useWeather";
const WeatherProvider = ({ children }) => {
  const { loading, error, weatherData } = useWeather();

  return (
    <WeatherContext.Provider value={{ loading, error, weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
