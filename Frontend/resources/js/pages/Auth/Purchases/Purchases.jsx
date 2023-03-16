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
import { Navigate, useNavigate } from "react-router-dom";

const Purchases = () => {
    const navigate = useNavigate()
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
            type: "Entregado",
            icon: Seal
        },
        {
            id: 3,
            img: Zas16,
            descrip: "Paseo matutino en el bosque",
            date: "15/12/2020",
            type: "Entregado",
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
            type: "Entregado",
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
            type: "Entregado",
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
            type: "Entregado",
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
            type: "Pendiente",
            icon: Seal
        },
        {
            id: 3,
            img: Zas16,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: "Entregado",
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
            type: "Pendiente",
            icon: Seal
        },
        {
            id: 6,
            img: Zas13,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: "Entregado",
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
            type: "Entregado",
            icon: Seal
        },
        {
            id: 9,
            img: Zas10,
            descrip: "5 Productos",
            date: "15/12/2020",
            type: "Cancelada",
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
            type: "Entregado",
            icon: Seal
        },
    ]

    

    const [selectOptionA, setSelectOptionA] = useState(true)
    const [selectOptionB, setSelectOptionB] = useState(false)
    const [searchWord, setSearchWord] = useState("")
    const [valuesArray, setValuesArray] = useState(infoCard)
    const [valuesProdCard, setValuesProdCard] = useState(prodCard)
    
    const searchShopping = (arrayOriginal = [], value) => {
        const copyArray = [...arrayOriginal]
        const array = copyArray.filter((item) => item.descrip.toLowerCase().includes(value.toLowerCase()))
        if(array.length === 0 || value === ""){
            return arrayOriginal
        }
        return array
    } 
    

    return (
        <>
          
            <div className="AuthView">
                <div className="Purchases">
                    <div className="bg-vg">
                      <div className="bg-white1"></div>
                    </div>
                    <div className="cnt-txt">Mis compras</div>
                    <div className="cardBody">
                        <div className="bg-cardWhite">
                            <div className="optionesText">
                                <button className={`optionActive ${selectOptionA && "activeOption"}`} onClick={() => {setSelectOptionA(true), setSelectOptionB(false)}}>Experiencias</button>
                                <button className={`optionActive ${selectOptionB && "activeOption"}`} onClick={() => {setSelectOptionA(false), setSelectOptionB(true)}}>Productos</button>
                            </div>
                            <Search placeholder={"Buscar"} className="inp-class" onChange={(e) => {selectOptionA ? setValuesArray(searchShopping(infoCard, e.target.value)) : setValuesProdCard(searchShopping(prodCard, e.target.value))}}/>
                            <div className="cards-info">
                                {selectOptionA ? <CardSmall arrayInfo={valuesArray} experiences type={"experiences"}/> : <CardSmall arrayInfo={valuesProdCard}/> }
                            </div>
                        </div>
                    </div>
                </div>
                <AuthFooter />
            </div>
        </>
    );
};

export default Purchases;
