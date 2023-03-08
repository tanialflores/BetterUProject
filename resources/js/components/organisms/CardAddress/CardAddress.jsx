import React from "react";
import "./CardAddress.scss";
import Pencil from "../../../assets/icons/Pencil.svg";
import { useNavigate } from "react-router-dom";

const CardAddress = () => {
    const navigate = useNavigate();
    const data = [
        {
            id: 1,
            address: "Dirección 1",
            textAddress: "Fray Antonio Alcalde Y Barriga 1931, La Guadalupana, 44220 Guadalajara, Jal.",
            image: Pencil,
        },
        {
            id: 2,
            address: "Casa",
            textAddress: "Fray Antonio Alcalde Y Barriga 1931, La Guadalupana, 44220 Guadalajara, Jal.",
            image: Pencil,
        },
    ]

    return(
        <>
        {data.map(({address, textAddress, image})=>(
            <>
            <div className="ContainerPlace">
                <div className="BothAddress">
                    <label className="Title-Address">{address}</label>
                    <label className="TextAddress">{textAddress}</label>
                </div>
                <div className="ButtonEdit" onClick={()=> navigate("/profile/edit-address")}>
                    <img src={image}></img>
                </div>
            </div>
            </>
        ))}
        </>
    )
}



export default CardAddress;