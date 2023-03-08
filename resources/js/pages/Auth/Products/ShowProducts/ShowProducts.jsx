import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "primereact/progressbar";

//Componentes
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import Back from "../../../../components/atoms/Back/Back";
import ContainerImg from "../../../../components/molecules/ContainerImg/ContainerImg";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import Button from "../../../../components/atoms/Button/Button";
import ReactStars from "../../../../components/atoms/ReactStars/ReactStars";

//Assets
import ps1 from "../../../../assets/Auth/ps1.png";
import ps2 from "../../../../assets/Auth/ps2.png";
import ps3 from "../../../../assets/Auth/ps3.png";
import ps4 from "../../../../assets/Auth/ps4.png";
import ps5 from "../../../../assets/Auth/ps5.png";
import ps6 from "../../../../assets/Auth/ps6.png";

import Sp1 from "../../../../assets/Auth/sp1.svg";
import Sp2 from "../../../../assets/Auth/sp2.svg";
import Sp3 from "../../../../assets/Auth/sp3.svg";
import Sp4 from "../../../../assets/Auth/sp4.svg";
import Sp5 from "../../../../assets/Auth/sp5.svg";
import Sp6 from "../../../../assets/Auth/sp6.svg";

import Car from "../../../../assets/Auth/carCombi.png";
import F7 from "../../../../assets/icons/f7.svg";
import F8 from "../../../../assets/icons/f8.svg";

import I1 from "../../../../assets/Auth/i1.png";
import I2 from "../../../../assets/Auth/i2.png";
import I3 from "../../../../assets/Auth/i3.png";
import I4 from "../../../../assets/Auth/i4.png";
import I5 from "../../../../assets/Auth/i5.png";

import Cartera from "../../../../assets/Auth/cpnk.svg";
import Uplevel from "../../../../assets/Auth/upLevel.svg";

import arrowUp from "../../../../assets/Auth/arrowUpColorPink.svg";
import Premios from "../../../../assets/Auth/premios.png";
import Ticket from "../../../../assets/Auth/ticket.svg";
import Star from "../../../../assets/icons/start.svg";
import Heart from "../../../../assets/icons/heart.svg";

import ShareSmall from "../../../../assets/Auth/shareSmall.svg";
import Pdf from "../../../../assets/Auth/pdf.svg";

import Sh1 from "../../../../assets/Auth/sh1.png";
import Sh2 from "../../../../assets/Auth/sh2.png";
import Sh3 from "../../../../assets/Auth/sh3.png";
import Sh4 from "../../../../assets/Auth/sh4.png";
import Sh5 from "../../../../assets/Auth/sh5.png";
import Sh6 from "../../../../assets/Auth/sh6.png";
import Sh7 from "../../../../assets/Auth/sh7.png";
import Sh8 from "../../../../assets/Auth/sh8.png";

//Styles
import "./ShowProducts.scss";
import CardsHome from "../../../../components/molecules/CardsHome/CardsHome";

const ShowProducts = () => {
    const arrayImg = [
        {
            id: 1,
            img: ps1,
        },
        {
            id: 2,
            img: ps2,
        },
        {
            id: 3,
            img: ps3,
        },
        {
            id: 4,
            img: ps4,
        },
        {
            id: 4,
            img: ps5,
        },
        {
            id: 5,
            img: ps6,
        },
    ];

    const datas = [
        {
            id: 1,
            title: "Vino tinto",
            price: "$500.00",
            star: 3.5,
            comment: "(1512)",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.",
            titleCategory: "Categorías",
            categorys: [
                {
                    id: 1,

                    icon: F7,
                    content: "Camping",
                },
            ],
            titleSubCategorys: "Subcategorías",
            subCategorys: [
                {
                    id: 1,

                    icon: F7,
                    content: "Camping",
                },
                {
                    id: 2,
                    icon: F8,
                    content: "Viaje a pie",
                },
            ],
            titleAnfintrion: "Anfitrión",
            anfintriones: [
                {
                    id: 1,
                    img: Car,
                    title: "Travel Tours",
                    lenguages: "Inglés/Español",
                },
            ],
        },
    ];

    const services = [
        {
            id: 1,
            title: "servicios",
            options: [
                {
                    id: 1,
                    icon: Sp1,
                    txt: "Ecoexperiencia",
                },
                {
                    id: 2,
                    icon: Sp2,
                    txt: "Tienda de regalos",
                },
                {
                    id: 3,
                    icon: Sp3,
                    txt: "Deporte",
                },
                {
                    id: 4,
                    icon: Sp4,
                    txt: "Servicio de alojamiento",
                },
                {
                    id: 5,
                    icon: Sp5,
                    txt: "Desayuno incluido",
                },
                {
                    id: 6,
                    icon: Sp6,
                    txt: "Al aire libre",
                },
            ],
        },
    ];

    const opiniones = [
        {
            id: 1,
            numberstar: 4.0,
            opinions: "1002",
            points: [
                {
                    id: 1,
                    txt: "Excelente",
                    number: 1500,
                },
                {
                    id: 2,
                    txt: "Muy bien",
                    number: 1000,
                },
                {
                    id: 3,
                    txt: "Normal",
                    number: 500,
                },
                {
                    id: 4,
                    txt: "Malo",
                    number: 200,
                },
                {
                    id: 6,
                    txt: "Pésimo",
                    number: 98,
                },
            ],
        },
    ];

    const chat = [
        {
            id: 1,
            img: I1,
            name: "Hattie Rivera",
            numberStar: 5,
            date: "12/16/2021",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
            adju: [
                {
                    id: 1,
                    img: I3,
                },
                {
                    id: 2,
                    img: I4,
                },
                {
                    id: 3,
                    img: I5,
                },
            ],
        },
        {
            id: 2,
            img: I2,
            name: "Mabelle Mendoza",
            numberStar: 4.5,
            date: "12/16/2021",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        },
        {
            id: 3,
            img: I2,
            name: "Ricardo Pearson",
            numberStar: 2,
            date: "12/16/2021",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        },
        {
            id: 4,
            img: I2,
            name: "Mabelle Mendoza",
            numberStar: 1.5,
            date: "12/16/2021",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        },
    ];

    const cards = [
        {
            id: 1,
            img: Sh1,
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
            img: Sh2,
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
            img: Sh3,
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
            img: Sh4,
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
            img: Sh5,
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
            img: Sh6,
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
            img: Sh7,
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
            img: Sh8,
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

    const navigate = useNavigate();
    const [viewLiked, setViewLiked] = useState(false);

    return (
        <>
            <AuthHeader seeCar/>
            <div className="AuthView ">
                <div className="ShowProductsx">
                    <div className="abs-bg">
                        <div className="abs-white"></div>
                    </div>
                    <div className="hsecct-back">
                        <Back onClick={() => navigate("/products")} />
                    </div>
                    <div className="card-shos-id">
                        <ContainerImg
                            arrayImg={arrayImg}
                            FirtsImg={ps1}
                            onClick={() => setViewLiked(!viewLiked)}
                            liked={viewLiked}
                        />
                        <div className="id-presentation">
                            <label className="id-title">Presentación</label>
                            <div className="tabs-btns">
                                <button className="cont-btn">750 ml</button>
                                <button className="cont-btn middle">1 L</button>
                                <button className="cont-btn">6 botellas</button>
                            </div>
                        </div>
                        <div className="btns-salex">
                            <Button
                                btnTitle={"Agregar al carrito"}
                                className={"white"}
                            />
                            <Button btnTitle={"Comprar"} className={"solid"} />
                        </div>
                        <div className="card-bodyy">
                            <div className="btns-shares">
                                <div className="shareS">
                                    <img
                                        src={ShareSmall}
                                        alt=""
                                        className="icon-sahre"
                                    />
                                </div>
                                <div className="shareS">
                                    <img
                                        src={Pdf}
                                        alt=""
                                        className="icon-sahre"
                                    />
                                </div>
                            </div>
                            {datas.map((dt) => (
                                <>
                                    <div className="first-block">
                                        <div className="block-one">
                                            <label className="one-title">
                                                {dt.title}
                                            </label>
                                            <h1 className="one-price">
                                                {dt.price}
                                            </h1>
                                        </div>
                                        <div className="block-two">
                                            <ReactStars
                                                numberStar={dt.star}
                                                size={25}
                                            />
                                            <label className="one-comment">
                                                {dt.comment}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="second-block">
                                        {dt.description}
                                    </div>
                                    <div className="third-block">
                                        <div className="block-as">
                                            <label className="title3-category">
                                                {dt.titleCategory}
                                            </label>
                                            <div className="ctn-tick">
                                                {dt.categorys.map(
                                                    (ctg, idx) => (
                                                        <div
                                                            className="block-categorys"
                                                            key={idx}
                                                        >
                                                            <img
                                                                src={ctg.icon}
                                                                alt=""
                                                                className="ctg-icon cat"
                                                            />
                                                            {ctg.content}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div className="block-as">
                                            <label className="title3-category">
                                                {dt.titleSubCategorys}
                                            </label>
                                            <div className="ctn-tick">
                                                {dt.subCategorys.map(
                                                    (sb, id) => (
                                                        <div
                                                            className="block-categorys subCat"
                                                            key={id}
                                                        >
                                                            <img
                                                                src={sb.icon}
                                                                alt=""
                                                                className="ctg-icon"
                                                            />
                                                            {sb.content}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fourth-block">
                                        {dt.titleAnfintrion}
                                        <div className="anfintriones-block">
                                            {dt.anfintriones.map((fs, id) => (
                                                <>
                                                    <div
                                                        className="ctn-img-fs"
                                                        key={id}
                                                    >
                                                        <img
                                                            src={fs.img}
                                                            alt=""
                                                            className="fs-img"
                                                        />
                                                    </div>
                                                    <div className="ctn-labels-fs">
                                                        <label className="fs-tile">
                                                            {fs.title}
                                                        </label>
                                                        <label className="fs-lenguages">
                                                            {fs.lenguages}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ))}

                            <div className="services">
                                {services.map((svc) => (
                                    <>
                                        <label className="svc-title">
                                            {svc.title}
                                        </label>
                                        <div className="ctn-tikers">
                                            {svc.options.map((sp) => (
                                                <div
                                                    key={sp.id}
                                                    className="ticket-ser"
                                                >
                                                    <img
                                                        src={sp.icon}
                                                        alt=""
                                                        className="sp-icon"
                                                    />
                                                    {sp.txt}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ))}
                            </div>
                            <div className="opiniones-block">
                                <div className="responsive-block">
                                    <div className="card-opi">
                                        {opiniones.map((op) => (
                                            <>
                                                <div className="block-first-op">
                                                    <label className="op-alkimista">
                                                        Opinión de los
                                                        alkimistas
                                                    </label>
                                                    <div className="number-aliki">
                                                        <label className="op-numberStar">
                                                            {op.numberstar}
                                                        </label>
                                                        <ReactStars
                                                            numberStar={
                                                                op.numberstar
                                                            }
                                                            size={27}
                                                        />
                                                        <label className="op-opiniones">
                                                            {op.opinions}{" "}
                                                            opiniones
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="block-second-op">
                                                    {op.points.map((pt) => {
                                                        console.log(pt.number);
                                                        console.log(
                                                            (pt.number * 100) /
                                                                1500
                                                        );
                                                        return (
                                                            <div
                                                                key={pt.id}
                                                                className="calc-op"
                                                            >
                                                                <label className="legends">
                                                                    {pt.txt}
                                                                </label>

                                                                <ProgressBar
                                                                    style={{
                                                                        width:
                                                                            (pt.number *
                                                                                100) /
                                                                                1500 +
                                                                            69,
                                                                    }}
                                                                    value={
                                                                        (pt.number *
                                                                            100) /
                                                                        1500
                                                                    }
                                                                    showValue={
                                                                        false
                                                                    }
                                                                    className="progressBar"
                                                                />
                                                                <label className="pt-number">
                                                                    {pt.number}
                                                                </label>
                                                            </div>
                                                        );
                                                    })}
                                                    <Button
                                                        btnTitle={"Ver todo"}
                                                        className={"white"}
                                                    />
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                                <div className="block-comments">
                                    {chat.map((ch) => (
                                        <div className="chat-bloxk">
                                            <div className="chat-p1">
                                                <div className="ctn-chat-img">
                                                    <div className="ctn-imgl">
                                                        <img
                                                            src={ch.img}
                                                            alt=""
                                                            className="imgl"
                                                        />
                                                    </div>
                                                    <div className="star-name">
                                                        <label className="ch-name">
                                                            {ch.name}
                                                        </label>
                                                        <ReactStars
                                                            numberStar={
                                                                ch.numberStar
                                                            }
                                                            size={15}
                                                        />
                                                    </div>
                                                </div>
                                                <label className="ch-date">
                                                    {ch.date}
                                                </label>
                                            </div>
                                            <div className="comments">
                                                {ch.message}
                                            </div>
                                            {ch.adju && (
                                                <div className="img-adjus">
                                                    {ch.adju.map((im) => (
                                                        <div className="ctn-adju">
                                                            <img
                                                                src={im.img}
                                                                alt=""
                                                                className="im-img"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="club-alkimia">
                                <div className="club-title">
                                    Beneficios del club Alkimia
                                </div>
                                <div className="block-bfs">
                                    <div className="block-resp">
                                        <div className="circle-bfs">
                                            <img
                                                src={Uplevel}
                                                alt=""
                                                className="img-bfs"
                                            />
                                        </div>
                                        <label className="xtx-label">
                                            Sube al siguiente nivel
                                        </label>
                                    </div>
                                    <div className="block-resp">
                                        <div className="circle-bfs">
                                            <img
                                                src={Cartera}
                                                alt=""
                                                className="img-bfs filterMax"
                                            />
                                        </div>
                                        <label className="xtx-label">
                                            Obten 12 puntos en tu monedero
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="intersarmlp">
                                <label className="tmb-txt">
                                    También te puede interesar
                                </label>
                                <div className="cnt-int-card">
                                    <CardsHome Cards={cards} viewBtnSale />
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

export default ShowProducts;
