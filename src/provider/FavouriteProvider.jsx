import { useLocalStorage } from "../Hooks/hooksIndex";
import { FavouriteContext } from "../context/contextIndex";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourite = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude,
        longitude,
        location,
      },
    ]);
  };

  const removeFromFavourite = (location) => {
    const filteredFav = favourites.filter((fav) => fav.location !== location);

    setFavourites(filteredFav);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourite, removeFromFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
