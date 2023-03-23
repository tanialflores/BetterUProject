import React, { useEffect, useState } from "react";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";

//Styles
import "./RecoverAccount.scss";
import InputNumber from "../../../../components/atoms/InputNumber/InputNumber";
import { Skeleton } from "primereact/skeleton";

const RecoverAccountSkeleton = () => {
  
    

    return (
        <div className="RecoverAccount">
            <div className="min-form">
                <div className="rsecct1">
                    <div className="rsecct-1-titltles">
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
                    <div className="rsecct-1-pas">
                        <div className="rsecct-1-options">
                            <div
                                style={{
                                    display: "flex",
                                    gap: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginBottom: 15,
                                    width: "100%",
                                }}
                            >
                                <Skeleton width="50px" height="20px" />
                                <Skeleton width="50px" height="20px" />
                            </div>
                        </div>
                        <div id="divemailId">
                            <Input skeleton />
                        </div>
                        <div id="divphoneId" className="input-number">
                            <InputNumber skeleton />
                        </div>
                    </div>
                </div>
                <div className="rsecct2">
                    <div className="rsecct-2-btns">
                        <Button skelton />
                        <Button skelton />
                    </div>
                </div>
                <div className="rsecct3">
                    <div className="rsecct-3-networks">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                            }}
                        >
                            <Skeleton width="150px" height="10px" />
                        </div>
                        <div className="rsecct-3-net">
                            {[...Array(3)].map((_, i) => (
                                <div className="rsecct-3-card-net">
                                    <Skeleton height="30px" width="30px" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoverAccountSkeleton;
