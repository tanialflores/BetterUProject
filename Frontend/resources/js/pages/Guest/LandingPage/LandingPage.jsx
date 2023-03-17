import React, { useEffect, useState } from "react";
import InputSearch from "../../../components/atoms/InputSearch/InputSearch";
import Button from "../../../components/atoms/Button/Button";

//assets
import trastornoAlimenticio from "../../../assets/guest/trastornoAlimenticio.png";
import depresion from "../../../assets/guest/depresion.png";
import ansiedad from "../../../assets/guest/ansiedad.png";
import Shape from "../../../assets/icons/Shape.svg";
import Pago from "../../../assets/icons/pago.svg";
import Phone from "../../../assets/icons/phoneA.png";
import back from "../../../assets/guest/back.png";
import LogoColor from '../../../assets/icons/logob.png';
import logoSinFondo from "../../../assets/guest/logoSinFondo.png"

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
import c8 from "../../../assets/guest/c8.png";
import c3 from "../../../assets/guest/c3.png";
import c4 from "../../../assets/guest/c4.png";
import c5 from "../../../assets/guest/c5.png";
import c6 from "../../../assets/guest/c6.png";
import c7 from "../../../assets/guest/c7.png";

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
            img: depresion,
            title: "Depresión",
            descriptions:
                "La depresión es una enfermedad que se caracteriza por una tristeza persistente y por la pérdida de interés en las actividades con las que normalmente se disfruta, así como por la incapacidad para llevar a cabo las actividades cotidianas, durante al menos dos semanas.",
        },
        {
            id: 2,
            img: ansiedad,
            title: "Ansiedad",
            descriptions:
                "La ansiedad es una emoción normal que se experimenta en situaciones en las que el sujeto se siente amenazado por un peligro externo o interno.",
        },
        {
            id: 3,
            img: trastornoAlimenticio,
            title: "Trastorno alimenticio",
            descriptions:
                "Los trastornos de la alimentación, también llamados trastornos de la conducta alimentaria, son enfermedades médicas graves con una influencia biológica que se caracterizan por alteraciones graves de las conductas alimentarias.",
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
            title: "Sintomas ansiedad",
            descriptions: "Taquicardias, falta de aire, temblor, ganas de huir, dificultad para concentrarse,Irritabilidad, ensimismamiento, dificultades para iniciar o seguir una conversación, molestias digestivas, náuseas, vómitos, “nudo” en el estómago,temor a perder el control, recelos, sospechas, incertidumbre, dificultad para tomar decisiones.",
        },
        {
            id: 2,
            img: Campeche,
            title: "Sintomas depresion",
            descriptions: "Sentimientos persistentes de tristeza, ansiedad o “vacío”, desesperanza o pesimismo,irritabilidad, frustración o intranquilidad,dolores y molestias,pérdida de interés o placer en las actividades y los pasatiempo, dolor de cabeza, calambres o problemas digestivos sin una causa física aparente, o que no se alivian ni con tratamiento",
        },
        {
            id: 3,
            img: Breanch_grape,
            title: "Sintomas de transtornos alimentarios",
            descriptions: "Comer descontroladamente, hacer dietas rigurosas, provocarse vómitos, abuso de laxantes y diuréticos, problemas con la dentadura, depresiones detectables, ir al baño después de comer, menstruaciones irregulares y preocupación exagerada por el peso.",
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
            img: c8,
            
            
        },
        {
            id: 2,
            img: c3,
            
            
        },
        {
            id: 3,
            img: c4,
            
            
        },
        {
            id: 4,
            img: c5,
            
        },
        {
            id: 5,
            img: c6,
            
        },
        {
            id: 6,
            img: c7,
            
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
                <div className="secct-3">
                    <div className="secct-3-device" id="secct-3-device">
                        <img
                            src={logoSinFondo}
                            alt="phone"
                            className="secct-3-phone"
                        />
                    </div>
                    <div className="secct-3-container">
                        <h3 className="secct3-title">Bienvenido a Better U</h3>
                        <p className="secct3-subTitle">
                        El test de Better U te ayudará a arrojar luces sobre la 
                        existencia de un eventual problema psicológico para poder a orientarte a buscar 
                        ayuda cuando sea necesario.
                        </p>
                        <p className="secct3-subTitle">
                            
                        </p>
                    </div>
                </div>
                <div className="subLandingPage">
                    <img
                        src={back}
                        alt="background"
                        className="sub-background"
                    />
                    <div className="sub-filter-img">
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
                <div className="secct6">
                    <div className="secct-6-A">
                        <p className="secct-6-A-title">
                            ¿Por què es importante la salud mental?
                        </p>
                        
                        <br />
                        <span className="secct-6-B-des">
                        La salud mental tiene un impacto directo en nuestra forma de pensar, de sentir y de actuar. Determina cómo respondemos ante el estrés, cómo nos relacionamos con otras personas y cómo tomamos decisiones. 
                        <br></br>
                        Es por esto tan importante cuidar de ella como cuidamos de nuestro cuerpo físico.
                        <br></br>
                        La salud mental es importante en todas las etapas de la vida, desde la niñez y la adolescencia hasta la adultez y la vejez.
                        </span>
                    </div>

                    <div className="secct-6-A">
                        <p className="secct-6-A-title">
                            ¿Qué puede afectar mi salud mental?
                        </p>
                        
                        <br />
                        <span className="secct-6-B-des">
                        Hay diferentes factores que pueden afectar su salud mental, incluyendo:
                        <br></br>
                        -Factores biológicos, como los genes o la química del cerebro
                        <br></br>
                        -La inseguridad
                        <br></br>
                        -El rapido cambio social
                        <br></br>
                        -El estilo de vida, como la dieta, actividad física y consumo de sustancias
                        <br></br>
                        También puede verse afectada por factores y experiencias personales, la interacción social, los valores culturales, experiencias familiares, escolares y laborales.
                        </span>
                    </div>
                    
                    <div className="secct-6-B">
                        <h1 className="secct-6-B-title">¿Sabias que?</h1>
                        <Carousel object={vinedo}/>
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
