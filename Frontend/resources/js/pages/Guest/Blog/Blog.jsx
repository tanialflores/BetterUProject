import React, { useState } from "react";

//Assets
import Puntos from "../../../assets/icons/puntos.png";
import Heart from "../../../assets/icons/heart.svg";
import directorio from "../../../assets/guest/directorio.png";
import directorio2 from "../../../assets/guest/directorio2.jpg";
import directorio3 from "../../../assets/guest/directorio3.jpg";

//Styles 😂
import "./Blog.scss";
import CardViewShort from "../../../components/organisms/CardViewShort/CardViewShort";

const Blog = () => {
    const [openShare, setOpenShare] = useState(false);

    const [cardsShort, setCardsShort] = useState([
        {
            id: 1,
            name: "https://lineauam.uam.mx",
            date: "55 58 04 64 44 • 55 58 04 48 79 ",
            icon: Puntos,
            title: "Línea UAM de Apoyo Psicológico por teléfono",
            icon2: Heart,
            bg: directorio,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 2,
            name: "https://salme.jalisco.gob.mx/1817",
            date: "33 25 04 20 20   • 800 227 47 47  ",
            icon: Puntos,
            title: "Línea de Atención en Crisis, Guadalajara, Jalisco",
            icon2: Heart,
            bg: directorio2,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 3,
            name: "",
            date: "Tel. 10 58 52 00 ext. 34 280",
            icon: Puntos,
            title: "Apoyo Psicológico a la Red Universitaria de la UdeG",
            icon2: Heart,
            bg: directorio3,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 4,
            name: "618 164 52 82",
            date: "Boulevard Dolores del Río #303, Durango, Dgo",
            icon: Puntos,
            title: "Mstra. Ilse Mariel Ríos Miramontes. Centro Psicopedagógico CRECEMOS ",
            icon2: Heart,
            bg: directorio2,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 5,
            name: "618 178 70 22",
            date: "Calle Zarco, zona centro, cd. Durango, Dgo",
            icon: Puntos,
            title: "Lic. Gina Ivette Arrieta Vargas",
            icon2: Heart,
            bg: directorio3,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 6,
            name: "6182992289",
            date: "Boulevard Guadiana #501, Fraccionamiento Ciudad Universitaria, C.P. 34120, Durango, Dgo.",
            icon: Puntos,
            title: "Facultad de psicología y Terapia de la Comunicación Humana (Centro de Servicio a la comunidad)",
            icon2: Heart,
            bg: directorio,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
    ]);

    return (
        <div className="Blog">
            <div className="secct1">
                <h1 className="secct-1-title">Directorio de especialistas</h1>
            </div>
            <div className="seconds-cards">
                <CardViewShort elements={cardsShort} setElements={setCardsShort} />
            </div>
        </div>
    );
};

export default Blog;
