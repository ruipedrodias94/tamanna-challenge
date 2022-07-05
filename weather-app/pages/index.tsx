import { useEffect, useLayoutEffect, useState } from "react";
import InputComponent from "../containers/InputComponent";
import ListComponent from "../containers/ListComponent";
import CardComponent from "../containers/CardComponent";
import Head from "next/head";
import { Col, Container, Row, Stack } from "react-bootstrap";
import LocationContext from "../utils/locationsContext";
import UserLocation from "../interfaces/userLocationInterface";

const DEFAULT_USER_LOCATION: UserLocation = {
  coords: {
    latitude: 38.7259284,
    longitude: -9.137382,
  },
};

const Home: React.FunctionComponent = () => {
  const [location, setLocation] = useState<GeolocationPosition>();
  const [locations, setLocations] = useState<Array<string>>([]);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (newPos: GeolocationPosition) => setLocation(newPos),
      console.error
    );
  }, []);

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
