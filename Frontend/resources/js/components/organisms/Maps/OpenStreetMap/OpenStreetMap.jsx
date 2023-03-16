import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import {
    MapContainer,
    TileLayer,
    Marker,
    Tooltip,
    LayersControl,
    Popup,
    useMapEvents,
    useMap,
    Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkersHelper from "../Marker/MarkersHelper";
import marker from "../Marker/markerGroup.svg";
import markerIcon from "../Marker/markerMap.svg";
import { Skeleton } from "primereact/skeleton";
import * as turf from "@turf/turf";

const OpenStreetMap = ({
    centerMap,
    markers,
    screen,
    skeleton,
    activeCard,
    setActiveCard,
    rute,
    setActiveSeacher,
    setNumber,
    route,
    setRoute,
    setDistance,
}) => {
    const iconMap = L.icon({
        iconUrl: marker,
        iconSize: [244, 244],
        iconAnchor: [24, 45],
        popupAnchor: [-3, -40],
        shadowSize: [68, 95],
        shadowAnchor: [24, 45],
    });
    const markerMap = L.icon({
        iconUrl: markerIcon,
        iconSize: [70, 70],
        iconAnchor: [24, 45],
        popupAnchor: [-3, -40],
        shadowSize: [68, 95],
        shadowAnchor: [24, 45],
    });
    const [markerRoute, setMarkerRoute] = useState([]);

    function LocationMarker() {
        const [position, setPosition] = useState(null);
        const map = useMapEvents({
            click() {
                map.locate();
            },
            locationfound(e) {
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom());
            },
        });

        return position === null ? null : (
            <Marker position={position} icon={iconMap}>
                <Popup>You are here</Popup>
            </Marker>
        );
    }

    const mapRef = useRef(null);

    // function GetBounds() {
    //     const map = useMap();

    //     useEffect(() => {
    //         if (map != null) {
    //             const bounds = map.getBounds();
    //             const southWest = bounds.getSouthWest();
    //             const northEast = bounds.getNorthEast();

    //             console.log("Northeast Lat:", northEast.lat);
    //             console.log("Northeast Lng:", northEast.lng);
    //         }
    //     }, [map]);
    //     return null;
    // }
    const [location, setLocation] = useState(centerMap);
    const [location2, setLocation2] = useState(centerMap);

    function DraggableMarker({ position, setPosition }) {
        const [draggable, setDraggable] = useState(false);
        // const [position, setPosition] = useState(centerMap);
        const markerRef = useRef(null);
        const eventHandlers = useMemo(
            () => ({
                dragend() {
                    const marker = markerRef.current;
                    if (marker != null) {
                        setPosition(marker.getLatLng());
                    }
                },
            }),
            []
        );
        const toggleDraggable = useCallback(() => {
            setDraggable((d) => !d);
        }, []);

        return (
            <Marker
                draggable={draggable}
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}
                icon={markerMap}
            >
                <Popup minWidth={90}>
                    <span onClick={toggleDraggable}>
                        {draggable
                            ? "Marker is draggable"
                            : "Click para colocar marker"}
                    </span>
                </Popup>
            </Marker>
        );
    }

    useEffect(() => {
        mapRef.current?.setView(centerMap, 14);
    }, [centerMap]);

    const [activeMarker, setActiveMarker] = useState(false);
    const [lineRute, setLineRute] = useState([null]);
    useEffect(() => {
        if (location) {
            setActiveMarker(true);
        }
        setLineRute([location, location2]);
        if (
            location?.lat &&
            location?.lng &&
            location2?.lat &&
            location2?.lng
        ) {
            let point1 = turf.point([location?.lng, location?.lat]);
            let point2 = turf.point([location2?.lng, location2?.lat]);
            const distance = turf.distance(point1, point2);
            setDistance(distance);
        }
    }, [location, location2]);

    const { BaseLayer } = LayersControl;

    return !skeleton ? (
        <MapContainer
            center={centerMap}
            zoom={screen < 480 ? 12 : activeCard ? 12 : 14}
            style={{ height: "80vh", borderRadius: "20px" }}
            ref={mapRef}
        >
            {rute && route && (
                <DraggableMarker
                    position={location}
                    setPosition={setLocation}
                />
            )}
            {rute && route && activeMarker && (
                <DraggableMarker
                    position={location2}
                    setPosition={setLocation2}
                />
            )}
            {lineRute && (
                <Polyline
                    pathOptions={{ color: "red", lineCap: "round" }}
                    positions={lineRute}
                />
            )}
            <LayersControl>
                <BaseLayer name="Mapa Google" checked>
                    <TileLayer
                        url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
                        attribution="© Google"
                    />
                </BaseLayer>
                <BaseLayer name="Mapa básico">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </BaseLayer>
                <BaseLayer name="Mapa híbrido">
                    <TileLayer url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}" />
                </BaseLayer>
                <BaseLayer name="Mapa satélite">
                    <TileLayer url="http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}" />
                </BaseLayer>
                <BaseLayer name="Mapa calles">
                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}" />
                </BaseLayer>
            </LayersControl>

            {!rute && <Marker icon={iconMap} position={centerMap}></Marker>}

            {markers.map((e, id) => {
                return (
                    <MarkersHelper
                        rute={rute}
                        setNumber={setNumber}
                        setActiveSeacher={setActiveSeacher}
                        setActiveCard={setActiveCard}
                        activeCard={activeCard}
                        e={e}
                        id={id}
                    />
                );
            })}
        </MapContainer>
    ) : (
        <div style={{ maxWidth: "1800px", width: "100%" }}>
            <Skeleton
                width="100%"
                height="500px"
                borderRadius={!rute && "20px"}
            />
        </div>
    );
};

export default OpenStreetMap;
