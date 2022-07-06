import { Col, Container, Row } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";
import CardLayout from "../../components/CardLayout";

/**
 * Try to use ssr in order to fetch the details of a specific
 * location
 *
 * @param context context of nextjs app
 * @returns
 */
export async function getServerSideProps(context: any) {
  const { query } = context;

  const { location } = query;

  const [city, country] = location.toString().split("-");

  let response: AxiosResponse<any>;

  // Get the data from our api in the api folder
  response = await axios.get(
    `http://localhost:3000/api/getWeather?city=${city}&country=${country}`
  );

  return {
    props: { weatherData: response.data },
  };
}

const Location: React.FunctionComponent<{ weatherData: any }> = ({
  weatherData,
}) => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6} style={{ padding: 5 }}>
            <CardLayout weatherData={weatherData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Location;
