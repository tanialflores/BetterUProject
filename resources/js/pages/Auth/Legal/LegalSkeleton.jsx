import React from "react"
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";
import "./Legal.scss";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

const LegalSkeleton = () => {
const navigate = useNavigate();

    return(
        <>
        <AuthHeader
        Skeleton 
        />
        <div className="AuthView">
            <div className="Legal">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="TitleLegal">
                    <Skeleton width="100px" height="20px"/>
                </div>
                <div className="ContainerLegal">
                    <div className="ContainerTerms">
                        <div className="Law"><Skeleton width="30px" height="30px"/></div>
                        <div className="TextTerms"><Skeleton width="158px" height="14px"/></div>
                    </div>
                    <div className="ContainerPolicies">
                        <div className="policies"><Skeleton width="30px" height="30px"/></div>
                        <div className="TextPolicies"><Skeleton width="149px" height="14px"/></div>
                    </div>
                    <div className="ContainerQuestions">
                        <div className="questions"><Skeleton width="30px" height="30px"/></div>
                        <div className="TextQuestions"><Skeleton width="144px" height="14px"/></div>
                    </div>
                </div>
            </div>
            <AuthFooter
            Skeleton
            />
        </div>
        </>
    );
}

export default LegalSkeleton;