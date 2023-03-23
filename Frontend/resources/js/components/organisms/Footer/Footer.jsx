import React from "react";

//styles 🤞
import "./Footer.scss";

//Assets
import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Whatsapp from "../../../assets/icons/whatsapp.svg";
import Youtube from "../../../assets/icons/youtube.svg";
import Contacto from '../../../assets/icons/contacto.svg'
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    const socialNetwork = [
        {
            id: 1,
            img: Instagram,
            alt: "Instagram",
        },
        {
            id: 2,
            img: Whatsapp,
            alt: "Whatsapp",
        },
        {
            id: 3,
            img: Facebook,
            alt: "Facebook",
        },
        {
            id: 4,
            img: Youtube,
            alt: "Youtube",
        },
    ];

    return (
        <div className="footer">

            <div className="footer-line"></div>

            <div className="footer-finish">
                <div className="footer-derechos-reservdos">
                    © {currentYear} BetterU. Todos los derechos reservados.
                </div>
            </div>
        </div>
    );
};

export default Footer;
