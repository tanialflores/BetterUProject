//styles
import "./MarkersHelper.scss";

// react
import { useEffect, useState } from "react";

// maps
import { Marker, Popup, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//assets
import mapIcon from "../Marker/markerCity.png";

// Helper components below 👇
// Helper for markers

const MarkersHelper = ({ e, id, setActiveSeacher, setNumber, rute }) => {
    const [center, setCenter] = useState(null);
    const [color, setColor] = useState();

    useEffect(() => {
        setCenter({ lat: e.lat, lng: e.lng });
        switch (e.category) {
            case "Gastronomía":
                setColor("#fa91cb");

                break;
            case "Naturaleza":
                setColor("#3a8dde");

                break;
        }
    }, []);

    const iconTemplate = L.divIcon({
        className: "marker-icon",
        html: `
        <div id="marker_${id}" className="c_icon" style="position:relative; width:43px; height:43px;">
            <img  style="width:40px; height:40px;" src=${mapIcon} />
            <img 
            style="width:27px; height:27px; position:absolute; border-radius: 50%; top: 4px; right: 9px;" 
            src=${e.imgCard} />
        </div>`,
    });
    const iconCategory = L.divIcon({
        className: "marker-icon",
        html: `
        <div id="marker_${id}" className="c_icon" style="width:53px; height:53px; border-radius:50%; background:${color}">
        </div>`,
    });


    const handleClick = (idx) => {
        const markerSelect = document.getElementById(`marker_${idx}`);
        markerSelect.classList.add("zoom");
        const markerNot = document.querySelectorAll(
            ".leaflet-pane .leaflet-marker-icon div"
        );

        for (let i = 0; i < markerNot.length; i++) {
            if (i !== idx) {
                const markerSelect = document.getElementById(`marker_${i}`);
                markerSelect.classList.remove("zoom");
                markerSelect.classList.add("offZoom");
            } else {
                const markerSelect = document.getElementById(`marker_${i}`);
                markerSelect.classList.remove("offZoom");
            }
        }
        // setNumber(idx);
        // setActiveSeacher(true);
    };
    return (
        <Marker
            eventHandlers={{ click: () => handleClick(id) }}
            icon={rute ? iconCategory : iconTemplate}
            key={id}
            position={[e.lat, e.lng]}
        ></Marker>
    );
};

export default MarkersHelper;
