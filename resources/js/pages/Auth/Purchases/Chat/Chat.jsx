import React, { useRef } from 'react'
import AuthFooter from '../../../../components/atoms/AuthFooter/AuthFooter'
import Back from '../../../../components/atoms/Back/Back'
import AuthHeader from '../../../../components/organisms/AuthHeader/AuthHeader'

import "./Chat.scss"

//Asstes
import Combi from '../../../../assets/Auth/carCombi.png'
import Send from '../../../../assets/Auth/send.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ChatAlkimia from '../../../../components/molecules/ChatAlkimia/ChatAlkimia'

const Chat = () => {
    const fechaActual = new Date();
    const {id} = useParams()
    const [time, setTime] = useState()
    const [mensajes, setMensajes] = useState([
        {
            autor: 'Proveedor',
            contenido: 'Hola, María. Gracias por tu preferencias al escoger nuestros productos. Este es tu número de rastreo: 5245962',
            tiempo: new Date()
        },
        {
            autor: 'Cliente',
            contenido: 'Hola, entendido, gracias',
            tiempo: new Date()
        },

    ]);
    // const [nuevoMensaje, setNuevoMensaje] = useState("");
    // const [esCliente, setEsCliente] = useState(true);
    // const navigate = useNavigate()

    // const buttonRef = useRef()

    // useEffect(() => {
    //     const handleEnter = (event) => {
    //       if (event.keyCode === 13) { // 13 es el código de tecla para Enter
    //         buttonRef.current.click();
    //       }
    //     };
    //     document.addEventListener("keydown", handleEnter);
    //     return () => {
    //       document.removeEventListener("keydown", handleEnter);
    //     };
    //   }, []);
    
   

    // const handleMessage = () => {
    //     if (nuevoMensaje.trim()) {
    //         const autor = esCliente ? "Cliente" : "Proveedor"; // Establece el autor del mensaje
    //         const nuevoMensajeObj = { autor, contenido: nuevoMensaje, tiempo: new Date() }; // Crea un objeto para representar el mensaje
    //         setMensajes([...mensajes, nuevoMensajeObj]); // Agrega el nuevo mensaje al arreglo de mensajes
    //         setNuevoMensaje("");
    //         document.getElementById("send-mess").value = ""
    //       }
    // }

  return (
    <>
        <AuthHeader />
        <div className="AuthView">
            <div className="Chat-ui">
                <div className="bg-vg">
                    <div className="bg-white1"></div>
                </div>
                <div className="los-title">
                    <Back
                        className={"cnt-return"}
                        onClick={() => navigate("/purchases")}
                    />
                    <div className="header-h">
                        <div className="cnt-img">
                            <img src={Combi} alt="" className="img-l" />
                        </div>
                        <label className="label-l">TravelTours</label>
                    </div>
                </div>
                <ChatAlkimia mensajes={mensajes} setMensajes={setMensajes}/>
            </div>
            <AuthFooter />
        </div>
    </>
  )
}

export default Chat