import React from "react";

//Styles
import "./WelcomeRegistration.scss";

//Assets
import Alkimia_bievenidafinal from "../../../../assets/icons/alkimia_bievenidafinal.png";

const WelcomeRegistration = () => {
    return (
        <div className="WelcomeRegistration">
            <div className="line-change"></div>
            <div className="welcome-body">
                <div className="wsecct1">
                    <p className="wsecct-1-title">¡Usuario creado con éxito!</p>
                    <p className="wsecct-1-descrip">
                        Bienvenido a Alkimia, esperamos que disfrutes tu
                        experiencia
                    </p>
                </div>
                <div className="wsecct2">
                    <img
                        src={Alkimia_bievenidafinal}
                        alt="Alkimia_bievenidafinal"
                        className="wsecct-2-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default WelcomeRegistration;
