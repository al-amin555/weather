import Header from "./Header";
import WeatherBoard from "./WeatherBoard";

import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context/contextIndex";

import ClearImage from "../assets/backgrounds/clear-sky.jpg";
import CloudsImage from "../assets/backgrounds/few-clouds.jpg";
import MistImage from "../assets/backgrounds/mist.jpeg";
import RainyDayImage from "../assets/backgrounds/rainy-day.jpg";
import ScatteredImage from "../assets/backgrounds/scattered-clouds.jpg";
import ShowerRainImage from "../assets/backgrounds/shower-rain.jpg";
import SnowImage from "../assets/backgrounds/snow.jpg";
import SunnyImage from "../assets/backgrounds/sunny.jpg";
import ThunderStormImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";

const getBackgroundImage = (climate) => {
  switch (climate) {
    case "Rains":
      return RainyDayImage;
    case "Clear":
      return ClearImage;
    case "Mist":
      return MistImage;
    case "Clouds":
      return CloudsImage;
    case "Snow":
      return SnowImage;
    case "Winter":
      return WinterImage;
    case "Thunder":
      return ThunderStormImage;
    case "Fog":
      return ShowerRainImage;
    case "Dust":
      return ScatteredImage;
    case "Clear-Sky":
      return SunnyImage;

    default:
      return SunnyImage;
  }
};

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  useEffect(() => {
    const backgroundImg = getBackgroundImage(weatherData.climate);
    setClimateImage(backgroundImg);
  }, [weatherData.climate]);

  return (
    <div
      style={{
        background: `url("${climateImage}")`,
      }}
      className="grid place-items-center h-screen bg-cover bg-no-repeat"
    >
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 mt-14 mx-auto">
          <p className="text-center text-3xl text-black p-3">
            {loading.message}
          </p>
        </div>
      ) : (
        <>
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </>
      )}
    </div>
  );
}
