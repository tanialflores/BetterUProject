import React, { useEffect, useRef, useState } from "react";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";

import "./Experiences.scss";

//Asstes
import arrowUp from "../../../assets/Auth/arrowUpColorPink.svg";
import Premios from "../../../assets/Auth/premios.png";
import Ticket from "../../../assets/Auth/ticket.svg";
import Star from "../../../assets/icons/start.svg";
import Heart from "../../../assets/icons/heart.svg";
import Zas1 from "../../../assets/Auth/zas1.png";
import Zas2 from "../../../assets/Auth/zas2.png";
import Zas3 from "../../../assets/Auth/zas3.png";
import Zas4 from "../../../assets/Auth/zas4.png";
import Zas5 from "../../../assets/Auth/zas5.png";
import Zas6 from "../../../assets/Auth/zas6.png";
import Zas7 from "../../../assets/Auth/zas7.png";
import Zas8 from "../../../assets/Auth/zas8.png";
import Zas9 from "../../../assets/Auth/zas9.png";
import Zas10 from "../../../assets/Auth/zas10.png";
import Zas11 from "../../../assets/Auth/zas11.png";
import Zas12 from "../../../assets/Auth/zas12.png";
import Zas13 from "../../../assets/Auth/zas13.png";
import Zas14 from "../../../assets/Auth/zas14.png";
import Zas15 from "../../../assets/Auth/zas15.png";
import Zas16 from "../../../assets/Auth/zas16.png";
import BgWhite from "../../../assets/Auth/bg-white.png";

import Search from "../../../components/atoms/Search/Search";
import Categorys from "../../../components/molecules/Categorys/Categorys";
import CardsHome from "../../../components/molecules/CardsHome/CardsHome";
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import FilterBar from "../../../components/organisms/FilterBar/FilterBar";
import CarouselSelf from "../../../components/molecules/CarouselSelf/CarouselSelf";
import { useNavigate } from "react-router-dom";

const Experiences = () => {
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
            img: Zas2,
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
            img: Zas3,
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
            img: Zas4,
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
            img: Zas5,
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
            img: Zas6,
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
            img: Zas7,
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
            img: Zas8,
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
            id: 9,
            img: Zas9,
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
            id: 10,
            img: Zas10,
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
            id: 11,
            img: Zas11,
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
            id: 12,
            img: Zas12,
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
            id: 13,
            img: Zas13,
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
            id: 14,
            img: Zas14,
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
            id: 15,
            img: Zas15,
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
            id: 16,
            img: Zas16,
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

    const [viewCards, setViewCards] = useState(cards);
    const navigate = useNavigate()
    const [searhInput, setSearhInput] = useState("");

    useEffect(() => {
        const copyArray = [...viewCards];
        const card = copyArray.filter((item) =>
            item.title.toLowerCase().includes(searhInput.toLowerCase())
        );
        if (card.length == 0 || searhInput == "") {
            setViewCards(cards);
        } else {
            setViewCards(card);
        }
    }, [searhInput]);

    const openMenu = () => {
        document.querySelector(".container-black").classList.add("closeSider");
    };

    return (
        <>
            <div className="AuthView ">
                <div className="Experiences">
                    <div className="bg-white">
                        <img src={BgWhite} alt="" className="sub-bg" />
                    </div>
                    <div className="nm-title">Experiencias</div>
                    <div className="csecct-card">
                        <div className="esecct1">
                            <div className="esecct-1-hover" onClick={() => navigate("view")}>
                                <div className="esecct-1-ctn-icon">
                                    <img
                                        src={Premios}
                                        alt=""
                                        className="icon-hover"
                                    />
                                </div>
                                <label className="label-hidden">
                                    Ver recomendados por los alkimistas
                                </label>
                            </div>

                            <FilterBar
                                className={"Filter"}
                                onClick={() => openMenu()}
                            />
                            <div className="esecct-1-ctn">
                                <Search
                                    placeholder={"Buscar"}
                                    onChange={(e) =>
                                        setSearhInput(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="esecct2">
                            <div className="esecct-2-catgorys">
                                <label className="label-text">Categorías</label>
                                <CarouselSelf>
                                    <Categorys filterItems ChangeColor />
                                </CarouselSelf>
                             
                            </div>
                            <div className="eseect-2-cards">
                                <CardsHome
                                    Cards={viewCards}
                                    viewElemnts
                                    displayNone={"none"}
                                    rowRev={"row-reverse"}
                                    viewBtn
                                    size={19}
                                    nextView={() => navigate("/experiences/show")}
                                    
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <AuthFooter />
            </div>
        </>
    );
};

export default Experiences;
