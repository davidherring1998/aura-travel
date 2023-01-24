import { React, useState, useRef } from 'react';
import '../../../styles/Maps.css';
import { IoIosNavigate } from 'react-icons/io';
// import { Box } from '@chakra-ui/react'
import { MdCancel } from 'react-icons/md';
import { LoadScript, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';

// get's default location set to nashville
const center = { lat: 36.166340, lng: -86.779068 };

function Maps() {

  const [map, setMap] = useState(null)
  const [directionResponse, setDirectionResponse] = useState(null);
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  async function calculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService()
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING
    })
    setDirectionResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }


  function clearRoute() {
    setDirectionResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destinationRef.current.value = ''
  }

  // input box component
  function RenderInput() {
    return (
      <div className="mapInputContainer">
        <div className="mapForm">
          <Autocomplete>
            <input type="text" placeholder="Enter Origin..." id="origin" className='input' ref={originRef} />
          </Autocomplete>
          <Autocomplete>
            <input type="text" placeholder=" Enter Destination..." id="destination" className='input' ref={destinationRef} />
          </Autocomplete>
          <button type="submit" onClick={calculateRoute} className="btn">Calculate</button>

        </div>
        <div className="mapResults">
          <span className="iconMap" onClick={setMap}>
            <IoIosNavigate />
          </span>
          <span className="iconExit" onClick={clearRoute}>
            <MdCancel />
          </span>
        </div>

        <div className='resultDiv'>
          <p className='result'>Distance: <strong className='output'>{distance}</strong></p>
          <p className='result'>Duration: <strong className='output'>{duration}</strong> </p>
        </div>

      </div>
    )
  }

  // google component
  function Google() {
    return (
      <div className='container'>
        <LoadScript googleMapsApiKey="AIzaSyD6GxVYV5Dxc6NS3TMAbOtu2S-7sQKGorI" libraries={['places']}>
          <div className='mapDiv' left={0} top={0} h='100%' w='100%' zindex='modal'>
            <GoogleMap center={center} zoom={10} mapContainerStyle={{ width: '100%', height: '100%' }}>
              <Marker position={center} />
              onLoad={map => setMap(map)}
              {directionResponse && <DirectionsRenderer directions={directionResponse} />}
            </GoogleMap>
            < RenderInput />
          </div>
        </LoadScript>
      </div>
    )
  }


  return (
    <div>
      <Google />
    </div>
  )
}


export default Maps;