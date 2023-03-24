import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";
import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";
import {
    ColorValidation,
    SubmitValidation,
    UpdateValue,
} from "../../../../utilities/Validations";
import axios from 'axios'

import "./Register.scss";

const Register = () => {
    const navigate = useNavigate();
    const url = process.env.MIX_URL
    const [inputList, setInputList] = useState({
        email: { value: null, validationType: "email" },
        password: { value: null, validationType: "empty" },
        comfirmPassword: { value: null, validationType: "empty" },
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

    const backPage = () => {
        navigate("/start");
    };

    const handleSubmit = async() => {
        const validate = SubmitValidation(inputList, setInputList)
        if (validate) {

            const sendData = {
                email: inputList.email.value,
                password: inputList.password.value
            }

            await axios.post(`${url}register`, sendData).then((res) => {
                navigate("/register-code");
                console.log('res', res)
            }).catch((err) => {
                console.log('err', err)
            })
        }
    };

    return (
        <div className="Register">
            <div className="registroBody">
                <div className="xsecct1">
                    <p className="xsecct-1-title"><b>Registro</b></p>
                    <p className="xsecct-1-sub">¡Convierteté en alkimista!</p>
                </div>
                <div className="xsecct2">
                    <Input
                        title={"Correo electrónico"}
                        placeholder={"Correo electrónico"}
                        type="email"
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
                    <InputPassword
                        title={"Confirmar contraseña"}
                        placeholder={"Confirmar contraseña"}
                        id={"comfirmPassword"}
                        onChange={(e) =>
                            UpdateValue(
                                e,
                                "comfirmPassword",
                                inputList,
                                setInputList
                            )
                        }
                    />
                </div>
                <div className="xsecct3">
                    <NavLink to={"/login"} className="xsecct-link">
                        Ya tengo cuenta
                    </NavLink>
                </div>
                <div className="xsecct4">
                    <Button
                        btnTitle={"Cancelar"}
                        className={"white"}
                        onClick={() => backPage()}
                    />
                    <Button
                        btnTitle={"Verificar correo"}
                        className={"degradado"}
                        onClick={() => handleSubmit()}
                    />
                </div>
                <div className="xsecct5">
                    <NavLink className="xsecct-link">Omitir registro</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Register;
