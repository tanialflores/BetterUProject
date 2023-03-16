import React, { useEffect, useState } from "react";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";
import Lupa from "../../../assets/icons/lupa.svg";
import ArrowDown from "../../../assets/Auth/arrowDownBlack.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAxiosGuest, errorResponse } from "../../../utilities/Axios";

//styles
import "./Home.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Button from "../../../components/atoms/Button/Button";
import Categorys from "../../../components/molecules/Categorys/Categorys";
import CardsHome from "../../../components/molecules/CardsHome/CardsHome";

//Assets 😂
import arrowUp from "../../../assets/Auth/arrowUpColorPink.svg";
import Premios from "../../../assets/Auth/premios.png";
import Ticket from "../../../assets/Auth/ticket.svg";
import Vinedo4 from "../../../assets/Auth/vinedos4.jpg";
import Vinedo3 from "../../../assets/Auth/vinedo3.jpg";
import Vinedo2 from "../../../assets/Auth/vinedos2.jpg";
import Vinedo1 from "../../../assets/Auth/vinedos1.jpg";
import Star from "../../../assets/icons/start.svg";
import Heart from "../../../assets/icons/heart.svg";
import BannerCava from '../../../assets/Auth/bannerCava.jpg'

import Exp2 from "../../../assets/Auth/exp2.jpg";
import Exp3 from "../../../assets/Auth/exp3.jpg";
import Exp4 from "../../../assets/Auth/exp4.jpg";
import Exp5 from "../../../assets/Auth/exp5.jpg";
import Exp6 from "../../../assets/Auth/exp6.jpg";
import Exp7 from "../../../assets/Auth/exp7.jpg";
import Exp8 from "../../../assets/Auth/exp8.jpg";

import Ga1 from "../../../assets/Auth/ga1.jpg";
import Ga2 from "../../../assets/Auth/ga2.jpg";
import Ga3 from "../../../assets/Auth/ga3.jpg";
import Ga4 from "../../../assets/Auth/ga4.jpg";
import Ga5 from "../../../assets/Auth/ga5.jpg";
import Ga6 from "../../../assets/Auth/ga6.jpg";
import Ga7 from "../../../assets/Auth/ga1.jpg";
import Ga8 from "../../../assets/Auth/ga2.jpg";

import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import CarouselSelf from "../../../components/molecules/CarouselSelf/CarouselSelf";

const Home = () => {
    const [viewMenu, setViewMenu] = useState(false);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()
    const getDataHome = async() =>{
        const resThen = (res) =>{
            setCategories(res.data.data.categories)
        }
        getAxiosGuest("api/v1/mobile/experiences/home", resThen, errorResponse)
    }
    console.log(categories)

    const [listThing, setListThing] = useState([
        {
            id: 1,
            things: "Avión",
            check: false,
        },
        {
            id: 2,
            things: "Motocicleta",
            check: false,
        },
        {
            id: 3,
            things: "Museos",
            check: false,
        },
        {
            id: 4,
            things: "Globo",
            check: false,
        },
        {
            id: 5,
            things: "Tren",
            check: false,
        },
        {
            id: 6,
            things: "Avión",
            check: false,
        },
        {
            id: 7,
            things: "Motocicleta",
            check: false,
        },
        {
            id: 8,
            things: "Museos",
            check: false,
        },
        {
            id: 9,
            things: "Globo",
            check: false,
        },
        {
            id: 10,
            things: "Tren",
            check: false,
        },
        {
            id: 11,
            things: "Motocicleta",
            check: false,
        },
        {
            id: 12,
            things: "Motocicleta",
            check: false,
        },
    ]);

    const Cards = [
        {
            id: 1,
            img: Vinedo4,
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
            img: Vinedo3,
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
            img: Vinedo2,
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
            img: Vinedo1,
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
    ];

    const CardsExp = [
        {
            id: 1,
            img: Vinedo4,
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
            img: Exp2,
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
            img: Exp3,
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
            img: Exp4,
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
            img: Exp5,
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
            id: 6,
            img: Exp6,
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
            id: 7,
            img: Exp7,
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
            id: 8,
            img: Exp8,
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
    ];

    const CardsGas = [
        {
            id: 1,
            img: Ga1,
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
            img: Ga2,
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
            img: Ga3,
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
            img: Ga4,
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
            img: Ga5,
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
            id: 6,
            img: Ga6,
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
            id: 7,
            img: Ga7,
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
            id: 8,
            img: Ga8,
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
    ];

    const banners = [
        {
            id: 1,
            img: BannerCava
        },
        {
            id: 2,
            img: Exp2
        },
        {
            id: 3,
            img: Exp4
        },
    ]

    useEffect(()=>{
        getDataHome()
    },[]);

    return (
        <>
          

            <div className="AuthView">
                <div className="Home">
                    <div className="div-hidden"></div>
                    <div className="Card-categorys">
                        <div className="menu-card">
                            <div className="sh-secct1">
                                <div className="search-category">
                                    <input
                                        type="text"
                                        className="search-input"
                                        placeholder="¿Cuál es tu siguiente destino?"
                                    />
                                    <img src={Lupa} alt="" className="sh-lupa" />
                                </div>
                                <div className="sh-opt">
                                    <div
                                        className="sh-select"
                                        onClick={() => setViewMenu(!viewMenu)}
                                    >
                                        Categoría
                                        <img
                                            src={ArrowDown}
                                            alt=""
                                            className="arrowDwn"
                                        />
                                    </div>
                                    <div className="sh-ctn-btn">
                                        <Button
                                            btnTitle={"Buscar"}
                                            className="linearColor"
                                        />
                                    </div>

                                    <div
                                        className={`sh-list-categ ${
                                            viewMenu && "OpenMenu"
                                        }`}
                                    >
                                        {listThing.map((item, idx) => {
                                            return (
                                                <div
                                                    className="things-list"
                                                    key={idx}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="input-check-box"
                                                    />
                                                    <label className="label-text">
                                                        {item.things}
                                                    </label>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="subMenu-cards">
                                <div className="msecct1">
                                    <label className="msecct1-title">
                                        Categorías
                                    </label>
                                    <CarouselSelf>
                                        <Categorys />
                                    </CarouselSelf>
                                </div>
                                {categories.map((category)=>{
                                    console.log(category.category)
                                    // console.log(category.experiences.length)
                                    if(category?.experiences?.length > 0)
                                    return(
                                        <div className="Smsecct2">
                                            <div className="msecct-2-container">
                                                <label className="msecct-2-tile">
                                                    {category?.category?.name}
                                                </label>
                                                <NavLink
                                                    className="msecct-2-ver"
                                                    to="/experiences"
                                                >
                                                    Ver más
                                                </NavLink>
                                            </div>
                                            <div className="msecct2">
                                                <CardsHome
                                                    displayNone={"none"}
                                                    rowRev="row-reverse"
                                                    viewElemnts
                                                    Cards={category?.experiences}
                                                    viewBtn
                                                    size={19}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* <div className="Smsecct2">
                                    <div className="msecct-2-container">
                                        <label className="msecct-2-tile">
                                            Explora por viñedos
                                        </label>
                                        <NavLink
                                            className="msecct-2-ver"
                                            to="/experiences"
                                        >
                                            Ver más
                                        </NavLink>
                                    </div>

                                    <div className="msecct2">
                                        {[...Array(2)].map((_, i) => (
                                            <CardsHome
                                                displayNone={"none"}
                                                rowRev="row-reverse"
                                                viewElemnts
                                                Cards={Cards}
                                                viewBtn
                                                size={19}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="Smsecct2">
                                    <div className="msecct-2-container">
                                        <label className="msecct-2-tile">
                                            Explora por Experiencia
                                        </label>
                                        <NavLink
                                            className="msecct-2-ver"
                                            to="/experiences"
                                        >
                                            Ver más
                                        </NavLink>
                                    </div>

                                    <div className="msecct2">
                                        <CardsHome
                                            displayNone={"none"}
                                            rowRev="row-reverse"
                                            viewElemnts
                                            Cards={CardsExp}
                                            viewBtn
                                            size={19}
                                        />
                                    </div>
                                </div>
                                <div className="Smsecct2">
                                    <div className="msecct-2-container">
                                        <label className="msecct-2-tile">
                                            Explora por gastronomia
                                        </label>
                                        <NavLink
                                            className="msecct-2-ver"
                                            to="/experiences"
                                        >
                                            Ver más
                                        </NavLink>
                                    </div>

                                    <div className="msecct2">
                                        <CardsHome
                                            displayNone={"none"}
                                            rowRev="row-reverse"
                                            Cards={CardsGas}
                                            viewBtn
                                            size={19}
                                        />
                                    </div>
                                </div> */}
                                <div className="cnt-banners">
                                    <div className="banners">
                                        {/* <Swiper
                                            modules={[Pagination, A11y, Navigation, Scrollbar]}
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            pagination={{ clickable: true }}
                                        >
                                            {banners.map((bn, idx) => (
                                                <SwiperSlide className="Slidemn1-bh" key={idx}>
                                                    <img src={bn.img} alt="" className="class-banner" />
                                                </SwiperSlide>
                                            ))}

                                        </Swiper> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AuthFooter />
            </div>
        </>
    );
};

export default Home;
