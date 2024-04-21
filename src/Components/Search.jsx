import { useContext } from "react";
import useDebounce from "../Hooks/useDebounce";
import { LocationContext } from "../context/contextIndex";
import { getLocationByName } from "../utils/location-data";
export default function Search() {
  const { setSelectedItem } = useContext(LocationContext);

  const onSearch = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    setSelectedItem({ ...fetchedLocation });
  }, 1000);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value;
    onSearch(value);
  };
  return (
    <>
      <form action="#">
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            required
            onChange={handleSubmit}
          />
        </div>
      </form>
    </>
  );
}
