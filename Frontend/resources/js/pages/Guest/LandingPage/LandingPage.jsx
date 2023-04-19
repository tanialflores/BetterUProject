import React, { useEffect, useState } from "react";
import InputSearch from "../../../components/atoms/InputSearch/InputSearch";
import Button from "../../../components/atoms/Button/Button";

//assets
import trastornoAlimenticio from "../../../assets/guest/trastornoAlimenticio.png";
import depresion from "../../../assets/guest/depresion.png";
import ansiedad from "../../../assets/guest/ansiedad.png";
import mentalhealth from "../../../assets/guest/mentalhealth.png"
import logoSinFondo from "../../../assets/guest/logoSinFondo.png"

import "./LandingPage.scss";
import Carousel from "../../../components/molecules/Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import c8 from "../../../assets/guest/c8.png";
import c3 from "../../../assets/guest/c3.png";
import c4 from "../../../assets/guest/c4.png";
import c5 from "../../../assets/guest/c5.png";
import c6 from "../../../assets/guest/c6.png";
import c7 from "../../../assets/guest/c7.png";
import SintomaA from "../../../assets/guest/SintomaA.jpg";
import SintomaD from "../../../assets/guest/SintomaD.png";
import alimentos from "../../../assets/guest/alimentos.png";

const LandingPage = () => {
    const [openPlace, setOpenPlace] = useState(false);
    const [openCategory, setOpenCategory] = useState(false); //-250
    const auth = localStorage.getItem('auth')

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 400) {
                    document.getElementById("secct-3-device").style.left =
                        "20px";
                    document.getElementById("secct-3-device").style.transition =
                        "all 0.5s";
                }
            });
        }
    }, []);

    const navigate = useNavigate()

    const helpTravel = [
        {
            id: 1,
            img: depresion,
            title: "Depresión",
            descriptions:
                "La depresión es una enfermedad que se caracteriza por una tristeza persistente y por la pérdida de interés en las actividades con las que normalmente se disfruta, así como por la incapacidad para llevar a cabo las actividades cotidianas, durante al menos dos semanas.",
        },
        {
            id: 2,
            img: ansiedad,
            title: "Ansiedad",
            descriptions:
                "La ansiedad es una emoción normal que se experimenta en situaciones en las que el sujeto se siente amenazado por un peligro externo o interno.",
        },
        {
            id: 3,
            img: trastornoAlimenticio,
            title: "Trastorno alimenticio",
            descriptions:
                "Los trastornos de la alimentación, también llamados trastornos de la conducta alimentaria, son enfermedades médicas graves con una influencia biológica que se caracterizan por alteraciones graves de las conductas alimentarias.",
        },
    ];

    const blog = [
        {
            id: 1,
            img: SintomaA,
            title: "Sintomas ansiedad",
            descriptions: "Taquicardias, falta de aire, temblor, ganas de huir, dificultad para concentrarse,Irritabilidad, ensimismamiento, dificultades para iniciar o seguir una conversación, molestias digestivas, náuseas, vómitos, “nudo” en el estómago,temor a perder el control, recelos, sospechas, incertidumbre, dificultad para tomar decisiones.",
        },
        {
            id: 2,
            img: SintomaD,
            title: "Sintomas depresion",
            descriptions: "Sentimientos persistentes de tristeza, ansiedad o “vacío”, desesperanza o pesimismo,irritabilidad, frustración o intranquilidad,dolores y molestias,pérdida de interés o placer en las actividades y los pasatiempo, dolor de cabeza, calambres o problemas digestivos sin una causa física aparente, o que no se alivian ni con tratamiento",
        },
        {
            id: 3,
            img: alimentos,
            title: "Sintomas de transtornos alimentarios",
            descriptions: "Comer descontroladamente, hacer dietas rigurosas, provocarse vómitos, abuso de laxantes y diuréticos, problemas con la dentadura, depresiones detectables, ir al baño después de comer, menstruaciones irregulares y preocupación exagerada por el peso.",
        },
        
    ];

    const vinedo = [
        {
            id: 1,
            img: c8,
            
            
        },
        {
            id: 2,
            img: c3,
            
            
        },
        {
            id: 3,
            img: c4,
            
            
        },
        {
            id: 4,
            img: c5,
            
        },
        {
            id: 5,
            img: c6,
            
        },
        {
            id: 6,
            img: c7,
            
        },
    ];

    const updateCheckboxPlace = (e) => {
        const copy = [...destPlace];
        const updateIdx = copy.findIndex((item) => item.id === e);
        copy[updateIdx].value = !copy[updateIdx].value;
        setDestPlace(copy);
    };

    const updateCheckboxCategory = (e) => {
        const copy = [...category];
        const updateIdx = copy.findIndex((item) => item.id === e);
        copy[updateIdx].value = !copy[updateIdx].value;
        setCategory(copy);
    };

    return (
        <>
            <div className="LandingPage">
                <div className="secct-3">
                    <div className="secct-3-device" id="secct-3-device">
                        <img
                            src={logoSinFondo}
                            alt="phone"
                            className="secct-3-phone"
                        />
                    </div>
                    <div className="secct-3-container">
                        <h3 className="secct3-title">Bienvenido a Better U</h3>
                        <p className="secct3-subTitle">
                        El test de Better U te ayudará a arrojar luces sobre la 
                        existencia de un eventual problema psicológico para poder orientarte a buscar 
                        ayuda cuando sea necesario.
                        </p>
                        <p className="secct3-subTitle">
                            
                        </p>
                    </div>
                </div>
                <div className="subLandingPage">
                    <img
                        src={mentalhealth}
                        alt="background"
                        className="sub-background"
                    />
                    <div className="sub-filter-img">
                    </div>
                </div>
                <div className="page-secct2">
                    {helpTravel.map((item) => (
                        <div key={item.id} className="secct2-card">
                            <img
                                src={item.img}
                                alt="imge"
                                className="secct-2-card-img"
                            />
                            <p className="secct2-title">{item.title}</p>
                            <p className="secct2-desc">{item.descriptions}</p>
                        </div>
                    ))}
                </div>
                <div className="secct6">
                    <div className="secct-6-A">
                        <p className="secct-6-A-title">
                            ¿Por qué es importante la salud mental?
                        </p>
                        
                        <br />
                        <span className="secct-6-B-des">
                        La salud mental tiene un impacto directo en nuestra forma de pensar, de sentir y de actuar. Determina cómo respondemos ante el estrés, cómo nos relacionamos con otras personas y cómo tomamos decisiones. 
                        <br></br>
                        Es por esto tan importante cuidar de ella como cuidamos de nuestro cuerpo físico.
                        <br></br>
                        La salud mental es importante en todas las etapas de la vida, desde la niñez y la adolescencia hasta la adultez y la vejez.
                        </span>
                    </div>

                    <div className="secct-6-A">
                        <p className="secct-6-A-title">
                            ¿Qué puede afectar mi salud mental?
                        </p>
                        
                        <br />
                        <span className="secct-6-B-des">
                        Hay diferentes factores que pueden afectar su salud mental, incluyendo:
                        <br></br>
                        -Factores biológicos, como los genes o la química del cerebro
                        <br></br>
                        -La inseguridad
                        <br></br>
                        -El rapido cambio social
                        <br></br>
                        -El estilo de vida, como la dieta, actividad física y consumo de sustancias
                        <br></br>
                        También puede verse afectada por factores y experiencias personales, la interacción social, los valores culturales, experiencias familiares, escolares y laborales.
                        </span>
                    </div>
                    
                    <div className="secct-6-B">
                        <h1 className="secct-6-B-title">¿Sabías qué?</h1>
                        <Carousel object={vinedo}/>
                    </div>
                    
                </div>
                {!auth ?
                <div className="secct7">
                    <h1 className="secct7-title">¿Quieres realizar el test?</h1>
                    <div className="secct7-bodyA">
                    Realiza el test para saber tu posible diagnóstico, si tienes algún problema que afecte tu salud mental.
                    </div>

                    <div className="secct7-btn">
                        <div className="secct-7-btn">
                            <Button
                                btnTitle={"Iniciar sesion"}
                                className={"border"}
                                onClick={() => navigate("start")}
                            />
                        </div>
                    </div>
                </div>
                :
                <div className="secct7">
                    <h1 className="secct7-title">Better U</h1>
                    <div className="secct7-bodyA">
                        Cuando dicen "vendrá algo mejor", no siempre significa otra persona. También es estabilidad
                        contigo mismo, libertad, madurez emocional, amor propio y, sobre todo, paz mental.
                    </div>
                </div>
                }
                <div className="secct8">
                    <h1 className="secct8-title">Para saber más...</h1>
                    <div className="secct-8-body">
                        {blog.map((blog) => (
                            <div className="card-blog" key={blog.id}>
                                <div className="card-container">
                                    <img
                                        src={blog.img}
                                        alt="Card"
                                        className="card-img"
                                    />
                                </div>
                                <p className="card-title">{blog.title}</p>
                                <p className="card-descrip">
                                    {blog.descriptions}
                                </p>

                               
                            </div>
                        ))}
                    </div>
                </div>
                
                
                <div className="secct404 fina">

                </div>
            </div>
        </>
    );
};

export default LandingPage;
