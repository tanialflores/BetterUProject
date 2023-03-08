import { Skeleton } from "primereact/skeleton";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import "./NewReserve.scss"; 

const NewReserveSkeleton = () => {
    const navigate = useNavigate();
    const [inputList, setInputList] = useState({
        name: {value: null, validationType: "empty"},
        email: {value: null, validationType: "empty"},
        tel: {value: null, validationType: "empty"},
    });
    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="NewReserve">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="ContainerNewReserve">
                    <div className="ContainerInputs">
                        <Input
                        skeleton
                        />
                        <Input
                        skeleton
                        />
                        <Input
                        skeleton
                        />
                    </div>
                    <div className="Count">
                        <Skeleton width="110px" height="14px"></Skeleton>
                    </div>
                    <div className="Buttons">
                        <Button
                        skelton
                        />
                        <Button
                        skelton
                        />
                    </div>
                </div>
            </div>
            <AuthFooter/>
        </div>
        </>
    )
}

export default NewReserveSkeleton;