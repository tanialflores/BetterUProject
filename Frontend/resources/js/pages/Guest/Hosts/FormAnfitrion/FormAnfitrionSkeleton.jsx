
import { Skeleton } from "primereact/skeleton";
import React, { useEffect, useState } from "react";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";
import InputNumber from "../../../../components/atoms/InputNumber/InputNumber";
import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";
import Select from "../../../../components/atoms/Select/Select";

import "./FormAnfitrion.scss";

const FormAnfitrionSkeleton = () => {

    return (
        <div className="FormAnfitrion">
            <form className="form">
                <div className="secct1">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 15,
                        }}
                    >
                        <Skeleton width="350px" height="40px" />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 15,
                            alignItems: "center",
                            marginTop: 5,
                        }}
                    >
                        <Skeleton width="350px" height="10px" />
                        <Skeleton width="350px" height="10px" />
                    </div>
                </div>

                <div className="secct2">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 15,
                            alignItems: "center",
                            marginTop: 15,
                        }}
                    >
                        <Input skeleton />
                        <InputPassword skeleton />
                        <InputPassword skeleton />
                        <Input skeleton />
                        <Input skeleton />
                    </div>

                    <Select skeleton />
                    <div className="form-container-phone">
                        <div>
                            <Select skeleton />
                        </div>
                        <div className="form-container-number">
                            <InputNumber skeleton />
                        </div>
                    </div>

                    <div className="form-check-point">
                        <Skeleton width="350px" height="15px" />
                    </div>

                    <div className="container-btn">
                        <div className="btn-sub">
                            <Button skelton />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormAnfitrionSkeleton;
