import React from "react";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import "./Address.scss";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import { Skeleton } from "primereact/skeleton";
import CardAddressSkeleton from "../../../../components/organisms/CardAddress/CardAddressSkeleton";

const AddressSkeleton = () => {
    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="Address">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="TitleAddress">
                    <p>
                        <Skeleton width="111px" height="20px"></Skeleton>
                    </p>
                </div>
                <div className="Address-Container">
                    <div className="Comp-Card">
                        <CardAddressSkeleton/>
                    </div>
                   <div className="NewAddress">
                    <Skeleton width="278px" height="40px"></Skeleton>
                   </div>
                </div>
            </div>
            <AuthFooter/>
        </div>
        </>
    );
}

export default AddressSkeleton;