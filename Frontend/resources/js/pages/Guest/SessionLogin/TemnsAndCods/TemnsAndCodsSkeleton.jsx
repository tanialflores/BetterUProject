import { Skeleton } from "primereact/skeleton";
import React, { useState } from "react";
import Button from "../../../../components/atoms/Button/Button";

import "./TemnsAndCods.scss";

const TemnsAndCodsSkeleton = () => {
    return (
        <div className="TemnsAndCods">
            <div className="line-change"></div>
            <div className="t-cards">
                <div className="zsecct1">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            alignItems: "center",
                            marginBottom: 15,
                        }}
                    >
                        <Skeleton width="200px" height="20px" />
                        <Skeleton width="300px" height="15px" />
                    </div>
                    {[...Array(3)].map((_, i) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 8,
                                alignItems: "center",
                                marginBottom: 15,
                            }}
                        >
                            <Skeleton width="350px" height="10px" />
                        </div>
                    ))}
                    {[...Array(5)].map((_, i) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 8,
                                alignItems: "center",
                                marginBottom: 15,
                            }}
                        >
                            <Skeleton width="100%" height="10px" />
                        </div>
                    ))}
                </div>
                <div className="zsecct2">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 15,
                        }}
                    >
                        <Skeleton width="200px" height="25px" />
                    </div>
                    {[...Array(3)].map((_, i) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 8,
                                alignItems: "center",
                                marginBottom: 15,
                            }}
                        >
                            <Skeleton width="350px" height="10px" />
                        </div>
                    ))}
                    {[...Array(5)].map((_, i) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 8,
                                alignItems: "center",
                                marginBottom: 15,
                            }}
                        >
                            <Skeleton width="100%" height="10px" />
                        </div>
                    ))}
                </div>
                <div className="zsecct3">
                    <div className="zsecct-3-aceppt">
                        <Skeleton width="250px" height="10px" />
                    </div>
                    <div className="zsecct-3-aceppt">
                        <Skeleton width="250px" height="10px" />
                    </div>
                </div>
                <div className="zsecct4">
                    <Button skelton />
                    <Button skelton />
                </div>
            </div>
        </div>
    );
};

export default TemnsAndCodsSkeleton;
