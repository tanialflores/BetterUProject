import React from "react";
import "./CardAddress.scss";
import { Skeleton } from "primereact/skeleton";
import Pencil from "../../../assets/icons/Pencil.svg";

const CardAddressSkeleton = () => {
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
                    <label className="Title-Address">
                        <Skeleton width="50px" height="16px"></Skeleton>
                    </label>
                    <label className="TextAddress"><Skeleton width="507px" height="28px"></Skeleton></label>
                </div>
                <div className="ButtonEdit">
                    <Skeleton width="27px" height="27px"></Skeleton>
                </div>
            </div>
            </>
        ))}
        </>
    )
}



export default CardAddressSkeleton;