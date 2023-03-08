import React from "react";
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";

//styles
import "./CoinPurse.scss";
import { Skeleton } from "primereact/skeleton";

const CoinPurseSkeleton = () => {
    return (
        <>
            <AuthHeader />
            <div className="AuthView">
                <div className="CoinPurse-ui">
                    <div className="bg-vg">
                        <div className="bg-white1"></div>
                    </div>
                    <div className="los-title">
                        <Skeleton width="200px" height="40px"/>
                    </div>
                    <div className="cnt-cards">
                        <div className="secct1">
                            <div className="cnt-card">
                                <div className="cnt-img">
                                    <Skeleton width="57px" height="48px"/>
                                </div>
                                <div className="detail-saldo">
                                    <Skeleton width="100px" height="15px"/> 
                                    <Skeleton width="100px" height="20px"/> 
                                    
                                </div>
                            </div>
                            <Skeleton width="100%" height="40px"/>
                        </div>
                        <div className="secct2">
                            <Skeleton width="150px" height="15px"/>
                            <div className="cnt-methodsPayd">
                                <div className="cnt-cnts">
                                    <div className="conatiner-pays-s">
                                        {[...Array(2)].map((_, i) => (
                                            <div key={i} style={{width: "100%", height: 50, display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 15, paddingLeft: 20, paddingRight: 8, border: 1, borderStyle: "solid", borderColor: "#cfcece" }}>
                                            <div style={{display: "flex", gap: 10}}>
                                                <Skeleton shape="circle" width="25px" height="25px"/>
                                                <div style={{display: "flex", flexDirection: "column", gap: 5}}>
                                                    <Skeleton width="81px" height="11px"/>
                                                    <Skeleton width="81px" height="11px"/>
                                                </div>
                                            </div>
                                            <Skeleton shape="circle" width="25px" height="25px"/>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Contenedores para los paypals */}
                                <div className="cnt-cnts paypa-l">
                                    <div className="conatiner-pays-s">
                                        {[...Array(2)].map((_, i) => (
                                            <div key={i} style={{width: "100%", height: 50, display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 15, paddingLeft: 20, paddingRight: 8, border: 1, borderStyle: "solid", borderColor: "#cfcece" }}>
                                                <div style={{display: "flex", gap: 10}}>
                                                    <Skeleton shape="circle" width="25px" height="25px"/>
                                                    <div style={{display: "flex", alignItems: "center", gap: 5}}>
                                                        <Skeleton width="150px" height="11px"/>
                                                    </div>
                                                </div>
                                                <Skeleton shape="circle" width="25px" height="25px"/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AuthFooter />
            </div>
        </>
    );
};

export default CoinPurseSkeleton;
