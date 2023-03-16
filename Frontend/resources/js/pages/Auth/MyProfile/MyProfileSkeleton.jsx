import React from "react";
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";
import "./MyProfile.scss";
import { Skeleton } from "primereact/skeleton";

const MyProfileSkeleton = () => {

    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="MyProfile">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="ContainerProfile">
                    <>
                    <div className="ContainerInformation">
                        <div className="Gradient">
                            <div className="White"></div>
                            <div className="FrontPage">
                                <Skeleton width="751px" height="316px"></Skeleton>
                            </div>
                        </div>
                        <div className="ImageProfile">
                            <Skeleton width="112px" height="112px"></Skeleton>
                        </div>
                        <div className="NameAbb">
                            <Skeleton width="158px" height="16px"></Skeleton>
                        </div>
                    </div>
                    <div className="Cards">
                        <div className="CardInformation">
                            <div className="Name">
                                <div className="TitleName">
                                    <Skeleton width="104px" height="12px"></Skeleton>
                                </div>
                                <div className="TextName">
                                    <Skeleton width="159px" height="14px"></Skeleton>
                                </div>
                            </div>
                            <div className="Info">
                                <div className="Gender">
                                    <div className="TitleGender">
                                        <Skeleton width="52px" height="12px"></Skeleton>
                                    </div>
                                    <div className="TextGender">
                                        <Skeleton width="66px" height="14px"></Skeleton>
                                    </div>
                                </div>
                                <div className="Age">
                                    <div className="TitleAge">
                                        <Skeleton width="29px" height="12px"></Skeleton>
                                    </div>
                                    <div className="TextAge">
                                        <Skeleton width="53px" height="14px"></Skeleton>
                                    </div>
                                </div>
                                <div className="Language">
                                    <div className="TitleLanguage">
                                        <Skeleton width="38px" height="12px"></Skeleton>
                                    </div>
                                    <div className="TextLanguage"><Skeleton width="66px" height="14px"></Skeleton></div>
                                </div>
                            </div>
                            <div className="EditProfile">
                                <Skeleton width="278px" height="40px"></Skeleton>
                            </div>
                        </div>
                        <div className="CardLevel">
                            <div className="Level">
                                <div className="TextLevel">
                                    <Skeleton width="51px" height="16px"></Skeleton>
                                </div>
                                <div className="ButtonPlus">
                                    <Skeleton width="27px" height="27px"></Skeleton>
                                </div>
                            </div>
                            <div className="ImageLevel">
                                <Skeleton width="50px" height="50px"></Skeleton>
                            </div>
                            <div className="Details">
                                <div className="TitleDetails">
                                    <Skeleton width="50px" height="12px"></Skeleton>
                                </div>
                                <div className="TextDetails">
                                    <Skeleton width="285px" height="22px"></Skeleton>
                                </div>
                            </div>
                            <div className="LineWhite"></div>
                            <div className="ProgressBar">
                                <div className="TextPoints">
                                    <Skeleton width="40px" height="11px"></Skeleton>
                                </div>
                                <Skeleton width="193px" height="8px"></Skeleton>
                            </div>
                        </div>
                        <div className="CardAddress">
                            <div className="Address">
                                <div className="TextAddress">
                                    <Skeleton width="75px" height="16px"></Skeleton>
                                </div>
                                <div className="EditAddress">
                                    <Skeleton width="27px" height="27px"></Skeleton>
                                </div>
                            </div>
                            <div className="ContAddress">
                                <Skeleton width="294px" height="42px"></Skeleton>
                            </div>
                        </div>
                    </div>
                    </>
                </div>
        </div>
        <AuthFooter/>
        </div>
        </>
    );
};

export default MyProfileSkeleton;