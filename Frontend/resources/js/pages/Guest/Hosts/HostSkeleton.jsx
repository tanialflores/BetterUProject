import React, { useEffect, useState } from "react";

//Assets 😁
import FondoA from "../../../assets/icons/fono.jpg";

//Styles 😊
import "./Hosts.scss";

//Components 👌
import Button from "../../../components/atoms/Button/Button";
import { Skeleton } from "primereact/skeleton";

const HostSkeleton = () => {
    return (
        <div className="hosts">
            <img src={FondoA} alt="fondoA" className="hosts-fir" />
            <div className="host-secct1">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Skeleton width="400px" height="30px" />
                </div>
                <div className="host-secct-1-B">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 15,
                            alignItems: "center",
                            marginTop: 20,
                        }}
                    >
                        <Skeleton width="300px" height="20px" />
                        <Skeleton width="300px" height="20px" />
                        <Skeleton width="80%" height="20px" />
                        <Skeleton width="80%" height="20px" />
                        <Skeleton width="80%" height="20px" />
                        <Skeleton width="80%" height="20px" />
                    </div>
                </div>
            </div>
            <div className="first-div-sep"></div>
            <div className="host-secct2">
                <div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 15,
                            alignItems: "center",
                            marginTop: 20,
                        }}
                    >
                        <Skeleton width="300px" height="40px" />
                        <Skeleton width="80%" height="20px" />
                        <Skeleton width="80%" height="20px" />
                        <Skeleton width="80%" height="20px" />
                    </div>
                    <div className="host-secct-2-btn">
                        <Button skelton />
                    </div>
                </div>
            </div>
            <div className="first-div-sep"></div>

            <div className="host-secct3">
                <div className="host-secct-3-photo">
                    <Skeleton width="100%" height="100%" />
                </div>
            </div>
        </div>
    );
};

export default HostSkeleton;
