import { Skeleton } from "primereact/skeleton";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Button/Button";

//Styles
import "./Start.scss";

const StartSkeleton = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate("/login");
    };

    const register = () => {
        navigate("/register");
    };
    return (
        <div className="Start">
            <div className="sform1">
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
                <div className="sform-1-container">
                    <Button skelton />
                    <Button skelton />
                </div>
            </div>
        </div>
    );
};

export default StartSkeleton;
