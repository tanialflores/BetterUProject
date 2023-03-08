import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/atoms/Button/Button";

import "./TemnsAndCods.scss";

const TemnsAndCods = () => {

    const navigate = useNavigate()

    const [isCheckedTerminos, setIsCheckedTerminos] = useState(false);
    const [isCheckedPoliticas, setIsCheckedPoliticas] = useState(false);

    const handleTerminos = () => {
        setIsCheckedTerminos(!isCheckedTerminos);
    };

    const handlePoliticas = () => {
        setIsCheckedPoliticas(!isCheckedPoliticas);
    };

    const handleCancel = () => {
        navigate("/register-info")
    }

    const handleSubmit = () => {
        navigate("/welcome-user")
    }


    return (
        <div className="TemnsAndCods">
            <div className="line-change"></div>
            <div className="t-cards">
                <div className="zsecct1">
                    <p className="zsecct-1-title">Términos y condiciones</p>
                    <p className="zsecct-1-descrip">
                        Para poder crear tu cuenta es necesario que aceptes
                        nuestras política
                    </p>
                    <div className="zsecct-info">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sunt nihil dolor quas distinctio ad voluptatum
                        omnis excepturi praesentium, voluptas consequatur alias
                        earum laudantium quaerat deserunt placeat voluptates
                        dicta doloremque id rerum, beatae tenetur? Sapiente
                        harum numquam perspiciatis commodi officiis. Aperiam,
                        dignissimos consectetur assumenda deserunt velit quia
                        maiores unde suscipit quibusdam ipsam id, iste
                        voluptatum eaque quae similique mollitia magnam minus.
                        Ullam in autem voluptatibus eius assumenda ad illo odio
                        voluptatum placeat suscipit optio vero cumque excepturi,
                        nesciunt mollitia quidem et id quo quos! Illo quis
                        doloribus error blanditiis libero deserunt perferendis
                        in reprehenderit vel soluta ipsa maxime, dicta aliquid
                        ducimus.
                    </div>
                </div>
                <div className="zsecct2">
                    <p className="zsecct-2-title">Políticas de privacidad</p>
                    <div className="zsecct-info">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sunt nihil dolor quas distinctio ad voluptatum
                        omnis excepturi praesentium, voluptas consequatur alias
                        earum laudantium quaerat deserunt placeat voluptates
                        dicta doloremque id rerum, beatae tenetur? Sapiente
                        harum numquam perspiciatis commodi officiis. Aperiam,
                        dignissimos consectetur assumenda deserunt velit quia
                        maiores unde suscipit quibusdam ipsam id, iste
                        voluptatum eaque quae similique mollitia magnam minus.
                        Ullam in autem voluptatibus eius assumenda ad illo odio
                        voluptatum placeat suscipit optio vero cumque excepturi,
                        nesciunt mollitia quidem et id quo quos! Illo quis
                        doloribus error blanditiis libero deserunt perferendis
                        in reprehenderit vel soluta ipsa maxime, dicta aliquid
                        ducimus.
                    </div>
                </div>
                <div className="zsecct3">
                    <div className="zsecct-3-aceppt">
                        <input
                            type="checkbox"
                            className="zsecct-3-checkbox"
                            checked={isCheckedTerminos}
                            onChange={handleTerminos}
                            style={{cursor: "pointer"}}
                        />
                        <p>Acepto los términos y condiciones</p>
                    </div>
                    <div className="zsecct-3-aceppt">
                        <input
                            type="checkbox"
                            className="zsecct-3-checkbox"
                            checked={isCheckedPoliticas}
                            onChange={handlePoliticas}
                            style={{cursor: "pointer"}}
                        />
                        <p>Acepto las políticas de privacidad</p>
                    </div>
                </div>
                <div className="zsecct4">
                    <Button
                        btnTitle={"Cancelar"}
                        className={"white"}
                        onClick={() => handleCancel()}
                    />
                    <Button
                        btnTitle={"Continuar"}
                        className={isCheckedPoliticas && isCheckedTerminos ? "degradado" : "disablee"}
                        onClick={isCheckedPoliticas && isCheckedTerminos ? () => handleSubmit() : null}
                    />
                </div>
            </div>
        </div>
    );
};

export default TemnsAndCods;
