export default interface UserLocation {
  coords: {
    accuracy?: number;
    altitude?: number | null;
    heading?: number | null;
    latitude: number;
    longitude: number;
    speed?: number | null;
  };
  timestamp?: EpochTimeStamp;
}
