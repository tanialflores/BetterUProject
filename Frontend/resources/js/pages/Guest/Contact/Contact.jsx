import React, { useEffect, useState } from "react";
import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";
import TextArea from "../../../components/atoms/TeaxtArea/TextArea";

//Assets
import Muck_up_contacto from "../../../assets/icons/muck_up_contacto.jpg";
import ContactoMap from "../../../assets/icons/contactoMap.png";

import "./Contact.scss";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../utilities/Validations";

const Contact = () => {

    const [inputList, setInputList] = useState({
        email: { value: null, validationType: "email" },
        name: { value: null, validationType: "empty" },
        asunto: { value: null, validationType: "empty" },
        message: { value: null, validationType: "empty" },
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

    const handleSubmit = () => {
        if (SubmitValidation(inputList, setInputList)) {
            navigate("/");
        }
    };

    return (
        <div className="Contact">
            <div className="cseect1">
                <h1 className="csecct-1-title">Contacto</h1>
                <div className="csecct-1-container">
                    <div className="csecct-1-contt">
                        <img
                            src={Muck_up_contacto}
                            alt="Muck_up_contacto"
                            className="csecct-1-img"
                        />
                    </div>

                    <div className="csecct-1-form">
                        <Input
                            title={"Nombre completo"}
                            placeholder={"Nombre completo"}
                            type={"text"}
                            id={"name"}
                            onChange={(e) =>
                                UpdateValue(e, "name", inputList, setInputList)
                            }
                        />
                        <Input
                            title={"Email"}
                            placeholder={"Email"}
                            type={"email"}
                            id={"email"}
                            onChange={(e) =>
                                UpdateValue(e, "email", inputList, setInputList)
                            }
                        />
                        <Input
                            title={"Asunto: "}
                            placeholder={"Asunto"}
                            type={"text"}
                            id={"asunto"}
                            onChange={(e) =>
                                UpdateValue(e, "asunto", inputList, setInputList)
                            }
                        />
                        <TextArea
                            title={"Escribe un breve mensaje"}
                            viewTitle
                            placeholder={"Escribe aquí..."}
                            id={"message"}
                            onChange={(e) =>
                                UpdateValue(e, "message", inputList, setInputList)
                            }
                        />
                        <div className="csecct-1-btn">
                            <Button
                                btnTitle={"Enviar"}
                                className={"solid"}
                                onClick={() => handleSubmit()}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="csecct2">
                <img
                    src={ContactoMap}
                    alt="ContactoMap"
                    className="csecct-2-map"
                />
            </div>
        </div>
    );
};

export default Contact;
