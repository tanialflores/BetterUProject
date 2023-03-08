//styles
import "./Map.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css";

//assets
import mapIcon from "./Marker/markerCity.png";
import imgCard1 from "./mapsImg/1.png";
import imgCard2 from "./mapsImg/2.png";
import imgCard3 from "./mapsImg/3.png";
import img1 from "./mapsImg/viñedos.svg";
import img2 from "./mapsImg/vino.svg";
import img3 from "./mapsImg/tours.svg";
import img4 from "./mapsImg/gastronomia.svg";
import img5 from "./mapsImg/naturaleza.svg";
import img6 from "./mapsImg/welness.svg";
import img7 from "./mapsImg/hospedaje.svg";

//react
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import ReactStars from "../../atoms/ReactStars/ReactStars";
// when the docs use an import:
import Search from "./Search/Search";
import OpenStreetMap from "./OpenStreetMap/OpenStreetMap";

const Map = ({ setAct, rute, route, setRoute, setDistance }) => {
    const [screen, setScreen] = useState(window.screen.width);
    const iconMap = L.icon({
        iconUrl: mapIcon,
        iconSize: [50, 50],
        iconAnchor: [24, 45],
        popupAnchor: [-3, -40],
        shadowSize: [68, 95],
        shadowAnchor: [24, 45],
    });

    const [markers, setMarkers] = useState([
        {
            title: "Paseo matutino",
            imgCard: imgCard3,
            price: "$123.12",
            lat: 20.6852,
            lng: -103.3331,
            id: 0,
            colony: "Centro",
            municipality: "Zapopan",
            location:
                "Capital. Asunción. Savalas cue san makla, Pitiantuta 1138.",
            soil: "Bodega",
            date: "21/12/2022",
            invoice: "5EF65W4EF",
            proficient: " Andrew Tate",
            icon: iconMap,
            category: "Gastronomía",
            state: "Jalisco",
        },
        {
            title: "Paseo matutino",
            imgCard: imgCard1,
            price: "$123.12",
            lat: 20.6842,
            lng: -103.4331,
            id: 1,
            colony: "Centro",
            municipality: "Zapopan",
            location:
                "Capital. Asunción. Savalas cue san makla, Pitiantuta 1138.",
            soil: "Bodega",
            date: "21/12/2022",
            invoice: "5EF65W4EF",
            proficient: " Andrew Tate",
            icon: iconMap,
            category: "Naturaleza",
            state: "Chihuahua",
        },
        {
            title: "Paseo matutino",
            imgCard: imgCard2,
            price: "$123.12",
            lat: 20.699,
            lng: -103.3831,
            id: 2,
            colony: "Centro",
            municipality: "Zapopan",
            location:
                "Capital. Asunción. Savalas cue san makla, Pitiantuta 1138.",
            soil: "Bodega",
            date: "21/12/2022",
            invoice: "5EF65W4EF",
            proficient: " Andrew Tate",
            icon: iconMap,
            category: "Gastronomía",
            state: "Jalisco",
        },
        {
            title: "Paseo matutino",
            imgCard: imgCard3,
            price: "$123.12",
            lat: 20.6812,
            lng: -103.3631,
            id: 3,
            colony: "Centro",
            municipality: "Zapopan",
            location:
                "Capital. Asunción. Savalas cue san makla, Pitiantuta 1138.",
            soil: "Bodega",
            date: "21/12/2022",
            invoice: "5EF65W4EF",
            proficient: " Andrew Tate",
            icon: iconMap,
            category: "Gastronomía",
            state: "Jalisco",
        },
        {
            title: "Paseo matutino",
            imgCard: imgCard1,
            price: "$123.12",
            lat: 20.6942,
            lng: -103.4031,
            id: 4,
            colony: "Centro",
            municipality: "Zapopan",
            location:
                "Capital. Asunción. Savalas cue san makla, Pitiantuta 1138.",
            soil: "Bodega",
            date: "21/12/2022",
            invoice: "5EF65W4EF",
            proficient: " Andrew Tate",
            icon: iconMap,
            category: "Naturaleza",
            state: "Guanajuato",
        },
        {
            title: "Paseo matutino",
            imgCard: imgCard2,
            price: "$123.12",
            lat: 20.689,
            lng: -103.3741,
            id: 5,
            colony: "Centro",
            municipality: "Zapopan",
            location:
                "Capital. Asunción. Savalas cue san makla, Pitiantuta 1138.",
            soil: "Bodega",
            date: "21/12/2022",
            invoice: "5EF65W4EF",
            proficient: " Andrew Tate",
            icon: iconMap,
            category: "Gastronomía",
            state: "Durango",
        },
        {
            title: "Paseo matutino",
            imgCard: imgCard2,
            price: "$123.12",
            lat: 20.689,
            lng: -103.3941,
            id: 6,
            colony: "Centro",
            municipality: "Zapopan",
            location:
                "Capital. Asunción. Savalas cue san makla, Pitiantuta 1138.",
            soil: "Bodega",
            date: "21/12/2022",
            invoice: "5EF65W4EF",
            proficient: " Andrew Tate",
            icon: iconMap,
            category: "Naturaleza",
            state: "Jalisco",
        },
        {
            title: "Paseo matutino",
            imgCard: imgCard2,
            price: "$123.12",
            lat: 20.679,
            lng: -103.3841,
            id: 7,
            colony: "Centro",
            municipality: "Zapopan",
            location:
                "Capital. Asunción. Savalas cue san makla, Pitiantuta 1138.",
            soil: "Bodega",
            date: "21/12/2022",
            invoice: "5EF65W4EF",
            proficient: " Andrew Tate",
            icon: iconMap,
            category: "Gastronomía",
            state: "Guanajuato",
        },
        {
            title: "Paseo matutino",
            imgCard: imgCard2,
            price: "$123.12",
            lat: 20.6881,
            lng: -103.3441,
            id: 8,
            colony: "Centro",
            municipality: "Zapopan",
            location:
                "Capital. Asunción. Savalas cue san makla, Pitiantuta 1138.",
            soil: "Bodega",
            date: "21/12/2022",
            invoice: "5EF65W4EF",
            proficient: " Andrew Tate",
            icon: iconMap,
            category: "Gastronomía",
            state: "Jalisco",
        },
    ]);


    useEffect(() => {
        setScreen(window.screen.width);
    }, []);

    const [searchLocation, setSearchLocation] = useState(null);
    const [nameCity, setNameCity] = useState("Marcador principal");
    const [search, setSearch] = useState(false);

    // useEffect(() => {
    //     if (searchLocation) {
    //         setCenterMap(searchLocation);
    //     }
    // }, [search]);

    const [options, setOptions] = useState([
        { icon: img3, title: "Viñedos" },
        { icon: img2, title: "Catas de vino" },
        { icon: img3, title: "Eno-Tours" },
        { icon: img4, title: "Gastronomía" },
        { icon: img5, title: "Naturaleza" },
        { icon: img6, title: "Welness" },
        { icon: img6, title: "Hospedaje" },
        { icon: img6, title: "Experiencias" },
    ]);
    const responsiveOptions = [
        {
            breakpoint: "1779px",
            numVisible: 4,
            numScroll: 1,
        },
        {
            breakpoint: "1199px",
            numVisible: 4,
            numScroll: 1,
        },
        {
            breakpoint: "991px",
            numVisible: 4,
            numScroll: 1,
        },
        {
            breakpoint: "767px",
            numVisible: 2,
            numScroll: 1,
        },
    ];

    const optionsTemplate = (option) => {
        return (
            <div className="cardFilters">
                <img src={option.icon} />
                <p>{option.title}</p>
            </div>
        );
    };
    const [activeSeacher, setActiveSeacher] = useState(false);
    const [number, setNumber] = useState();

    useEffect(() => {
        if (activeSeacher) setAct(false);
    }, [activeSeacher]);

    useEffect(() => {
        // if (number) {
        //     const start = document.querySelector(
        //         ".p-carousel-items-container .p-carousel-item .p-carousel-item-start"
        //     );
        //     start.classList.remove("p-carousel-item-start");
        //     const container = document.querySelectorAll(
        //         ".p-carousel-items-container .p-carousel-item"
        //     );
        //     container[number].classList.add("p-carousel-item-start");
        // }
        // if (number) {
        //     const newArray = [...markers];
        //     [newArray[0], newArray[number]] = [newArray[number], newArray[0]];
        //     setMarkers(newArray);
        //     console.log(markers);
        // }
    }, [number]);

    const cardTemplate = (option) => {
        return option.id !== number ? (
            <div className="cardFilters2">
                <img src={option.imgCard} />
                <div className="text">
                    <p>{option.title}</p>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <div className="star">
                        <ReactStars numberStar={4} size={15} />
                        <strong>$800.00</strong>
                    </div>
                </div>
            </div>
        ) : (
            <div className="cardFilters3">
                <img src={option.imgCard} />
                <div className="text">
                    <p>{option.title}</p>
                    <span>{option.location}</span>
                    <div className="star">
                        <ReactStars numberStar={4} size={15} />
                        <strong>{option.price}</strong>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="Map">
                {!rute && (
                    <>
                        <div className="searchMarker">
                            <Search
                                setNameCity={setNameCity}
                                search={search}
                                setSearch={setSearch}
                                setSearchLocation={setSearchLocation}
                            />
                            <div className="filters">
                                <Carousel
                                    value={options}
                                    numVisible={5}
                                    numScroll={2}
                                    responsiveOptions={responsiveOptions}
                                    itemTemplate={optionsTemplate}
                                />
                            </div>
                        </div>
                        {activeSeacher && (
                            <div className="filtersCard">
                                <Carousel
                                    numVisible={4}
                                    numScroll={2}
                                    responsiveOptions={responsiveOptions}
                                    value={markers}
                                    itemTemplate={cardTemplate}
                                />
                            </div>
                        )}
                    </>
                )}

                <OpenStreetMap
                    setDistance={setDistance}
                    route={route}
                    setRoute={setRoute}
                    setNumber={setNumber}
                    rute={rute}
                    setActiveSeacher={setActiveSeacher}
                    nameCity={nameCity}
                    searchLocation={searchLocation}
                    centerMap={centerMap}
                    screen={screen}
                    markers={markers}
                    responsiveOptions={responsiveOptions}
                />
            </div>
        </>
    );
};

export default Map;
