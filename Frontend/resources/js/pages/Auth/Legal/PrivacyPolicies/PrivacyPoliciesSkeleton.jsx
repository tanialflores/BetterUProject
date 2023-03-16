import { Skeleton } from "primereact/skeleton";
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import Back from "../../../../components/atoms/Back/Back";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";

//Tania ❤🌹
import "./PrivacyPolicies.scss";

const PrivacyPoliciesSkeleton = () => {
    const navigate = useNavigate();
    return (
        <>
            <AuthHeader/>
            <div className="AuthView"> 
                <div className="TermsAndConditions">
                    <div className="backColor">
                            <div className="backWhite"></div>
                    </div>
                    <div className="TermsTitle">
                        <Back
                        className="Return" onClick={()=> navigate("/legals")}/>
                        <p><Skeleton width="214px" height="20px"/></p>
                    </div>
                    <div className="ContainerTerms">
                        <div className="insideTerms">
                            <p>
                                <Skeleton width="548px" height="98px"/>
                            </p>
                            <p>
                                <Skeleton width="548px" height="98px"/>
                            </p>
                            <p>
                                <Skeleton width="548px" height="98px"/>
                            </p>
                            <p>
                                <Skeleton width="548px" height="98px"/>
                            </p>
                            <p>
                                <Skeleton width="548px" height="98px"/>
                            </p>
                        </div>
                    </div>
                </div>
                <AuthFooter/>
            </div>
        </>
    );
};

export default PrivacyPoliciesSkeleton;
