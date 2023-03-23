import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import Button from "../../../../components/atoms/Button/Button";

import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";
import SaveModal from "../../../../components/molecules/SaveModal/SaveModal";
import {
    ColorValidation,
    SubmitValidation,
    UpdateValue,
} from "../../../../utilities/Validations";

//Styles ✒ ✒ ✒️
import "./UpdateAccesses.scss";

const UpdateAccesses = () => {
    const navigate = useNavigate();
    // const MySwal = withReactContent(Swal);
    const [correct, setCorrect] = useState(false);

    const [inputList, setInputList] = useState({
        password: { value: null, validationType: "empty" },
        comfirmPassword: { value: null, validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
        }
    }, [inputList]);

    useEffect(() => {
        if (correct) {
            const myTimeout = setTimeout(validationEntry, 3000);
        }
    }, [correct]);

    const validationEntry = () => {
        setCorrect(false);
        navigate("/login");
    };

    const handleSubmit = () => {
        if (SubmitValidation(inputList, setInputList)) {
            setCorrect(true);
        }
    };

    const handleCancel = () => {
        navigate("/recover-code");
    };

    return (
        <div className="UpdateAccesses">
            <div className="updatebody">
                <div className="usecct1">
                    <p className="usecct-1-title">Actualiza tus accesos</p>
                    <p className="usecct-1-sub">Ingresa una nueva contraseña</p>
                </div>
                <div className="usecct2">
                    <InputPassword
                        title={"Nueva contraseña"}
                        placeholder={"Nueva contraseña"}
                        id={"password"}
                        onChange={(e) =>
                            UpdateValue(e, "password", inputList, setInputList)
                        }
                    />
                    <InputPassword
                        title={"Confirmar contraseña"}
                        placeholder={"Confirmar tu contraseña"}
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
                <div className="usecct3">
                    <Button
                        btnTitle={"Cancelar"}
                        className={"white"}
                        onClick={() => handleCancel()}
                    />
                    <Button
                        btnTitle={"Guardar"}
                        className={"degradado"}
                        onClick={() => handleSubmit()}
                    />
                </div>
            </div>

            {correct && <SaveModal />}
        </div>
    );
};

export default UpdateAccesses;
