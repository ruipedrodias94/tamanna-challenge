import Head from "next/head";
import { useEffect, useLayoutEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import InputComponent from "../containers/InputComponent";
import ListComponent from "../containers/ListComponent";
import CardComponent from "../containers/CardComponent";
import LocationContext from "../utils/locationsContext";
import UserLocation from "../interfaces/userLocationInterface";

// Default location for when the browser could not determine the user location
const DEFAULT_USER_LOCATION: UserLocation = {
  coords: {
    latitude: 38.7259284,
    longitude: -9.137382,
  },
};

const Home: React.FunctionComponent = () => {
  // Active user location
  const [location, setLocation] = useState<GeolocationPosition>();
  // Array of locations for future detail view
  const [locations, setLocations] = useState<Array<string>>([]);

  /**
   * Use effect that will run on component rendering in order to
   * fetch the user's location via navigator.geolocation API
   */
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (newPos: GeolocationPosition) => setLocation(newPos),
      console.error
    );
  }, []);

  /**
   * Get locations from session storage in order to prevent the app
   * to lost locations from context every time we navigate through
   * pages
   */
  useLayoutEffect(() => {
    if (sessionStorage.getItem("locationsState")) {
      setLocations(sessionStorage.getItem("locationsState")!.split(","));
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Tamanna Weather app</title>
      </Head>
      <LocationContext.Provider value={{ locations, setLocations }}>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={6} style={{ padding: 5 }}>
              <h1>Tamanna Weather app</h1>
              <Stack gap={3}>
                <CardComponent
                  location={
                    location ? location : (DEFAULT_USER_LOCATION as any)
                  }
                />
                <InputComponent />
                <ListComponent />
              </Stack>
            </Col>
          </Row>
        </Container>
      </LocationContext.Provider>
    </div>
  );
};

export default Home;
