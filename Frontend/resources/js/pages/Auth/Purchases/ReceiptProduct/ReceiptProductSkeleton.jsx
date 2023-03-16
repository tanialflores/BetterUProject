import React from "react";
import { Skeleton } from "primereact/skeleton";

import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";


import "./ReceiptProduct.scss";

const ReceiptProductSkeleton = () => {
 return (
        <>
          
            <div className="AuthView">
                <div className="Receipt-product">
                    <div className="bg-vg">
                        <div className="bg-white1"></div>
                    </div>
                    <div className="los-title">
                        <Skeleton width="200px" height="30px"/>
                    </div>
                    <div className="cnt-cards">
                      <div className="details-receipt">
                        <div className="cnt-s1s2s3">
                          <div className="secct1">
                            <div className="secct1-a">
                             <Skeleton width="54px" height="35px" borderRadius="15px"/>
                             <Skeleton width="299px" height="35px"/>
                            </div>
                          </div>
                          <div className="secct2">
                            <Skeleton width="80px" height="10px"/>
                                <div className="cnt-inside2">
                                    <Skeleton width="25px" height="25px" borderRadius="50%"/>
                                  <div className="method cnt-info">
                                    <Skeleton width="150px" height="10px"/>
                                    <Skeleton width="150px" height="10px"/>
                                  </div>
                                </div>
                          </div>
                        </div>
                        <div className="cnt-cance-secct4">
                          <div className="secct4">
                                <div className="subSecct4">
                                  <div className="block1">
                                    <Skeleton width="100px" height="10px"/>
                                    <div className="block-a">
                                        {[...Array(3)].map((i, _) => (
                                            <Skeleton width="150px" height="10px" key={_}/>
                                        ))}
                                    </div>
                                  </div>
                                  <div className="block2">
                                    <Skeleton width="50px" height="10px"/>
                                    <div className="block-a">
                                        <Skeleton width="150px" height="10px" key={_}/>
                                    </div>
                                  </div>
                                  <div className="block3">
                                    <Skeleton width="50px" height="10px"/>
                                  </div>
                                  <div className="block4">
                                    <Skeleton width="150px" height="10px"/>
                                    <div className="block-a">
                                      <div className="cnt-cards-s">
                                            {[...Array(4)].map((i,_) => (
                                                <div className="card-small" key={_}>
                                                    <Skeleton width="45px" height="45px"/>
                                                    <div style={{display: "flex", flexDirection: "column", gap: 7, width: "95%"}}>
                                                        <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                                            <Skeleton width="150px" height="15px"/>
                                                            <Skeleton width="20px" height="20px" borderRadius="50%"/>
                                                        </div>
                                                        <Skeleton width="150px" height="15px"/>
                                                    </div>
                                                </div>
                                            ))}
                                      </div>
                                    </div>
                                    <div className="block-b">
                                      <div className="inside-a">
                                        <Skeleton width="200px" height="10px"/>
                                      </div>
                                      <div className="inside-b">
                                        <Skeleton width="50px" height="10px"/> 
                                        <Skeleton width="50px" height="10px"/>
                                      </div>
                                    </div>
                                  </div>
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

export default ReceiptProductSkeleton;
