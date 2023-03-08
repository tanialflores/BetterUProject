import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./CarruselHome.scss";
import ReactStars from "../ReactStars/ReactStars";

const CarruselHome = ({ object }) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
        >
            {object.map((e, id) => (
                <SwiperSlide id={e.id} key={id}>
                    <div className="laSLide">
                        <div className="Slide-container">
                            <img src={e.img} className="Slide-img" />
                        </div>
                        <div className="Slide-prices-container">
                            <h1 className="Slide-price">{e.price}</h1>
                            <p className="Slide-priceReal">{e.priceReal}</p>
                        </div>
                        <div className="Slide-descr-container">
                            <span className="Slide-descr">{e.title}</span>
                            <div className="numberlk">{e.number}</div>
                        </div>

                        <div className="Slide-score">
                           <ReactStars size={20} numberStar={5}/>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarruselHome;
