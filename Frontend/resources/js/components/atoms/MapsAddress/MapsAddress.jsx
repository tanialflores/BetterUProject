import React, { useState } from "react";
// maps
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

import Zas2 from "../../../assets/Auth/zas2.png";

import "./MapsAddress.scss";

const MarkersHelper = ({ markers }) => {
    const [activeMarker, setActiveMarker] = useState();
    return markers.map((marker, idx) => {
        return (
            <Marker
                position={{ lat: marker.lat, lng: marker.lng }}
                key={idx}
                clickable={false}
                icon={
                    <div className="marker-image">
                        <img src={Zas2} alt="" className="cnt-img" />
                    </div>
                }
            ></Marker>
        );
    });
};

const MapsAddress = ({ markers, disable = false, location }) => {
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: location.latitude, lng: location.longitude }}
            options={{
                streetViewControl: false,
                draggable: !disable,
                mapTypeControl: false,
            }}
        >
            {markers?.length && <MarkersHelper markers={markers} />}
        </GoogleMap>
    );
};

const WorldMap = withScriptjs(withGoogleMap(MapsAddress));
export default WorldMap;
