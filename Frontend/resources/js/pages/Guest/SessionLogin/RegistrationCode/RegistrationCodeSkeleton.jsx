import { Skeleton } from "primereact/skeleton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactCodeInput from "react-verification-code-input";
import Button from "../../../../components/atoms/Button/Button";

import "./RegistrationCode.scss";

const RegistrationCodeSkeleton = () => {
    // const [code, setCode] = useState();
    const navigate = useNavigate();

    const [inputList, setInputList] = useState({
        code: { value: null, validationType: "empty" },
    });

    const backPage = () => {
        navigate("/register");
    };

    const nextPage = () => {
        navigate("/register-info");
    };

    return (
        <div className="RegistrationCode">
            <div className="Codereco">
                <div className="rsecct1">
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
                </div>
                <div className="rsecct2">
                    {[...Array(5)].map((_, i) => (
                        <div
                            style={{
                                display: "flex",
                                alignContent: "center",
                                gap: 10,
                                marginBottom: 15,
                            }}
                        >
                            <Skeleton width="50px" height="80px" />
                        </div>
                    ))}
                </div>
                <div className="rsecct3">
                    <Button
                       skelton
                    />
                    <Button
                      skelton
                    />
                </div>
                <div className="rsecct4">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            gap: 10,
                            marginBottom: 15,
                        }}
                    >
                        <Skeleton width="150px" height="20px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationCodeSkeleton;
