import React, { useEffect, useState } from "react";
import InputSearch from "../../../components/atoms/InputSearch/InputSearch";

import Apoyo from "../../../assets/icons/apoyo.svg";
import Grape from "../../../assets/icons/grape.svg";
import Shape from "../../../assets/icons/Shape.svg";
import Pago from "../../../assets/icons/pago.svg";
import Vino from "../../../assets//icons/vino.png";

import "./LandingPage.scss";
import { Skeleton } from "primereact/skeleton";

const LandingSkeleton = () => {

    const helpTravel = [
        {
            id: 1,
            img: Grape,
            title: "Viñedos Mexicanos",
            descriptions:
                "Encuentra cientos de experiencias de enoturismo en todo México",
        },
        {
            id: 2,
            img: Shape,
            title: "Arma tu ruta",
            descriptions:
                "Comienza a crear tus propias rutas con nuestras sugerencias de experiencias cercanas a tu destino",
        },
        {
            id: 3,
            img: Pago,
            title: "Pago seguro",
            descriptions:
                "Reserva y paga desde la app con un proceso fácil y confiable",
        },
        {
            id: 4,
            img: Apoyo,
            title: "Soporte",
            descriptions:
                "Si necesitas ayuda nuestros expertos estarán disponibles todo el tiempo para guiarte a los mejores destinos",
        },
    ];


    return (
        <>
            <div className="LandingPage">
                <div className="subLandingPage">
                    <img
                        src={Vino}
                        alt="background"
                        className="sub-background"
                    />
                    <div className="sub-filter-img">
                        <InputSearch skeleton />
                        <Skeleton width="100%" height="111px" />
                    </div>
                </div>
                <div className="page-secct2">
                    {helpTravel.map((item) => (
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
