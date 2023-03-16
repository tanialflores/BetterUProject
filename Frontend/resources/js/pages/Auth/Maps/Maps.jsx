//styles
import "./Maps.scss";

import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";
import Map from "../../../components/organisms/GoogleMaps/Map";
import mapsIcon from "../../../assets/icons/mapsIcon.svg";
import coffee from "../../../assets/icons/moka.svg";
import kayak from "../../../assets/icons/kayak.svg";
import burrito from "../../../assets/icons/burrito.svg";
import points from "../../../assets/icons/points.svg";
import closeIcon from "../../../assets/icons/palomitaIcon.svg";
import { useEffect, useState } from "react";
import CardsHome from "../../../components/molecules/CardsHome/CardsHome";

import arrowUp from "../../../assets/Auth/arrowUpColorPink.svg";
import Premios from "../../../assets/Auth/premios.png";
import Ticket from "../../../assets/Auth/ticket.svg";
import Vinedo4 from "../../../assets/Auth/vinedos4.jpg";
import Vinedo3 from "../../../assets/Auth/vinedo3.jpg";
import Vinedo2 from "../../../assets/Auth/vinedos2.jpg";
import Vinedo1 from "../../../assets/Auth/vinedos1.jpg";
import Star from "../../../assets/icons/start.svg";
import Heart from "../../../assets/icons/heart.svg";

import img2 from "../../../components/organisms/Maps/mapsImg/vino.svg";
import img3 from "../../../components/organisms/Maps/mapsImg/tours.svg";
import img4 from "../../../components/organisms/Maps/mapsImg/gastronomia.svg";
import img5 from "../../../components/organisms/Maps/mapsImg/naturaleza.svg";
import img6 from "../../../components/organisms/Maps/mapsImg/welness.svg";

import mapIcon from "../../../components/organisms/Maps/Marker/markerCity.png";
import imgCard1 from "../../../components/organisms/Maps/mapsImg/1.png";
import imgCard2 from "../../../components/organisms/Maps/mapsImg/2.png";
import imgCard3 from "../../../components/organisms/Maps/mapsImg/3.png";
import marker from "../../../components/organisms/Maps/Marker/markerMap.svg";
import {} from "react-google-maps";
import Search from "../../../components/organisms/Maps/Search/Search";
import { Carousel } from "primereact/carousel";
import ReactStars from "../../../components/atoms/ReactStars/ReactStars";
import { latLng } from "leaflet";
import { NavLink } from "react-router-dom";

const Maps = () => {
    const [active, setActive] = useState(false);
    const [content, setContent] = useState(false);
    const [act, setAct] = useState(true);

    // const iconMap = L.icon({
    //     iconUrl: marker,
    //     iconSize: [244, 244],
    //     iconAnchor: [24, 45],
    //     popupAnchor: [-3, -40],
    //     shadowSize: [68, 95],
    //     shadowAnchor: [24, 45],
    // });

    const iconMap = {
        url: mapIcon,
        scaledSize: (24, 40),
        origin: (0, 0),
        anchor: (0, 0),
    };

    const icons = [
        { icon: burrito, title: "Comida mexicana" },
        { icon: kayak, title: "Kayak" },
        { icon: coffee, title: "Cafeterías" },
        { icon: burrito, title: "Hospedaje" },
        { icon: kayak, title: "Comida mexicana" },
        { icon: coffee, title: "Kayak" },
        { icon: burrito, title: "Cafeterías" },
        { icon: kayak, title: "Hospedaje" },
        { icon: points, title: "Más" },
    ];

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
            category: "Hospedaje",
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
            category: "Welness",
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
            category: "Viñedos",
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
            category: "Catas de vino",
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
            category: "Catas de vino",
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
            category: "Eno-Tours",
            state: "Jalisco",
        },
    ]);

    useEffect(() => {
        if (active) {
            setTimeout(() => {
                const explore = document.getElementById("explore");
                explore.classList.add("addW");
                explore.classList.remove("disW");
            }, 700);
            setTimeout(() => {
                setContent(true);
            }, 1700);
        }
    }, [active]);

    useEffect(() => {
        if (!content & active) {
            setTimeout(() => {
                const explore = document.getElementById("explore");
                explore.classList.remove("addW");
                explore.classList.add("disW");
            }, 700);
            setTimeout(() => {
                setActive(false);
            }, 1700);
        }
    }, [content]);

    const Cards = [
        {
            id: 1,
            img: Vinedo4,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 5,
            heart: Heart,
            textVino: "Vino tinto",
        },
        {
            id: 2,
            img: Vinedo3,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 1,
            heart: Heart,
            textVino: "Vino tinto",
        },
        {
            id: 3,
            img: Vinedo2,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 5,
            heart: Heart,
            textVino: "Vino tinto",
        },
        {
            id: 4,
            img: Vinedo1,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 3,
            heart: Heart,
            textVino: "Vino tinto",
        },
        {
            id: 5,
            img: Vinedo4,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 5,
            heart: Heart,
            textVino: "Vino tinto",
        },
        {
            id: 6,
            img: Vinedo3,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 1,
            heart: Heart,
            textVino: "Vino tinto",
        },
        {
            id: 7,
            img: Vinedo2,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 5,
            heart: Heart,
            textVino: "Vino tinto",
        },
        {
            id: 8,
            img: Vinedo1,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 3,
            heart: Heart,
            textVino: "Vino tinto",
        },
    ];
    const [searchLocation, setSearchLocation] = useState(false);
    const [nameCity, setNameCity] = useState("Marcador principal");
    const [search, setSearch] = useState(false);

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

    const [activeSeacher, setActiveSeacher] = useState(false);
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState();

    useEffect(() => {
        if (searchLocation) {
            const geocoder = new window.google.maps.Geocoder();
            const latlng = new window.google.maps.LatLng(
                searchLocation.lat,
                searchLocation.lng
            );
            console.log(latlng, "latlng");

            geocoder.geocode({ location: latlng }, (results, status) => {
                if (status === "OK" && results[0]) {
                    const calle = results[0].formatted_address;
                    setAddress(calle);
                } else {
                    console.log("No se pudo encontrar la calle");
                }
            });
            // setMarkers([
            //     {
            //         lat: searchLocation.lat,
            //         lng: searchLocation.lng,
            //         id: 1,
            //         idUnidad: 56548623155,
            //         distance: "35km / 15min",
            //         status: 1,
            //         img: null,
            //     },
            // ]);
        }
    }, [searchLocation]);

    useEffect(() => {
        if (activeSeacher) setAct(false);
    }, [activeSeacher]);

    // useEffect(() => {
    //     if (number && copyMakers.length > 0) {
    //         const array = [...copyMakers];
    //         let temp = array[0];
    //         array[0] = array[number];
    //         array[number] = temp;
    //         setCopyMarkers(array);
    //     }
    // }, [activeSeacher]);

    const [filters, setFilters] = useState("");
    const optionsTemplate = (option) => {
        return (
            <div
                className="cardFilters"
                onClick={() => {
                    setActiveSeacher(false), setFilters(option.title);
                }}
            >
                <img src={option.icon} />
                <p>{option.title}</p>
            </div>
        );
    };
    const [copyMakers, setCopyMarkers] = useState(markers);
    useEffect(() => {
        if (filters) {
            const newArray = markers.filter((e) => e.category === filters);
            setCopyMarkers(newArray);
        }
    }, [filters]);

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
                <NavLink to={"/experiences/show"} style={{ width: "100%" }}>
                    <div className="btn">Ver experiencia</div>
                </NavLink>
            </div>
        );
    };

    return (
        <>
          
            <div className="AuthView">
                <div className="Maps">
                    <Search
                        setAddress={setAddress}
                        address={address}
                        setCoordinates={setSearchLocation}
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
                    {activeSeacher && (
                        <div className="filtersCard">
                            <Carousel
                                numVisible={4}
                                numScroll={2}
                                responsiveOptions={responsiveOptions}
                                value={copyMakers}
                                itemTemplate={cardTemplate}
                            />
                        </div>
                    )}
                    <Map
                        setMarkers={setCopyMarkers}
                        setNumber={setNumber}
                        setActiveSeacher={setActiveSeacher}
                        value={searchLocation}
                        setValue={setSearchLocation}
                        markers={copyMakers}
                        key={"patrol-map-wrap"}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMt7WCF_38RRjjj4cihiEO2kTf_eXGg9k&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={
                            <div
                                key={"table-patrols-load"}
                                style={{ height: `100%` }}
                            />
                        }
                        containerElement={
                            <div
                                key={"table-patrols-cont"}
                                style={{
                                    height: `100%`,
                                    paddingLeft: "0px",
                                }}
                            />
                        }
                        mapElement={
                            <div
                                key={"table-patrols-elme"}
                                style={{ height: `100%` }}
                            />
                        }
                    />
                    {act && (
                        <div
                            id="explore"
                            className={active ? "explore  hAndw" : "explore"}
                            onClick={() => setActive(true)}
                        >
                            {!active ? (
                                <>
                                    <img src={mapsIcon} />
                                    <p>Explorar</p>
                                </>
                            ) : null}
                            {content ? (
                                <div className="closeWindow">
                                    <img
                                        src={closeIcon}
                                        onClick={() => setContent(false)}
                                    />

                                    <div className="explore2">
                                        <img src={mapsIcon} />
                                        <p>Explorar</p>
                                    </div>
                                    <div className="icons">
                                        {icons.map((e) => {
                                            return (
                                                <div className="cardIcon">
                                                    <div className="icon">
                                                        <img src={e.icon} />
                                                    </div>
                                                    <p>{e.title}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <p style={{ marginBottom: "27px" }}>
                                        Experiencias cercanas
                                    </p>
                                    <div className="cardExperience">
                                        <CardsHome
                                            displayNone={"none"}
                                            rowRev="row-reverse"
                                            viewElemnts
                                            viewBtn
                                            Cards={Cards}
                                            size={19}
                                        />
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Maps;
