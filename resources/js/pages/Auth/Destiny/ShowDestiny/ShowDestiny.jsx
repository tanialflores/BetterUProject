import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Styles 🤣
import "./ShowDestiny.scss";

//Componets
import CardsHome from "../../../../components/molecules/CardsHome/CardsHome";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";

//assets
import Volver from "../../../../assets/Auth/volver.png";
import Aguascalientes from "../../../../assets/Auth/aguascalientes.png";
import Ag1 from "../../../../assets/Auth/ag1.jpeg";
import Ag2 from "../../../../assets/Auth/ag2.jpeg";
import Ag3 from "../../../../assets/Auth/ag3.jpeg";
import arrowUp from "../../../../assets/Auth/arrowUpColorPink.svg";
import Premios from "../../../../assets/Auth/premios.png";
import Ticket from "../../../../assets/Auth/ticket.svg";
import StarColor from "../../../../assets/Auth/star.svg";
import Zas1 from "../../../../assets/Auth/zas1.png";
import Star from "../../../../assets/icons/start.svg";
import Heart from "../../../../assets/icons/heart.svg";
import Button from "../../../../components/atoms/Button/Button";

const ShowDestiny = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const cards = [
        {
            id: 1,
            img: Zas1,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 5,
            heart: Heart,
            textVino: "Vino tinto",
        },
        {
            id: 2,
            img: Zas1,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 1,
            heart: Heart,
            textVino: "Vino tinto",
        },
        {
            id: 3,
            img: Zas1,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 5,
            heart: Heart,
            textVino: "Vino tinto",
        },
        {
            id: 4,
            img: Zas1,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 3,
            heart: Heart,
            textVino: "Vino tinto",
        },
        {
            id: 5,
            img: Zas1,
            price: "$500.00",
            priceReal: "$700.00",
            title: "Paseo matutino",
            value: "(1542)",
            reward: Premios,
            arrow: arrowUp,
            points: "12p",
            ticket: Ticket,
            star: Star,
            numberStar: 5,
            heart: Heart,
            textVino: "Vino tinto",
        },
    ];

    const states = [
        {
            id: 1,
            state: "Aguascalientes",
            video: (
                <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/1LSpKtOJwhk"
                    title="Ruta del Vino Aguascalientes 2021"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullscreen
                ></iframe>
            ),
            map: Aguascalientes,
            info: (
                <div>
                    Aguascalientes es un estado en el centro norte de México. Es
                    conocido por sus viñedos y fuentes termales, como los Baños
                    Termales de Ojocaliente, cerca de la capital del estado,
                    Aguascalientes. La ciudad colonial fue una parada en la ruta
                    comercial del Camino Real de Tierra Adentro y un centro de
                    trenes importante, lo que se destaca en el complejo de
                    trenes Tres Centurias. En la Plaza de Toros se realizan
                    corridas de toros durante el gran festival anual de la Feria
                    de San Marcos.
                </div>
            ),

            localt: "Sureste de México",
            alt: "Media 1888 m s. n. m.",
            horar: "13:04 (Hora actual) GMT-5",
            capital: id,
            imgs: [
                {
                    id: 1,
                    img: Ag1,
                },
                {
                    id: 2,
                    img: Ag2,
                },
                {
                    id: 3,
                    img: Ag3,
                },
            ],
        },
    ];

    const [viewSate, setViewSate] = useState(states);

    //Este useEffect que esta comentado es el responsable de saber que estado esta visitando el usuario.

    //No elimines este useEffect, si no eres fleexitobbsito

    // useEffect(() => {
    //     const copyItem = [...states];
    //     const viewArray = copyItem.filter((item) => item.state === id);
    //     if (viewArray) {
    //         setViewSate(viewArray);
    //     } else {
    //         console.log("No encontre el estado");
    //     }
    // }, [id]);

    return (
        <>
          
            <div className="AuthView ">
                <div className="ShowDestiny">
                    <div className="back-title">
                        <div
                            className="arrow-back-cnt"
                            onClick={() => navigate("/destiny")}
                        >
                            <img src={Volver} alt="" className="arrow-back" />
                        </div>
                        <h1 className="tile-id">{id}</h1>
                        <div className="viewExpe" onClick={() => navigate("filter")}>
                            <label className="view-label">Ver experiencias</label>
                                <img src={StarColor} alt="" className="star-color"/>
                        </div>
                    </div>
                    <div className="show-body">
                        <div className="body-card">
                            {viewSate.map((sts) => {
                                return (
                                    <>
                                        <div className="csecct-1">
                                            <div className="csecct-1-video">
                                                {sts.video}
                                            </div>
                                            <div className="csecct-1-states">
                                                <div className="csecct-1-map">
                                                    <img
                                                        src={Aguascalientes}
                                                        alt=""
                                                        className="state"
                                                    />
                                                </div>
                                                <div className="csecct-1-in-loc">
                                                    <div className="csecct-1-info">
                                                        {sts.info}
                                                    </div>
                                                    <div className="csecct-1-location">
                                                        <label>
                                                            <b>
                                                                Localización:{" "}
                                                            </b>
                                                            {sts.localt}
                                                        </label>
                                                        <label>
                                                            <b>Altitud: </b>
                                                            {sts.alt}
                                                        </label>
                                                        <label>
                                                            <b>
                                                                Huso horario:{" "}
                                                            </b>
                                                            {sts.horar}
                                                        </label>
                                                        <label>
                                                            <b>Capital: </b>
                                                            {sts.capital}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="csecctx2">
                                            <Swiper
                                                modules={[Navigation]}
                                                spaceBetween={0}
                                                slidesPerView={1}
                                                navigation
                                            >
                                                {sts.imgs.map((im) => (
                                                    <SwiperSlide key={im.id}>
                                                        <div className="CarruselUses">
                                                            <img
                                                                src={im.img}
                                                                alt=""
                                                                className="uses-imgs"
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                        <div className="csecctx3">
                                            <div className="csecct-3-top">
                                                Top 10
                                                <p className="csecctx-3-p">
                                                    No pierdas la oportunidad de
                                                    probar las experiencias y
                                                    productos que ofrece este
                                                    estado
                                                </p>
                                            </div>
                                            <div className="cseccxt-3-cards">
                                                <CardsHome
                                                    Cards={cards}
                                                    viewElemnts
                                                    displayNone={"none"}
                                                    rowRev={"row-reverse"}
                                                    viewBtn
                                                    size={19}
                                                />
                                            </div>
                                            <div className="btn-ctn-f">
                                                <Button
                                                    btnTitle={
                                                        "Ver experiencias en este Estado"
                                                    }
                                                    className={"degradado"}
                                                />
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <AuthFooter />
            </div>
        </>
    );
};

export default ShowDestiny;
