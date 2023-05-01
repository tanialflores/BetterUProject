import React from "react";

//styles 🤞
import "./Footer.scss";

//Assets
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

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
