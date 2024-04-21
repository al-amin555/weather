import { useContext } from "react";
import PinIcon from "../assets/pin.svg";
import { WeatherContext } from "../context/contextIndex";
import getUpdatedTime from "../utils/getTime";

import CloudIcon from "../assets/cloud.svg";
import HazeIcon from "../assets/haze.svg";
import SnowIcon from "../assets/icons/snow.svg";
import SunIcon from "../assets/icons/sunny.svg";
import RainIcon from "../assets/rainy.svg";
import ThunderIcon from "../assets/thunder.svg";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { temperature, time, location, climate } = weatherData;

  function getClimateIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Snow":
        return SnowIcon;
      case "Clouds":
        return CloudIcon;
      case "Thunder":
        return ThunderIcon;
      case "Clear":
        return SunIcon;
      case "Fog":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      case "Haze":
        return HazeIcon;

      default:
        return SunIcon;
    }
  }
  return (
    <>
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={getClimateIcon(climate)} alt="climate" />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
              {Math.round(temperature)}°
            </h1>
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={PinIcon} />
              <h2 className="text-2xl lg:text-[50px]">{location}</h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg">
          {getUpdatedTime(time, "time", false)} -{" "}
          {getUpdatedTime(time, "date", false)}
        </p>
      </div>
    </>
  );
}
