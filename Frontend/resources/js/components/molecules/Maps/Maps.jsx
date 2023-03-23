// react
import { useRef, useState } from "react";
// maps
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Circle,
    OverlayView,
} from "react-google-maps";

const TmpMap = ({ disable = false, places, viewPlaces = false }) => {
    const circle = useRef(1);
    return (
        <GoogleMap
            defaultZoom={6}
            defaultCenter={{ lat: 23.9435858, lng: -102.5134277 }}
            options={{
                streetViewControl: false,
                draggable: !disable,
                mapTypeControl: false,
            }}
        >
            
            {places.map((ubications) => (
                <div key={ubications.lat}>
                    <Circle
                        ref={circle}
                        center={{
                            lat: ubications.lat,
                            lng: ubications.lng,
                        }}
                        radius={100 * 1000}
                        options={{
                            strokeColor: ubications.color,
                            strokeOpacity: 0.7,
                            strokeWeight: 2,
                            fillColor: ubications.color,
                            fillOpacity: 0.8,
                        }}
                    />
                    <OverlayView
                        position={{ lat: ubications.lat, lng: ubications.lng }}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                        getPixelPositionOffset={(width, height) => ({
                            x: -(width / 2),
                            y: -(height / 2),
                        })}
                    >
                        <h3 style={{ color: "#000000" }}>10</h3>
                    </OverlayView>
                </div>
            ))}
        </GoogleMap>
    );
};
const Map = withScriptjs(withGoogleMap(TmpMap));
export default Map;
