import React from "react";

//Assets 🤣
import Alkimia from "../../../assets/icons/alkimiaB.png";
import AppleStore from "../../../assets/icons/appleStore.png";
import GoogleStore from "../../../assets/icons/googleStore.png";
import HappyPeo from "../../../assets/icons/happyPeo.jpeg";

import PhoneGrape from "../../../assets/icons/phoneGrape.png";
import PhoneHospe from "../../../assets/icons/phoneHospe.png";
import PhoneGastro from "../../../assets/icons/phoneGastro.png";
import PhoneAct from "../../../assets/icons/phoneAct.png";
import MockUp from "../../../assets//icons/mockup.png";

import "./DownloadApp.scss";
import "swiper/css";
import Button from "../../../components/atoms/Button/Button";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import Carrusel from "../../../components/organisms/Carrusel/Carrusel";

const DownloadApp = () => {
    const navigate = useNavigate();

    const places = [
        {
            id: 1,
            img: PhoneGrape,
            title: "Viñedos",
            description:
                "Encuentra los mejores viñedos mexicanos, reserva recorridos, catas y experiencias, o compra sus productos directamente desde la app.",
        },
        {
            id: 2,
            img: PhoneHospe,
            title: "Hospedaje",
            description:
                "Encuentra los mejores sitios para hospedarte: hoteles boutique, haciendas, glamping, cabañas, y mucho más. Elige el que más te guste y reserva desde la app",
        },
        {
            id: 3,
            img: PhoneGastro,
            title: "Gastronomía",
            description:
                "Los mejores restaurantes y bares se encuentran en ALKIMIA. Reserva desde la app experiencias gastronómicas, cenas maridaje y menús degustación de cocina de autor.",
        },
        {
            id: 4,
            img: PhoneAct,
            title: "Actividades",
            description:
                "Desde paseos a caballo, vuelos en globo, wine-spa, hiking y muchas actividades más que harán de tus visitas a viñedos una experiencia mágica e inolvidable",
        },
    ];

    return (
        <div className="DownloadApp">
            <div className="dsecct1">
                <div className="dseect-1-container-a">
                    <div className="dsecct-1-logo">
                        <img
                            src={Alkimia}
                            alt="Logo"
                            className="dsecct-1-alkimia"
                        />
                    </div>
                    <div className="dsecct-1-download">
                        <p className="dsecct-1-title">Descarga la app</p>
                    </div>
                    <div className="dsecct-1-descrip">
                        <p className="dsecct-1-sub">
                            Y comienza a catar México.
                        </p>
                        <p className="dsecct-1-text">
                            Alkimia es la primera app de enoturismo en México.
                            Descarga la app y reserva tus visitas a vinícolas,
                            descubre viñedos, gastronomía de autor, hoteles
                            únicos, experiencias y mucho más.
                        </p>
                    </div>
                    <div className="dsecct-1-container-store">
                        <img
                            src={AppleStore}
                            alt="Store"
                            className="dsecct-1-apple"
                        />
                        <img
                            src={GoogleStore}
                            alt="Store"
                            className="dsecct-1-google"
                        />
                    </div>
                </div>

                <div className="dseect-1-container-b">
                    <div>
                        <div className="dseect-1-phone">
                            <img src={MockUp} alt="MockUp" className="MockUp" />
                            <div className="dsecct-1-video">
                                <iframe
                                    className="dsecct-2-frame"
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/ambCOKKaC2k"
                                    title="Cómo cultivar Uvas para la elaboración de Vino - TvAgro por Juan Gonzalo Angel"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dsecct2">
                <img
                    src={HappyPeo}
                    alt="Happy People"
                    className="dsecct-2-happy"
                />
            </div>
            <div className="dsecct3">
                <div className="dsecct-3-container-title">
                    <p className="dsecct-3-title">
                        Descubre México a través del vino
                    </p>
                </div>
                <div className="dsecct-3-con">
                    <div className="dsecct-3-sub">
                        <div className="dsecct-3-descrip">
                            <span>
                                Un mundo entero de experiencias mágicas te está
                                esperando.
                            </span>
                            <br />
                            <span>
                                Comienza a vivir y descubrir un sin fin de
                                destinos, donde nuestros anfitriones ofrecen
                                experiencias únicas entorno al vino.
                            </span>
                        </div>
                        <div className="dsecct-3-descrip span-a">
                            Encontrarás recorridos en vinícolas, experiencias
                            gastronómicas, hospedaje en los mejores y más
                            peculiares hoteles boutique, experiencias y
                            actividades que harán match perfecto con tu pasión
                            por el vino.
                        </div>
                        <div className="dsecct-3-descrip span-a">
                            Reserva y copra desde la app, ¡y comienza a acumular
                            puntos!
                        </div>
                    </div>
                </div>
            </div>
            <div className="dsecct4">
                <Carrusel places={places} viewButton viewImg />
            </div>
            <div className="dsecct5">
                <div className="dsecct-5-sub">
                    <div className="dsecct-5-conta-title">
                        <p className="dsecct-5-title">
                            ¿Quieres ser anfitrión?
                        </p>
                    </div>
                    <div className="dsecct-5-desc">
                        Conviértete en anfitrión y deja que miles de alkimistas
                        visiten tu vinícola, hotel, restaurante, o cualquier
                        negocio que ofrezca experiencias y servicios
                        enoturísticos.
                    </div>
                    <p className="dsecct-5-desc marg">
                        Si quieres saber más a cerca de volverte anfitrión, da
                        click
                    </p>

                    <div className="dsecct-5-cont-btn">
                        <div className="dsecct-5-sub-btn">
                            <Button
                                btnTitle={"Saber más"}
                                className={"solid"}
                                onClick={() => navigate("/hosts")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;
