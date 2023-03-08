import React from "react";
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";
import "./MyProfile.scss";
import portada from "../../../assets/icons/portada.png";
import profile from "../../../assets/icons/profile.png";
import plus from "../../../assets/icons/plus.svg";
import level from "../../../assets/icons/level.png";
import { ProgressBar } from "primereact/progressbar";
import IconPencil from "../../../assets/icons/IconPencil.svg";
import { useNavigate } from "react-router-dom";

//Tania 🌹❤

const MyProfile = () => {
    const navigate = useNavigate();
    const data = [
        {
            id: 1,
            abbreviated: "M. Isabel Dominguez",
            nameComplete: "Maria Isabel Dominguez",
            gender: "Femenino",
            age: "22 años",
            language: "Español",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.",
            address: "Fray Antonio Alcalde Y Barriga 1931, La Guadalupana, 44220 Guadalajara, Jal.",
            points: "22 de 30 puntos"
        }
    ]
    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="MyProfile">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="ContainerProfile">
                {data.map((item)=>(
                    <>
                    <div className="ContainerInformation">
                        <div className="Gradient">
                            <div className="White"></div>
                            <img src={portada} className="FrontPage"></img>
                        </div>
                        <div className="ImageProfile">
                            <img src={profile} className="Profile"></img>
                        </div>
                        <div className="NameAbb">{item.abbreviated}</div>
                    </div>
                    <div className="Cards">
                        <div className="CardInformation">
                            <div className="Name">
                                <div className="TitleName">Nombre completo</div>
                                <div className="TextName">{item.nameComplete}</div>
                            </div>
                            <div className="Info">
                                <div className="Gender">
                                    <div className="TitleGender">Género</div>
                                    <div className="TextGender">{item.gender}</div>
                                </div>
                                <div className="Age">
                                    <div className="TitleAge">Edad</div>
                                    <div className="TextAge">{item.age}</div>
                                </div>
                                <div className="Language">
                                    <div className="TitleLanguage">Idioma</div>
                                    <div className="TextLanguage">{item.gender}</div>
                                </div>
                            </div>
                            <div className="Edit-Profile" onClick={()=> navigate("/profile/edit")}>Editar perfil</div>
                        </div>
                        <div className="CardLevel">
                            <div className="Level">
                                <div className="TextLevel">Nivel 1</div>
                                <div className="ButtonPlus"  onClick={()=> navigate("/profile/levels")}>
                                    <img src={plus}></img>
                                </div>
                            </div>
                            <div className="ImageLevel">
                                <img src={level} className="Level"></img>
                            </div>
                            <div className="Details">
                                <div className="TitleDetails">Detalles:</div>
                                <div className="TextDetails">{item.details}</div>
                            </div>
                            <div className="LineWhite"></div>
                            <div className="ProgressBar">
                                <div className="TextPoints">{item.points}</div>
                                <ProgressBar
                                    value={66.66}
                                    className="barra"
                                    showValue={false}
                                />
                            </div>
                        </div>
                        <div className="Card-Address">
                            <div className="Address-Cont">
                                <div className="Text-Address">Dirección</div>
                                <div className="Edit-Address" onClick={()=> navigate("/profile/address")}>
                                    <img src={IconPencil}></img>
                                </div>
                            </div>
                            <div className="ContAddress">{item.address}</div>
                        </div>
                    </div>
                    </>
                ))}
                </div>
        </div>
        <AuthFooter/>
        </div>
        </>
    );
};

export default MyProfile;