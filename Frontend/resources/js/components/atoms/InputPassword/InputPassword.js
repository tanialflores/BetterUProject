import { Skeleton } from "primereact/skeleton";
import React, { useState, useEffect } from "react";
import "./InputPassword.scss";
import eye from "../../../assets/icons/EyeTwo.svg";
import closeEye from "../../../assets/icons/closeEye.svg";
const InputPassword = ({
    placeholder,
    errors,
    id,
    name,
    onChange,
    value,
    onBlur,
    className,
    title,
    type = "text",
    required = true,
    autoComplete = "on",
    disabled,
    width,
    parentWidth,
    skeleton,
    onKeyDown,
}) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [iconsChange, setIconchange] = useState(true);
    
    const togglePassword = () => {
        if (!disabled) {
            setPasswordShown(!passwordShown);
            setIconchange(!iconsChange);
        }
    };

    useEffect(() => {
        try {
            if (errors === "error") {
                document.getElementById(id).style.border = "1px solid red";
            } else {
                document.getElementById(id).style.border = "1px solid #A0A0A3";
            }
        } catch (e) {}
    }, [errors]);
    return !skeleton ? (
        <div
            className={`cj-input-text-password ${className}`}
            style={{ width: parentWidth }}
        >
            <p className="title">{title}</p>
            <div className="input-wrapper">
                <input
                    onKeyDown={onKeyDown}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`input-pass`}
                    placeholder={placeholder}
                    type={passwordShown ? type : "password"}
                    autoComplete={autoComplete}
                    disabled={disabled}
                />
                {iconsChange ? (
                    <>
                        <div>
                            <img
                                className="input-icon-password"
                                src={closeEye}
                                onClick={togglePassword}
                            ></img>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <img
                                className="input-icon-password"
                                src={eye}
                                onClick={togglePassword}
                            ></img>
                        </div>
                    </>
                )}
            </div>
        </div>
    ) : (
        <Skeleton width={width || "100%"} className={className} height="48px" />
    );
};
export default InputPassword;
