import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Components
import AuthHeader from '../../../../components/organisms/AuthHeader/AuthHeader'
import ReactStars from '../../../../components/atoms/ReactStars/ReactStars';
import TextArea from '../../../../components/atoms/TeaxtArea/TextArea';
import Button from '../../../../components/atoms/Button/Button';
import AuthFooter from '../../../../components/atoms/AuthFooter/AuthFooter';
import SaveModal from '../../../../components/molecules/SaveModal/SaveModal';

//Styles 🦚
import "./RateExperience.scss"

//Assets
import Zas9 from "../../../../assets/Auth/zas9.png";

//Validations 
import { ColorValidation, SubmitValidation, UpdateValue } from '../../../../utilities/Validations';

const RateExperience = () => {

    const navigate = useNavigate()
    const [correct, setCorrect] = useState(false);
    const [inputList, setInputList] = useState({
        comment: { value: null, validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
        }
    }, [inputList]);

    useEffect(() => {
        if (correct) {
            const myTimeout = setTimeout(sendComment, 3000);
        }
    }, [correct]);

    const sendComment = () => {
        setCorrect(false);
        navigate("/purchases");
    };

    const handleSubmit = () => {
        if (SubmitValidation(inputList, setInputList)) {
            setCorrect(true);
        }
    };

  return (
    <>
      
            <div className="AuthView">
                <div className="RateExperience">
                    <div className="bg-vg">
                      <div className="bg-white1"></div>
                    </div>
                    <div className="cardBodyrate">
                        <div className="bg-cardWhite-rate">
                            <div className="imgTarget">
                                <div className="cnt-des">
                                    <div className="cnt-img">
                                        <img src={Zas9} alt="" className='img'/>
                                    </div>
                                    <label htmlFor="" className="descrip">Paseo matutino</label>
                                </div>
                                <div className="cnt-rate">
                                    <label htmlFor="" className="rate">Calificación</label>
                                    <ReactStars size={"42px"} starHoverColor="#df1683"/>
                                </div>
                            </div>
                            <div className="textArea-l">
                                <TextArea title={"Escribe una opinión"} placeholder="Escribe aquí..." className={"secct-area"}  id={"comment"} onChange={(e) => UpdateValue(e, "comment", inputList, setInputList )}/>
                                <div className="cnt-btns">
                                    <Button className={"white"} btnTitle="Cancelar" onClick={() => navigate("/purchases")}/>
                                    <Button className={"degradado"} btnTitle="Calificar" onClick={() => handleSubmit()}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {correct && <SaveModal message={"¡Opinión publicada con exito!"}/>}
                </div>
                <AuthFooter />
            </div>
    </>
  )
}

export default RateExperience