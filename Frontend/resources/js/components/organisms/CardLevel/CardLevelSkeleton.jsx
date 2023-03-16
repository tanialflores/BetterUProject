import React from "react";
import "./CardLevel.scss";
import level1 from "../../../assets/icons/level1.png";
import level2 from "../../../assets/icons/level2.png";
import level3 from "../../../assets/icons/level3.png";
import level4 from "../../../assets/icons/level4.png";
import level5 from "../../../assets/icons/level5.png";
import level6 from "../../../assets/icons/level6.png";
import level7 from "../../../assets/icons/level7.png";
import level8 from "../../../assets/icons/level8.png";
import level9 from "../../../assets/icons/level9.png";
import { Skeleton } from "primereact/skeleton";

const CardLevelSkeleton = () => {

    const data = [
        {
            id: 1,
            title: "Nivel 1",
            image: level1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem...",
        },
        {
            id: 2,
            title: "Nivel 2",
            image: level2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem...",
        },
        {
            id: 3,
            title: "Nivel 3",
            image: level3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem...",
        },
        {
            id: 4,
            title: "Nivel 4",
            image: level4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem...",
        },
        {
            id: 5,
            title: "Nivel 5",
            image: level5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem...",
        },
        {
            id: 6,
            title: "Nivel 6",
            image: level6,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem...",
        },
        {
            id: 7,
            title: "Nivel 7",
            image: level7,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem...",
        },
        {
            id: 8,
            title: "Nivel 8",
            image: level8,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem...",
        },
        {
            id: 9,
            title: "Nivel 9",
            image: level9,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem...",
        },
    ]


    return(
        <>
        {data.map(()=>(
            <div className="cnt-level">
                <label className="Title">
                    <Skeleton width="47px" height="16px"></Skeleton>
                </label>
                <div className="ContainerImage">
                    <div className="Image-e">
                        <Skeleton width="50px" height="50px"></Skeleton>
                    </div>
                </div>
                <div className="ContDetails">
                    <label className="TextDetails"><Skeleton width="49px" height="12px"></Skeleton></label>
                    <div className="Description"><Skeleton width="216px" height="22px"></Skeleton></div>
                </div>
            </div>
        ))}
        </>
    );
};

export default CardLevelSkeleton;