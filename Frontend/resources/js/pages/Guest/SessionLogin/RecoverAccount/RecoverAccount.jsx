import React, { useEffect, useState } from "react";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";

//Assets
import Facebook from "../../../../assets/icons/fb.svg";
import Instagram from "../../../../assets/icons/instagram.png";
import Google from "../../../../assets/icons/Google.png";

//Styles
import "./RecoverAccount.scss";
import InputNumber from "../../../../components/atoms/InputNumber/InputNumber";
import { useNavigate } from "react-router-dom";
import {
    ColorValidation,
    SubmitValidation,
    UpdateValue,
} from "../../../../utilities/Validations";

const RecoverAccount = () => {
    const navigate = useNavigate();
    const networks = [
        {
            id: 1,
            icon: Facebook,
        },
        {
            id: 2,
            icon: Google,
        },
        {
            id: 3,
            icon: Instagram,
        },
    ];

    const isSelectEmail = () => {
        var boxEmail = document.getElementById("divemailId");
        var boxPhone = document.getElementById("divphoneId");
        var textEmail = document.getElementById("text_correo");
        var textPhone = document.getElementById("text_phone");
        textEmail.style.borderBottomWidth = "1px";
        textEmail.style.borderStyle = "solid";
        textEmail.style.borderColor = "#df1683";
        textEmail.style.color = "#df1683";
        textPhone.style.color = "#8a8a8a";
        textPhone.style.borderColor = "transparent";

        boxEmail.style.display = "flex";
        boxEmail.style.flexDirection = "column";
        boxPhone.style.display = "none";
    };
    const isSelectPhone = () => {
        var boxEmail = document.getElementById("divemailId");
        var boxPhone = document.getElementById("divphoneId");
        var textEmail = document.getElementById("text_correo");
        var textPhone = document.getElementById("text_phone");
        textPhone.style.borderBottomWidth = "1px";
        textPhone.style.borderStyle = "solid";
        textPhone.style.borderColor = "#df1683";
        textPhone.style.color = "#df1683";

        textEmail.style.color = "#8a8a8a";
        textEmail.style.borderColor = "transparent";

        boxEmail.style.display = "none";
        boxPhone.style.display = "flex";
        boxPhone.style.flexDirection = "column";
    };

    const [inputList, setInputList] = useState({
        state: { value: null, validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
        }
    }, [inputList]);

    const handleSubmit = () => {
        if (SubmitValidation(inputList, setInputList)) {
            navigate("/recover-code");
        }
    };

    return (
        <div className="RecoverAccount">
            <div className="min-form">
                <div className="rsecct1">
                    <div className="rsecct-1-titltles">
                        <p className="rsecct-1-title">Recuperar cuenta</p>
                        <p className="rsecct-1-sub-title">
                            Actualiza tus accesos
                        </p>
                    </div>
                    <div className="rsecct-1-pas">
                        <div className="rsecct-1-options">
                            <div
                                className="rsecct-1-active c"
                                onClick={() => {
                                    isSelectEmail();
                                }}
                                id="text_correo"
                            >
                                Correo
                            </div>
                            <div
                                className="rsecct-1-active t"
                                onClick={() => isSelectPhone()}
                                id="text_phone"
                            >
                                Teléfono
                            </div>
                        </div>
                        <div id="divemailId">
                            <Input
                                title={"Correo electrónico"}
                                placeholder={"Correo electrónico"}
                                id={"state"}
                                type={"email"}
                                onChange={(e) =>
                                    UpdateValue(
                                        e,
                                        "state",
                                        inputList,
                                        setInputList
                                    )
                                }
                            />
                        </div>
                        <div id="divphoneId" className="input-number">
                            <InputNumber
                                title={"Teléfono"}
                                placeholder={"Número de teléfono"}
                                id={"state"}
                                onChange={(e) =>
                                    UpdateValue(
                                        e,
                                        "state",
                                        inputList,
                                        setInputList
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="rsecct2">
                    <div className="rsecct-2-btns">
                        <Button
                            btnTitle={"Volver"}
                            className={"white"}
                            onClick={() => navigate("/login")}
                        />
                        <Button
                            btnTitle={"Enviar código"}
                            className={"degradado"}
                            onClick={() => handleSubmit()}
                        />
                    </div>
                </div>
                <div className="rsecct3">
                    <div className="rsecct-3-networks">
                        <p className="rsecct-3-title">
                            Ingresar con mis redes sociales
                        </p>
                        <div className="rsecct-3-net">
                            {networks.map((nts) => (
                                <div className="rsecct-3-card-net">
                                    <img
                                        src={nts.icon}
                                        alt="Networks"
                                        className="networks"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoverAccount;
