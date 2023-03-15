import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

//Assets 😁
import autocuidado from "../../../assets/guest/autocuidado.jpg";
import Plus from "../../../assets/icons/plus.svg";
import Don from "../../../assets/icons/Don.jpeg";

//Styles 😊
import "./Hosts.scss";

//Components 👌
import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";
import TextArea from "../../../components/atoms/TeaxtArea/TextArea";
import Slide from "../../../components/atoms/Slide/Slide";
import {
    ColorValidation,
    SubmitValidation,
    UpdateValue,
} from "../../../utilities/Validations";

const Hosts = () => {
   
    const navigate = useNavigate();

    const [inputList, setInputList] = useState({
        email: { value: null, validationType: "email" },
        name: { value: null, validationType: "empty" },
        lastName: { value: null, validationType: "empty" },
        message: { value: null, validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
            if (propertyName === "email") {
                ColorValidation(propertyName, inputList, "email");
            }
        }
    }, [inputList]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (SubmitValidation(inputList, setInputList)) {
            navigate("/");
        }
    };

    const position = [
        {
            id: 1,
            pos: "-Vinícolas y viñedos",
        },
        {
            id: 2,
            pos: "-Restaurantes o experiencias gastronómicas",
        },
        {
            id: 3,
            pos: "-Hoteles Boutique, haciendas y spa's",
        },
        {
            id: 4,
            pos: "-Tour operadoras o agencias de viajes",
        },
        {
            id: 5,
            pos: "-Guías turísticos y someliers",
        },
        {
            id: 6,
            pos: "-Proveedores de actividades de turismo natural, aventura, etc.",
        },
    ];

    const questions = [
        {
            id: 1,
            question: "¿Cómo registro mi negocio?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            question: "¿Debo pagar para estar en ALKIMIA?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            question: "¿Cuál es el costo de los servicios o productos?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 4,
            question: "¿Cómo sé si alguien hizo una reserva?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 5,
            question: "¿Cómo puedo vender mis productos?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 6,
            question: "¿Quién administra la página de mi negocio?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 7,
            question: "¿Puedo elegir las fotos que aparecen en mi página?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 77,
            question: "¿Puedo elegir las fotos que aparecen en mi página?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 8,
            question: "¿Cómo añadir servicios o productos a mi página?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 9,
            question: "¿Qué pasa si necesito cancelar una reserva/venta?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 10,
            question: "¿Qué pasa si alguien cancela su reserva/compra?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 11,
            question: "¿Cómo se define el calendario de cada anfitrión?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 12,
            question: "¿En qué divisa se muestran los precios?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 13,
            question: "¿ALKIMIA me ayuda a crear mis experiencias?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 14,
            question: "¿Puedo ser anfitrión si sólo ofrezco catas?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 15,
            question: "¿Puedo ser anfitrión si doy tours guiados?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 16,
            question: "¿ALKIMIA hace la gestión de envío de productos?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 17,
            question: "¿Quién paga el envío de mis ventas online?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                        Un anfitrión es un proveedor de servicios y productos de
                        calidad contrastada que estén relacionados directamente
                        con el turismo enogastronómico en todo el territorio
                        mexicano. Ser anfitrión es formar parte de una comunidad
                        dedicada a atender las necesidades de nuestr@s
                        alkimistas, y guiarlos hacia las “experiencias mágicas”.
                    </p>
                    <p style={{ lineHeight: 2 }}>Decálogo del anfitrión:</p>
                    <div>
                        <ul className="resp-list">
                            <li className="repo-li">
                                Ponga en valor y promocione los productos
                                agroalimentarios de su región.
                            </li>
                            <li className="repo-li">
                                Abogue por la gastronomía local y tradicional.
                            </li>
                            <li className="repo-li">
                                Conozca y valore los recursos turísticos de su
                                entorno.
                            </li>
                            <li className="repo-li">
                                Sea un embajador activo de la cultura,
                                artesanías y tradiciones mexicanas.
                            </li>
                            <li className="repo-li">
                                Defienda los ODS en sus prácticas turísticas.
                            </li>
                            <li className="repo-li">
                                Ofrezca servicios de calidad.
                            </li>
                            <li className="repo-li">
                                Tenga la honestidad por bandera.
                            </li>
                            <li className="repo-li">
                                Posibilite experiencias inmersivas a los
                                viajeros.
                            </li>
                            <li className="repo-li">
                                Crea momentos mágicos para visitantes.
                            </li>
                            <li className="repo-li">
                                Que lo promocionado y lo ofertado sean
                                consecuentes en forma, tiempo y precio.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="hosts">
            <img src={autocuidado} alt="fondoA" className="hosts-fir" />
            <div className="host-secct1">
                <div className="host-secct-1-A">Tips</div>
                <div className="host-secct-1-B">
                    <p className="host-secct-body">
                        Consejos para el autocuidado
                    </p>
                    <p className="host-secct-B-body">
                        Un anfitrión de ALKIMIA es un proveedor de servicios
                        enoturísticos, ya sea desde una vinícola, hasta un
                        proveedor de experiencias entorno al vino.
                    </p>
                </div>
                <div className="host-secct-B-body host-secct-c">
                    <div className="host-secct-b-sub">
                        <p>Nuestros anfitriones pueden ser:</p>
                        {position.map((pos) => (
                            <span key={pos.id}>
                                {pos.pos} <br />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="first-div-sep"></div>
            <div className="host-secct2">
                <div>
                    <h4 className="host-secct-2-title">
                        ¿Quieres ser anfitrión?
                    </h4>
                    <p className="host-secct-2-body">
                        Conviértete en anfitrión y deja que miles de alkimistas
                        visiten tu vinícola, hotel, restaurante, o cualquier
                        negocio que ofrezca experiencias y servicios
                        enoturísticos.
                    </p>
                    <div className="host-secct-2-btn">
                        <Button
                            className={"border"}
                            btnTitle={"Unirme"}
                            onClick={() => navigate("register")}
                        />
                    </div>
                </div>
            </div>
            <div className="first-div-sep"></div>

            <div className="host-secct3">
                <div className="host-secct-3-photo">
                    <img src={Don} alt="fondo" className="host-secct-3-img" />
                </div>
                <div className="host-secct-3-B">
                    <h3 className="host-secct-3-title">
                        ¿Preguntas más comunes de Anfitriones?
                    </h3>

                    <div className="host-secct-3-scroll">
                        <Slide object={questions} />
                    </div>
                </div>
            </div>
            <div className="host-secct4">
                <form action="" className="host-secct-4-form">
                    <div>
                        <h1 className="host-secct-4-title">Soporte</h1>
                        <div className="host-secct-4-descrip">
                            ¿Necesitas ayuda o tienes alguna duda? Déjanos tus
                            datos y haznos la pregunta, en breve nos
                            comunicaremos contigo para darte una solución
                        </div>
                    </div>
                    <Input
                        title={"Email"}
                        placeholder={"Email"}
                        type={"email"}
                        id={"email"}
                        onChange={(e) =>
                            UpdateValue(e, "email", inputList, setInputList)
                        }
                    />
                    <Input
                        title={"Nombre"}
                        placeholder={"Nombre"}
                        type={"text"}
                        id={"name"}
                        onChange={(e) =>
                            UpdateValue(e, "name", inputList, setInputList)
                        }
                    />
                    <Input
                        title={"Apellido"}
                        placeholder={"Apellido"}
                        type={"text"}
                        id={"lastName"}
                        onChange={(e) =>
                            UpdateValue(e, "lastName", inputList, setInputList)
                        }
                    />
                    <TextArea
                        title={"Mensaje"}
                        placeholder={"Escribe aquí..."}
                        id={"message"}
                        onChange={(e) =>
                            UpdateValue(e, "message", inputList, setInputList)
                        }
                        viewTitle
                    />

                    <div className="host-secct-4-btn">
                        <Button
                            btnTitle={"Enviar"}
                            className={"solid"}
                            onClick={handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hosts;
