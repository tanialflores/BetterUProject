import { Dropdown } from "primereact/dropdown";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";
import InputNumber from "../../../../components/atoms/InputNumber/InputNumber";
import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";
import Select from "../../../../components/atoms/Select/Select";
import SaveModal from "../../../../components/molecules/SaveModal/SaveModal";
import { useLadaWithState } from "../../../../customHooks/useForms";
import { errorResponse, postAxiosGuest } from "../../../../utilities/Axios";
import {
    ColorValidation,
    SubmitValidation,
    UpdateValue,
} from "../../../../utilities/Validations";

import "./FormAnfitrion.scss";

const FormAnfitrion = () => {

    const navigate = useNavigate();
    const [modal, setModal] = useState(false)
    const { optionsState, optionsLada } = useLadaWithState()
    const [inputList, setInputList] = useState({
        email: { value: null, validationType: "empty" },
        password: { value: null, validationType: "empty" },
        password_confirm: { value: null, validationType: "empty" },
        name: { value: null, validationType: "empty" },
        company_name: { value: null, validationType: "empty" },
        state: { value: null, validationType: "empty" },
        lada: { value: null, validationType: "empty" },
        phone_number: { value: null, validationType: "empty" },
        is_terms: { value: false },
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const validate = SubmitValidation(inputList, setInputList)
        const formData = new FormData()
        if (validate) {
            Object.entries(inputList).forEach(([key, value]) => {
                if(value.value.uuid){
                    formData.append(key, value.value.uuid)
                } else {
                    formData.append(key, value.value)
                }
            });

            const resThen = (res) => {
                setModal(true)
                setTimeout(() => {
                    navigate("/");
                }, 2000)
            }

            postAxiosGuest(`api/auth/register/host`, resThen, errorResponse, formData)
        }
    };

    return (
        <div className="FormAnfitrion">
            <form className="form">
                <div className="secct1">
                    <p className="form-title">Regístrate como anfitrión</p>
                    <p className="form-descrip">
                        Únete a la comunidad de la primera aplicación de
                        enoturismo en México sin costo por inscripción.
                    </p>
                </div>

                <div className="secct2">
                    <Input
                        title={"Correo electrónico"}
                        type={"email"}
                        placeholder={"Email"}
                        id={"email"}
                        onChange={(e) =>
                            UpdateValue(e, "email", inputList, setInputList)
                        }
                    />
                    <InputPassword
                        placeholder={"Contraseña"}
                        title={"Contraseña"}
                        id={"password"}
                        onChange={(e) =>
                            UpdateValue(e, "password", inputList, setInputList)
                        }
                    />
                    <InputPassword
                        placeholder={"Confirmar contraseña"}
                        title={"Confirmar contraseña"}
                        id={"password_confirm"}
                        onChange={(e) =>
                            UpdateValue(
                                e,
                                "password_confirm",
                                inputList,
                                setInputList
                            )
                        }
                    />
                    <Input
                        title={"Nombre Completo"}
                        type={"text"}
                        placeholder={"Nombre"}
                        id={"name"}
                        onChange={(e) =>
                            UpdateValue(e, "name", inputList, setInputList)
                        }
                    />
                    <Input
                        title={"Empresa"}
                        type={"text"}
                        placeholder={"Empresa"}
                        id={"company_name"}
                        onChange={(e) =>
                            UpdateValue(e, "company_name", inputList, setInputList)
                        }
                    />

                    <Select
                        placeholder={"-Seleccione un estado-"}
                        options={optionsState}
                        optionLabel='state'
                        value={inputList.state.value}
                        title={"Estado"}
                        id={"state"}
                        onChange={(e) =>
                            UpdateValue(e, "state", inputList, setInputList)
                        }
                    />
                    <div className="form-container-phone">
                        <div>
                            <Select
                                options={optionsLada}
                                optionLabel='number'
                                value={inputList.lada.value}
                                title={"Teléfono"}
                                id={"lada"}
                                onChange={(e) =>
                                    UpdateValue(
                                        e,
                                        "lada",
                                        inputList,
                                        setInputList
                                    )
                                }
                            />
                        </div>
                        <div className="form-container-number">
                            <InputNumber
                                title={"Teléfono"}
                                placeholder={"Teléfono"}
                                id={"phone_number"}
                                onChange={(e) =>
                                    UpdateValue(
                                        e,
                                        "phone_number",
                                        inputList,
                                        setInputList
                                    )
                                }
                            />
                        </div>
                    </div>

                    <div className="form-check-point">
                        <div>
                            <input
                                type="checkbox"
                                className="check-point-box"
                                value={inputList.is_terms.value}
                                onChange={() => setInputList({...inputList, is_terms: { value: !inputList.is_terms.value}})}
                            />
                        </div>
                        <p className="check-point-dec">
                            Al registrarme acepto los{" "}
                            <span className="term-cond">
                                términos y condiciones
                            </span>{" "}
                            de Alkimia Experiencias Mágicas S.A. de C.V. y
                            acepto el uso de mi información.
                        </p>
                    </div>

                    <div className="container-btn">
                        <div className="btn-sub">
                            <Button
                                btnTitle={"Registrarme"}
                                className={"solid"}
                                onClick={ handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </form>
            {modal && <SaveModal />}
        </div>
    );
};

export default FormAnfitrion;
