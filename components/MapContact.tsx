"use client"

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContact = () => {
    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const center = {
        lat: 51.5074,
        lng: -0.1278 
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyAq6hD2p1pQNR0E8CuAQzlHfxIdeG4oZlo">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContact;

