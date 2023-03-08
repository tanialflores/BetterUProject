import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../../../../components/atoms/Button/Button';
import Input from '../../../../../components/atoms/Input/Input'
import InputNumber from '../../../../../components/atoms/InputNumber/InputNumber';
import { SuccesSimple } from '../../../../../components/atoms/Modales/SweetAlert';
import Select from '../../../../../components/atoms/Select/Select';
import { ColorValidation, SubmitValidation, UpdateValue } from '../../../../../utilities/Validations';

import "./ModalEditMethod.scss"

const ModalEditMethod = ({setValue, setSaved}) => {
    const [inputList, setInputList] = useState({
        numberCard: { value: 1234567891014321, validationType: "empty" },
        name: { value: "María Isabel", validationType: "empty" },
        cvv: { value: 548, validationType: "empty" },
        dateOne: { value: "01", validationType: "empty" },
        dateTwo: { value: "25", validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
        }
    }, [inputList]);

  
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

    const handleSubmit = async () => {
        if (SubmitValidation(inputList, setInputList)) {
            await SuccesSimple(3000, "¡Cambios guardados con exito!")
            setValue(false)
        }
    };

  return (
    <div className='ModalEditMethod'>
        <div className="inside-ModalEditMethod">
            <InputNumber title={"Número de tarjeta"} value={inputList.numberCard.value} id={"numberCard"} onChange={(e) => e.target.value.length < 17 && UpdateValue(e, "numberCard", inputList, setInputList)}/>
            <Input title={"Nombre del propietario"} value={inputList.name.value} id={"name"} onChange={(e) => UpdateValue(e, "name", inputList, setInputList)}/>
            <div className="shortField">
                <InputNumber className={"input-num"} title={"CVV"} value={inputList.cvv.value} id={"cvv"} onChange={(e) => e.target.value.length < 4 && UpdateValue(e, "cvv", inputList, setInputList)}/>
                <div className='inside-a'>
                    Fecha de expiración
                    <div className='inside-b'>
                        <Select optionLabel='label' className={"op-1"} value={inputList.dateOne.value} options={options_a} id={"dateOne"} onChange={(e) => UpdateValue(e, "dateOne", inputList, setInputList)}/>
                        <Select optionLabel='label' className={"op-1"} value={inputList.dateTwo.value} options={options_b} id={"dateTwo"} onChange={(e) => UpdateValue(e, "dateTwo", inputList, setInputList)}/>
                    </div>
                </div>
            </div>
            <div className="cnt-cnt-m">
                <Button className={"white"} btnTitle="Cerrar" onClick={() => setValue(false)}/>
                <Button className={"solid"} btnTitle="Guardar" onClick={() => handleSubmit()}/>
            </div>
        </div>
    </div>
  )
}

export default ModalEditMethod