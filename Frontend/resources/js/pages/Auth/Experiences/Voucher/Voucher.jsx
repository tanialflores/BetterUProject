import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import Back from "../../../../components/atoms/Back/Back";

import "./Voucher.scss";

//Assets
import Mark from '../../../../assets/Auth/marker.svg'
import PayMethods from "./PayMethods/PayMethods";
import { useState } from "react";
import CardBank from "../../../../components/atoms/CardBank/CardBank";
import ProcessingPay from "../../../../components/atoms/CardBank/ProcessingPay/ProcessingPay";
import ApplyPay from "../../../../components/atoms/ApplyPay/ApplyPay";
import { useEffect } from "react";
import { errorResponse, getAxiosGuest, postAxios, postAxiosGuest } from "../../../../utilities/Axios";
import { SubmitValidation } from "../../../../utilities/Validations";

const Voucher = () => {
    const { id } = useParams();
    const [valueState, setValueState] = useState()
    const [firstMethod, setFirstMethod] = useState(false)
    const [secondsMethod, setSecondsMethod] = useState(false)
    const [applySafe, setApplySafe] = useState(false)
    const [nextStep, setNextStep] = useState(false)
    const [item, setItem] = useState([])

    const [auth, setAuth] = useState(false)
    const token = localStorage.getItem('authToken')
    const navigate = useNavigate()

    const dtas = [
        {
            id: 1,
            date: "01/03/2022",
            numberBuy: 5664111545225,
            namePay: "Johnny Moody",
            details: [
                {
                    id: 1,
                    type: "Paseo matutino",
                    visit: "2 visitantes",
                    date: "01/03/2022",
                    hours: "08:30 - 09:30",
                    address: "Av Río Lerma 109, Hab la Romana, 54030 M...",
                    total: "$5,000"
                }
            ]
        }
    ]


    const doReservation = () => {
        const resThen = (res) => {
            setApplySafe(false)
            setNextStep(true)
            navigate("/")
        }
        
        if(auth){
            postAxios(`api/v1/mobile/payment/schedule/agenda/${id}`, resThen, errorResponse)
        }else{
            postAxiosGuest(`api/v1/experiences/schedule/agenda/payment/${id}`, resThen, errorResponse)
        }
    };

    useEffect(() => {
        if(nextStep){
            doReservation()
            
            setTimeout(function(){
                setNextStep(false)
            }, 2000);
        }
    },[nextStep])

    const getData = () => {
        // if (SubmitValidation(inputList, setInputList)) {
            const resThen = (res) => {
                setItem(res.data.data)
                // navigate(`/experiences/payment-method/${res.data.data.purchase_detail?.reserve_uuid}`)
            }
            getAxiosGuest(`api/v1/mobile/experiences/schedule/agenda/reserved/${id}`, resThen, errorResponse)
        // }
    };


    // useStates 👇
    useEffect(() => {
        if(token) setAuth(true)
    },[token])

    useEffect(()=>{
        getData()
    },[]);
    

    return (
        <div className="AuthView">
            <div className="Voucher-ui">
                <div className="bg-vg">
                    <div className="bg-white1"></div>
                </div>
                <div className="los-title">
                    <NavLink className={"navlink-l"} to={"/experiences"}>
                        <Back />
                    </NavLink>
                   
                </div>
                <div className="Voucher-cards">
                    <div className="container-seccts" >
                        <div className="secct1">
                            <label><b>Fecha de la compra: </b>{item?.purchase_date}</label>
                            <label><b>No. de compra: </b>{item?.purchase_number}</label>
                            <label><b>nombre del comprador: </b>{item?.client_name}</label>
                        </div>
                        <div className="secct2">
                            <b>Detalles de compra:</b>
                            <div className="inside-secct2" >
                                <label>{item?.purchase_detail?.name}</label>
                                <label>{item?.purchase_detail?.visitors} {item?.purchase_detail?.visitors>1 ? "visitantes" : "visitante"}</label>
                                <label>{item?.purchase_detail?.date}</label>
                                <label>{item?.purchase_detail?.hour_start} - {item?.purchase_detail?.hour_end}</label>
                                <div className="cnt-address">
                                    <img src={Mark} alt="" className="Mark"/>
                                    <label>{item?.purchase_detail?.address}</label>
                                </div>
                                <div className="total-price-hg">
                                    total: 
                                    <label className="price">{item?.purchase_detail?.total_text}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pickedMethod">
                        <div className="options-camp">
                            <PayMethods setValue={setValueState} setNewValue_A={setFirstMethod} setNewValue_B={setSecondsMethod}/>
                            {valueState === 1 &&
                                <CardBank firstMethod={firstMethod} secondsMethod={secondsMethod} setApplySafe={setApplySafe} onClick={()=>{}}/>
                            }
                            {valueState === 2 &&
                                <CardBank type={false} firstMethod={firstMethod} secondsMethod={secondsMethod} setApplySafe={setApplySafe} onClick={()=>{}}/>
                            }
                            {valueState === 3 &&
                                null
                            }
                            {valueState === 4 &&
                                null
                            }

                        </div>
                    </div>

                </div>
            </div>
            {nextStep && <ApplyPay />}
            {/*  */}
            {applySafe && <ProcessingPay setValue_={setApplySafe} setNextStep={setNextStep} time={25} speed={500}/>}
            <AuthFooter />
        </div>
    );
};

export default Voucher;
