import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ColorValidation, SubmitValidation, UpdateValue } from '../../../utilities/Validations';
import { SuccesSimple } from '../Modales/SweetAlert';

import "./CardBank.scss"
//Assets
import Paypal_ from '../../../assets/Auth/paypal.png'
import Bank from '../../../assets/Auth/bank.png'
import InputNumber from '../InputNumber/InputNumber';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';
import InputPassword from '../InputPassword/InputPassword';
import ProcessingPay from './ProcessingPay/ProcessingPay';

const CardBank = ({className, type=true, NextNavigate, firstMethod, secondsMethod, onClick, setApplySafe}) => {


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
                onClick()
                setApplySafe(true)
            }
        }
        else{
            if (SubmitValidation(inputList, setInputList)) {
                onClick()
                setApplySafe(true)
            }
        }
    };



  return (
    <div className='container-rr'>
    {type ?
        (    <div className={`CardBank`}>
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
                        <div className='inside-ao'>
                            Fecha de expiración
                            <div className='inside-b'>
                                <Select optionLabel='label' placeholder={"Día"} className={"op-1"} classNameSelect="op-p" value={inputList.dateOne.value} options={options_a} id={"dateOne"} onChange={(e) => UpdateValue(e, "dateOne", inputList, setInputList)}/>
                                <Select optionLabel='label' placeholder={"Año"} className={"op-1"} classNameSelect="op-p" value={inputList.dateTwo.value} options={options_b} id={"dateTwo"} onChange={(e) => UpdateValue(e, "dateTwo", inputList, setInputList)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        ):
        (   <div className="Paypal-o">
                <div className="inside4-a">
                    <img src={Paypal_} alt="" className="py-a" />
                </div>
                <div className="cnt-inpuT">
                    <Input type={"email"} title={"Correo electrónico"} value={inputList.email.value} id={"email"} onChange={(e) => UpdateValue(e, "email", inputList, setInputList)}/>
                    <InputPassword title={"Contraseña"} id="password" value={inputList.password.value} onChange={(e) => UpdateValue(e, "password", inputList, setInputList)}/>  
                    <Button btnTitle="Agregar" className={"degradado"} onClick={() => handleSubmitCard("seconds")}/>
                
                </div>
            </div>
        )}
    </div>
  )
}

export default CardBank