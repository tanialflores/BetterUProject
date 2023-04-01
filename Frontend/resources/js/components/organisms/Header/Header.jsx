import React, { useEffect, useState } from "react";

//Assets
import logoSinFondo from "../../../assets/guest/logoSinFondo.png"
import Menu from "../../../assets/icons/menu.svg";
import Close from "../../../assets/icons/close.svg";
import "./Header.scss";
import Button from "../../atoms/Button/Button";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

const Header = ({ auth }) => {
    // const auth = localStorage.getItem('auth')
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
            header.style.zIndex = "2";
        }
    }, [url]);

    const navLinks = ({ isActive }) => {
        return {
            color: isActive ? "#df1683" : null,
            borderBottom: isActive ? "2px solid #df1683" : null,
            paddingBottom: isActive ? "4px" : null
        };
    };

    return (
        <>
            <nav className="Header" id="HeaderColor">
                <div>
                    <NavLink to={"/"}>
                        <img
                            src={logoSinFondo}
                            alt="Logo"
                            className="Header-logo"
                        />
                    </NavLink>
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
                                    Tips
                                </NavLink>
                                <NavLink
                                    className="linkA"
                                    to="/blog"
                                    style={navLinks}
                                >
                                    Directorio
                                </NavLink>
                            </div>
                            <div className="side-btns">
                                <Button
                                    btnTitle={"Iniciar sesión"}
                                    className={
                                        url.pathname === "/"
                                            ? "border"
                                            : "border-color"
                                    }
                                    onClick={() => navigate("/start")}
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
                            Tips
                        </NavLink>
                        <NavLink className="linkA" to="blog" style={navLinks}>
                            Directorio
                        </NavLink>
                    </div>
                    <div className="h-return">
                        {!auth ?
                            <div className="ButtonLogin">
                                <Button
                                    btnTitle={"Ingresar"}
                                    height={"40px"}
                                    className={
                                        url.pathname === "/" ? "border" : "border-color"
                                    }
                                    onClick={() => navigate("/start")}
                                />
                            </div>
                            :
                        <>
                            <div className="BotonesAuth">
                                <div className="buttontest">
                                    <Button
                                        btnTitle={"Test"}
                                        height={"40px"}
                                        className={
                                            url.pathname === "/" ? "border2" : "border-color2"
                                        }
                                        onClick={() => navigate("/test")}
                                    />
                                </div>
                                <div className="ButtonClose">
                                    <NavLink to={'/'} onClick={() => {localStorage.setItem("auth", false)}}>
                                        <div className='loginBtn'>
                                            <div className='l_rig'>Cerrar sesión</div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                    
                </div>
            </nav>
        </>
    );
};

export default Header;
