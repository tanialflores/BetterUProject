import React, { useEffect, useState } from "react";
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import Search from "../../../components/atoms/Search/Search";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";

//assets
import s1 from "../../../assets/Auth/s1.png";
import s2 from "../../../assets/Auth/s2.png";
import s3 from "../../../assets/Auth/s3.png";
import s4 from "../../../assets/Auth/s4.png";
import s5 from "../../../assets/Auth/s5.png";
import s6 from "../../../assets/Auth/s6.png";
import s7 from "../../../assets/Auth/s7.png";
import s8 from "../../../assets/Auth/s8.png";
import s9 from "../../../assets/Auth/s9.png";
import s10 from "../../../assets/Auth/s10.png";
import s11 from "../../../assets/Auth/s11.png";
import s12 from "../../../assets/Auth/s12.png";

import "./Destiny.scss";
import { useNavigate } from "react-router-dom";

const Destiny = () => {
    const statesVinedos = [
        {
            id: 1,
            img: s1,
            title: "Aguascalientes",
        },
        {
            id: 2,
            img: s2,
            title: "Durango",
        },
        {
            id: 3,
            img: s3,
            title: "Puebla",
        },
        {
            id: 4,
            img: s4,
            title: "Sonora",
        },
        {
            id: 5,
            img: s5,
            title: "San Luis Potosi",
        },
        {
            id: 6,
            img: s6,
            title: "Baja California",
        },
        {
            id: 7,
            img: s7,
            title: "Guanajuato",
        },
        {
            id: 8,
            img: s8,
            title: "Coahuila",
        },
        {
            id: 9,
            img: s9,
            title: "Queretaro",
        },
        {
            id: 10,
            img: s10,
            title: "Chihuahua",
        },
        {
            id: 11,
            img: s11,
            title: "Jalisco",
        },
        {
            id: 12,
            img: s12,
            title: "Zacatecas",
        },
    ];

    const [search, setSearch] = useState("");
    const [place, setPlace] = useState(statesVinedos);
    const navigate = useNavigate()

    useEffect(() => {
        const copyItem = [...statesVinedos];
        const array = copyItem.filter((i) =>
            i.title.toLowerCase().includes(search.toLowerCase())
        );
        if (array.length === 0 || search === "") {
            setPlace(statesVinedos);
        } else {
            setPlace(array);
        }
    }, [search]);

    useEffect(() => {
        if (place.length <= 4) {
            document.querySelector(".ssecct2").classList.add("newSecct-2");
            document.querySelector(".resp-ctn").classList.add("new-resp");
        } else {
            document.querySelector(".ssecct2").classList.remove("newSecct-2");
            document.querySelector(".resp-ctn").classList.remove("new-resp");
        }
    }, [place]);

    return (
        <>
          
            <div className="AuthView ">
                <div className="Destiny">
                    <div className="responsive">
                        <div className="search-hed">
                            <h1 className="hed-search">Destinos</h1>
                            <div className="inp-search">
                                <Search
                                    placeholder={"Buscar"}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="ssecct2">
                            <div className="resp-ctn">
                                {place.map((item) => (
                                    <div className="img-ctn" onClick={() => navigate(`show/${item.title}`)}>
                                        <img
                                            src={item.img}
                                            alt=""
                                            className="ste-img"
                                        />
                                        <label className="item-label">
                                            {item.title}
                                        </label>
                                    </div>
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

export default Destiny;
