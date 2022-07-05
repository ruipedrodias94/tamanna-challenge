import { createContext } from "react";

type LocationContextType = {
  locations: Array<string>;
  setLocations: React.Dispatch<React.SetStateAction<Array<string>>>;
};

const iLocationContextState = {
  locations: [],
  setLocations: () => {},
};

const LocationContext = createContext<LocationContextType>(
  iLocationContextState
);

export default LocationContext;
