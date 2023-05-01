import React, { useEffect, useState } from "react";
import InputSearch from "../../../components/atoms/InputSearch/InputSearch";

import trastornoAlimenticio from "../../../assets/guest/trastornoAlimenticio.png";
import depresion from "../../../assets/guest/depresion.png";
import ansiedad from "../../../assets/guest/ansiedad.png";
import logoSinFondo from "../../../assets/guest/logoSinFondo.png"

import "./LandingPage.scss";
import { Skeleton } from "primereact/skeleton";

const LandingSkeleton = () => {

    const trastornos = [
        {
            id: 1,
            img: depresion,
            title: "Depresión",
            descriptions:
                "La depresión es una enfermedad que se caracteriza por una tristeza persistente y por la pérdida de interés en las actividades con las que normalmente se disfruta, así como por la incapacidad para llevar a cabo las actividades cotidianas, durante al menos dos semanas.",
        },
        {
            id: 2,
            img: ansiedad,
            title: "Ansiedad",
            descriptions:
                "La ansiedad es una emoción normal que se experimenta en situaciones en las que el sujeto se siente amenazado por un peligro externo o interno.",
        },
        {
            id: 3,
            img: trastornoAlimenticio,
            title: "Trastorno alimenticio",
            descriptions:
                "Los trastornos de la alimentación, también llamados trastornos de la conducta alimentaria, son enfermedades médicas graves con una influencia biológica que se caracterizan por alteraciones graves de las conductas alimentarias.",
        },
    ];


    return (
        <>
            <div className="LandingPage">
                <div className="subLandingPage">
                    <img
                        src={logoSinFondo}
                        alt="background"
                        className="sub-background"
                    />
                    <div className="sub-filter-img">
                        <InputSearch skeleton />
                        <Skeleton width="100%" height="111px" />
                    </div>
                </div>
                <div className="page-secct2">
                    {trastornos.map((item) => (
                        <div key={item.id} className="secct2-card">
                            <Skeleton className="secct-2-card-img" />
                            <Skeleton className="secct2-title" />
                            <Skeleton className="secct2-desc" />
                        </div>
                    ))}
                </div>
                <div className="secct-3">
                    <div className="secct-3-device" id="secct-3-device">
                        <Skeleton width="500px" height="550px" />
                    </div>
                    <div className="secct-3-container">
                        <div
                            style={{
                                marginLeft: 100,
                                display: "flex",
                                flexDirection: "column",
                                gap: 20,
                                alignItems: "center",
                            }}
                        >
                            <Skeleton
                                className="secct3-title"
                                width="250px"
                                height="25px"
                            />
                            <Skeleton
                                className="secct3-subTitle"
                                width="400px"
                                height="20px"
                            />
                            <Skeleton
                                width="800px"
                                height="20px"
                                className="secct3-subTitle"
                            />
                            <Skeleton
                                width="800px"
                                height="20px"
                                className="secct3-subTitle"
                            />
                            <Skeleton
                                width="800px"
                                height="20px"
                                className="secct3-subTitle"
                            />
                            <Skeleton
                                width="800px"
                                height="20px"
                                className="secct3-subTitle"
                            />
                            <Skeleton
                                width="800px"
                                height="20px"
                                className="secct3-subTitle"
                            />
                        </div>
                    </div>
                </div>
                <div className="secct4">
                    <div className="secct-4-body">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Skeleton width="600px" height="30px" />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 15,
                                alignItems: "center",
                                marginTop: 20,
                            }}
                        >
                            <Skeleton width="800px" height="30px" />
                            <Skeleton width="800px" height="30px" />
                            <Skeleton width="800px" height="30px" />
                            <Skeleton width="800px" height="30px" />
                        </div>
                    </div>

                    {/* Aqui es donde va el mapa */}
                    <div className="secct4-map">
                        <Skeleton width="100%" height="100%" />
                    </div>
                    {/* Aqui termina el mapa */}

                    <div className="secct404"></div>
                </div>
            </div>
        </>
    );
};

export default LandingSkeleton;
