import React, { useState } from "react";
import Button from "../../../../components/atoms/Button/Button";
import TextArea from "../../../../components/atoms/TeaxtArea/TextArea";

//Components
import Allmexicancheese from "../../../../assets/icons/allmexicancheese.jpeg";
import Eye from "../../../../assets//icons/blackEye.svg";
import Message from "../../../../assets/icons/blackMessage.svg";
import Heart from "../../../../assets/icons/blackHeart.svg";
import PuntosBlack from "../../../../assets/icons/puntoBlack.png";
import Puntos from "../../../../assets/icons/puntos.png";
import ShareWhite from "../../../../assets/icons/ShareWhite.svg";

import Instagram from "../../../../assets/icons/instagram.svg";
import Facebook from "../../../../assets/icons/facebook.svg";
import Whatsapp from "../../../../assets/icons/whatsapp.svg";
import Twitter from "../../../../assets/icons/twitter.svg";

import Quesos from "../../../../assets/icons/quesos.png";
import Oval from "../../../../assets/icons/Oval.png";
import Oval1 from "../../../../assets/icons/Oval (1).png";
import Oval2 from "../../../../assets/icons/Oval (2).png";
import Oval3 from "../../../../assets/icons/Oval (3).png";
import Oval4 from "../../../../assets/icons/Oval (4).png";

import Campeche from "../../../../assets/icons/campechex.png";
import Maridar from "../../../../assets/icons/maridar.png";

//styles
import "./ShowBlog.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

const ShowBlogSkeleton = () => {
    const [openShare, setopenShare] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const Info = () => {
        return (
            <div className="Info">
                <div>
                    México es un país lleno de sabores y hoy toca descubrirlo
                    con un alimento que ha sido parte de nuestra cultura por
                    cientos de años: Los Quesos. Conoce sus diferentes variantes
                    que se pueden encontrar en las regiones de nuestro país.
                </div>
                <div>
                    <p>1.Queso Chihuahua</p>
                    Como su nombre lo indica, este queso es común del estado de
                    Chihuahua o menonita. Se hace a base de leche entera y
                    pasteurizada de vaca.
                </div>
                <div>
                    <p>2.Queso Oaxaca</p>
                    Originario de los Valles Centrales de Oaxaca, el quesillo o
                    queso Oaxaca es uno de los quesos mexicanos más conocidos. Y
                    es que, su textura blanda y sabor suave.
                </div>
                <div>
                    <p>3.Queso ahumado</p>
                    Este queso es originario de España pero fue adoptado por la
                    cocina chiapaneca quien lo convirtió en un queso muy querido
                    y tradicional. Cabe señalar que este queso también se
                    prepara con leche de vaca, aunque la diferencia está en que,
                    después de crear la pasta, es ahumado con maderas durante
                    siete horas.
                </div>
                <div>
                    <p>4.Queso de tenate</p>
                    Cuando hablamos de queso de tenate, es erróneo creer que se
                    trata de un solo queso. De hecho, este nombre incluye a
                    varios tipos de queso fresco que pueden estar hechos a base
                    de leche de vaca o de cabra. Simplemente porque son aquellos
                    quesos que se producen, conservan y venden en tenate, una
                    especie de canasta hecha de hojas de palma que envuelven a
                    este lácteo y le otorgan un sabor y olor particular.
                </div>

                <div>
                    <p>5.Queso adobera</p>
                    Este alimento es común en todo México aunque tiene un lugar
                    muy especial dentro de la gastronomía del estado de Jalisco.
                    Se estima que tiene 100 años de existencia y que desde
                    entonces ha deleitado nuestro paladar convirtiéndose en uno
                    de nuestros lácteos favoritos. El adobera es un tipo de
                    queso fresco hecho a base de leche de vaca.
                </div>
                <div>
                    <p>6.Queso de hoja</p>
                    Se trata de un queso fresco oriundo de Veracruz. Es de pasta
                    es blanda y se hace a base de leche bronca de vaca. Su
                    nombre se debe a que, una vez hecho el queso, se envuelve
                    con hojas de una planta conocida como “hoja de queso”.
                </div>
                <div>
                    <p>7.Queso botanero</p>
                    Igual que el queso de tenate, el queso botanero se refiere a
                    una variedad de estos productos lácteos. En este caso, Esta
                    delicia es oriunda del centro de México aunque también puede
                    encontrarse en algunos sitios de Veracruz como Xalapa. Es
                    usual que la gente los prepare con distintos tipos de chile
                    -como jalapeños, verdes o chipotles- e incluso con semillas
                    como cacahuate y ajonjolí. Estos ingredientes extras le
                    brindan un sabor único y verdaderamente delicioso.
                </div>
            </div>
        );
    };

    const comments = [
        {
            id: 1,
            img: Oval,
            comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed",
        },
        {
            id: 2,
            img: Oval2,
            comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed",
        },
        {
            id: 3,
            img: Oval3,
            comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed",
        },
        {
            id: 4,
            img: Oval4,
            comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed",
        },
    ];

    const datas = [
        {
            id: 1,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            icon: PuntosBlack,
            heart: Heart,
            countH: 12,
            eye: Eye,
            countEy: 12,
            message: Message,
            countMs: 12,
        },
    ];

    const netWorks = [
        {
            id: 1,
            network: "Instagram",
            icon: Instagram,
        },
        {
            id: 2,
            network: "Facebook",
            icon: Facebook,
        },
        {
            id: 3,
            network: "Twitter",
            icon: Twitter,
        },
        {
            id: 4,
            network: "WhatsApp",
            icon: Whatsapp,
        },
    ];

    const newCards = [
        {
            id: 1,
            bg: Campeche,
            title: "Guía de viaje por Campeche",
        },
        {
            id: 2,
            bg: Maridar,
            title: "Guía de viaje por Campeche",
        },
        {
            id: 3,
            bg: Allmexicancheese,
            title: "Guía de viaje por Campeche",
        },
    ];

    const [publisher, setPublisher] = useState({
        message: "",
    });

    const handleChange = (e) => {
        setPublisher({
            ...publisher,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (publisher.message === "") return 0;
    };

    return (
        <div className="ShowBlog">
            <div className="ssecct1">
                <div className="ssecct-1-cont-img">
                    <Skeleton width="100%" height="100%" />
                </div>
                <div className="ssecct-1-b">
                    <Skeleton width="100%" height="20px" />
                </div>
            </div>
            <div className="ssecct2">
                <Skeleton width="350px" height="40px" />
                <div className="ssecct-2-descrip">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 15,
                        }}
                    >
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                    </div>
                </div>
            </div>
            <div className="ssecct3">
                <Skeleton width="100%" height="100%"/>
            </div>
        </div>
    );
};

export default ShowBlogSkeleton;
