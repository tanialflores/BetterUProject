import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";
import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";
import { errorResponse, postAxiosGuest } from "../../../../utilities/Axios";
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)

import {
    ColorValidation,
    SubmitValidation,
    UpdateValue,
} from "../../../../utilities/Validations";

//Styles
import "./Login.scss";

const Login = ({  }) => {
    const navigate = useNavigate();
    const url = process.env.MIX_URL
    const [inputList, setInputList] = useState({
        email: { value: null, validationType: "empty" },
        password: { value: null, validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
            if (propertyName === "email") {
                ColorValidation(propertyName, inputList, "email");
            }
        }
    }, [inputList]);

    // const handleSubmit = () => {
    //     const validate = SubmitValidation(inputList, setInputList)
    //     if (validate) {
    //         localStorage.setItem('auth', true)
    //         location.href = location.origin + "/"
            // const formData = new FormData()
            
            // formData.append('email', inputList.email.value)
            // formData.append('password', inputList.password.value)
            // const resThen = (res) => {
            //     localStorage.setItem('authToken', res.data.data.token)
            //     // setAuth(true)
            //     navigate("/home");
            //     // console.log('entro')
            //     // navigate("/dashboard")
            // }

            // postAxiosGuest('api/auth/mobile/login', resThen, errorResponse, formData)
    //     }
    // };
    const validateLogin = async () => {
        if(SubmitValidation(inputList, setInputList)) {

            MySwal.fire({
                didOpen: () => {
                    Swal.showLoading()
                    },
                title:"Validando credenciales de acceso",
                text:"Espere un momento..",
                showConfirmButton: false,
                timer:3000,
            });
            
            //variable para enviar correo y contraseñas, formato JSON
            const sendData = {
                email: inputList.email.value,
                password: inputList.password.value,
            }
            
            await axios.post(`${url}login`, sendData).then((res) => {
                localStorage.setItem('auth', true)
                location.href = location.origin + "/";
            }).catch((err) => {
                MySwal.fire({
                    title:"Ocurrio un error",
                    text: err.msg,
                    showConfirmButton: false,
                    timer: 3000
                });

            })
        }
    }

    return (
        <div className="Login">
            <div className="lsecct1">
                <div className="lsecct-1-titltles">
                    <p className="lsecct-1-title">Inicio de sesión</p>
                    <p className="lsecct-1-sub-title">Ingresa ahora</p>
                </div>
                <div className="lsecct-1-form">
                    <Input
                        title={"Correo electrónico"}
                        placeholder={"Correo electrónico"}
                        type={"email"}
                        id={"email"}
                        onChange={(e) =>
                            UpdateValue(e, "email", inputList, setInputList)
                        }
                    />
                    <InputPassword
                        title={"Contraseña"}
                        placeholder={"Contraseña"}
                        id={"password"}
                        onChange={(e) =>
                            UpdateValue(e, "password", inputList, setInputList)
                        }
                    />
                    <div className="lsecct-1-check">
                        <div className="lsecct-1-remem">
                            <input
                                type={"checkbox"}
                                className="checkbox-login"
                            />
                            <p className="lsecct-1-text-reme">Recuérdame</p>
                        </div>
                        <NavLink
                            to={"/recover-account"}
                            className="lsecct-1-forgot">
                            Olvide mi contraseña
                        </NavLink>
                    </div>
                    <div className="lsecct-1-btns">
                        <Button
                            btnTitle={"Iniciar sesión"}
                            className={"degradado"}
                            onClick={validateLogin}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
