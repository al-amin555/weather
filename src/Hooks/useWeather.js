// const useWeather = () => {
//   const [weatherData, setWeatherData] = useState({
//     location: "",
//     longitude: "",
//     latitude: "",
//     temperature: "",
//     max_Temperature: "",
//     min_Temperature: "",
//     humidity: "",
//     climate: "",
//     cloudPercentage: "",
//     wind: "",
//     time: "",
//   });

//   const [loading, setLoading] = useState({
//     state: false,
//     message: "",
//   });
//   const [error, setError] = useState(null);

//   const fetchWeatherData = async (latitude, longitude) => {
//     try {
//       setLoading({
//         ...loading,
//         state: true,
//         message: "Weather data is fetching",
//       });

//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weatherlat=${latitude}&lon=${longitude}&appid=${
//           import.meta.env.VITE_WEATHER_API_KEY
//         }&units=metric`
//       );
//       console.log(response);
//       if (!response.ok) {
//         const errorMessage = `Fetching weather data failed ${response.status}`;
//         throw new Error(errorMessage);
//       }
//       const data = await response.json();
//       console.log(data);

//       const updateWeatherData = {
//         ...weatherData,
//         location: data.name,
//         temperature: data.main.temp,
//         max_Temperature: data.main.temp_max,
//         min_Temperature: data.main.temp_min,
//         humidity: data.mian.humidity,
//         climate: data.weather[0].main,
//         cloudPercentage: data.clouds.all,
//         wind: data.wind.speed,
//         time: data.dt,
//         longitude: longitude,
//         latitude: latitude,
//       };

//       setWeatherData(updateWeatherData);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading({
//         ...loading,
//         state: false,
//         message: "",
//       });
//     }
//   };

//   useEffect(() => {
//     setLoading({
//       ...loading,
//       state: true,
//       message: "Finding Location...",
//     });
//     navigator.geolocation.getCurrentPosition(function (position) {
//       fetchWeatherData(position.coords.latitude, position.coords.longitude);
//     });
//   }, []);

//   return {
//     weatherData,
//     loading,
//     error,
//   };
// };

// export default useWeather;
/////////////////////////////////////////////////////////////////
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/contextIndex";
const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const { selectedItem } = useContext(LocationContext);
  console.log(selectedItem);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Weather data",
      });

      //TODO:Make the fetch call

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const updateWeatherData = {
        ...weatherData,
        location: data.name,
        climate: data?.weather[0]?.main,
        temperature: data.main.temp,
        maxTemperature: data.main.temp_max,
        minTemperature: data.main.temp_min,
        humidity: data.main.humidity,
        cloudPercentage: data.clouds.all,
        wind: data.wind.speed,
        time: data.dt,
        longitude: longitude,
        latitude: latitude,
      };

      setWeatherData(updateWeatherData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding Location...",
    });

    if (selectedItem.latitude && selectedItem.longitude) {
      fetchWeatherData(selectedItem.latitude, selectedItem.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedItem.latitude, selectedItem.longitude]);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
