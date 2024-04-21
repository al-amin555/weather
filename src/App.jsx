import Page from "./Components/Page";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider/ProviderIndex";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
