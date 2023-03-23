import React, { useEffect, useState } from "react";

import { Skeleton } from "primereact/skeleton";

// styles
import "./InputNumber.scss";

const ALLOWED_KEYS = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Backspace",
    "ArrowRight",
    "ArrowDown",
    "ArrowUp",
    "ArrowLeft",
    ".",
    "Control",
    "v",
];
const ALLOWED_KEYS_NOT_DOTS = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Backspace",
    "ArrowRight",
    "ArrowDown",
    "ArrowUp",
    "ArrowLeft",
];

export default function ({
    // limit, <- deprecated prop
    // decimalsCuanity = 0, <- deprecated prop
    id,
    name,
    value,
    onChange,
    placeholder,
    title,
    className,
    disabled,
    width,
    hideRequired,
    onClick,
    style,
    inputClassName = "",
    notPoint = false,
    skeleton,
    onKeyDown,
    onBlur,
    maxLength,
    
}) {
    return !skeleton ? (
        <>
            <div
                className={`
                    cj-input-text-password 
                    ${className} 
                    ${hideRequired && "hideRequired"} 
                    ${disabled && "numberDisabled"} 
                    ${onClick && "clickeable"}
                `}
                style={{ width: width }}
                onClick={() => onClick && onClick()}
            >
                {
                    <>
                    
                    {title && <p className="title">{title}</p>}
                    <div className="input-wrapper">
                        <input
                            type={"number"}
                            maxLength={maxLength}
                            disabled={disabled}
                            id={id}
                            name={name}
                            value={value}
                            onChange={(e) => {
                                onChange(e);
                            }}
                            onKeyDown={(e) => {
                                if (onKeyDown) {
                                    onKeyDown(e);
                                }

                                if (
                                    !ALLOWED_KEYS.includes(e.key) &&
                                    !notPoint
                                ) {
                                    e.preventDefault();
                                }
                                if (
                                    !ALLOWED_KEYS_NOT_DOTS.includes(e.key) &&
                                    notPoint
                                ) {
                                    e.preventDefault();
                                }
                            }}
                            className={`input ${inputClassName}`}
                            placeholder={placeholder}
                            onBlur={onBlur}
                        />
                    </div>
                    </>
                }
            </div>
        </>
    ) : (
        <Skeleton width={width || "100%"} className={className} height="48px" />
    );
}
