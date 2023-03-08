import React from "react";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Styles 😂
import "./Carrusel.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const Carrusel = ({
    places,
    viewImg = false,
    viewButton = false,
    className,
}) => {

    const navigate = useNavigate()

    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
        >
            {places.map((plc) => (
                <SwiperSlide className="Slidemn1" id={plc.id}>
                    {/* Este carrusel se hizo para una seccion especifica  */}

                    {viewImg && (
                        <div className="slide-bgff">
                            <div className="slide-containe-img">
                                {plc.img && (
                                    <img
                                        src={plc.img}
                                        alt="Phone"
                                        className="slide-img"
                                    />
                                )}
                            </div>
                        </div>
                    )}

                    <div className={`Slide-body ${className}`}>
                        <div className="div-hidden"></div>
                        <div>
                            <h1 className="slide-body-title">{plc.title}</h1>
                            <p className="slide-body-descrip">
                                {plc.description}
                            </p>
                        </div>

                        {viewButton && (
                            <div className="slide-btn-container">
                                <div className="slide-btn">
                                    <Button
                                        btnTitle={"¡Explorar!"}
                                        className={"border"}
                                        onClick={() => navigate("/login")}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="div-hidden2"></div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carrusel;
