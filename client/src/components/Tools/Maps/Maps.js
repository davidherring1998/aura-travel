import React from "react";
import '../../../styles/Maps.js'
import { Box } from '@chakra-ui/react'
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'

function Home() {

    const center = { lat: 35.825390, lng: -86.069090 }

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBgzc04aZAw42RtYE9CFDlr0UkxWbgQmkI'
    })

    if (!isLoaded) {
        return <div className="mapContainer">Loading...</div>
    }


    return (
        <div>
            <Box position='absolute' left={0} top={0} h='100%' w='100%'>
                <GoogleMap center={center} zoom={10} mapContainerStyle={{ width: '100%', height: '100%' }}>

                </GoogleMap>
            </Box>
            <div className="mapContainer">
                <form className="mapForm">
                    <input type="text" placeholder="Origin" id="origin" />
                    <input type="text" placeholder="Destination" id="destination" />
                    <button>Calculate Route</button>
                </form>
                <div className="mapResults">
                    <p>Distance:</p>
                    <p>Duration:</p>
                </div>
            </div>
        </div>
    )
}


export default Home;