import React, { useEffect, useState } from "react";
import InputSearch from "../../../components/atoms/InputSearch/InputSearch";
import Button from "../../../components/atoms/Button/Button";

//assets
import Arrow from "../../../assets/icons/arrow.svg";
import Apoyo from "../../../assets/icons/apoyo.svg";
import Grape from "../../../assets/icons/grape.svg";
import Shape from "../../../assets/icons/Shape.svg";
import Pago from "../../../assets/icons/pago.svg";
import Phone from "../../../assets/icons/phoneA.png";
import Vino from "../../../assets//icons/vino.png";
import LogoColor from '../../../assets/icons/logob.png'

import Bed from "../../../assets//icons/test/034-bed.svg";
import Vela from "../../../assets//icons/test/Combined Shape.svg";
import House from "../../../assets//icons/test/Combined Shape (1).svg";
import Botella from "../../../assets//icons/test/Combined Shape (2).svg";
import Granja from "../../../assets//icons/test/Combined Shape (3).svg";
import Food from "../../../assets//icons/test/Combined Shape (4).svg";
import Autencilios from "../../../assets//icons/test/Combined Shape (5).svg";
import Sol from "../../../assets//icons/test/Combined Shape (6).svg";
import Globo from "../../../assets//icons/test/globo-aerostatico.svg";

import Cheese from "../../../assets/icons/cheese.png";
import Campeche from "../../../assets/icons/campechex.png";
import Breanch_grape from "../../../assets/icons/breanch_grape.png";
import Olive from "../../../assets/icons/olive.png";

import ExpA from "../../../assets/icons/expA.svg";
import ExpB from "../../../assets/icons/expB.svg";
import ExpC from "../../../assets/icons/expC.svg";
import ExpD from "../../../assets/icons/expD.svg";
import ExpE from "../../../assets/icons/expE.svg";
import ExpF from "../../../assets/icons/expF.svg";

import PaseoA from "../../../assets/icons/Paseo.svg";
import PaseoB from "../../../assets/icons/PaseoB.svg";
import PaseoC from "../../../assets/icons/PaseoC.svg";
import PaseoD from "../../../assets/icons/PaseoD.svg";
import PaseoE from "../../../assets/icons/PaseoE.svg";
import PaseoF from "../../../assets/icons/PaseoF.svg";

import GasA from "../../../assets/icons/gasA.svg";
import GasB from "../../../assets/icons/gasB.svg";
import GasC from "../../../assets/icons/gasC.svg";
import GasD from "../../../assets/icons/gasD.svg";
import GasE from "../../../assets/icons/gasE.svg";
import GasF from "../../../assets/icons/gasF.svg";

import AlkimiaB from "../../../assets/icons/alkimiaB.png";
import GoogleStore from "../../../assets/icons/googleStore.png";
import AppleStore from "../../../assets/icons/appleStore.png";
import PhoneB from "../../../assets/icons/phoneB.png";

import Experiencias from "../../../assets/icons/Experiencias.svg";

import "./LandingPage.scss";
import PostCardViewx from "../../../components/molecules/PostCardView/PostCardViewx";
import Carousel from "../../../components/molecules/Carousel/Carousel";
import Map from "../../../components/molecules/Maps/Maps";
import { useNavigate } from "react-router-dom";
import Carrusel from "../../../components/organisms/Carrusel/Carrusel";
import CarruselHome from "../../../components/atoms/CarruselHome/CarruselHome";

const LandingPage = () => {
    const [openPlace, setOpenPlace] = useState(false);
    const [openCategory, setOpenCategory] = useState(false); //-250

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 400) {
                    document.getElementById("secct-3-device").style.left =
                        "20px";
                    document.getElementById("secct-3-device").style.transition =
                        "all 0.5s";
                }
            });
        }
    }, []);

    const navigate = useNavigate()

    const helpTravel = [
        {
            id: 1,
            img: Grape,
            title: "Viñedos Mexicanos",
            descriptions:
                "Encuentra cientos de experiencias de enoturismo en todo México",
        },
        {
            id: 2,
            img: Shape,
            title: "Arma tu ruta",
            descriptions:
                "Comienza a crear tus propias rutas con nuestras sugerencias de experiencias cercanas a tu destino",
        },
        {
            id: 3,
            img: Pago,
            title: "Pago seguro",
            descriptions:
                "Reserva y paga desde la app con un proceso fácil y confiable",
        },
        {
            id: 4,
            img: Apoyo,
            title: "Soporte",
            descriptions:
                "Si necesitas ayuda nuestros expertos estarán disponibles todo el tiempo para guiarte a los mejores destinos",
        },
    ];

    const [destPlace, setDestPlace] = useState([
        {
            id: 1,
            place: "Aguascalientes",
        },
        {
            id: 2,
            place: "Baja california",
        },
        {
            id: 3,
            place: "Chihuahua",
        },
        {
            id: 4,
            place: "Durango",
        },
        {
            id: 5,
            place: "Guanajato",
        },
        {
            id: 6,
            place: "Jalisco",
        },
        {
            id: 7,
            place: "Puebla",
        },
        {
            id: 8,
            place: "Queretaro",
        },
        {
            id: 9,
            place: "Zacatecas",
        },
        {
            id: 10,
            place: "Sonora",
        },
        {
            id: 11,
            place: "Coahuila",
        },
        {
            id: 12,
            place: "Nuevo León",
        },
        {
            id: 13,
            place: "San Luis Potosi",
        },
    ]);

    const [category, setCategory] = useState([
        {
            id: 1,
            category: "Avión",
        },
        {
            id: 2,
            category: "Motocicleta",
        },
        {
            id: 3,
            category: "Museos",
        },
        {
            id: 4,
            category: "Globo",
        },
        {
            id: 5,
            category: "Tren",
        },
        {
            id: 6,
            category: "Avión",
        },
        {
            id: 7,
            category: "Motocicleta",
        },
        {
            id: 8,
            category: "Museos",
        },
        {
            id: 9,
            category: "Globo",
        },
    ]);

    const anfintriones = [
        {
            img: House,
            title: "Viñedos",
        },
        {
            img: Sol,
            title: "Naturaleza",
        },
        {
            img: Vela,
            title: "Welness",
        },
        {
            img: Bed,
            title: "Hospedaje",
        },
        {
            img: Food,
            title: "Cartas de vino",
        },
        {
            img: Botella,
            title: "Prodductos",
        },
        {
            img: Globo,
            title: "Experiencias",
        },
        {
            img: Granja,
            title: "Eno-Tours",
        },
        {
            img: Autencilios,
            title: "Gastronomia",
        },
    ];

    const blog = [
        {
            id: 1,
            img: Cheese,
            title: "Conoce México a través de sus Quesos",
            descriptions: "México es un país lleno de sabores y hoy toca descubrirlo con un alimento que ha sido parte de nuestra cultura por cientos de años: Los...",
        },
        {
            id: 2,
            img: Campeche,
            title: "Guía de viaje por Campeche",
            descriptions: "Desde zonas arqueológicas milenarias, hasta zonas que denotan la modernidad y actualidad que se vive en este estado sureño. Hoy te...",
        },
        {
            id: 3,
            img: Breanch_grape,
            title: "Las uvas y sus grandes aportaciones a la salud de tu piel",
            descriptions: "Desde la antigüedad se conoce que las propiedades de las uvas aportan beneficios para la salud. Hipócrates, mejor conocido como el padre de la medicina recomendó el uso del vino...",
        },
        {
            id: 4,
            img: Olive,
            title: "El olivo en México",
            descriptions: "Primero que nada, debemos tener claro que el aceite de oliva proviene del fruto del olivo, es decir, las aceitunas; y puesto que casi la...",
        },
    ];

    const products = [
        {
            note: true,
            colab: true,
            image: Experiencias,
        },
        {
            note: false,
            colab: false,
            image: Experiencias,
        },
        {
            note: true,
            colab: true,
            image: Experiencias,
        },
        {
            note: false,
            colab: false,
            image: Experiencias,
        },
        {
            note: true,
            colab: true,
            image: Experiencias,
        },
        {
            note: false,
            colab: false,
            image: Experiencias,
        },
    ];

    const vinedo = [
        {
            id: 1,
            img: PaseoA,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 2,
            img: PaseoB,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 3,
            img: PaseoC,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 4,
            img: PaseoD,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 5,
            img: PaseoE,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 6,
            img: PaseoF,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
    ];

    const exper = [
        {
            id: 1,
            img: ExpA,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 2,
            img: ExpB,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 3,
            img: ExpC,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 4,
            img: ExpD,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 5,
            img: ExpE,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 6,
            img: ExpF,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
    ];

    const gastro = [
        {
            id: 1,
            img: GasA,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 2,
            img: GasB,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 3,
            img: GasC,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 4,
            img: GasD,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 5,
            img: GasE,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
        {
            id: 6,
            img: GasF,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            number: "(1512)"
        },
    ];

    const ubicationPlace = [
        {
            lat: 30.153815,
            lng: -115.23181,
            color: "rgba(242, 174, 212, 0.7)",
        },
        {
            lat: 29.899816,
            lng: -111.761276,
            color: "rgba(255, 200, 68, 0.7)",
        },
        {
            lat: 30.947496,
            lng: -109.417839,
            color: "rgba(180, 189, 0, 0.7)",
        },
        {
            lat: 26.774068,
            lng: -107.976654,
            color: "rgba(125, 185, 245, 0.7)",
        },
        {
            lat: 25.896449,
            lng: -98.62743,
            color: "rgba(226, 164, 252, 0.7)",
        },
        {
            lat: 16.845153,
            lng: -96.765453,
            color: "rgba(242, 174, 212, 0.7)",
        },
        {
            lat: 20.632944,
            lng: -88.647916,
            color: "rgba(255, 200, 68, 0.7)",
        },
        {
            lat: 20.6597712,
            lng: -103.349762,
            color: "rgba(255, 0, 0, 0.7)",
        },
    ];

    const updateCheckboxPlace = (e) => {
        const copy = [...destPlace];
        const updateIdx = copy.findIndex((item) => item.id === e);
        copy[updateIdx].value = !copy[updateIdx].value;
        setDestPlace(copy);
    };

    const updateCheckboxCategory = (e) => {
        const copy = [...category];
        const updateIdx = copy.findIndex((item) => item.id === e);
        copy[updateIdx].value = !copy[updateIdx].value;
        setCategory(copy);
    };

    return (
        <>
            <div className="LandingPage">
                <div className="subLandingPage">
                    <img
                        src={Vino}
                        alt="background"
                        className="sub-background"
                    />
                    <div className="sub-filter-img">
                        <InputSearch
                            classInput={"input"}
                            className={"inputsearch"}
                            sizeLup={"tamanio"}
                            placeholder={"¿Cual es tu siguiente destino?"}
                        />
                        <div className="landing-btn-search">
                            <div
                                className="btn-select"
                                onClick={() => {
                                    setOpenPlace(!openPlace);
                                    setOpenCategory(false);
                                }}
                            >
                                <p className="select-pick">Destino</p>
                                <img
                                    src={Arrow}
                                    alt="arrow"
                                    className="arrow"
                                />
                            </div>
                            <div
                                className="btn-select"
                                onClick={() => {
                                    setOpenCategory(!openCategory);
                                    setOpenPlace(false);
                                }}
                            >
                                <p className="select-pick">Categoría</p>
                                <img
                                    src={Arrow}
                                    alt="arrow"
                                    className="arrow"
                                />
                            </div>
                            <div className="btn-select btns">
                                <Button
                                    btnTitle={"Buscar"}
                                    className={"solid"}
                                />
                            </div>
                            <div
                                className={`place-selct-pick ${
                                    openPlace && "place-hidden"
                                }`}
                            >
                                {destPlace.map((place) => (
                                    <div key={place.id} className="place-pick">
                                        <input
                                            type="checkbox"
                                            className="checkBox"
                                            onClick={() =>
                                                updateCheckboxPlace(items.id)
                                            }
                                        />
                                        <p className="p-placePick">
                                            {place.place}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div
                                className={`category-selct-pick ${
                                    openCategory && "category-hidden"
                                }`}
                            >
                                {category.map((item) => (
                                    <div
                                        key={item.id}
                                        className="category-pick"
                                    >
                                        <input
                                            type="checkbox"
                                            className="checkBoxCat"
                                            onClick={() =>
                                                updateCheckboxCategory(item.id)
                                            }
                                        />
                                        <p className="p-categoryPick">
                                            {item.category}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-secct2">
                    {helpTravel.map((item) => (
                        <div key={item.id} className="secct2-card">
                            <img
                                src={item.img}
                                alt="imge"
                                className="secct-2-card-img"
                            />
                            <p className="secct2-title">{item.title}</p>
                            <p className="secct2-desc">{item.descriptions}</p>
                        </div>
                    ))}
                </div>
                <div className="secct-3">
                    <div className="secct-3-device" id="secct-3-device">
                        <img
                            src={Phone}
                            alt="phone"
                            className="secct-3-phone"
                        />
                    </div>
                    <div className="secct-3-container">
                        <h3 className="secct3-title">¿Qué es ALKIMIA?</h3>
                        <p className="secct3-subTitle">
                            Ofrecemos las mejores experiencias de enoturismo en
                            México para los amantes del vino.
                        </p>
                        <p className="secct3-subTitle">
                            ALKMIA TRAVEL es la primera plataforma digital de
                            enoturismo en México, que combina todos los
                            elementos que hacen de una actividad en torno al
                            vino, una experiencia mágica y memorable. A través
                            de nuestra plataforma digital, podrás reservar tu
                            hospedaje y recorridos a las mejores vinícolas del
                            país, hoteles boutique, haciendas, museos,
                            restaurantes y un sinfín de actividades más. Además,
                            somos creadores de experiencias, tenemos tours
                            privados y semiprivados que no encontrarás en ningún
                            otro lugar.
                        </p>
                    </div>
                </div>
                <div className="secct4">
                    <div className="secct-4-body">
                        <p className="secct4-title">
                            Visita los mejores viñedos mexicanos
                        </p>
                        <p className="secct-4-description">
                            El mundo del vino mexicano es mucho más grande de lo
                            que piensan. Nuevos viñedos abren sus puestas
                            constantemente, ofreciendo nuevas y emocionantes
                            experiencias por descubrir. Empieza a planear tu
                            próxima visita a los viñedos mexicanos que tenemos
                            en nuestra app.
                        </p>
                    </div>

                    {/* Aqui es donde va el mapa */}
                    <div className="secct4-map">
                        <Map
                            places={ubicationPlace}
                            key={"patrol-map-wrap"}
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMt7WCF_38RRjjj4cihiEO2kTf_eXGg9k&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={
                                <div
                                    key={"table-patrols-load"}
                                    style={{
                                        height: `100%`,
                                        background: "#000",
                                    }}
                                />
                            }
                            containerElement={
                                <div
                                    key={"table-patrols-cont"}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        zIndex: "300",
                                    }}
                                />
                            }
                            mapElement={
                                <div
                                    key={"table-patrols-elme"}
                                    style={{
                                        height: `100%`,
                                    }}
                                />
                            }
                        />
                    </div>
                    {/* Aqui termina el mapa */}

                    <div className="secct404"></div>
                </div>
                <div className="secct5">
                    <p className="secct-5-title">
                        Descubre todo tipo de anfitriones
                    </p>
                    <div className="secct-5-anfin">
                        {anfintriones.map((item) => (
                            <div className="secct5-descovery" key={item.title}>
                                <div className="descovey-img">
                                    <img
                                        src={item.img}
                                        alt="Descovery"
                                        className="secct-5-icons"
                                    />
                                </div>
                                <p className="secct5-descrip">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="secct6">
                    <div className="secct-6-A">
                        <p className="secct-6-A-title">
                            Descubre experiencias mágicas
                        </p>
                        <span className="secct-6-A-des">
                            Comienza a vivir el apasionante mundo del vino.
                        </span>
                        <br />
                        <span className="secct-6-B-des">
                            Visita los mejores destinos del enoturismo en
                            México.
                        </span>
                    </div>
                    <div className="secct-6-B">
                        <h1 className="secct-6-B-title">Explora por viñedo</h1>
                        <Carousel object={vinedo}/>
                    </div>
                    <div className="secct-6-B secB">
                        <h1 className="secct-6-B-title">
                            Explora por experiencia
                        </h1>
                        <Carousel object={exper}/>
                    </div>
                    <div className="secct-6-B secC">
                        <h1 className="secct-6-B-title">
                            Explora por gastronomia
                        </h1>
                        <Carousel object={gastro}/>
                    </div>
                </div>
                <div className="secct7">
                    <h1 className="secct7-title">¿Quieres ser anfitrión?</h1>
                    <div className="secct7-bodyA">
                        Conviértete en anfitrión y deja que miles de alkimistas
                        visiten tu vinícola, hotel, restaurante, o cualquier
                        negocio que ofrezca experiencias y servicios
                        enoturísticos. Si quieres saber más a cerca de volverte
                        anfitrión, da click
                    </div>
                    <p className="secct7-bodyA marg">
                        Si quieres saber más a cerca de volverte anfitrión, da
                        click
                    </p>

                    <div className="secct7-btn">
                        <div className="secct-7-btn">
                            <Button
                                btnTitle={"Saber más"}
                                className={"border"}
                                onClick={() => navigate("hosts")}
                            />
                        </div>
                    </div>
                </div>
                <div className="secct8">
                    <h1 className="secct8-title">Blog</h1>
                    <div className="secct-8-body">
                        {blog.map((blog) => (
                            <div className="card-blog" key={blog.id}>
                                <div className="card-container">
                                    <img
                                        src={blog.img}
                                        alt="Card"
                                        className="card-img"
                                    />
                                </div>
                                <p className="card-title">{blog.title}</p>
                                <p className="card-descrip">
                                    {blog.descriptions}
                                </p>

                                <div className="small-windows">
                                    <img src={LogoColor} alt="Logo" className="smaall-icon"/>
                                    <p className="akiloi">Alkimia</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="secct9">
                    <div className="secct-9-texto">
                        <div className="secct-9-container-logo">
                            <img
                                src={AlkimiaB}
                                alt="Alkimia"
                                className="secct-9-logo"
                            />
                        </div>
                        <div className="secct-body">
                            <h3 className="secct-body-title">
                                Descarga la app
                            </h3>
                            <p className="secct-body-span">
                                {" "}
                                y comienza a catar México
                            </p>
                            <p className="secct-body-descr">
                                Alkimia es la primer app de enoturismo en
                                México. Descarga la app y reserva tus visitas a
                                vinícolas, descubre viñedos, gastronomía de
                                autor, hoteles únicos, experiencias y mucho más.
                            </p>
                            <div className="secct-9-btn">
                                <div className="secct-9-cont">
                                    <Button
                                        btnTitle={"Saber más"}
                                        className={"border"}
                                        onClick={() => navigate("downloadApp")}
                                    />
                                </div>
                            </div>
                            <div className="secct-9-Store">
                                <div className="containStore">
                                    <img
                                        src={GoogleStore}
                                        alt="GoogleStore"
                                        className="appStore"
                                    />
                                </div>
                                <div className="containStore">
                                    <img
                                        src={AppleStore}
                                        alt="AppleStore"
                                        className="appStore"
                                    />
                                </div>
                            </div>
                            <div className="div-hiiden"></div>
                        </div>
                    </div>

                    <div className="secct-phone-container">
                        <div className="secct-9-sub">
                            <img
                                src={PhoneB}
                                alt="phone"
                                className="phone-secc"
                            />
                        </div>
                    </div>
                </div>
                <div className="secct404 fina">

                </div>
            </div>
        </>
    );
};

export default LandingPage;
