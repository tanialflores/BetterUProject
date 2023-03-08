import React from "react";

//Styles
import "./Back.scss";

//Assets
import arrowBack from "./icon/volver.png";

const Back = ({onClick, className}) => {
    return (
        <div className={`Backxx ${className}`} onClick={onClick} >
            <img src={arrowBack} alt="" className="icon-back" />
        </div>
    );
};

export default Back;
