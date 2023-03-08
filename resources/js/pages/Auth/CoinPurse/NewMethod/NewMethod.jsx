import React from "react";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";

//Styles
import "./NewMethod.scss";

//Asstes
import Card_f from '../../../../assets/Auth/pago-con-tarjeta.svg'
import Paypal from '../../../../assets/Auth/Image.png'
import Paypal_ from '../../../../assets/Auth/paypal.png'
import Bank from '../../../../assets/Auth/bank.png'
import Button from "../../../../components/atoms/Button/Button";
import InputNumber from "../../../../components/atoms/InputNumber/InputNumber";
import Input from "../../../../components/atoms/Input/Input";
import Select from "../../../../components/atoms/Select/Select";
import { useState } from "react";
import { useEffect } from "react";
import { SuccesSimple } from '../../../../components/atoms/Modales/SweetAlert'
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../../utilities/Validations";
import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";
import { NavLink, useNavigate } from "react-router-dom";
import Back from "../../../../components/atoms/Back/Back";

const NewMethod = () => {

    const [inputList, setInputList] = useState({
        numberCard: { value: null, validationType: "empty" },
        name: { value: null, validationType: "empty" },
        cvv: { value: null, validationType: "empty" },
        dateOne: { value: null, validationType: "empty" },
        dateTwo: { value: null, validationType: "empty" },
        email: { value: null, validationType: "email" },
        password: { value: null, validationType: "empty" },
    });

    const navigate = useNavigate()
    const [firstMethod, setFirstMethod] = useState(false)
    const [secondsMethod, setSecondsMethod] = useState(false)

    const options_a = [
        { label: '01', value: '01' },
        { label: '02', value: '02' },
        { label: '03', value: '03' },
        { label: '04', value: '04' },
        { label: '05', value: '05' },
        { label: '06', value: '06' },
    ]

    const options_b = [
        { label: '21', value: '21' },
        { label: '22', value: '22' },
        { label: '23', value: '23' },
        { label: '24', value: '24' },
        { label: '25', value: '25' },
        { label: '26', value: '26' },
    ]

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
        }
    }, [inputList]);


    useEffect(() => {
        if(firstMethod){
            setInputList({
                ...inputList,
                numberCard: { value: null, validationType: "empty" },
                name: { value: null, validationType: "empty" },
                cvv: { value: null, validationType: "empty" },
                dateOne: { value: null, validationType: "empty" },
                dateTwo: { value: null, validationType: "empty" },
                email: { value: null, validationType: "optional" },
                password: { value: null, validationType: "optional"},

            })
        }
        
        if(secondsMethod){
            setInputList({
                ...inputList,
                email: { value: null, validationType: "empty" },
                password: { value: null, validationType: "empty"},
                numberCard: { value: null, validationType: "optional" },
                name: { value: null, validationType: "optional" },
                cvv: { value: null, validationType: "optional" },
                dateOne: { value: null, validationType: "optional" },
                dateTwo: { value: null, validationType: "optional" },

            })
        }
    }, [firstMethod, secondsMethod])
    


    const handleSubmitCard = async (option) => {
        if(option == "first"){
            if (SubmitValidation(inputList, setInputList)) {
                const value_ = await SuccesSimple(3000, "¡Método agregado con exito!")
                if(value_){
                    navigate("/coinPurse")
                }
            }
        }
        else{
            if (SubmitValidation(inputList, setInputList)) {
                const value_ = await SuccesSimple(3000, "¡Método agregado con éxito!")
                if(value_){
                    navigate("/coinPurse")
                }
            }
        }
    };

    const hanaldeChange = (type) => {
        console.log("Entre aqui", type)
        if(type == "first"){
            setFirstMethod(true)
            setSecondsMethod(false)
        }
        else{
            setSecondsMethod(true); 
            setFirstMethod(false)
        }
    }

    return (
        <>
            <AuthHeader />
            <div className="AuthView">
                <div className="NewMethod-ui">
                    <div className="bg-vg">
                        <div className="bg-white1"></div>
                    </div>
                    <div className="los-title">
                        <NavLink className={"navlink-l"} to={"/coinPurse"}><Back/></NavLink>
                        Nuevo método de pago</div>
                    <div className={`cnt-cards ${firstMethod && "n-cntCard"} ${secondsMethod && "n-cntCard"}`}>
                        <div className={`cnt-secc1_secc2 ${firstMethod && "update-cnt"} ${secondsMethod && "update-cnt"}`}>
                            <label className="secct1">Selecciona un método de pago</label>
                            <div className="secct2">
                                <div className={`block ${firstMethod && "firstOption"}`} onClick={() => hanaldeChange("first")}>
                                    <div className="card-pay">
                                        <img src={Card_f} alt="" />
                                    </div>
                                    <label className="label-p">Tarjeta de crédito/débito</label>
                                </div>
                                <div className={`block ${secondsMethod && "firstOption"}`} onClick={() => hanaldeChange("seconds")}>
                                    <div className="card-cnt">
                                        <img src={Paypal} alt="" className="p_pay"/>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        {firstMethod && 
                            <div className={`secct3 ${firstMethod && "disable3"}`}>
                                <div className="inside-a">
                                    <div className="cnt-bank">
                                        <img src={Bank} alt="" className="bank" />
                                    </div>
                                    <Button btnTitle={"Agregar"} className="degradado" onClick={() => handleSubmitCard("first")}/>
                                </div>
                                <div className="inside-b">
                                    <InputNumber title={"Número de tarjeta"} placeholder={"0000 0000 0000 0000"} value={inputList.numberCard?.value} id={"numberCard"} onChange={(e) => e.target.value.length < 17 && UpdateValue(e, "numberCard", inputList, setInputList)}/>
                                    <Input title={"Nombre del propietario"} placeholder={"Nombre completo"} value={inputList.name?.value} id={"name"} onChange={(e) => UpdateValue(e, "name", inputList, setInputList)}/>
                                    <div className="shortField">
                                        <InputNumber className={"input-num"} placeholder={"000"} title={"CVV"} value={inputList.cvv?.value} id={"cvv"} onChange={(e) => e.target.value.length < 4 && UpdateValue(e, "cvv", inputList, setInputList)}/>
                                        <div className='inside-a'>
                                            Fecha de expiración
                                            <div className='inside-b'>
                                                <Select optionLabel='label' placeholder={"Día"} className={"op-1"} classNameSelect="op-p" value={inputList.dateOne.value} options={options_a} id={"dateOne"} onChange={(e) => UpdateValue(e, "dateOne", inputList, setInputList)}/>
                                                <Select optionLabel='label' placeholder={"Año"} className={"op-1"} classNameSelect="op-p" value={inputList.dateTwo.value} options={options_b} id={"dateTwo"} onChange={(e) => UpdateValue(e, "dateTwo", inputList, setInputList)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {secondsMethod &&
                            <div className="secct4">
                                <div className="inside4-a">
                                    <img src={Paypal_} alt="" className="py-a" />
                                </div>
                                <div className="cnt-inpuT">
                                    <Input type={"email"} title={"Correo electrónico"} value={inputList.email.value} id={"email"} onChange={(e) => UpdateValue(e, "email", inputList, setInputList)}/>
                                    <InputPassword title={"Contraseña"} id="password" value={inputList.password.value} onChange={(e) => UpdateValue(e, "password", inputList, setInputList)}/>  
                                    <Button btnTitle="Agregar" className={"degradado"} onClick={() => handleSubmitCard("seconds")}/>
                                
                                </div>

                            </div>
                        }
                        
                    </div>
                </div>
                <AuthFooter />
            </div>
        </>
    );
};

export default NewMethod;
