import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Button/Button";

//Styles
import "./Start.scss";

const Start = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate("/login");
    };

    const register = () => {
        navigate("/register");
    };
    return (
        <div className="Start">
            <div className="sform1">
                <p className="s-title">¡Bienvenido!</p>
                <p className="s-text">Ingresa ahora</p>
                <div className="sform-1-container">
                    <Button
                        btnTitle={"Iniciar sesión"}
                        className={"degradado"}
                        onClick={() => nextPage()}
                    />
                    <Button
                        btnTitle={"Registrarme"}
                        className={"border-color"}
                        onClick={() => register()}
                    />
                </div>
            </div>
        </div>
    );
};

export default Start;
