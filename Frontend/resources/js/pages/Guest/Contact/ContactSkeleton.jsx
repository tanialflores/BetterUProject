import React, { useEffect, useState } from "react";
import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";
import TextArea from "../../../components/atoms/TeaxtArea/TextArea";

//Assets
import Muck_up_contacto from "../../../assets/icons/muck_up_contacto.jpg";
import ContactoMap from "../../../assets/icons/contactoMap.png";

import "./Contact.scss";
import {
    ColorValidation,
    SubmitValidation,
    UpdateValue,
} from "../../../utilities/Validations";
import { Skeleton } from "primereact/skeleton";

const ContactSkeleton = () => {
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
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 25,
                        marginTop: 25
                    }}
                >
                    <Skeleton width="200px" height="40px" />
                </div>

                <div className="csecct-1-container">
                    <div className="csecct-1-contt">
                        <Skeleton width="100%" height="100%" />
                    </div>

                    <div className="csecct-1-form">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 25,
                            }}
                        >
                            <Input skeleton />
                            <Input skeleton />
                            <Input skeleton />
                            <TextArea skeleton />
                        </div>
                        <div className="csecct-1-btn">
                            <Button skelton />
                        </div>
                    </div>
                </div>
            </div>
            <div className="csecct2">
                <Skeleton width="100%" height="100%" />
            </div>
        </div>
    );
};

export default ContactSkeleton;
