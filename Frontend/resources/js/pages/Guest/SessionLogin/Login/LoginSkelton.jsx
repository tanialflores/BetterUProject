import { Skeleton } from "primereact/skeleton";
import React from "react";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";
import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";


//Styles
import "./Login.scss";

const LoginSkelton = ({ AuthFunctions }) => {

    return (
        <div className="Login">
            <div className="lsecct1">
                <div className="lsecct-1-titltles">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            alignItems: "center",
                            marginBottom: 15,
                        }}
                    >
                        <Skeleton width="150px" height="20px" />
                        <Skeleton width="150px" height="20px" />
                    </div>
                </div>
                <div className="lsecct-1-form">
                    <Input skeleton />
                    <br />
                    <InputPassword skeleton />
                    <div className="lsecct-1-check">
                        <div
                            style={{
                                display: "flex",
                                gap: 10,
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 15,
                            }}
                        >
                            <Skeleton width="80px" height="10px" />
                            <Skeleton width="80px" height="10px" />
                        </div>
                    </div>
                    <div className="lsecct-1-btns">
                        <Button skelton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSkelton;
