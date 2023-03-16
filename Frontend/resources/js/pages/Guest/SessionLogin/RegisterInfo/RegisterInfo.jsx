import React, { useEffect, useState } from "react";
import BackgroundImage from "../../../../components/molecules/BackgroundImage/BackgroundImage";

//Assets ✔
import CuentaUser from "../../../../assets/icons/cuentaUser.svg";

import "./RegisterInfo.scss";
import Input from "../../../../components/atoms/Input/Input";
import InputNumber from "../../../../components/atoms/InputNumber/InputNumber";
import Select from "../../../../components/atoms/Select/Select";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../../utilities/Validations";
import Button from "../../../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const RegisterInfo = () => {
    const navigate = useNavigate();
    const optionsGender = [
        {
            label: "Femenino",
            value: "femenno",
        },
        {
            label: "Masculino",
            value: "masculino",
        },
        {
            label: "Prefiero no contestar",
            value: "Prefiero no contestar",
        },
    ];

    const [inputList, setInputList] = useState({
        alias: { value: null, validationType: "empty" },
        name: { value: null, validationType: "empty" },
        age: { value: null, validationType: "empty" },
        gender: { value: null, validationType: "empty" },
        phone: { value: null, validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
        }
    }, [inputList]);

    const handleCancel = () => {
        navigate("/register-code");
    };

    const handleSubmit = () => {
        if (SubmitValidation(inputList, setInputList)) {
            console.log("entro")
            navigate("/termin-and-conditions");
        }
    };

    return (
        <div className="RegisterInfo">
            <div className="line-change"></div>
            <div className="infobody">
                <div className="yscect1">
                    <p className="ysecct-1-title">Registro</p>
                    <p className="ysecct-1-sub">
                        Completa los siguientes campos
                    </p>
                    <div className="ysecct-1-container-bg">
                        <BackgroundImage
                            defaultImg={CuentaUser}
                            classNameBgPencil={"ysecct-1-back"}
                            className={"ysecct-1-circle"}
                            classNameWidthPencil={"ysecct-width-pencil"}
                        />
                    </div>
                </div>
                <div className="ysecct2">
                    <Input
                        title={"Alias de alkimista"}
                        placeholder={"Alias de alkimista"}
                        type="text"
                        id={"alias"}
                        onChange={(e) =>
                            UpdateValue(e, "alias", inputList, setInputList)
                        }
                    />
                    <Input
                        title={"Nombre"}
                        placeholder={"Nombre completo"}
                        type="text"
                        id={"name"}
                        onChange={(e) =>
                            UpdateValue(e, "name", inputList, setInputList)
                        }
                    />
                    <div className="ysecct-2-gender">
                        <InputNumber
                            title={"Edad"}
                            placeholder={"Edad"}
                            maxLength={2}
                            id={"age"}
                            onChange={(e) =>
                                UpdateValue(e, "age", inputList, setInputList)
                            }
                        />
                        <Select
                            placeholder={"Género"}
                            options={optionsGender}
                            value={inputList.gender.value}
                            title={"Género"}
                            id={"gender"}
                            onChange={(e) =>
                                UpdateValue(
                                    e,
                                    "gender",
                                    inputList,
                                    setInputList
                                )
                            }
                        />
                    </div>
                    <InputNumber
                        title={"Teléfono"}
                        placeholder={"Número de teléfono"}
                        id={"phone"}
                        onChange={(e) =>
                            UpdateValue(e, "phone", inputList, setInputList)
                        }
                    />
                </div>
                <div className="ysecct3">
                    <Button
                        btnTitle={"Cancelar"}
                        className={"white"}
                        onClick={() => handleCancel()}
                    />
                    <Button
                        btnTitle={"Continuar"}
                        className={"degradado"}
                        onClick={() => handleSubmit()}
                    />
                </div>
            </div>
        </div>
    );
};

export default RegisterInfo;
