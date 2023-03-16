import React, { useState } from "react";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import "./EditProfile.scss";
import Input from "../../../../components/atoms/Input/Input";
import Button from "../../../../components/atoms/Button/Button";
import { Skeleton } from "primereact/skeleton";

const EditProfileSkeleton = () => {

    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="EditProfile">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="TitleProfile">
                    <p><Skeleton width="110px" height="20px"></Skeleton></p>
                </div>
                <div className="ContainerProfile">
                    <div className="ChangeBackground">
                        <Skeleton width="751px" height="316px"></Skeleton>
                    </div>
                    <div className="EditLogo">
                        <Skeleton width="95px" height="95px"></Skeleton>
                    </div>
                    <div className="ContainerInputs">
                        <Input
                        title="Alias de Alkimista"
                        className="Input1"
                        skeleton
                        />
                        <Input
                        title="Nombre"
                        className="Input2"
                        skeleton
                        />
                    </div>
                    <div className="Buttons">
                        <Button
                        btnTitle="Cancelar"
                        className="ButtonCancel"
                        skelton
                        />
                        <Button
                        btnTitle="Guardar"
                        className="ButtonSave"
                        skelton
                        />
                    </div>
                </div>
            </div>
            <AuthFooter/>
        </div>
        </>
    );
};

export default EditProfileSkeleton;