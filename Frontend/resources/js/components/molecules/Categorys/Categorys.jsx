import React from "react";

//Styles 🤣
import "./Categorys.scss";

// filter: invert(26%) sepia(73%) saturate(7495%) hue-rotate(316deg) brightness(90%) contrast(93%);

//Assets 🦚

import Vinedos from "../../../assets/icons/test/Combined Shape (1).svg";
import Productos from "../../../assets/icons/test/Combined Shape (2).svg";
import Vino from "../../../assets/icons/test/Combined Shape (4).svg";
import EnoTours from "../../../assets/icons/test/Combined Shape (3).svg";
import Gastronomia from "../../../assets/icons/test/Combined Shape (5).svg";
import Naturaleza from "../../../assets/icons/test/Combined Shape (6).svg";
import Welness from "../../../assets/icons/test/Combined Shape.svg";
import Hospedaje from "../../../assets/icons/test/034-bed.svg";
import Globo from "../../../assets/icons/test/globo-aerostatico.svg";

const Categorys = ({ ChangeColor=false, filterItems=false}) => {
    const categorys = [
        {
            id: 1,
            label: "Viñedos",
            icon: Vinedos,
        },
        {
            id: 2,
            label: "Productos",
            icon: Productos,
        },
        {
            id: 3,
            label: "Cartas de vino",
            icon: Vino,
        },
        {
            id: 4,
            label: "Eno-Tours",
            icon: EnoTours,
        },
        {
            id: 5,
            label: "Gastronomía",
            icon: Gastronomia,
        },
        {
            id: 6,
            label: "Naturaleza",
            icon: Naturaleza,
        },
        {
            id: 7,
            label: "Welness",
            icon: Welness,
        },
        {
            id: 8,
            label: "Hospedaje",
            icon: Hospedaje,
        },
        {
            id: 9,
            label: "Experiencias",
            icon: Globo,
        },
    ];

    return (
        <div className="Categorys">
            {categorys.map((item) => (
                <div className="cty-div">
                    <div className={`div-color ${ChangeColor && "Change-white"}`}>
                        <img src={item.icon} alt="" className={`item-icons ${filterItems && "filter-color"}`} />
                    </div>
                    <label className="item-labels">{item.label}</label>
                </div>
            ))}
        </div>
    );
};

export default Categorys;
