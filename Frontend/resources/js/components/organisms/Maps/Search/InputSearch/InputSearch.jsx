import React, { useEffect, useState } from "react";

import "./InputSearch.scss";

import { Skeleton } from "primereact/skeleton";

// assets
import searchIcon from "./icons/searchIcon.svg";

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
    onFocus,
    onChange,
    onKeyDown,
    clasInput,
    classExter,
    onClick
})=>{

    
    return ( !skeleton ?
        <>
            
                <div className={`input-shadowS ${classExter}`}>
                    <input
                        id={id}
                        value={value}
                        disabled={disabled}
                        type={"text"}
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onClick={onClick}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        className={clasInput}
                        
                        // autoComplete={autoComplete}
                    />
                    <img src={searchIcon}/>
                </div>

            
        </>

        : <Skeleton width={width || "100%"} className={className} height="34px" />
    );
};
export default InputSearch;