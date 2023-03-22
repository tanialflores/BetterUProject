import React, { useState } from "react";

//Assets
import Puntos from "../../../assets/icons/puntos.png";
import Heart from "../../../assets/icons/heart.svg";
import directorio from "../../../assets/guest/directorio.png";
import directorio2 from "../../../assets/guest/directorio2.jpg";
import directorio3 from "../../../assets/guest/directorio3.jpg";
import BgCampeche from "../../../assets/icons/bgCampeche.jpg";
import Maridar from "../../../assets/icons/maridar.png";

//Styles 😂
import "./Blog.scss";
import CardViewShort from "../../../components/organisms/CardViewShort/CardViewShort";

const Blog = () => {
    const [openShare, setOpenShare] = useState(false);
    const [cards, setCards] = useState([
        {
            id: 1,
            name: "Alkuimia",
            date: "25 mar • 25 mar",
            icon: Puntos,
            title: "Conoce México a través de sus Quesos",
            icon2: Heart,
            bg: "",
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 2,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            // emogi: "✒",
            icon: Puntos,
            title: "Guía de viaje por Campeche",
            icon2: Heart,
            bg: BgCampeche,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 3,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            // emogi: "✒",
            icon: Puntos,
            title: "5 vinos para maridar con mariscos",
            icon2: Heart,
            bg: Maridar,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
    ]);

    const [cardsShort, setCardsShort] = useState([
        {
            id: 1,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            icon: Puntos,
            title: "Conoce México a través de sus Quesos",
            icon2: Heart,
            bg: directorio,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 2,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            icon: Puntos,
            title: "Guía de viaje por Campeche",
            icon2: Heart,
            bg: directorio2,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 3,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            icon: Puntos,
            title: "5 vinos para maridar con mariscos",
            icon2: Heart,
            bg: directorio3,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 4,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            icon: Puntos,
            title: "5 vinos para maridar con mariscos",
            icon2: Heart,
            bg: directorio2,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 5,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            icon: Puntos,
            title: "5 vinos para maridar con mariscos",
            icon2: Heart,
            bg: directorio3,
            bgTrap: "rgba(0, 0, 0, 0.4)",
            liked: false,
        },
        {
            id: 6,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            icon: Puntos,
            title: "5 vinos para maridar con mariscos",
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
