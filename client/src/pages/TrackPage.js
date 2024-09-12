import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Polyline,
} from "@react-google-maps/api";

const API_URL = "http://localhost:3001";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

// Optional styling for the polyline
const options = {
  strokeColor: "#FF0000", // Red color
  strokeOpacity: 1.0,
  strokeWeight: 2,
};

const RiderTrack = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAtOGd_c2hfd9UGEeTrKHLvqAgGeavWat4",
  });

  const [path, setPath] = useState([]);
  const [center, setCenter] = useState({
    lat: 6.4577,
    lng: 3.2713,
  });

  const urlParams = "etosin70@gmail.com";

  const socket = useRef(io(API_URL));

  const [map, setMap] = React.useState(null);

  const userData = {
    firstName: "Admin",
    lastName: "user",
    email: "johndoe@gmail.com",
  };
  useEffect(() => {
    if (path.length > 0) {
      setCenter(path[path.length - 1]);
    }
  }, [socket]);

  useEffect(() => {
    socket?.current.emit("onAboutToTrack", {
      userData,
      room: urlParams,
    });
  }, [socket]);

  useEffect(() => {
    // const timer = setInterval(() => {
    socket?.current.on("trackingData", (data) => {
      setPath((prevPath) => [...prevPath, data.direction]);
    });
    // }, 3000);

    // return () => clearInterval(timer);
  }, [socket]);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />

      <Polyline path={path} options={options} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(RiderTrack);
