import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ProgressBar } from "primereact/progressbar";

//Assets
import Home from "../../../assets/Auth/home.svg";
import Map from "../../../assets/Auth/localizacion.svg";
import Destino from "../../../assets/Auth/destino.svg";
import Experex from "../../../assets/Auth/experec.svg";
import Rute from "../../../assets/Auth/rute.svg";
import Car from "../../../assets/Auth/car.svg";
import Perfil from "../../../assets/Auth/perfil.svg";
import Corazon from "../../../assets/Auth/corazon.svg";
import Money from "../../../assets/Auth/money.svg";
import Cartera from "../../../assets/Auth/cartera.svg";
import Contact from "../../../assets/Auth/comentario.svg";
import Legals from "../../../assets/Auth/legales.svg";
import LogOut from "../../../assets/Auth/logout.svg";

import BackgroundImage from "../../../assets/Auth/bg1.png";
import Profile from "../../../assets/Auth/profile.png";
import Logo from "../../../assets/Auth/aklogo.png";
import Close from "../../../assets/icons/close.svg";

import "./SideBar.scss";

const AuthSiderBar = ({ AuthFunctions }) => {

    const navigate = useNavigate()

    const linksA = [
        { id: 1, link: "/home", title: "Home", icon: Home },
        { id: 2, link: "/map", title: "Mapa", icon: Map },
        { id: 3, link: "/destiny", title: "Destinos", icon: Destino },
        { id: 4, link: "/experiences", title: "Experiencias", icon: Experex },
        { id: 5, link: "/rute", title: "Arma tu ruta", icon: Rute },
        { id: 6, link: "/products", title: "Productos", icon: Car },
    ];

    const linksB = [
        { id: 7, link: "/profile", title: "Mi perfil", icon: Perfil },
        { id: 8, link: "/favorite", title: "Favoritos", icon: Corazon },
        { id: 9, link: "/purchases", title: "Mis compras", icon: Money },
        { id: 10, link: "/coinPurse", title: "Mi monedero", icon: Cartera },
    ];

    const linksC = [
        { id: 11, link: "/contact", title: "Contacto", icon: Contact },
        { id: 12, link: "/legals", title: "Legales", icon: Legals },
        {
            id: 13,
            link: "/logout",
            title: "Cerrar sesión",
            icon: LogOut,
        },
    ];

    const logOut = (e) => {
        e.preventDefault();
        localStorage.clear()
        navigate('/')
        AuthFunctions(false);
    };

    const sideLinkx = ({ isActive }) => {
        return {
            background: isActive
                ? "linear-gradient(120deg, #3a8dde 3%, #8331a7 47%, #df1683 100% )"
                : null,
        };
    };

    const closeSideBar = () => {
        document.querySelector(".AuthSider").classList.remove("openSideBar");
    };

    return (
        <>
            <aside className="SideBar">
                <div className="side-logo-container">
                    <img
                        src={BackgroundImage}
                        alt="Alkimia"
                        className="sideLogo"
                    />
                    <div className="v-sider-bg"></div>
                </div>
                <div className="v-side-profile">
                    <div className="v-side-img">
                        <img
                            src={Profile}
                            alt="Profile"
                            className="v-side-perfil"
                        />
                    </div>
                    <div className="v-side-container-name">
                        <p className="v-name">María Isabel Domínguez</p>
                        <ProgressBar
                            value={50}
                            showValue={false}
                            className="progressBar"
                        />
                    </div>
                    <div className="v-side-top-card">
                        <div className="v-card-text">
                            <p className="text-a">Club Alkimia</p>
                            <p className="text-b">
                                Conoce los beneficios esclusivos
                            </p>
                        </div>
                        <img src={Logo} alt="Logo" className="v-card-logo" />
                    </div>
                </div>
                
                <div className="container-links"> 
                    <div className="links">
                        <div className="linksA">
                            <p className="links-title">¡Viaja!</p>
                            {linksA.map(({ id, link, title, icon}, idx) => (
                                <NavLink
                                    to={link}
                                    className="xsideBar"
                                    style={sideLinkx}
                                    key={idx}
                                >
                                    <div className="xside-links">
                                        <div className="icons-xx">
                                            <img
                                                src={icon}
                                                alt="Icons"
                                                className="x-icons"
                                                id={id}
                                            />
                                        </div>
                                        <div className="xside-title">
                                            {title}
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                        <div className="linksB">
                            <p className="links-title">Mi cuenta</p>
                            {linksB.map(({ id, link, title, icon}, idx) => (
                                <NavLink
                                    to={link}
                                    className="xsideBar"
                                    style={sideLinkx}
                                    key={idx}
                                >
                                    <div className="xside-links">
                                        <div className="icons-xx">
                                            <img
                                                src={icon}
                                                alt="Icons"
                                                className="x-icons"
                                                id={id}
                                            />
                                        </div>
                                        <div className="xside-title">
                                            {title}
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                        <div className="linksC">
                            <p className="links-title">Información</p>
                            {linksC.map(({ id, link, title, icon}, idx) => (
                                <NavLink
                                    to={link}
                                    className="xsideBar"
                                    style={sideLinkx}
                                    onClick={link == "/logout" && logOut}
                                    key={idx}
                                >
                                    <div className="xside-links">
                                        <div className="icons-xx">
                                            <img
                                                src={icon}
                                                alt="Icons"
                                                className="x-icons"
                                                id={id}
                                            />
                                        </div>
                                        <div className="xside-title">
                                            {title}
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            <div className="divHiiden" onClick={() => closeSideBar()}>
                <img src={Close} alt="Close" className="closedfr" />
            </div>
        </>
    );
};

export default AuthSiderBar;
