import { Skeleton } from "primereact/skeleton";
import React from "react";

//Styles 😊
import "./Privacy.scss";

const PrivacySkeletons = () => {
    return (
        <div className="Privacy">
            <div className="tm-title">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <Skeleton width="300px" height="30px" />
                </div>
            </div>
            <div className="cards">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                    }}
                >
                    {[...Array(70)].map((_, i) => (
                        <Skeleton width="100%" height="10px" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivacySkeletons;
