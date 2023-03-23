// export default Carousel;
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Start from "../../../assets/icons/start.svg";

//Styles 🤞
import "./Carousel.scss";
import ReactStars from "../../atoms/ReactStars/ReactStars";

const Carousel = ({ object }) => {
    const [viewStart, setViewStart] = useState(5);
    const [desvice, setDesvice] = useState(screen.width);
    const [space, setSpace] = useState(0);
    const [margen, setMargen] = useState(0);
    const [group, setGroup] = useState(0)

    useEffect(() => {
        if (desvice <= 450) {
            setSpace(2);
            setGroup(2)

        } else {
            setSpace(3);
            setGroup(3)
        }
    }, [desvice]);

    return (
        <div className="container-carrousel-team">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // spaceBetween={54}
                slidesPerView={space}
                slidesPerGroup={group}
                navigation
            >
                {object.map((e, id) => (
                    <SwiperSlide id={e.id} className="parentCarr">
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
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
