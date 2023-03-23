// react
import { useEffect, useRef, useState } from "react";

// maps
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import mapIcon from "../../organisms/Maps/Marker/markerCity.png";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";
// assets

// Helper components below 👇
// Helper for markers

const MarkersHelper = ({
    markers,
    setActiveSeacher,
    setNumber,
    setMarkers,
}) => {
    const [active, setActive] = useState(false);

    const handleClick = (marker) => {
        setActiveSeacher(true), setNumber(marker.id);
        const elementFirst = document.querySelectorAll(
            ".p-carousel-items-container .p-carousel-item"
        );
    };

    return markers.map((marker, idx) => {
        return (
            <Marker
                position={{ lat: marker.lat, lng: marker.lng }}
                key={idx}
                clickable={true}
                // icon={marker?.icon || pointer}
                defaultIcon={mapIcon}
                onClick={() => handleClick(marker)}
            ></Marker>
        );
    });
};

const TmpMap = ({
    markers,
    disable = false,
    setActiveSeacher,
    setNumber,
    setMarkers,
    value,
    viewOptionOne = false,
    setValue,
}) => {
    // const { lat, lng } = markers[0];
    const [markerPosition, setMarkerPosition] = useState(null);

    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        // aquí puedes hacer algo con las coordenadas obtenidas
        setMarkerPosition({ lat, lng });
        setValue({ lat, lng });
    };

    useEffect(() => {
        if (value) {
            setMarkerPosition(value);
        }
    }, [value]);

    return (
        <GoogleMap
            defaultZoom={13}
            center={{ lat: 20.6852, lng: -103.3331 }}
            options={{
                streetViewControl: false,
                draggable: !disable,
                mapTypeControl: false,
            }}
        >
            {viewOptionOne ? (
                <Marker position={markerPosition} />
            ) : (
                markers &&
                markers?.length && (
                    <MarkersHelper
                        setActiveSeacher={setActiveSeacher}
                        setNumber={setNumber}
                        markers={markers}
                    />
                )
            )}
        </GoogleMap>
    );
};

const Map = withScriptjs(withGoogleMap(TmpMap));
export default Map;
