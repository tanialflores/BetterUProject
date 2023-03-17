import React from "react";


import "./DownloadApp.scss";
import { Skeleton } from "primereact/skeleton";

const DownloadAppSkeleton = () => {
    

    return (
        <div className="DownloadApp">
            <div className="dsecct1">
                <div className="dseect-1-container-a">
                    <div className="dsecct-1-logo">
                        <Skeleton width="100px" height="100px" />
                    </div>
                    <div className="dsecct-1-download">
                        <Skeleton width="400px" height="30px" />
                    </div>
                    <div className="dsecct-1-descrip">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 15,
                                marginTop: 10,
                            }}
                        >
                            <Skeleton width="300px" height="20px" />
                            <Skeleton width="300px" height="20px" />
                            <Skeleton width="300px" height="20px" />
                            <Skeleton width="300px" height="20px" />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 20,
                                alignItems: "center",
                                marginTop: 20,
                            }}
                        >
                            <Skeleton width="350px" height="20px" />
                            <Skeleton width="350px" height="20px" />
                            <Skeleton width="350px" height="20px" />
                            <Skeleton width="350px" height="20px" />
                        </div>
                    </div>
                    <div className="dsecct-1-container-store">
                        <Skeleton width="160px" height="67px" />

                        <Skeleton width="160px" height="67px" />
                    </div>
                </div>

                <div className="dseect-1-container-b">
                    <div>
                        <div className="dseect-1-phone">
                            <Skeleton width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="dsecct2">
                <Skeleton width="100%" height="100%" />
            </div>
            <div className="dsecct3">
                <div className="dsecct-3-container-title">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 20,
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Skeleton width="350px" height="40px" />
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        alignItems: "center",
                        width: "100%",
                        marginTop: 15
                    }}
                >
                    <Skeleton width="350px" height="20px" />
                    <Skeleton width="350px" height="20px" />
                    <Skeleton width="350px" height="20px" />
                    <Skeleton width="350px" height="20px" />
                    <Skeleton width="350px" height="20px" />
                </div>
            </div>
        </div>
    );
};

export default DownloadAppSkeleton;
