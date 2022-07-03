import { ReactNode, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import InputComponent from "../components/InputComponent";
import ListComponent from "../components/ListComponent";

export default function Home() {
  const [userLocation, setUserLocation] = useState({});

  const [position, setPosition] = useState<GeolocationPosition>();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (newPos: GeolocationPosition) => setPosition(newPos),
      console.error
    );
  }, []);

  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
      {position && (
        <output>
          latitude: {position.coords.latitude}, longitude:{" "}
          {position.coords.longitude}
        </output>
      )}
      <InputComponent />
      <ListComponent />
    </div>
  );
}
