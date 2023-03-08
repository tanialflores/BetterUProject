import React, { useState } from "react";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import "./Levels.scss";
import level1 from "../../../../assets/icons/level1.png";
import level2 from "../../../../assets/icons/level2.png";
import level3 from "../../../../assets/icons/level3.png";
import level4 from "../../../../assets/icons/level4.png";
import level5 from "../../../../assets/icons/level5.png";
import level6 from "../../../../assets/icons/level6.png";
import level7 from "../../../../assets/icons/level7.png";
import Icono from "../../../../components/molecules/TableLevel/Icono/Icono";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import { Skeleton } from "primereact/skeleton";
import CardLevelSkeleton from "../../../../components/organisms/CardLevel/CardLevelSkeleton";

const LevelsSkeleton = () => {
    const data = [
        {
            id: 1,
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.",
            points: "22 de 30 puntos"
        }
    ];
    const dataTmp = [
        {
            id: 1,
            icono: level1,
            level: "Nivel 1",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 2,
            icono: level2,
            level: "Nivel 2",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 3,
            icono: level3,
            level: "Nivel 3",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 4,
            icono: level4,
            level: "Nivel 4",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 5,
            icono: level5,
            level: "Nivel 5",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 6,
            icono: level6,
            level: "Nivel 6",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 7,
            icono: level7,
            level: "Nivel 7",
            requeriments: "Comprar 3 experiencias",
        },
    ];

    const columns = [
        {
            id: 1,
            field: "icono",
            header: "Icono",
            w: "162px",
            body: Icono,
        },
        {
            id: 2,
            field: "level",
            header: "Nivel",
            w: "187px",
        },
        {
            id: 3,
            field: "requeriments",
            header: "Requerimientos",
            w: "187px",
        },
    ];

    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="Levels">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="TitleLevel">
                    <p><Skeleton width="70px" height="20px"></Skeleton></p>
                </div>
                <div className="ContainerLevel">
                {data.map((item)=>(
                    <>
                    
                    <div className="CardLevel">
                        <div className="ImageLevel">
                            <div className="Level">
                                <Skeleton width="86px" height="86px"></Skeleton>
                            </div>
                        </div>
                        <div className="Level">
                            <div className="TextLevel">
                                <Skeleton width="47px" height="16px"></Skeleton>
                            </div>
                        </div>
                        <div className="Details">
                            <div className="TitleDetails">
                                <Skeleton width="49px" height="12px"></Skeleton>
                            </div>
                            <div className="TextDetails">
                                <Skeleton width="279px" height="24px"></Skeleton>
                            </div>
                        </div>
                        <div className="LineWhite"></div>
                        <div className="ProgressBar">
                            <div className="TextPoints">
                                <Skeleton width="50px" height="11px"></Skeleton>
                            </div>
                            <Skeleton width="289px" height="8px"></Skeleton>
                        </div>
                    </div>
                    <div className="TitleLevels">
                        <div className="TextLevels"><Skeleton width="54px" height="16px"></Skeleton></div>
                        <div className="ButtonChange">
                            <Skeleton width="35px" height="35px"></Skeleton>
                        </div>
                    </div>

                    
                        <div className="ContainerCards">
                            <CardLevelSkeleton/>
                        </div> 
                    
                    
                    </>
                ))}
                </div>
            </div>
            <AuthFooter/>
        </div>
        </>
    );
};

export default LevelsSkeleton; 