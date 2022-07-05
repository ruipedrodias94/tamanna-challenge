import axios from "axios";

import { useEffect, useState } from "react";
import CardLayout from "../components/CardLayout";
import WeatherData from "../interfaces/weatherDataInterface";

const CardComponent: React.FunctionComponent<{
  location: GeolocationPosition;
}> = ({ location }) => {
  const [weatherData, setWeatherData] = useState<
    WeatherData | undefined | null
  >();

  useEffect(() => {
    const getData = async () => {
      if (location.coords) {
        const response = await axios.get(
          `/api/getWeather?lat=${location.coords.latitude}&long=${location.coords.longitude}`
        );
        console.log(response.data);
        setWeatherData(response.data);
      }
    };

    getData();
  }, [location]);

  return (
    <div>
      <CardLayout weatherData={weatherData} />
    </div>
  );
};

export default CardComponent;
