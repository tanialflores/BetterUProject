import React from "react";

import "./RegisterInfo.scss";
import Input from "../../../../components/atoms/Input/Input";
import InputNumber from "../../../../components/atoms/InputNumber/InputNumber";
import Select from "../../../../components/atoms/Select/Select";
import Button from "../../../../components/atoms/Button/Button";
import { Skeleton } from "primereact/skeleton";

const RegisterInfoSkeleton = () => {
    return (
        <div className="RegisterInfo">
            <div className="line-change"></div>
            <div className="infobody">
                <div className="yscect1">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            alignItems: "center",
                            marginBottom: 15,
                        }}
                    >
                        <Skeleton width="70px" height="20px" />
                        <Skeleton width="150px" height="20px" />
                    </div>
                    <div className="ysecct-1-container-bg">
                        <Skeleton
                            width="80px"
                            height="80px"
                            borderRadius="50%"
                        />
                    </div>
                </div>
                <div className="ysecct2">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            alignItems: "center",
                            marginBottom: 15,
                            marginTop: 15,
                        }}
                    >
                        <Input skeleton />
                        <Input skeleton />
                    </div>
                    <div className="ysecct-2-gender">
                        <InputNumber skeleton />
                        <Select skeleton />
                    </div>
                    <div
                        style={{
                            marginTop: 15,
                        }}
                    >
                        <InputNumber skeleton />
                    </div>
                </div>
                <div className="ysecct3">
                    <Button skelton />
                    <Button skelton />
                </div>
            </div>
        </div>
    );
};

export default RegisterInfoSkeleton;
