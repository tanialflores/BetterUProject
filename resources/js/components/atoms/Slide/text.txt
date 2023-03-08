
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Slide.scss";

// import required modules
import { Pagination, Navigation, A11y } from "swiper";
import { useState } from "react";

const Slide = ({ object }) => {
    const [openModalQu, setOpenModalQu] = useState(false);

    const OpenShareModal = (id) => {
        if (openModalQu != id) {
            setOpenModalQu(id);
        } else {
            setOpenModalQu(false);
        }
    };
    return (
        <Swiper
            direction={"vertical"}
            navigation
            spaceBetween={10}
            slidesPerView={6}
            slidesPerGroup={6}
            modules={[Navigation, A11y]}
            className="mySwiper"
        >
            {object.map((ques) => (
                <SwiperSlide className="slidepor" key={ques.id}>
                    <div className="host-secct-3-card" >
                        <p className="host-secct-3-question">{ques.question}</p>
                        <div
                            className="host-secct-3-plus"
                            onClick={() => OpenShareModal(ques.id)}
                        >
                            <img
                                src={ques.icon}
                                alt="Icon"
                                className="host-secct-3-Icon"
                            />
                        </div>

                        <div
                            className={`infoQuestion ${
                                openModalQu == ques.id && "closeModal"
                            }`}
                        >
                            {ques.respose}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slide;
