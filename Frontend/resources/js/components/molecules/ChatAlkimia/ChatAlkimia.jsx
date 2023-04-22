import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

//Assets
import Send from '../../../assets/Auth/send.svg'

import "./ChatAlkimia.scss"

const ChatAlkimia = ({mensajes, setMensajes}) => {
    const [nuevoMensaje, setNuevoMensaje] = useState("");
    const [esCliente, setEsCliente] = useState(true);
    const navigate = useNavigate()

    const buttonRef = useRef()

    useEffect(() => {
        const handleEnter = (event) => {
          if (event.keyCode === 13) { // 13 es el código de tecla para Enter
            buttonRef.current.click();
          }
        };
        document.addEventListener("keydown", handleEnter);
        return () => {
          document.removeEventListener("keydown", handleEnter);
        };
      }, []);
    
    const handleMessage = () => {
        if (nuevoMensaje.trim()) {
            const autor = esCliente ? "Cliente" : "Proveedor"; // Establece el autor del mensaje
            const nuevoMensajeObj = { autor, contenido: nuevoMensaje, tiempo: new Date() }; // Crea un objeto para representar el mensaje
            setMensajes([...mensajes, nuevoMensajeObj]); // Agrega el nuevo mensaje al arreglo de mensajes
            setNuevoMensaje("");
            document.getElementById("send-mess").value = ""
          }
    }

  return (
    <div className="cnt-cards-c">
        <div className="cnt-chat-c">
            {mensajes.map((mensaje, index) => (
                <div className='cntm-messa' key={index}>
                    <div className={`mensaje ${mensaje.autor === "Proveedor" ? "proveedor" : "cliente"}`}>
                        {mensaje.contenido}
                    </div>
                    <label className={`hours-r ${mensaje.autor === "Proveedor" ? "labelpr" : "labelcli"}`}>{mensaje.tiempo.toLocaleTimeString()}</label>
                </div>
            ))}
        </div>
        <div className="cnt-input">
            {/* <input type="text" placeholder='Escribe aquí...' className='input-t' id="send-mess" onChange={(e) => setNuevoMensaje(e.target.value)}/> */}
            <div className='Options'>
                <div className='TextFrequent'>Frecuentemente</div>
                <div className='TextSome'>Algunas veces</div>
                <div className='Never'>Nunca</div>
            </div>
            <img src={Send} alt="" className='s-send' onClick={handleMessage} ref={buttonRef} id="idMyImage"/>
        </div>
    </div>
  )
}

export default ChatAlkimia