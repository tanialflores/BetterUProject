import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

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

import "./ShowExperiences.scss";
import Button from "../../../../components/atoms/Button/Button";
import BenefitsIcons from "../../../../components/atoms/BenefitsIcons/BenefitsIcons";
import Map from "../../../../components/molecules/Maps/Maps";
import WorldMap from "../../../../components/atoms/MapsAddress/MapsAddress";
import { ProgressBar } from "primereact/progressbar";
import CardsHomeAdaptation from "../../../../components/molecules/CardsHomeAdaptation/CardsHome";
import { errorResponse, getAxiosGuest } from "../../../../utilities/Axios";

const ShowExperiences = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    const [skeleton, setSkeleton] = useState(true);

    const getData = async() =>{
        const resThen = (res) =>{
            setSkeleton(false)
            setData(res.data.data)
        }
        getAxiosGuest(`api/v1/mobile/experiences/${id}`, resThen, errorResponse)
    }

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
            title: "Vuelo privado para 4 pasajeros",
            numberStar: 5,
            commNumber: "(1542)",
            price: "$12,499.00",
            titleDesc:
                "Es un vuelo privado para ti y tres personas adicionales.",
            description:
                " Incluye: Recepción, Traslado local del punto de reunión al globopuerto, Acceso a cafetería móvil y souvenirs, Inducción al vuelo y práctica de seguridad, Vuelo de 45 a 60 min. aprox. Despliegue de lona con mensaje alusivo, Brindis con el capitan al finalizar el vuelo, Seguro de viajero y certificado digital personalizado, NO INCLUYE DESAYUNO.",
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
        setLiked(!liked)
    };

    const [quotas, setQuotas] = useState(15);

    useEffect(()=>{
        setSkeleton(true)
        getData()
    },[id]);

    return (
        <>
            {skeleton
                ?<>
                {/* 
                    Put the skeleton here too when this be done
                */}
                </>
                :<>
                    <div className="AuthView ">
                        <div className="ShowExperiences">
                            <div className="j-baxk">
                                <Back onClick={() => navigate("/experiences")} />
                            </div>
                            <div className="cards-show">
                                {
                                    data?.images_urls[0] 
                                    ?
                                    <ContainerImg
                                        arrayImg={[
                                            {
                                                id: 1,
                                                img: data?.images_urls[0],
                                            }
                                        ]}
                                        FirtsImg={data?.images_urls[0]}
                                        className={"cont-img-c"}
                                        liked={liked}
                                        onClick={() => activeHeart()}
                                    />
                                    :<></>
                                }
                                {/* <ContainerImg
                                    arrayImg={[
                                        {
                                            id: 1,
                                            img: data?.images_urls[0],
                                        }
                                    ]}
                                    FirtsImg={data?.images_urls[0]}
                                    className={"cont-img-c"}
                                    liked={liked}
                                    onClick={() => activeHeart()}
                                /> */}
                                <NavLink to={`/experiences/reserve/${id}`} className="linkClass">
                                    <div className="btn-bg">
                                        <Button btnTitle={"Reservar"} className={"solid"} />
                                    </div>
                                </NavLink>
                                {/* <div className="btn-bg">
                                    <Button btnTitle={"Reservar"} className={"solid"} onClick={() => navigate("/experiences/reserve")}/>
                                </div> */}
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
                                    <div className="secct1">
                                        <label className="Title">
                                            {data?.name}
                                        </label>
                                        <div className="star-price">
                                            <div className="star">
                                                <ReactStars
                                                    size={15}
                                                    numberStar={data?.ranking}
                                                />
                                                <label className="commeNumber">
                                                    {data?.ranking}
                                                </label>
                                            </div>
                                            <label className="price">
                                                ${data?.price}
                                            </label>
                                        </div>
                                        {/* <label className="title-descr">
                                            {data?.titleDesc}
                                        </label> */}
                                        <p className="description">
                                            {data?.description}
                                        </p>
                                    </div>
                                    <div className="secct2b">
                                        <div className="block-as">
                                            <label className="title3-category">
                                                Categorías
                                            </label>
                                            <div className="ctn-tick">
                                                {data?.categories.map((ctg, idx) => (
                                                    <div
                                                        className="block-categorys"
                                                        key={ctg.uuid}
                                                    >
                                                        <img
                                                            src={ctg.image_url}
                                                            alt=""
                                                            className="ctg-icon cat"
                                                        />
                                                        {ctg.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="block-as">
                                            <label className="title3-category">
                                                Subcategorías
                                            </label>
                                            <div className="ctn-tick">
                                                {data?.subCategories.map((sb, id) => (
                                                    <div
                                                        className="block-categorys subCat"
                                                        key={sb.uuid}
                                                    >
                                                        <img
                                                            src={sb.image_url}
                                                            alt=""
                                                            className="ctg-icon"
                                                        />
                                                        {sb.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="secct3b">
                                        Anfitrión
                                        <div className="anfintriones-block">
                                            <div
                                                className="ctn-img-fs"
                                            >
                                                <img
                                                    src={data?.host?.image}
                                                    alt=""
                                                    className="fs-img"
                                                />
                                            </div>
                                            <div className="ctn-labels-fs">
                                                <label className="fs-tile">
                                                    {data?.host?.name}
                                                </label>
                                                <label className="fs-lenguages">
                                                    {data?.host?.lang}
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="services3b">
                                        <label className="svc-title">
                                            servicios
                                        </label>
                                        <div className="ctn-tikers">
                                            {data?.services.map((sp) => (
                                                <div
                                                    key={sp.uuid}
                                                    className="ticket-ser"
                                                >
                                                    <img
                                                        src={sp.img_url}
                                                        alt=""
                                                        className="sp-icon"
                                                    />
                                                    {sp.name}
                                                </div>
                                            ))}
                                        </div>
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
                                                    {data?.estimated_time}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="schedule-Day">
                                            {data?.schedule.map((sh) => (
                                                <div className="box-min">
                                                    <label className="daysx">
                                                        {sh.name}
                                                    </label>
                                                    <label className="schedulehora">
                                                        {sh.timeStart} - {sh.timeEnd}  
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
                                                {data?.location.address}
                                            </div>
                                        </div>
                                        <div className="map-address">
                                            {data &&
                                                <WorldMap
                                                    markers={markers}
                                                    location={data?.location}
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
                                            }
                                        </div>
                                    </div>
                                    {/* <div className="secct6b">
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
                                    </div> */}
                                    <div className="intersarmlpxx">
                                        <label className="tmb-txt">
                                            También te puede interesar
                                        </label>
                                        <div className="cnt-int-card">
                                            {data &&
                                                <CardsHomeAdaptation
                                                    Cards={data?.similar_experiences}
                                                    viewBtn
                                                    displayNone={"none"}
                                                    rowRev={"row-reverse"}
                                                    viewElemnts
                                                    size={15}
                                                />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AuthFooter />
                    </div>
                </>
            }
        </>
    );
};

export default ShowExperiences;
