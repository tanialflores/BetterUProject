import { Skeleton } from "primereact/skeleton";
import React from "react";
import Button from "../../../../components/atoms/Button/Button";

import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";

//Styles ✒ ✒ ✒️
import "./UpdateAccesses.scss";

const UpdateAccessesSkeleton = () => {
 
    return (
        <div className="UpdateAccesses">
            <div className="updatebody">
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
                <div className="usecct2">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            alignItems: "center",
                            marginBottom: 15,
                        }}
                    >
                        <InputPassword skeleton />
                        <InputPassword skeleton />
                    </div>
                </div>
                <div className="usecct3">
                    <Button skelton />
                    <Button skelton />
                </div>
            </div>
        </div>
    );
};

export default UpdateAccessesSkeleton;
