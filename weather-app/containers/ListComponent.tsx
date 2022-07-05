import Link from "next/link";
import { useContext } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import LocationContext from "../utils/locationsContext";

const ListComponent: React.FunctionComponent = () => {
  const locationContext = useContext(LocationContext);

  const deleteItemFromList = (itemIndex: number) => {
    if (locationContext.locations) {
      const newLocations = [...locationContext.locations];
      newLocations.splice(itemIndex, 1);
      locationContext.setLocations(newLocations);
    }
  };

  return (
    <div>
      <ListGroup as="ul">
        <Row>
          {locationContext &&
            locationContext.locations.map((location, index) => {
              return (
                <div key={index}>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <Link
                      href={{
                        pathname: `/locations/${index}`,
                        query: { index: index, location: location },
                      }}
                    >
                      <Col xs={12} md={8}>
                        <div>{location}</div>
                      </Col>
                    </Link>
                    <Col xs={6} md={4}>
                      {" "}
                      <Button
                        variant="danger"
                        onClick={() => deleteItemFromList(index)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </ListGroup.Item>
                </div>
              );
            })}
        </Row>
      </ListGroup>
    </div>
  );
};

export default ListComponent;
