import React from "react";
import "./SaveModal.scss";

import checksave from "../../../assets/icons/checksave.png";

const SaveModal = ({message, title}) => {
    return (
        <>
            <div className="modal">
                <div className="ModalContainer">
                    <img className="checksave" src={checksave} />
                    <div className="parrafo">
                        {title ? <label className="headerM">{title}</label> : null}
                        {message ? <b>{message}</b> : <b>¡Cambios guardados con exito!</b> }
                        {/* <b>¡Cambios guardados con exito!</b> */}
                    </div>
                </div>
            </div>
            <div className="ModalBackground"></div>
        </>
    );
};

export default SaveModal;
