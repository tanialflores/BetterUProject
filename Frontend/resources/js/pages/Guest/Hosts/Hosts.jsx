import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

//Assets 😁
import autocuidado from "../../../assets/guest/autocuidado.jpg";
import Plus from "../../../assets/icons/plus.svg";
import dudas from "../../../assets/guest/dudas.jpg";
import tip1 from "../../../assets/guest/tip1.png";
import tip2 from "../../../assets/guest/tip2.png";
import tip3 from "../../../assets/guest/tip3.png";
import tip4 from "../../../assets/guest/tip4.png";
import tip5 from "../../../assets/guest/tip5.png";
import tip6 from "../../../assets/guest/tip6.png";
import tip7 from "../../../assets/guest/tip7.png";
import tip8 from "../../../assets/guest/tip8.png";
import tip9 from "../../../assets/guest/tip9.png";
import tip10 from "../../../assets/guest/tip10.png";
import tip11 from "../../../assets/guest/tip11.png";
import tip12 from "../../../assets/guest/tip12.png";
import tip13 from "../../../assets/guest/tip13.png";
import tip14 from "../../../assets/guest/tip14.png";
import tip15 from "../../../assets/guest/tip15.png";
import tip16 from "../../../assets/guest/tip16.png";

//Styles 😊
import "./Hosts.scss";

//Components 👌
import Button from "../../../components/atoms/Button/Button";
import Slide from "../../../components/atoms/Slide/Slide";
import {
    ColorValidation,
    SubmitValidation,
    UpdateValue,
} from "../../../utilities/Validations";

const Hosts = () => {
   
    const navigate = useNavigate();

    const [inputList, setInputList] = useState({
        email: { value: null, validationType: "email" },
        name: { value: null, validationType: "empty" },
        lastName: { value: null, validationType: "empty" },
        message: { value: null, validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
            if (propertyName === "email") {
                ColorValidation(propertyName, inputList, "email");
            }
        }
    }, [inputList]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (SubmitValidation(inputList, setInputList)) {
            navigate("/");
        }
    };

    const position = [
        {
            id: 1,
            pos: "Haga ejercicio con regularidad. Tan solo 30 minutos de caminatas diarias pueden ayudarle a mejorar su estado de ánimo y su salud. Si no puede hacer 30 minutos de una sola vez, ¡no se desanime! Haga pequeñas cantidades de ejercicio durante el día y estas se irán sumando.",
        },
        {
            id: 2,
            pos: "Consuma alimentos saludables y comidas con regularidad, y manténgase hidratado. Una dieta balanceada y mucha agua pueden aumentar su nivel de energía y de atención a lo largo del día. Asimismo, limite el consumo de bebidas con cafeína, como refrescos gaseosos o café.",
        },
        {
            id: 3,
            pos: "Dele importancia al sueño. Establezca un horario y asegúrese de dormir suficiente tiempo. La luz azul que emiten diversos dispositivos y pantallas puede hacer que sea más difícil conciliar el sueño. Por eso, reduzca su grado de exposición a la luz azul de su teléfono o de su computadora antes de que llegue la hora de dormir.",
        },
        {
            id: 4,
            pos: "Intente practicar una actividad relajante. Explore diversos programas o aplicaciones móviles de relajación o bienestar que podrían incorporar meditación, relajación muscular o ejercicios de respiración. Programe un horario regular para estas y otras actividades saludables que disfrute, como escribir en un diario.",
        },
        {
            id: 5,
            pos: "Establezca metas y prioridades. Decida lo que debe hacerse en este momento y lo que puede esperar. Aprenda a decir “no” a nuevas tareas si empieza a sentir que está asumiendo demasiadas cosas. Intente tener presente lo que ha logrado al final del día, en lugar de lo que no ha podido hacer.",
        },
        {
            id: 6,
            pos: "Practique la gratitud. Recuerde diariamente cosas por las que está agradecido. Sea específico. Escríbalas durante la noche o repítalas mentalmente.",
        },
        {
            id: 7,
            pos: "Centre su atención en las cosas positivas. Identifique y cuestione sus pensamientos negativos y poco útiles."
        },
        {
            id: 8,
            pos: "Manténgase en contacto. Comuníquese con sus amigos o familiares que puedan ofrecerle apoyo emocional y ayuda práctica."
        },
    ];

    const questions = [
        {
            id: 1,
            question: "¿Son los trastornos mentales un tipo de discapacidad intelectual o daño cerebral?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                    No. Son desajustes de salud como cualquier otro, como el asma, la diabetes o los problemas del corazón. A diferencia de la discapacidad psíquica o la demencia, el trastorno mental no disminuye ni deteriora las facultades mentales, sino que las altera de forma esporádica.
                    </p>
                </div>
            ),
        },
        {
            id: 2,
            question: "¿Un trastorno mental es incuarble? ¿Dura toda la vida?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                    No. La mayoría nos recuperamos después de un tratamiento adecuado y llevamos una vida normalizada. 
                    Existen trastornos mentales graves que pueden convertirse en crónicos y, por lo tanto, requerir un tratamiento continuado. Igual que pasa con las enfermedades físicas, que pueden ser crónicas o transitorias, el trastorno mental puede ser llevado de forma que la persona pueda disfrutar de una vida plena y satisfactoria.
                    </p>
                </div>
            ),
        },
        {
            id: 3,
            question: "¿Las personas con un trastorno mental podemos llevar una vida normalizada?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                    Sí. ¡Podemos! Con el tratamiento adecuado y con un entorno social y familiar favorable, una persona con un problema de salud puede superar las limitaciones del trastorno y puede trabajar, mantener relaciones sociales, cuidar de sus hijos, etc.
                    A pesar de que algunas personas podemos llegar a recibir la incapacitación laboral por razón de salud mental, la mayoría de nosotros somos capaces de llevar a cabo muchas tareas.
                    </p>
                </div>
            ),
        },
        {
            id: 4,
            question: "¿Se nace con el trastorno mental?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                    No. La predisposición genética puede ser uno de los factores que inciden en la aparición de algunos trastornos mentales. Pero también hay factores ambientales que influyen, como el estrés, el consumo de drogas, traumatismos cerebrales, enfermedades orgánicas, un acontecimiento traumático o una situación de crisis económica.
                    </p>
                </div>
            ),
        },
        {
            id: 5,
            question: "¿Todo el mundo puede desarrollar un trastorno mental?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                    Sí. Todo el mundo es vulnerable de tener problemas de salud mental, como de sufrir cualquier otra enfermedad. Una de cada cuatro personas tendrá un trastorno mental a lo largo de su vida. Por eso es importante hablar abiertamente, porque reduce el estigma y ayuda a poner remedio cuando aparece.
                    </p>
                </div>
            ),
        },
        {
            id: 6,
            question: "¿Las personas con trastorno mental son violentas?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                    No. Las personas que sufrimos un trastorno mental no tenemos más conductas violentas que el resto de la población. De hecho, tenemos más probabilidad de ser víctimas que autoras de actos violentos.
                    Además, normalmente evitamos las situaciones violentas, porque nos generan un estrés excesivo. La mayoría de los crímenes violentos y homicidios son cometidos por personas que no tienen ningún trastorno mental. Tener un carácter agresivo es independiente del sufrimiento de un trastorno mental.
                    </p>
                </div>
            ),
        },
        {
            id: 7,
            question: "¿Las personas con problemas de salud mental tienen que estar recluidas en centros psiquiátricos?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                    No. Muchas recuperaciones y tratamientos no necesitan hospitalización y, en caso necesario, los ingresos son temporales. Los centros psiquiátricos, en la actualidad, ya no son instituciones de aislamiento e internamiento.
                    </p>
                </div>
            ),
        },
        {
            id: 77,
            question: "¿Es el estigma uno de los principales problemas para las personas que tenemos un trastorno mental?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                    Sí. Una de las barreras más importantes para recuperarse de un trastorno mental es afrontar las actitudes negativas de la gente. Eso a menudo supone aislamiento social y discriminación por el solo hecho de haber tenido un trastorno.
                    Una actitud positiva y de apoyo por parte de familiares, amigos, compañeros de trabajo, servicios de salud, profesionales y otros miembros de la comunidad hacia la gente con trastorno mental es vital para asegurar su calidad de vida y su recuperación.
                    </p>
                </div>
            ),
        },
        {
            id: 8,
            question: "¿Cómo puedo ayudar a una persona con trastorno mental?",
            icon: Plus,
            respose: (
                <div className="responses">
                    <p className="respo-a">
                    Hay muchas maneras de ayudar a una persona que está pasando por un problema de salud mental. Uno de los primeros pasos es hacerle saber que puede hablar abiertamente de este tema contigo. 
                    </p>
                </div>
            ),
        },
    ];

 

    return (
        <div className="hosts">
            <img src={autocuidado} alt="fondoA" className="hosts-fir" />
            <div className="host-secct1">
                <div className="host-secct-1-A">Tips</div>
                <div className="host-secct-1-B">
                    <p className="host-secct-body">
                        Consejos para el autocuidado
                    </p>
                    <p className="host-secct-B-body">
                    La salud mental incluye el bienestar emocional, psicológico y social, y afecta la forma en que pensamos, sentimos, actuamos, tomamos decisiones y 
                    nos relacionamos con las demás personas. La salud mental es más que la ausencia de una enfermedad mental y es esencial tanto para su salud en general 
                    como para su calidad de vida. El autocuidado puede ser clave para mantener su salud mental y servir de apoyo para su tratamiento y recuperación, 
                    en caso de que tenga alguna enfermedad mental.
                    </p>
                </div>
                <div className="host-secct-B-body host-secct-c">
                    <div className="host-secct-b-sub">
                        <p>Los siguientes son algunos consejos para ayudarle a comenzar a cuidarse a sí mismo:</p>
                        <div className="Tips">
                            {position.map((pos) => (
                                <span key={pos.id}>
                                    {pos.pos} <br />
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="first-div-sep"></div>
            <div className="host-secct2">
                <div>
                    <h4 className="host-secct-2-title">
                        ¡Holaaaa...!
                    </h4>
                    <p className="host-secct-2-body">
                        Este es el capitulo de tu vida en el que tienes que ser fuerte,
                        en los próximos te prometo que te tocará ser feliz. ¡Ánimo!
                    </p>
                </div>
            </div>
            <div className="first-div-sep"></div>

            <div className="host-secct3">
                <div className="host-secct-3-photo">
                    <img src={dudas} alt="fondo" className="host-secct-3-img" />
                </div>
                <div className="host-secct-3-B">
                    <h3 className="host-secct-3-title">
                        Preguntas más comunes
                    </h3>

                    <div className="host-secct-3-scroll">
                        <Slide object={questions} />
                    </div>
                </div>
            </div>
            <div className="host-secct4">
                <form action="" className="host-secct-4-form">
                    <div>
                        <h1 className="host-secct-4-title">Tips</h1>
                        
                        <div className="host-secct-4-descrip">
                           Nuestra salud mental puede mejorar considerablemente cuando nos atendemos, cuando nos valoramos, cuando nos priorizamos... y todo ello y más, está resumido en: cuando nos amamos.
                        </div>
                    </div>
                    <div className="ImgTips">
                        <img src={tip1} className="tip1"></img>
                        <img src={tip2} className="tip2"></img>
                        <img src={tip3} className="tip3"></img>
                        <img src={tip4} className="tip4"></img>
                        <img src={tip5} className="tip5"></img>
                        <img src={tip6} className="tip6"></img>
                        <img src={tip7} className="tip7"></img>
                        <img src={tip8} className="tip8"></img>
                        <img src={tip9} className="tip9"></img>
                        <img src={tip10} className="tip10"></img>
                        <img src={tip11} className="tip11"></img>
                        <img src={tip12} className="tip12"></img>
                        <img src={tip13} className="tip13"></img>
                        <img src={tip14} className="tip14"></img>
                        <img src={tip15} className="tip15"></img>
                        <img src={tip16} className="tip16"></img>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Hosts;
