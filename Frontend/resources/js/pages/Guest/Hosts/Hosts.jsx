import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

//Assets 😁
import autocuidado from "../../../assets/guest/autocuidado.jpg";
import Plus from "../../../assets/icons/plus.svg";
import dudas from "../../../assets/guest/dudas.jpg";

//Styles 😊
import "./Hosts.scss";

//Components 👌
import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";
import TextArea from "../../../components/atoms/TeaxtArea/TextArea";
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
            pos: "-Vinícolas y viñedos",
        },
        {
            id: 2,
            pos: "-Restaurantes o experiencias gastronómicas",
        },
        {
            id: 3,
            pos: "-Hoteles Boutique, haciendas y spa's",
        },
        {
            id: 4,
            pos: "-Tour operadoras o agencias de viajes",
        },
        {
            id: 5,
            pos: "-Guías turísticos y someliers",
        },
        {
            id: 6,
            pos: "-Proveedores de actividades de turismo natural, aventura, etc.",
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
                        Un anfitrión de ALKIMIA es un proveedor de servicios
                        enoturísticos, ya sea desde una vinícola, hasta un
                        proveedor de experiencias entorno al vino.
                    </p>
                </div>
                <div className="host-secct-B-body host-secct-c">
                    <div className="host-secct-b-sub">
                        <p>Nuestros anfitriones pueden ser:</p>
                        {position.map((pos) => (
                            <span key={pos.id}>
                                {pos.pos} <br />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="first-div-sep"></div>
            <div className="host-secct2">
                <div>
                    <h4 className="host-secct-2-title">
                        ¿Quiéres realizar el test?
                    </h4>
                    <p className="host-secct-2-body">
                        Conviértete en anfitrión y deja que miles de alkimistas
                        visiten tu vinícola, hotel, restaurante, o cualquier
                        negocio que ofrezca experiencias y servicios
                        enoturísticos.
                    </p>
                    <div className="host-secct-2-btn">
                        <Button
                            className={"border"}
                            btnTitle={"Unirme"}
                            onClick={() => navigate("register")}
                        />
                    </div>
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
                        <h1 className="host-secct-4-title">Soporte</h1>
                        <div className="host-secct-4-descrip">
                            ¿Necesitas ayuda o tienes alguna duda? Déjanos tus
                            datos y haznos la pregunta, en breve nos
                            comunicaremos contigo para darte una solución
                        </div>
                    </div>
                    <Input
                        title={"Email"}
                        placeholder={"Email"}
                        type={"email"}
                        id={"email"}
                        onChange={(e) =>
                            UpdateValue(e, "email", inputList, setInputList)
                        }
                    />
                    <Input
                        title={"Nombre"}
                        placeholder={"Nombre"}
                        type={"text"}
                        id={"name"}
                        onChange={(e) =>
                            UpdateValue(e, "name", inputList, setInputList)
                        }
                    />
                    <Input
                        title={"Apellido"}
                        placeholder={"Apellido"}
                        type={"text"}
                        id={"lastName"}
                        onChange={(e) =>
                            UpdateValue(e, "lastName", inputList, setInputList)
                        }
                    />
                    <TextArea
                        title={"Mensaje"}
                        placeholder={"Escribe aquí..."}
                        id={"message"}
                        onChange={(e) =>
                            UpdateValue(e, "message", inputList, setInputList)
                        }
                        viewTitle
                    />

                    <div className="host-secct-4-btn">
                        <Button
                            btnTitle={"Enviar"}
                            className={"solid"}
                            onClick={handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hosts;
