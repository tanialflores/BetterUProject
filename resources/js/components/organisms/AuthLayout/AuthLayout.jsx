import React, { useState } from "react";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthSiderBar from "../AuthSiderBar/AuthSiderBar";
import Close from "../../../assets/Auth/ecx.svg";

import { Slider } from "primereact/slider";

//Assets
import Globo from "../../../assets/icons/test/globo-aerostatico.svg";
import Gastronomia from "../../../assets/icons/test/Combined Shape (5).svg";
import F1 from "../../../assets/icons/f1.svg";
import F2 from "../../../assets/icons/f2.svg";
import F3 from "../../../assets/icons/f3.svg";
import F4 from "../../../assets/icons/f4.svg";
import F5 from "../../../assets/icons/f5.svg";
import F6 from "../../../assets/icons/f6.svg";
import F7 from "../../../assets/icons/f7.svg";
import F8 from "../../../assets/icons/f8.svg";
import F9 from "../../../assets/icons/f9.svg";
import F10 from "../../../assets/icons/f10.svg";
import F11 from "../../../assets/icons/f11.svg";
import F12 from "../../../assets/icons/f12.svg";
import F13 from "../../../assets/icons/f13.svg";
import F14 from "../../../assets/icons/f14.svg";
import F15 from "../../../assets/icons/f15.svg";
import F16 from "../../../assets/icons/f16.svg";

import "./AuthLayout.scss";
import Button from "../../atoms/Button/Button";

const AuthLayout = ({ children, AuthFunctions }) => {
    const [close, setClose] = useState(false);
    const [value, setValue] = useState();

    const filIcons = [
        {
            id: 2,
            icon: F1,
            text: "Tren",
        },
        {
            id: 3,
            icon: F2,
            text: "Avión",
        },
        {
            id: 4,
            icon: F3,
            text: "Motocicleta",
        },
        {
            id: 5,
            icon: F4,
            text: "Museos",
        },
        {
            id: 6,
            icon: F5,
            text: "Playas",
        },
        {
            id: 7,
            icon: F6,
            text: "Hoteles",
        },
        {
            id: 8,
            icon: F7,
            text: "Camping",
        },
        {
            id: 9,
            icon: F8,
            text: "Viaje a pie",
        },
    ];

    const filIcon2 = [
        {
            id: 10,
            icon: F9,
            text: "Postres",
        },
        {
            id: 11,
            icon: F10,
            text: "Horneado",
        },
        {
            id: 12,
            icon: F11,
            text: "Casera",
        },
        {
            id: 13,
            icon: F12,
            text: "Noodles",
        },
        {
            id: 14,
            icon: F13,
            text: "Express",
        },
        {
            id: 15,
            icon: F14,
            text: "Panadería",
        },
        {
            id: 16,
            icon: F15,
            text: "Oriental",
        },
        {
            id: 17,
            icon: F16,
            text: "Empanada",
        },
    ]

    const closeSlider = () => {
        document.querySelector(".container-black").classList.remove("closeSider");
    };

    return (
        <div className="AuthLayout">
            {children}
            <div className="AuthSider">
                <AuthSiderBar AuthFunctions={AuthFunctions} />
            </div>
            {/* <div className="AuthHeader">
                <AuthHeader/>
            </div> */}

            <div className="container-black">
                <div className="container-white">
                    <div className="wsecct1">
                        <div className="wsecct-1">
                            <label className="wsecct-1-label">Filtros</label>
                            <div
                                className="wsecct-1-img"
                                onClick={() => closeSlider()}
                            >
                                <img src={Close} alt="" />
                            </div>
                        </div>
                        <div className="wsecct-1-parte2">
                            <label className="part2-label">Distancia</label>
                            <div>
                                <Slider
                                    value={value}
                                    onChange={(e) => setValue(e.value)}
                                />
                            </div>
                            <div className="part-2-cnt">
                                <label>200 km</label>
                                <label>0 km</label>
                            </div>
                        </div>
                    </div>
                    <div className="wsecct2">
                        <label className="wsecct-1-title">Categorías</label>
                        <div className="wsecct-2-part1">
                            <div className="part-1-click">
                                <div className="part-1-cnt-img">
                                    <img
                                        src={Globo}
                                        alt=""
                                        className="part-icon"
                                    />
                                </div>
                                <label className="part-1-turis">Turismo</label>
                            </div>
                            <div className="part-1-array">
                                {filIcons.map((item, idx) => {
                                    return (
                                        <div className="array-ctn" key={idx}>
                                            <div className="array-iconss">
                                                <img src={item.icon} alt="" />
                                            </div>
                                            <label className="array-txt">
                                                {item.text}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="part-1-click click-2">
                                <div className="part-1-cnt-img">
                                    <img
                                        src={Gastronomia}
                                        alt=""
                                        className="part-icon"
                                    />
                                </div>
                                <label className="part-1-turis">
                                    Gastronomía
                                </label>
                            </div>

                            <div className="part-1-array">
                                {filIcon2.map((item, idx) => {
                                    return (
                                        <div className="array-ctn" key={idx}>
                                            <div className="array-iconss">
                                                <img src={item.icon} alt="" />
                                            </div>
                                            <label className="array-txt">
                                                {item.text}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="ctn-btn">

                            <Button btnTitle={"Filtrar"} className={"degradado"}/>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
