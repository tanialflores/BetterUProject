import React from "react";

//Styles
import "./WarningModal.scss";

//Asstes
import Question from "./icons/question.png";

const WarningModal = ({setValue, setCloseModal}) => {
    return (
        <div className="WarningModal">
            <div className="warning-inside">
                <div className="secct1">
                    <img src={Question} alt="" className="icon" />
                </div>
                <div className="secct2">
                    <label className="title2">¿Deseas continuar?</label>
                    Tu experiencia será cancelada y recibiras un reembolso a tu
                    monedero alkimia de "$500.00"
                </div>
                <div className="secct3">
                    <div className="btn-ca white-k" onClick={() => setValue(false)}>Cerrar</div>
                    <div className="btn-ca ping-k" onClick={() => setCloseModal(true)}>Continuar</div>
                </div>
            </div>
        </div>
    );
};

export default WarningModal;
