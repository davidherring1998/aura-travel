import React, { useState, useRef } from "react";
import "../../../styles/Maps.css";
import { IoIosNavigate } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { Box, IconButton } from "@chakra-ui/react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

function Navigation() {
  const center = { lat: 36.16634, lng: -86.779068 };

  const [map, setMap] = useState(null);
  const [directionResponse, setDirectionResponse] = useState(null);
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef("");
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef("");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div className="mapContainer">Loading...</div>;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <div>
      <Box
        position="absolute"
        left={0}
        top={0}
        h="100%"
        w="100%"
        zIndex="modal"
      >
        <GoogleMap
          center={center}
          zoom={10}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <Marker position={center} />
          onLoad={(map) => setMap(map)}
          {directionResponse && (
            <DirectionsRenderer directions={directionResponse} />
          )}
        </GoogleMap>
      </Box>
      <div className="mapContainer">
        <div className="mapForm">
          <Autocomplete>
            <input
              type="text"
              placeholder="Origin"
              id="origin"
              ref={originRef}
            />
          </Autocomplete>

          <Autocomplete>
            <input
              type="text"
              placeholder="Destination"
              id="destination"
              ref={destinationRef}
            />
          </Autocomplete>

          <button type="submit" onClick={calculateRoute}>
            Calculate Route
          </button>

          <span className="iconMap" onClick={setMap}>
            <IoIosNavigate />
          </span>

          <span className="iconExit" onClick={clearRoute}>
            <MdCancel />
          </span>
        </div>
        <div className="mapResults">
          <p>Distance: {distance} </p>
          <p>Duration: {duration} </p>
        </div>
      </div>
    </div>
  );
}

// add onclick to x icon to clearRoute

export default Navigation;
