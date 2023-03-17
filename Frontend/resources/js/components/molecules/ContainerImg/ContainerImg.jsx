import React, { useState } from "react";

//Styles
import "./ContainerImg.scss";

//Assets
import HeartLike from "./icons/heartLike.svg";
import HeartColor from "./icons/HeartColor.svg";
import { set } from "lodash";

const ContainerImg = ({ className, arrayImg, FirtsImg, liked, onClick }) => {

    const [changeImage, setChangeImage] = useState(FirtsImg)
    
    return (
        <div className={`ContainerImg ${className}`}>
            <div className="conta-left">
                <img src={changeImage} alt="" className="first-img" />
                {liked ? (
                    <img
                        src={HeartColor}
                        alt=""
                        className="HeartLike animation"
                        onClick={onClick}
                    />
                ) : (
                    <img
                        src={HeartLike}
                        alt=""
                        className="HeartLike"
                        onClick={onClick}
                    />
                )}
            </div>
            <div className="conta-right">
                {arrayImg.map((im, idx) => (
                    <div className="conta-img" key={idx}>
                        <img src={im.img} alt="" className="im-img" onClick={() => setChangeImage(im.img)}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContainerImg;
