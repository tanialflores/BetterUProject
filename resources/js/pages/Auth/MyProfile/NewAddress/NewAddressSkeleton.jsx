import React, { useState } from "react";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import "./NewAddress.scss";
import Input from "../../../../components/atoms/Input/Input";
import Button from "../../../../components/atoms/Button/Button";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import { Skeleton } from "primereact/skeleton";

const NewAddressSkeleton = () => {
    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="Address-New">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="TitleAddress">
                    <p><Skeleton width="149px" height="20px"></Skeleton></p>
                </div>
                <div className="Container-EditAddress">
                    <div className="Container-Inputs">
                        <Input
                        skeleton
                        width={283}
                        />
                        <Input
                        skeleton
                        width={283}
                        />
                        <Input
                        skeleton
                        width={283}
                        />
                        <Input
                        skeleton
                        width={283}
                        />
                        <Input
                        skeleton
                        width={283}
                        />
                        <Input
                        skeleton
                        width={283}
                        />
                        <Input
                        skeleton
                        width={283}
                        />
                        <Input
                        skeleton
                        width={283}
                        />
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
    );
}

export default NewAddressSkeleton;