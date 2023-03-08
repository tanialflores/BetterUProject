import React, { useState } from "react";
import Back from "../../../../components/atoms/Back/Back";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import "./EditAddress.scss";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/atoms/Input/Input";
import Button from "../../../../components/atoms/Button/Button";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";

const EditAddress = () => {
    const navigate = useNavigate();
    const [inputList, setInputList] = useState({
        address: {value: null, validationType: "empty"},
        colonia: {value: null, validationType: "empty"},
        exterior: {value: null, validationType: "empty"},
        city: { value: null, validationType: "empty" },
        code: {value: null, validationType: "empty"},
        interior: { value: null, validationType: "empty" },
        state: { value: null, validationType: "empty" },
        calle: { value: null, validationType: "empty" },
    });
    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="Address-Edit">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="TitleAddress">
                    <Back
                    className="Return" onClick={()=> navigate("/profile")}/>
                    <p>Editar dirección</p>
                </div>
                <div className="Container-EditAddress">
                    <div className="Container-Inputs">
                        <Input
                        title={"Nombre de la dirección"}
                        placeholder="Casa, trabajo, oficina..."
                        id={"address"}
                            onChange={(e) =>
                                UpdateValue(e, "address", inputList, setInputList)
                            }
                        />
                         <Input
                        title={"Calle"}
                        placeholder="Calle"
                        id={"calle"}
                            onChange={(e) =>
                                UpdateValue(e, "calle", inputList, setInputList)
                            }
                        />
                        <Input
                        title={"No. Exterior"}
                        placeholder="Exterior"
                        id={"exterior"}
                            onChange={(e) =>
                                UpdateValue(e, "exterior", inputList, setInputList)
                            }
                        />
                        <Input
                        title={"No. Interior"}
                        placeholder="Interior"
                        id={"interior"}
                            onChange={(e) =>
                                UpdateValue(e, "interior", inputList, setInputList)
                            }
                        />
                        <Input
                        title={"Colonia"}
                        placeholder="Colonia"
                        id={"colonia"}
                            onChange={(e) =>
                                UpdateValue(e, "colonia", inputList, setInputList)
                            }
                        />
                        <Input
                        title={"C.P."}
                        placeholder="Código postal"
                        id={"code"}
                            onChange={(e) =>
                                UpdateValue(e, "code", inputList, setInputList)
                            }
                        />
                        <Input
                        title={"Estado"}
                        placeholder="Estado"
                        id={"state"}
                            onChange={(e) =>
                                UpdateValue(e, "state", inputList, setInputList)
                            }
                        />
                        <Input
                        title={"Ciudad"}
                        placeholder="Ciudad"
                        id={"city"}
                            onChange={(e) =>
                                UpdateValue(e, "city", inputList, setInputList)
                            }
                        />
                    </div>
                    <div className="Buttons">
                        <Button
                        btnTitle="Cancelar"
                        className="ButtonCancel"
                        onClick={()=> navigate("/profile/address")}
                        />
                        <Button
                        btnTitle="Guardar"
                        className="ButtonSave"
                        onClick={()=> navigate("/profile/address")}
                        />
                    </div>
                </div>
            </div>
            <AuthFooter/>
        </div>
        </>
    );
}

export default EditAddress;