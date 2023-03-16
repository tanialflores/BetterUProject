import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import "./NewReserve.scss"; 

import {
    ColorValidation,
    SubmitValidation,
    UpdateValue,
} from "../../../../utilities/Validations";
import { errorResponse, getAxiosGuest, postAxiosGuest,postAxios } from '../../../../utilities/Axios'

const NewReserve = () => {
    const { id, type } = useParams()
    const navigate = useNavigate();
    const [skeleton, setSkeleton] = useState()
    
    const [inputList, setInputList] = useState({
        name: {value: null, validationType: "empty"},
        email: {value: null, validationType: "empty"},
        tel: {value: null, validationType: "empty"},
    });

    const getData = async() =>{

        const resThen = (res) =>{
            setSkeleton(false)
            setData(res.data.data)
        }
        getAxiosGuest(`api/v1/mobile/experiences/${id}`, resThen, errorResponse)
    }

    const sendData = () => {
        if (SubmitValidation(inputList, setInputList)) {
            const formData = new FormData()
            
            formData.append('uuid', id)
            formData.append('date', localStorage.getItem("date"))
            formData.append('time_start', localStorage.getItem("time_start"))
            formData.append('time_end', localStorage.getItem("time_end"))
            formData.append('person_capacity', localStorage.getItem("person_capacity"))
            formData.append('is_checked', localStorage.getItem("is_checked"))

            formData.append('name', inputList.name.value)
            formData.append('email', inputList.email.value)
            formData.append('phone', inputList.tel.value)

            const resThen = (res) => {
                navigate(`/experiences/payment-method/${res.data.data.purchase_detail?.reserve_uuid}`)
            
                localStorage.removeItem('date')
                localStorage.removeItem('time_start')
                localStorage.removeItem('time_end')
                localStorage.removeItem('person_capacity')
                localStorage.removeItem('is_checked')
            }

            postAxiosGuest('api/v1/mobile/experiences/schedule/agenda/guest', resThen, errorResponse, formData)
        }
    };

    useEffect(()=>{
        setSkeleton(true)
        getData()
    },[id]);


    useEffect(() => {
      document.querySelector(".AuthView").classList.add("newClassAuthView")
    }, [])
    

    
    return(
        <>
        <div className="AuthView">
            <div className="NewReserve">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="ContainerNewReserve">
                    <div className="ContainerInputs">
                        <Input
                        title={"Nombre"}
                        placeholder="Nombre"
                        id={"name"}
                            onChange={(e) =>
                                UpdateValue(e, "name", inputList, setInputList)
                            }
                        />
                        <Input
                        title={"Correo electrónico"}
                        placeholder="Correo electrónico"
                        id={"email"}
                            onChange={(e) =>
                                UpdateValue(e, "email", inputList, setInputList)
                            }
                        />
                        <Input
                        title={"Teléfono"}
                        placeholder="Teléfono"
                        id={"tel"}
                            onChange={(e) =>
                                UpdateValue(e, "tel", inputList, setInputList)
                            }
                        />
                    </div>
                    <NavLink to={"/login"}>
                        <div className="Count">Ya tengo cuenta</div>
                    </NavLink>
                    <div className="Buttons">
                        <Button
                            btnTitle="Cancelar"
                            className="ButtonCancel"
                            onClick={()=> navigate(`/experiences/${id}`)}
                        />
                        
                        <Button
                            btnTitle="Continuar"
                            className="ButtonSave"
                            onClick={()=> sendData()}
                        />
                    </div>
                </div>
            </div>
            <AuthFooter />
        </div>
        </>
    )
}

export default NewReserve;