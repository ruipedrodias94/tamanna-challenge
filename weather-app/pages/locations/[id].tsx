import Image from "next/image";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";
import CardLayout from "../../components/CardLayout";

export async function getServerSideProps(context: any) {
  const { query } = context;

  const { _id, index, location } = query;

  const [city, country] = location.toString().split("-");

  let response: AxiosResponse<any>;

  response = await axios.get(
    `http://localhost:3000/api/getWeather?city=${city}&country=${country}`
  );

  return {
    props: { weatherData: response.data },
  };
}

export default function Location({ weatherData }: any) {
  console.log(weatherData);

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
}
