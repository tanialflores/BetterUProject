import { Skeleton } from "primereact/skeleton";
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

import "./Register.scss";

const RegisterSkeleton = () => {
    const navigate = useNavigate();

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

    const handleSubmit = () => {
        if (SubmitValidation(inputList, setInputList)) {
            navigate("/register-code");
        }
    };

    return (
        <div className="Register">
            <div className="registroBody">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        alignItems: "center",
                        marginBottom: 15,
                    }}
                >
                    <Skeleton width="150px" height="20px" />
                    <Skeleton width="150px" height="20px" />
                </div>
                <div className="xsecct2">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            alignItems: "center",
                            marginBottom: 15,
                        }}
                    >
                        <InputPassword skeleton />
                        <InputPassword skeleton />
                        <InputPassword skeleton />
                    </div>
                </div>
                <div className="xsecct3">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 15,
                        }}
                    >
                        <Skeleton width="200px" height="10px" />
                    </div>
                </div>
                <div className="xsecct4">
                    <Button skelton />
                    <Button skelton />
                </div>
                <div className="xsecct5">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 15,
                        }}
                    >
                        <Skeleton width="200px" height="10px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterSkeleton;
