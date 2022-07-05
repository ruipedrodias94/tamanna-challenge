import { Card, Container } from "react-bootstrap";
import Image from "next/image";
import WeatherData from "../interfaces/weatherDataInterface";

const CardLayout: React.FunctionComponent<{
  weatherData: WeatherData | undefined | null;
}> = ({ weatherData }) => {
  return (
    <Container>
      <Card>
        <Card.Body>
          {weatherData && (
            <div>
              <Card.Title>
                <h2>{`Weather in ${weatherData.name}`}</h2>
              </Card.Title>
              <Card.Text>
                <Image
                  alt="Weather icon"
                  src={`http://openweathermap.org/img/w/${
                    weatherData && weatherData.weather[0].icon
                  }.png`}
                  width={50}
                  height={50}
                />

                {weatherData && (
                  <div>
                    <h5>{`Forecast: ${weatherData.weather[0].main}`}</h5>
                    <h5>{`Temperature: ${weatherData.main.temp} C`}</h5>
                    <h5>{`Humidity: ${weatherData.main.humidity} %`}</h5>
                    <h5>{`Wind Speed: ${weatherData.wind.speed} km/h`}</h5>
                  </div>
                )}
              </Card.Text>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardLayout;
