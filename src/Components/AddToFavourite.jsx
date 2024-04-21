import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../assets/heart-red.svg";
import HeartIcon from "../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../context/contextIndex";
export default function AddToFavourite() {
  const { favourites, addToFavourite, removeFromFavourite } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourite(latitude, longitude, location);
    } else {
      removeFromFavourite(location);
    }
  };

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  }, []);
  return (
    <>
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </>
  );
}
