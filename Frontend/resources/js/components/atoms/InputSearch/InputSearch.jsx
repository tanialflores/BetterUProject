import React, { useEffect, useState } from "react";

import "./InputSearch.scss";

import { Skeleton } from "primereact/skeleton";

// assets
import magnifier from "../../../assets/icons/magnifier.svg";
const InputSearch = ({
    placeholder,
    id,
    value,
    className,
    disabled,
    width,
    skeleton,
    style,
    onBlur,
    onChange,
    onKeyDown,
    sizeLup,
    classInput,
}) => {
    return !skeleton ? (
        <>
            <div
                className={`InputSearch ${className} ${
                    disabled && "disabledInput"
                }`}
                style={{ width: width, ...style }}
            >
                <input
                    className={classInput}
                    id={id}
                    value={value}
                    disabled={disabled}
                    type={"text"}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    
                    // autoComplete={autoComplete}
                />

                    <div >
                        <img src={magnifier} className={sizeLup}/>
                    </div>
            </div>
        </>
    ) : (
        <Skeleton width={width || "100%"} className={className} height="34px" />
    );
};
export default InputSearch;
