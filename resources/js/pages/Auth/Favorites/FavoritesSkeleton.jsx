import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "../../../components/atoms/Search/Search";
import CardsHome from "../../../components/molecules/CardsHome/CardsHome";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";
import "./Favorites.scss";
import Vinedo4 from "../../../assets/Auth/vinedos4.jpg";
import Vinedo3 from "../../../assets/Auth/vinedo3.jpg";
import Vinedo2 from "../../../assets/Auth/vinedos2.jpg";
import Vinedo1 from "../../../assets/Auth/vinedos1.jpg";
import Premios from "../../../assets/Auth/premios.png";
import arrowUp from "../../../assets/Auth/arrowUpColorPink.svg";
import Ticket from "../../../assets/Auth/ticket.svg";
import Star from "../../../assets/icons/start.svg";
import Heart from "../../../assets/icons/heart.svg";
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import { useState } from "react";
import { useEffect } from "react";
import IconHeart from "../../../assets/icons/IconHeart.svg";
import { Skeleton } from "primereact/skeleton";

const FavoritesSkeleton = () => {
    const navigate = useNavigate();
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
    ]
    const [valueSearch, setValueSearch] = useState("")

    console.log(valueSearch, "holi")
    const [valueCards, setValueCards] = useState(Cards)

    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="Favorites">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="TitleFavorites">
                    <p>
                        <Skeleton width="89px" height="20px"></Skeleton>
                    </p>
                    <div className="IconHeart">
                        <Skeleton width="70px" height="70px"></Skeleton>
                    </div>
                </div>
                <div className="ContainerFavorites">
                    <div className="FavoritesSearch">
                        <Skeleton width="381px" height="40px"></Skeleton>
                    </div>
                    <div className="CardsFavorites">
                    {[...Array(3)].map((_, i) => (
                        <div className="Cards">
                            <Skeleton width="211px" height="218px"></Skeleton>
                            <div><Skeleton width="50px" height="15px"></Skeleton></div>
                            <div><Skeleton width="90px" height="15px"></Skeleton></div>
                            <div><Skeleton width="120px" height="15px"></Skeleton></div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <AuthFooter/>
        </div>
        </>
    )
}

export default FavoritesSkeleton;