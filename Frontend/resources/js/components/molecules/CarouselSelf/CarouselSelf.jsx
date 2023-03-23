import React, { useRef } from "react";

//Styles
import "./CarouselSelf.scss";

//Assets
import ArrowRigth from "./icon/arrow-rigth.svg";
import ArrowLeft from "./icon/arrow-left.svg";

const CarouselSelf = ({ children }) => {
    const myRef = useRef();

    const Right = () => {
        myRef.current.scrollLeft += 268;
    };
    const Left = () => {
        myRef.current.scrollLeft -= 310;
    };
    return (
        <div className="CarouselSelf">
            <div className="Container-carousel" ref={myRef}>{children}</div>
            <div className="Right" onClick={() => Right()}>
                <img src={ArrowRigth} alt="" className="next"/>
            </div>
            <div className="Right Aleft" onClick={() => Left()}>
                <img src={ArrowLeft} alt="" className="prev"/>
            </div>
        </div>
    );
};

export default CarouselSelf;
