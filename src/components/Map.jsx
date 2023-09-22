import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "../App.css";

const App = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });
    const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

    return (
        <div className="container">
        {!isLoaded ? (
            <h1>Loading...</h1>
        ) : (
            <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
            >
            <Marker position={{ lat: 6.4426349, lng: 3.4760261 }} />
            </GoogleMap>
        )}
        </div>
    );
};

export default App;