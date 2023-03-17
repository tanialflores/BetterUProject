import "./Rute.scss";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";
import palomaIcon from "../../../assets/icons/palomaIcon.svg";
import setting from "../../../assets/icons/setting.svg";
import { useEffect, useState } from "react";
import Checked from "./Checked/Checked";
import { Carousel } from "primereact/carousel";
import arrowUp from "../../../assets/Auth/arrowUpColorPink.svg";
import Premios from "../../../assets/Auth/premios.png";
import Ticket from "../../../assets/Auth/ticket.svg";
import Vinedo4 from "../../../assets/Auth/vinedos4.jpg";
import Vinedo3 from "../../../assets/Auth/vinedo3.jpg";
import Vinedo2 from "../../../assets/Auth/vinedos2.jpg";
import Vinedo1 from "../../../assets/Auth/vinedos1.jpg";
import Star from "../../../assets/icons/start.svg";
import Heart from "../../../assets/icons/heart.svg";
import FilterBar from "../../../components/organisms/FilterBar/FilterBar";
import Categorys from "../../../components/molecules/Categorys/Categorys";
import Button from "../../../components/atoms/Button/Button";
import CardsHome from "../../../components/molecules/CardsHome/CardsHome";
import fondo from "../../../assets/Auth/fondoRute.png";
import markerIcon from "../../../components/organisms/Maps/Marker/markerMap.svg";
import Map from "../../../components/organisms/GoogleMaps/Map";
import { Skeleton } from "primereact/skeleton";

const RuteSkeleton = () => {
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [distance, setDistance] = useState(0);
    const states = [
        { name: "Aguascalientes" },
        { name: "Baja California" },
        { name: "Chihuahua" },
        { name: "Durango" },
        { name: "Guanajuato" },
        { name: "Jalisco" },
        { name: "Puebla" },
        { name: "Querétaro" },
        { name: "San Luis Potosí" },
        { name: "Zacatecas" },
        { name: "Coahuila" },
        { name: "Nuevo Leon" },
        { name: "Sonora" },
    ];

    const searchRute = () => {
        setModal1(false), setModal2(false), setModal3(false);
    };

    const [options, setOptions] = useState([
        { icon: "", title: "Viñedos" },
        { icon: "", title: "Catas de vino" },
        { icon: "", title: "Eno-Tours" },
        { icon: "", title: "Gastronomía" },
        { icon: "", title: "Naturaleza" },
        { icon: "", title: "Welness" },
        { icon: "", title: "Hospedaje" },
        { icon: "", title: "Experiencias" },
    ]);

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
            type: "Gastronomía",
            city: "Jalisco",
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
            type: "Naturaleza",
            city: "Jalisco",
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
            type: "Gastronomía",
            city: "Jalisco",
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
            type: "Gastronomía",
            city: "Jalisco",
        },
        {
            id: 5,
            img: Vinedo4,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            type: "Gastronomía",
            city: "Jalisco",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 5,
            heart: Heart,
            textVino: "Vino tinto",
            type: "Naturaleza",
            city: "Jalisco",
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
            type: "Gastronomía",
            city: "Jalisco",
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
            type: "Gastronomía",
            city: "Jalisco",
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
            type: "Naturaleza",
            city: "Jalisco",
        },
    ];

    const cardTemplate = (item, index) => {
        return (
            <div className={`Cardxxx`} key={index}>
                <div className="CardsHome">
                    <img src={item.img} alt="" className="card-img" />
                    <div className="container-arrow">
                        <img src={item.arrow} alt="" className="item-arrow" />
                    </div>
                    <div className="container-points">{item.points}</div>

                    <div className="manto-color"></div>
                </div>
            </div>
        );
    };
    const routeSaveTemplate = (item) => {
        return (
            <div className="Cardxxx">
                <div className="CardsHome">
                    <img src={item.img} alt="" className="card-img" />
                    <div className="manto-color"></div>
                </div>
            </div>
        );
    };
    const openMenu = () => {
        document.querySelector(".container-black").classList.add("closeSider");
    };

    useEffect(() => {
        if (modal1) {
            const modal = document.getElementById("modal1");
            modal.classList.add("addW");
        }
    }, [modal1]);
    useEffect(() => {
        if (modal2) {
            const modal = document.getElementById("modal2");
            modal.classList.add("addW2");
        }
    }, [modal2]);
    useEffect(() => {
        if (modal3) {
            const modal = document.getElementById("modal3");
            modal.classList.add("addW2");
        }
    }, [modal3]);

    const [route, setRoute] = useState(false);
    const [id, setID] = useState(null);

    const [filterState, setFilterState] = useState([]);

    useEffect(() => {
        if (id !== null) {
            setFilterState([states[id], ...filterState]);
        }
    }, [id]);

    const [searchLocation, setSearchLocation] = useState(false);
    const [activeSeacher, setActiveSeacher] = useState(false);
    const [number, setNumber] = useState();

    return (
        <>

            <div className="Rute">
                <div className="found" style={{ maxWidth: '1000px', width: '100%', height: '500px' }}></div>

                <div style={{ marginTop: "-500px", position: "relative" }}>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Skeleton width="300px" height="40px" />
                    </div>

                    <div className="cMain">
                        <div className="c_header">
                            <div style={{ maxWidth: '500px', width: '100%', marginRight: '30px' }}>
                                <Skeleton width="100%" height="50px" />
                            </div>

                            <Skeleton width="100px" height="50px" />
                            <div
                                className={"Filter"}
                                style={{ width: '50px', height: '50px', borderRadius: '50%', top: '0', }}
                            >
                                <Skeleton width="100%" height="100%" />
                            </div>
                        </div>
                        <div className="Maps">
                            {/* {!route && (
                                <img
                                    onClick={() => setRoute(true)}
                                    className="iconMap"
                                    src={markerIcon}
                                />
                            )} */}
                            <Skeleton width="100%" height="100%" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RuteSkeleton;
