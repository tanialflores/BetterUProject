import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

//Assets
import Send from '../../../assets/Auth/send.svg'

import "./ChatAlkimia.scss"

import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const ChatAlkimia = ({}) => {
    const [nuevoMensaje, setNuevoMensaje] = useState("");
    const navigate = useNavigate()

    const buttonRef = useRef()

    const [mensajes, setMensajes] = useState(null);

    useEffect(() => {
        socket.on('message', (msg) => {
            const array = [...msg]
            setMensajes(array);
        });
      }, [mensajes]);

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

    const handleMessage = (e) => {
        e.preventDefault()
        socket.emit('connection', nuevoMensaje);
        setNuevoMensaje('');
        // if (nuevoMensaje.trim()) {
        //     const autor = esCliente ? "Cliente" : "Proveedor"; // Establece el autor del mensaje
        //     const nuevoMensajeObj = { autor, contenido: nuevoMensaje, tiempo: new Date() }; // Crea un objeto para representar el mensaje
        //     setMensajes([...mensajes, nuevoMensajeObj]); // Agrega el nuevo mensaje al arreglo de mensajes
        //     setNuevoMensaje("");
        //     document.getElementById("send-mess").value = ""
        //   }
    }
    console.log('msg', mensajes);
    return (
    <div className="cnt-cards-c">
        <div className="cnt-chat-c">
            {mensajes&&mensajes.map((mensaje, index) => (
                <div className='cntm-messa' key={index}>
                    <div className={`mensaje ${mensaje.autor === "Proveedor" ? "proveedor" : "cliente"}`}>
                        {mensaje.text}
                    </div>
                    {/* <label className={`hours-r ${mensaje.autor === "Proveedor" ? "labelpr" : "labelcli"}`}>{mensaje.tiempo.toLocaleTimeString()}</label> */}
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
