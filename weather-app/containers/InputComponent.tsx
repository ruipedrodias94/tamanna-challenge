import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import LocationContext from "../utils/locationsContext";

const InputComponent: React.FunctionComponent = () => {
  const locationContext = useContext(LocationContext);

  const [location, setLocation] = useState<string>("");

  const getNewLocation = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLocation(event.target.value);
  };

  const addNewLocation = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (location !== "") {
      locationContext.setLocations([...locationContext.locations, location]);
    }

    setLocation("");
  };

  useEffect(() => {
    sessionStorage.setItem(
      "locationsState",
      locationContext.locations.toString()
    );
  }, [locationContext.locations]);

  return (
    <div>
      <Form>
        <Form.Label>
          <h2>Insert new City to your list</h2>
        </Form.Label>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          onChange={(event) =>
            getNewLocation(event as ChangeEvent<HTMLInputElement>)
          }
          value={location}
        ></Form.Control>
        <Form.Text className="text-muted">
          (Format should be CITY-COUNTRY_CODE)
        </Form.Text>
        <br />
        <Button
          variant="primary"
          type="submit"
          onClick={(event) => addNewLocation(event)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InputComponent;
