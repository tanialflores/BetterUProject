import React from "react";
import {useNavigate } from "react-router-dom";
import Back from "../../../../components/atoms/Back/Back";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import "./Address.scss";
import CardAddress from "../../../../components/organisms/CardAddress/CardAddress";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";

const Address = () => {
    const navigate = useNavigate();
    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="Address">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="TitleAddress">
                    <Back
                    className="Return" onClick={()=> navigate("/profile")}/>
                    <p>Direcciones</p>
                </div>
                <div className="Address-Container">
                    <div className="Comp-Card">
                        <CardAddress/>
                    </div>
                   <div className="NewAddress" onClick={()=> navigate("/profile/new-address")}>Nueva dirección</div>
                </div>
            </div>
            <AuthFooter/>
        </div>
        </>
    );
}

export default Address;