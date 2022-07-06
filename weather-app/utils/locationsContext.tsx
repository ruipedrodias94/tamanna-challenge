import { createContext } from "react";

/**
 * React context for locations array.
 *
 * This will allow that the array is available through all the app.
 */

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
