import React, { useEffect, useState } from "react";

//Assets
import Alkimia from "../../../assets/icons/Alkimia.png";
import AlkimiaColor from "../../../assets/icons/alkimiaColor.png";
import Menu from "../../../assets/icons/menu.svg";
import MenuColor from "../../../assets/icons/menuColor.svg";
import Close from "../../../assets/icons/close.svg";

import "./Header.scss";
import Button from "../../atoms/Button/Button";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

const HeaderSkeleton = ({ className }) => {
    const [openSide, setOpenSide] = useState(false);
    const navigate = useNavigate();

    const url = useLocation();

    useEffect(() => {
        var header = document.getElementById("HeaderColor");
        var side = document.getElementById("sideColor");
        var img = document.getElementById("icons");
        var close = document.getElementById("closed");

        if (url.pathname === "/") {
            header.style.background =
                "linear-gradient(120deg, #3a8dde 3%, #8331a7 47%, #df1683 100%)";
            side.style.background =
                "linear-gradient(-120deg, #3a8dde 3%, #8331a7 47%, #df1683 100%)";
            img.style.filter =
                "invert(100%) sepia(0%) saturate(7500%) hue-rotate(58deg) brightness(100%) contrast(106%);";
            close.style.filter =
                "invert(100%) sepia(0%) saturate(7500%) hue-rotate(58deg) brightness(100%) contrast(106%);";
        } else {
            header.style.background = "#faf7f7";
            side.style.background = "#faf7f7";
            img.style.filter =
                "invert(28%) sepia(90%) saturate(6529%) hue-rotate(316deg) brightness(90%) contrast(94%)";
            close.style.filter =
                "invert(28%) sepia(90%) saturate(6529%) hue-rotate(316deg) brightness(90%) contrast(94%)";
            header.style.boxShadow = "0 1px 25px rgba(0,0,0,0.2)";
            header.style.zIndex = "1";
        }
    }, [url]);

    const navLinks = ({ isActive }) => {
        return {
            color: isActive ? "#df1683" : null,
        };
    };

    return (
        <>
            <nav className="Header" id="HeaderColor">
                <div>
                    <img
                        src={url.pathname === "/" ? Alkimia : AlkimiaColor}
                        alt="Logo"
                        className="Header-logo"
                    />
                </div>

                <div className="navA">
                    <div onClick={() => setOpenSide(true)}>
                        <img
                            src={Menu}
                            alt="menu"
                            width={30}
                            height={30}
                            id="icons"
                        />
                    </div>
                    <div className={`HeadSide ${openSide && "OpenSide"}`}>
                        <div className="side-black"></div>
                        <div className="side-color" id="sideColor">
                            <div
                                className="Side-close"
                                onClick={() => setOpenSide(false)}
                            >
                                <img
                                    src={Close}
                                    alt="Close"
                                    width={30}
                                    height={30}
                                    id="closed"
                                />
                            </div>
                            <div className={url.pathname === "/" ? "Side-links" : "Side-white-links"}>
                                <NavLink
                                    className="linkA"
                                    to="/"
                                    style={navLinks}
                                >
                                    Inicio
                                </NavLink>
                                <NavLink
                                    className="linkA"
                                    to="/hosts"
                                    style={navLinks}
                                >
                                    Anfitriones
                                </NavLink>
                                <NavLink
                                    className="linkA"
                                    to="/blog"
                                    style={navLinks}
                                >
                                    Blog
                                </NavLink>
                            </div>
                            <div className="side-btns">
                                <Button
                                    btnTitle={"¡Comenzar ahora!"}
                                    className={
                                        url.pathname === "/"
                                            ? "border"
                                            : "border-color"
                                    }
                                    onClick={() => navigate("/start")}
                                />
                                <Button
                                    btnTitle={"Descargar la app"}
                                    className={
                                        url.pathname === "/"
                                            ? "border"
                                            : "border-color"
                                    }
                                    onClick={() => navigate("downloadApp")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-right">
                    <div
                        className={
                            url.pathname === "/"
                                ? "enlaces-header"
                                : "newEnlaces-header"
                        }
                    >
                        <NavLink className="linkA" to="/" style={navLinks}>
                            Inicio
                        </NavLink>
                        <NavLink className="linkA" to="/hosts" style={navLinks}>
                            Anfitriones
                        </NavLink>
                        <NavLink className="linkA" to="blog" style={navLinks}>
                            Blog
                        </NavLink>
                    </div>
                    <div className="h-return">
                        <Button
                            btnTitle={"¡Comenzar ahora!"}
                            height={"40px"}
                            className={
                                url.pathname === "/" ? "border" : "border-color"
                            }
                            onClick={() => navigate("/start")}
                        />
                    </div>
                    <div className="h-return">
                        <Button
                            btnTitle={"Descargar la app"}
                            height={"40px"}
                            className={
                                url.pathname === "/" ? "border" : "border-color"
                            }
                            onClick={() => navigate("downloadApp")}
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderSkeleton;
