import React from "react";

//Styles
import "./WelcomeRegistration.scss";

import { Skeleton } from "primereact/skeleton";

const WelcomeRegistrationSkeleton = () => {
    return (
        <div className="WelcomeRegistration">
            <div className="line-change"></div>
            <div className="welcome-body">
                <div className="wsecct1">
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
                        <Skeleton width="300px" height="20px" />
                    </div>
                </div>
                <div className="wsecct2">
                    <Skeleton width="350px" height="350px" borderRadius="50%" />
                </div>
            </div>
        </div>
    );
};

export default WelcomeRegistrationSkeleton;
