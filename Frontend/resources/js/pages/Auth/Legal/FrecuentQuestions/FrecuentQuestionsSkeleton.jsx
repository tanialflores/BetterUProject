import React from "react";
import Back from "../../../../components/atoms/Back/Back";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import "./FrecuentQuestions.scss";
// react

// assets
// primereact components
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { Skeleton } from "primereact/skeleton";

const FrecuentQuestionsSkeleton = () => {
    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
        <div className="FrecuentQuestions">
            <div className="backColor">
                <div className="backWhite"></div>
            </div>
            <div className="TermsFrecuent">
                <Back
                className="Return" onClick={()=> navigate("/legals")}/>
                <p><Skeleton width="205px" height="20px"/></p>
            </div>
            <div className="ContainerFrecuent" style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: "flex-start", gap: 10}}>
                    {[...Array(7)].map((_, i) => (
                        <Skeleton width="718px" height="37px" />
                        ))}
            </div>
        </div>
        </div>
        </>
    );
}

export default FrecuentQuestionsSkeleton;