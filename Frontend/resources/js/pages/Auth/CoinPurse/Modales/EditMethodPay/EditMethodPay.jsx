import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from '../../../../../components/atoms/Button/Button'
import Input from '../../../../../components/atoms/Input/Input'
import InputPassword from '../../../../../components/atoms/InputPassword/InputPassword'
import { SuccesSimple } from '../../../../../components/atoms/Modales/SweetAlert'
import { ColorValidation, SubmitValidation, UpdateValue } from '../../../../../utilities/Validations'

import "./EditMethodPay.scss"

const EditMethodPay = ({setValue}) => {

    const [inputList, setInputList] = useState({
        email: { value: "Kristin60@gmail.com", validationType: "empty" },
        password: { value: "María Isabel", validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
        }
    }, [inputList]);


    const handleSubmit = async () => {
        if (SubmitValidation(inputList, setInputList)) {
            await SuccesSimple(3000, "¡Cambios guardados con exito!")
            setValue(false)
        }
    };

  return (
    <div className='EditMethodPay'>
        <div className="inside-EditMethodPay">
            <label htmlFor="" className="titleMethod">Editar método de pago</label>
            <div className="cnt-inpuT">
                <Input type={"email"} title={"Correo electrónico"} value={inputList.email.value} id={"email"} onChange={(e) => UpdateValue(e, "email", inputList, setInputList)}/>
                <InputPassword title={"Contraseña"} id="password" value={inputList.password.value} onChange={(e) => UpdateValue(e, "password", inputList, setInputList)}/>  
            </div>
            <div className="cnt-cnt-m">
                <Button className={"white"} btnTitle="Cerrar" onClick={() => setValue(false)}/>
                <Button className={"solid"} btnTitle="Guardar" onClick={() => handleSubmit()}/>
            </div>
        </div>
    </div>
  )
}

export default EditMethodPay