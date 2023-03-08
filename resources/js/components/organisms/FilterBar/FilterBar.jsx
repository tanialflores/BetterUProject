import React from "react";
import "./FilterBar.scss";

import Filtro from "../../../assets/Auth/filtro.svg";

const FilterBar = ({className, onClick}) => {
    return (
        <div className={`FilterBar ${className}`} onClick={onClick}>
            <img src={Filtro} alt="" className="filtro" />
        </div> 
    );
};

export default FilterBar;
