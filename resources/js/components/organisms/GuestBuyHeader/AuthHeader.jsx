import React, { useState } from "react";

//Styles
import "./AuthHeader.scss";

//Assets
import Notification from "../../../assets/Auth/notif.svg";
import Perfil from "../../../assets/Auth/perfilHeader.svg";
import Menu from "../../../assets/icons/menuColor.svg";
import Shop from '../../../assets/Auth/carritoShop.png'


const AuthHeader = ({seeCar = false}) => {
    // const [openSider, setOpenSider] = useState(false);

    const openSide = () => {
        document.querySelector(".AuthSider").classList.add("openSideBar");
    };
    return (
        <div className="AuthHeader">
            <div className="circle hidden" onClick={() => openSide()}>
                <img src={Menu} alt="Menu" className="Menu" />
            </div>
            <div className="aucont">
                {seeCar &&
                    <div className="circle">
                        <img src={Shop} alt="Perfil" className="iconp" />
                    </div>
                }
                <div className="circle">
                    <img
                        src={Notification}
                        alt="Notificacionn"
                        className="icon"
                    />
                </div>
                <div className="circle">
                    <img src={Perfil} alt="Perfil" className="iconp" />
                </div>
            </div>

           
        </div>
    );
};

export default AuthHeader;
