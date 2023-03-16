import React, { useState, useEffect } from "react";
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import Search from "../../../components/atoms/Search/Search";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";
import CardSmall from "./CardSmall/CardSmall";

//Assets
import Zas1 from "../../../assets/Auth/zas1.png";
import Zas2 from "../../../assets/Auth/zas2.png";
import Zas3 from "../../../assets/Auth/zas3.png";
import Zas4 from "../../../assets/Auth/zas4.png";
import Zas5 from "../../../assets/Auth/zas5.png";
import Zas6 from "../../../assets/Auth/zas6.png";
import Zas7 from "../../../assets/Auth/zas7.png";
import Zas8 from "../../../assets/Auth/zas8.png";
import Zas9 from "../../../assets/Auth/zas9.png";
import Zas10 from "../../../assets/Auth/zas10.png";
import Zas11 from "../../../assets/Auth/zas11.png";
import Zas12 from "../../../assets/Auth/zas12.png";
import Zas13 from "../../../assets/Auth/zas13.png";
import Zas14 from "../../../assets/Auth/zas14.png";
import Zas15 from "../../../assets/Auth/zas15.png";
import Zas16 from "../../../assets/Auth/zas16.png";
import Seal from '../../../assets/Auth/seal.svg'

import Sh1 from "../../../assets/Auth/sh1.png";
import Sh2 from "../../../assets/Auth/sh2.png";
import Sh3 from "../../../assets/Auth/sh3.png";
import Sh4 from "../../../assets/Auth/sh4.png";
import Sh5 from "../../../assets/Auth/sh5.png";
import Sh6 from "../../../assets/Auth/sh6.png";


//Styles 🦚
import "./Purchases.scss";
import { Skeleton } from "primereact/skeleton";

const PurchasesSkeleton = () => {

    const infoCard = [
        {
            id: 1,
            img: Zas1,
            descrip: "Ver las estrellas en el monte",
            date: "15/12/2020",
            type: "Cancelada",
            icon: Seal
        },
        {
            id: 2,
            img: Zas2,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: null,
            icon: Seal
        },
        {
            id: 3,
            img: Zas16,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: null,
            icon: Seal
        },
        {
            id: 4,
            img: Zas15,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: "Cancelada",
            icon: Seal
        },
        {
            id: 5,
            img: Zas14,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: "Reagendada",
            icon: Seal
        },
        {
            id: 6,
            img: Zas13,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: null,
            icon: Seal
        },
        {
            id: 7,
            img: Zas12,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: "Cancelada",
            icon: Seal
        },
        {
            id: 8,
            img: Zas11,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: null,
            icon: Seal
        },
        {
            id: 9,
            img: Zas10,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: "Reagendada",
            icon: Seal
        },
        {
            id: 4,
            img: Zas9,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: "Cancelada",
            icon: Seal
        },
        {
            id: 5,
            img: Zas8,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: "Reagendada",
            icon: Seal
        },
        {
            id: 6,
            img: Zas7,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: null,
            icon: Seal
        },
    ]
    const prodCard = [
        {
            id: 1,
            img: Zas1,
            descrip: "20 Productos",
            date: "15/12/2020",
            type: "Cancelada",
            icon: Seal
        },
        {
            id: 2,
            img: Zas2,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: null,
            icon: Seal
        },
        {
            id: 3,
            img: Zas16,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: null,
            icon: Seal
        },
        {
            id: 4,
            img: Zas15,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: "Cancelada",
            icon: Seal
        },
        {
            id: 5,
            img: Zas14,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: "Reagendada",
            icon: Seal
        },
        {
            id: 6,
            img: Zas13,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: null,
            icon: Seal
        },
        {
            id: 7,
            img: Zas12,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: "Cancelada",
            icon: Seal
        },
        {
            id: 8,
            img: Zas11,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: null,
            icon: Seal
        },
        {
            id: 9,
            img: Zas10,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: "Reagendada",
            icon: Seal
        },
        {
            id: 4,
            img: Zas9,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: "Cancelada",
            icon: Seal
        },
        {
            id: 5,
            img: Zas8,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: "Reagendada",
            icon: Seal
        },
        {
            id: 6,
            img: Zas7,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: null,
            icon: Seal
        },
    ]

    const [selectOptionA, setSelectOptionA] = useState(true)
    const [selectOptionB, setSelectOptionB] = useState(false)
    const [searchWord, setSearchWord] = useState("")
    const [valuesArray, setValuesArray] = useState(infoCard)

    useEffect(() => {
      const copyArray = [...infoCard]
      const array = copyArray.filter((item) => item.descrip.toLowerCase().includes(searchWord.toLowerCase()))
      if(array.length === 0 || searchWord === ""){
        return setValuesArray(infoCard)
      }

      return setValuesArray(array)

    }, [searchWord])
    

    

    return (
        <>
          
            <div className="AuthView">
                <div className="Purchases">
                    <div className="bg-vg">
                      <div className="bg-white1"></div>
                    </div>
                    <div className="cnt-txt"><Skeleton height="30px" width="250px"/></div>
                    <div className="cardBody">
                        <div className="bg-cardWhite">
                            <div className="optionesText">
                                <div style={{display: "flex", gap: 20}}>
                                    <Skeleton width="150px" height="36px"/>
                                    <Skeleton width="150px" height="36px"/>
                                </div>
                            </div>
                            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                <Skeleton width="50%" height="40px"/>
                            </div>
                            <div className="cards-info">
                                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 30}}>
                                    {[...Array(20)].map((_, i) => (
                                        <div style={{width: "30", height: 139, display: "flex", gap: 14, border: 1, borderStyle: "solid", borderColor: "#e1e1e1", borderRadius: 15, padding: 11}}>
                                            <Skeleton width="116px" height="116px"/>
                                            <div style={{display: "flex", flexDirection: "column", gap: 15}}>
                                                <div style={{display: "flex", flexDirection: "column", gap: 10}}>
                                                    <Skeleton width="150px" height="15px"/>
                                                    <Skeleton width="150px" height="15px"/>
                                                </div>
                                                <div style={{display: "flex", gap: 10}}>
                                                    <Skeleton width="66px" height="35px"/>
                                                    <Skeleton width="66px" height="35px"/>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AuthFooter />
            </div>
        </>
    );
};

export default PurchasesSkeleton;
