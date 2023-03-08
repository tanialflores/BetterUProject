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
            <div className="subFooter">
                <div className="footer-network">
                    <div>
                        <p className="footer-title">
                            Siguenos en nuestras redes
                        </p>
                        <div className="footer-socalNetwork">
                            {socialNetwork.map((network) => (
                                <div className="card-network" key={network.id}>
                                    <img
                                        src={network.img}
                                        alt={network.alt}
                                        className="networks"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="contact-as">
                        <p className="contactar-title">Contacto</p>
                        <button
                            className="contac-as-a"
                            onClick={() => navigate("contact")}
                        >
                            <img src={Contacto} alt="contacto" className="contacto-img"/>
                            Contactar
                        </button>
                    </div>
                </div>

                <div className="footer-secct2">
                    <h3 className="footer-comunity">
                        Únete a la comunidad alkimista
                    </h3>

                    <div className="input-btn">
                        <form action="" className="footer-form">
                            <input
                                type="email"
                                className="input-default"
                                placeholder="Correo electrónico"
                            />
                            <button className="footer-btn">Unirme</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-line"></div>

            <div className="footer-finish">
                <div className="footer-ter-Con">
                    <NavLink to="/terms-conditions" className="con-a">Términos y condiciones</NavLink>
                    <NavLink to="/politics-privacy" className="con-a">Políticas de privacidad</NavLink>
                    <NavLink to="/preguntas" className="con-a">Preguntas frecuentes</NavLink>
                </div>
                <div className="footer-derechos-reservdos">
                    © {currentYear} Alkimia Experiencias Mágicas S.A. de C.V. Todos los
                    derechos reservados.
                </div>
            </div>
        </div>
    );
};

export default Footer;
