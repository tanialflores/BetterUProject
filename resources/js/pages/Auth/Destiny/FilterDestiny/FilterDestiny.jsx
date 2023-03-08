import React from "react";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";

import Bg from "../../../../assets/Auth/filter_bg.png";
import arrowUp from "../../../../assets/Auth/arrowUpColorPink.svg";
import Premios from "../../../../assets/Auth/premios.png";
import Ticket from "../../../../assets/Auth/ticket.svg";
import Star from "../../../../assets/icons/start.svg";
import Heart from "../../../../assets/icons/heart.svg";
import Zas1 from "../../../../assets/Auth/zas1.png";
import s1 from "../../../../assets/Auth/s1.png";

import "./FilterDestiny.scss";
import { useNavigate, useParams } from "react-router-dom";
import Search from "../../../../components/atoms/Search/Search";
import Categorys from "../../../../components/molecules/Categorys/Categorys";
import CardsHome from "../../../../components/molecules/CardsHome/CardsHome";
import Back from "../../../../components/atoms/Back/Back";
import FilterBar from "../../../../components/organisms/FilterBar/FilterBar";

const FilterDestiny = () => {
    const { id } = useParams();

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
    ];

    const navigate = useNavigate();

    const openMenu = () => {
        document.querySelector(".container-black").classList.add("closeSider");
    };

    return (
        <>
          
            <div className="AuthView ">
                <div className="FilterDestiny">
                    <img src={Bg} alt="" className="bg-color-white" />
                    <div className="back-filters">
                        <Back onClick={() => navigate(`/destiny/show/${id}`)} />
                        <FilterBar onClick={() => openMenu()} />
                    </div>
                    <div className="card-filter">
                        <div className="fsecct1">
                            <div className="fsecct-1-icons-t">
                                <div className="ctn-img">
                                    <img
                                        src={s1}
                                        alt=""
                                        className="item-state-img"
                                    />
                                </div>
                                <div className="dateas-inof">
                                    <div className="title-state">{id}</div>
                                    <div className="fsecct-1-search">
                                        <Search placeholder={"Buscar"} />
                                    </div>
                                    <div className="fsecct-1-categorys">
                                        <label className="fsecct-1-label">
                                            Categorías
                                        </label>
                                        <Categorys ChangeColor filterItems />
                                    </div>
                                </div>
                            </div>
                            <div className="fsecct3">
                                {[...Array(10)].map((_, i) => (
                                    <CardsHome
                                        Cards={cards}
                                        displayNone={"none"}
                                        viewBtn
                                        viewElemnts
                                        rowRev={"row-reverse"}
                                        size={19}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <AuthFooter />
            </div>
        </>
    );
};

export default FilterDestiny;
