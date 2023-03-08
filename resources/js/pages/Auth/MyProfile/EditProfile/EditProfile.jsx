import React, { useState } from "react";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import Back from "../../../../components/atoms/Back/Back";
import ChargeImg from "../../../../components/molecules/ChargeImg/ChargeImg";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import cuenta from "../../../../assets/icons/cuenta.svg";
import "./EditProfile.scss";
import Input from "../../../../components/atoms/Input/Input";
import {
    UpdateValue,
} from "../../../../utilities/Validations";
import Select from "../../../../components/atoms/Select/Select";
import Button from "../../../../components/atoms/Button/Button";
import portada from "../../../../assets/icons/portada.png";
import SaveModal from "../../../../components/molecules/SaveModal/SaveModal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();
    const optionsGender = [
        {
            label: "Femenino",
            value: "femenino",
        },
        {
            label: "Masculino",
            value: "masculino",
        },
        {
            label: "Prefiero no contestar",
            value: "Prefiero no contestar",
        },
    ];
    const optionsLanguage = [
        {
            label: "Español",
            value: "español",
        },
        {
            label: "Inglés",
            value: "ingles",
        },
    ];
    const [inputList, setInputList] = useState({
        alias: {value: "M. Isabel Dominguez" , validationType: "empty"},
        name: {value: "Maria Isabel Dominguez" , validationType: "empty"},
        age: {value: "22" , validationType: "empty"},
        gender: { value: null, validationType: "empty" },
        tel: {value: "(732) 421-5886" , validationType: "empty"},
        language: { value: null, validationType: "empty" },
    });

    const handle = () => {
        setModalOpen(true)
        
    };
    const [ModalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if(ModalOpen){
            setTimeout(function(){
                navigate("/profile")
                setModalOpen(false)
            }, 2000);
        }
    }, [ModalOpen]);

    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="EditProfile">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="TitleProfile">
                    <Back
                    className="Return" onClick={()=> navigate("/profile")}/>
                    <p>Editar perfil</p>
                </div>
                <div className="ContainerProfile">
                    <div className="ChangeBackground">
                        <ChargeImg
                            width={"315px"}
                            height={"133px"}
                            activePencil
                            defaultImg={portada}
                            className="profile"
                            id="back-img"
                            name={"back-img"}
                        />
                    </div>
                    <div className="EditLogo">
                        <ChargeImg
                            activePencil
                            defaultImg={cuenta}
                            className="uploadLogo"
                        />
                    </div>
                    <div className="ContainerInputs">
                        <Input
                        title="Alias de Alkimista"
                        className="Input1"
                        value={inputList.alias.value}
                            id={"alias"}
                            onChange={(e) =>
                                UpdateValue(e, "alias", inputList, setInputList)
                            }
                        />
                        <Input
                        title="Nombre"
                        className="Input2"
                        value={inputList.name.value}
                            id={"name"}
                            onChange={(e) =>
                                UpdateValue(e, "name", inputList, setInputList)
                            }
                        />
                        <Input
                                className="InputDesktop"
                                title="Edad"
                                value={inputList.age.value}
                                    id={"age"}
                                    onChange={(e) =>
                                        UpdateValue(e, "age", inputList, setInputList)
                                    }
                            />
                        <div className="ContainerInputs2">
                            <Input
                                className="Input3"
                                title="Edad"
                                value={inputList.age.value}
                                    id={"age"}
                                    onChange={(e) =>
                                        UpdateValue(e, "age", inputList, setInputList)
                                    }
                            />
                            <Select
                            placeholder={"Género"}
                            options={optionsGender}
                            value={inputList.gender.value}
                            title={"Género"}
                            id={"gender"}
                            className="Select1"
                            optionLabel="label"
                            onChange={(e) =>
                                UpdateValue(
                                    e,
                                    "gender",
                                    inputList,
                                    setInputList
                                )
                            }
                            />
                        </div>
                        <Input
                        title="Teléfono"
                        className="Input4"
                        value={inputList.tel.value}
                            id={"tel"}
                            onChange={(e) =>
                                UpdateValue(e, "tel", inputList, setInputList)
                            }
                        />
                        <Select
                            placeholder={"Español"}
                            options={optionsLanguage}
                            value={inputList.language.value}
                            title={"Idioma"}
                            id={"language"}
                            optionLabel="label"
                            className="Select2-j"
                            onChange={(e) =>
                                UpdateValue(
                                    e,
                                    "language",
                                    inputList,
                                    setInputList
                                )
                            }
                        />
                    </div>
                    <div className="Buttons">
                        <Button
                        btnTitle="Cancelar"
                        className="ButtonCancel"
                        onClick={()=> navigate("/profile")}
                        />
                        <Button
                        btnTitle="Guardar"
                        className="ButtonSave"
                        onClick={() => handle()}
                        />
                    </div>
                </div>
            </div>
            <AuthFooter/>
           {ModalOpen && <SaveModal message={"¡Cambios guardados con éxito!"}/>}
        </div>
        </>
    );
};

export default EditProfile;