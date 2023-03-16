import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import Back from "../../../../components/atoms/Back/Back";
import ContainerImg from "../../../../components/molecules/ContainerImg/ContainerImg";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import ReactStars from "../../../../components/atoms/ReactStars/ReactStars";

//Assets
import arrowUp from "../../../../assets/Auth/arrowUpColorPink.svg";
import Premios from "../../../../assets/Auth/premios.png";
import Ticket from "../../../../assets/Auth/ticket.svg";
import Star from "../../../../assets/icons/start.svg";
import Heart from "../../../../assets/icons/heart.svg";
import Zas1 from "../../../../assets/Auth/zas1.png";
import Zas2 from "../../../../assets/Auth/zas2.png";
import Zas3 from "../../../../assets/Auth/zas3.png";
import Zas4 from "../../../../assets/Auth/zas4.png";
import Zas5 from "../../../../assets/Auth/zas5.png";
import Zas6 from "../../../../assets/Auth/zas6.png";
import Zas7 from "../../../../assets/Auth/zas7.png";
import Zas8 from "../../../../assets/Auth/zas8.png";
import Zas9 from "../../../../assets/Auth/zas9.png";
import Zas10 from "../../../../assets/Auth/zas10.png";
import Zas11 from "../../../../assets/Auth/zas11.png";
import Zas12 from "../../../../assets/Auth/zas12.png";
import Zas13 from "../../../../assets/Auth/zas13.png";
import Zas14 from "../../../../assets/Auth/zas14.png";
import Zas15 from "../../../../assets/Auth/zas15.png";
import Zas16 from "../../../../assets/Auth/zas16.png";
import pdf from "../../../../../../public/images/pdf.svg";

import Car from "../../../../assets/Auth/carCombi.png";
import F7 from "../../../../assets/icons/f7.svg";
import F8 from "../../../../assets/icons/f8.svg";

import ShareSmall from "../../../../assets/Auth/shareSmall.svg";
import Clock from "../../../../assets/icons/reloj_de_arena.png";

import Sp1 from "../../../../assets/Auth/sp1.svg";
import Sp2 from "../../../../assets/Auth/sp2.svg";
import Sp3 from "../../../../assets/Auth/sp3.svg";
import Sp4 from "../../../../assets/Auth/sp4.svg";
import Sp5 from "../../../../assets/Auth/sp5.svg";
import Sp6 from "../../../../assets/Auth/sp6.svg";

import I1 from "../../../../assets/Auth/i1.png";
import I2 from "../../../../assets/Auth/i2.png";
import I3 from "../../../../assets/Auth/i3.png";
import I4 from "../../../../assets/Auth/i4.png";
import I5 from "../../../../assets/Auth/i5.png";

import "./ShowFavorites.scss";
import Button from "../../../../components/atoms/Button/Button";
import BenefitsIcons from "../../../../components/atoms/BenefitsIcons/BenefitsIcons";
import Map from "../../../../components/molecules/Maps/Maps";
import WorldMap from "../../../../components/atoms/MapsAddress/MapsAddress";
import { ProgressBar } from "primereact/progressbar";
import CardsHome from "../../../../components/molecules/CardsHome/CardsHome";

const ShowFavorites = () => {
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

    const arrayImg = [
        {
            id: 1,
            img: Zas1,
        },
        {
            id: 2,
            img: Zas2,
        },
        {
            id: 3,
            img: Zas3,
        },
        {
            id: 4,
            img: Zas5,
        },
        {
            id: 5,
            img: Zas6,
        },
        {
            id: 6,
            img: Zas7,
        },
    ];

    const information = [
        {
            id: 1,
            title: "Paseo matutino",
            numberStar: 5,
            commNumber: "(1542)",
            price: "$500.00",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
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

    const schedule = [
        {
            id: 1,
            days: "Lunes",
            schedule: "05:30 - 07:15",
        },
        {
            id: 2,
            days: "Martes",
            schedule: "05:30 - 07:15",
        },
        {
            id: 3,
            days: "Miércoles",
            schedule: "05:30 - 07:15",
        },
        {
            id: 4,
            days: "Jueves",
            schedule: "05:30 - 07:15",
        },
        {
            id: 5,
            days: "Viernes",
            schedule: "05:30 - 07:15",
        },
        {
            id: 6,
            days: "Sabado",
            schedule: "05:30 - 07:15",
        },
        {
            id: 7,
            days: "Domingo",
            schedule: "Cerrado",
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

    const [markers, setMarkers] = useState([
        {
            lat: 20.696208,
            lng: -103.348155,
            id: 1,
            idUnidad: 56548623155,
            distance: "35km / 15min",
            status: 1,
        },
    ]);

    const navigate = useNavigate();
    const [liked, setLiked] = useState(false)

    const activeHeart = () => {
        // const likeIdx = elements.findIndex((item) => item.id == id);
        // const copy = [...elements];
        // copy[likeIdx].liked = !copy[likeIdx].liked;
        // setElements(copy);
        setLiked(!liked)
    };

    const [quotas, setQuotas] = useState(15);

    return (
        <>
            <AuthHeader />
            <div className="AuthView ">
                <div className="ShowFavorites">
                    <div className="j-baxk">
                        <Back onClick={() => navigate("/experiences")} />
                    </div>
                    <div className="cards-show">
                        <ContainerImg
                            arrayImg={arrayImg}
                            FirtsImg={Zas1}
                            className={"cont-img-c"}
                            liked={liked}
                            onClick={() => activeHeart()}
                        />
                        <div className="btn-bg">
                            <Button btnTitle={"Reservar"} className={"solid"} onClick={() => navigate("/experiences/reserve")}/>
                        </div>
                        <BenefitsIcons className={"BeIcons"} />
                        <div className="Share-conds">
                            <div className="warning">
                                <div className="shareS">
                                    <img
                                        src={ShareSmall}
                                        alt=""
                                        className="icon-sahre"
                                    />
                                </div>
                                <div className="DownPdf">
                                    <img src={pdf}
                                        alt=""
                                        className="pdf"
                                    ></img>
                                </div>
                                <Button
                                    btnTitle={"Términos y condiciones"}
                                    className={"border-color"}
                                />
                            </div>
                            <div className="warning">
                                <div className="recommendedz">
                                    <img
                                        src={Premios}
                                        alt=""
                                        className="rewards-medail"
                                    />
                                    Recomendado por los alkimistas
                                </div>
                                <div className="recommendedz">
                                    Cupo disponible:
                                    <label className="quotas">{quotas}</label>
                                </div>
                            </div>
                        </div>
                        <div className="class-body">
                            {information.map((inf) => (
                                <>
                                    <div className="secct1">
                                        <label className="Title">
                                            {inf.title}
                                        </label>
                                        <div className="star-price">
                                            <div className="star">
                                                <ReactStars
                                                    size={15}
                                                    numberStar={5}
                                                />
                                                <label className="commeNumber">
                                                    {inf.commNumber}
                                                </label>
                                            </div>
                                            <label className="price">
                                                {inf.price}
                                            </label>
                                        </div>
                                        <label className="title-descr">
                                            {inf.titleDesc}
                                        </label>
                                        <p className="description">
                                            {inf.description}
                                        </p>
                                    </div>
                                    <div className="secct2b">
                                        <div className="block-as">
                                            <label className="title3-category">
                                                {inf.titleCategory}
                                            </label>
                                            <div className="ctn-tick">
                                                {inf.categorys.map(
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
                                                {inf.titleSubCategorys}
                                            </label>
                                            <div className="ctn-tick">
                                                {inf.subCategorys.map(
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
                                    <div className="secct3b">
                                        {inf.titleAnfintrion}
                                        <div className="anfintriones-block">
                                            {inf.anfintriones.map((fs, id) => (
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

                            <div className="services3b">
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

                            <div className="secct4b">
                                <div className="box-schedule">
                                    <label className="title-sched">
                                        Horario
                                    </label>
                                    <div className="mini-card">
                                        <img
                                            src={Clock}
                                            alt=""
                                            className="icon-schedu"
                                        />
                                        <label className="time-est">
                                            Tiempo estimado de la experiencia:{" "}
                                        </label>
                                        <label className="time-curret">
                                            1h
                                        </label>
                                    </div>
                                </div>
                                <div className="schedule-Day">
                                    {schedule.map((sh) => (
                                        <div className="box-min">
                                            <label className="daysx">
                                                {sh.days}
                                            </label>
                                            <label className="schedulehora">
                                                {sh.schedule}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="secct5b">
                                <div className="s5b-first">
                                    <label className="location-title">
                                        Ubicación
                                    </label>
                                    <div className="address-ubi">
                                        Calle Jazmín 35 A Pedregal De Hacienda
                                        Grande, Tequisquiapan Querétaro
                                    </div>
                                </div>
                                <div className="map-address">
                                    <WorldMap
                                        markers={markers}
                                        key={"patrol-map-wrap"}
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMt7WCF_38RRjjj4cihiEO2kTf_eXGg9k&v=3.exp&libraries=geometry,drawing,places"
                                        loadingElement={
                                            <div
                                                key={"table-patrols-load"}
                                                style={{
                                                    height: `100%`,
                                                    background: "#000",
                                                }}
                                            />
                                        }
                                        containerElement={
                                            <div
                                                key={"table-patrols-cont"}
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    zIndex: "300",
                                                }}
                                            />
                                        }
                                        mapElement={
                                            <div
                                                key={"table-patrols-elme"}
                                                style={{
                                                    height: `100%`,
                                                }}
                                            />
                                        }
                                    />
                                </div>
                            </div>
                            <div className="secct6b">
                                <div className="responsive-block">
                                    <div className="card-opi">
                                        {opiniones.map((op) => (
                                            <>
                                                <div className="block-first-op">
                                                    <label className="op-alkimista">
                                                        Opinión de los
                                                        alkimistas
                                                    </label>
                                                    <div className="op-sub-ali">
                                                        <img
                                                            src={Premios}
                                                            alt=""
                                                            className="ctn-reward"
                                                        />
                                                        <label className="label-rewars">
                                                            Experiencia
                                                            recomendada por los
                                                            alkimistas
                                                        </label>
                                                    </div>
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
                            <div className="intersarmlpxx">
                                <label className="tmb-txt">
                                    También te puede interesar
                                </label>
                                <div className="cnt-int-card">
                                    <CardsHome
                                        Cards={cards}
                                        viewBtn
                                        displayNone={"none"}
                                        rowRev={"row-reverse"}
                                        viewElemnts
                                        size={15}
                                    />
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

export default ShowFavorites;
