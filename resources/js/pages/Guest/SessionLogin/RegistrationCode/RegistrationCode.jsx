import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactCodeInput from "react-verification-code-input";
import Button from "../../../../components/atoms/Button/Button";

import "./RegistrationCode.scss";

const RegistrationCode = () => {
    const navigate = useNavigate();

    const [code, setCode] = useState(0);

    const backPage = () => {
        navigate("/register");
    };

    const nextPage = () => {
          code === 0
            ? document
                  .querySelector(".styles_react-code-input__CRulA")
                  .classList.add("invalid")
            : navigate("/register-info");
    }

    return (
        <div className="RegistrationCode">
            <div className="Codereco">
                <div className="rsecct1">
                    <p className="rsecct-1-title">Código de recuperación</p>
                    <p className="rsecct-1-sub">Ingresa el código enviado</p>
                </div>
                <div className="rsecct2">
                    <ReactCodeInput
                        fields={5}
                        fieldWidth={50}
                        fieldHeight={80}
                        className="input-code"
                        onComplete={(e) => setCode(e)}
                    ></ReactCodeInput>
                </div>
                <div className="rsecct3">
                    <Button
                        btnTitle={"Cancelar"}
                        className={"white"}
                        onClick={() => backPage()}
                    />
                    <Button
                        btnTitle={"Validar código"}
                        className={"degradado"}
                        onClick={() => nextPage()}
                    />
                </div>
                <div className="rsecct4">
                    <p className="rsecct-4-title">Reenviar código</p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationCode;
