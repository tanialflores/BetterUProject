import React from "react";
import "./AuthFooter.scss";

import Instagram from "../../../assets/icons/instagram.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Youtube from "../../../assets/icons/youtube.svg";
import Whatapp from "../../../assets/icons/whatsapp.svg";
import { NavLink } from "react-router-dom";

const AuthFooter = () => {
    const networks = [
        {
            id: 1,
            icon: Instagram,
        },
        {
            id: 2,
            icon: Facebook,
        },
        {
            id: 3,
            icon: Youtube,
        },
        {
            id: 4,
            icon: Whatapp,
        },
    ];

    return (
        <div className="AuthFooter">
            <div className="ctn-networks">
                {networks.map((n, idx) => {
                    return (
                        <div key={idx}>
                            <div className="ctn-nw">
                                <img src={n.icon} alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="cnt-links">
                <NavLink to="/contact">Contacto</NavLink>
                <NavLink to="/legals">Legales</NavLink>
            </div>
        </div>
    );
};

export default AuthFooter;
