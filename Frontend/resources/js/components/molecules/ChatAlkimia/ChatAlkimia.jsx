import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

//Assets
import Send from '../../../assets/Auth/send.svg'

import "./ChatAlkimia.scss"

import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const ChatAlkimia = ({}) => {

    const [buttonS, setButtonS] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', (msg) => {
            setMessages([...messages, msg]);
        });
      }, [messages]);

    const handleMessage = (e) => {
        e.preventDefault()
        if(buttonS) {
            socket.emit('message', buttonS);
            setButtonS('');
        }
    }

    const handleButton = (id) => {
        console.log('123', messages.length);
        if(messages.length <= 126){
            setButtonS({
                id: messages?.[messages.length - 1]?.id,
                text: id,
                author: 'cliente'
            })
        }
    }

    return (
        <div className="cnt-cards-c">
            <div className="cnt-chat-c">
                {messages&&messages.map((mensaje, index) => (
                    <div className='cntm-messa' key={index}>
                        <div className={`mensaje ${mensaje.author === "proveedor" ? "proveedor" : "cliente"}`}>
                            {mensaje.text}
                        </div>
                        <label className={`hours-r ${mensaje.author === "proveedor" ? "labelpr" : "labelcli"}`}>{mensaje.day}</label>
                    </div>
                ))}
            </div>
            <div className="cnt-input">
                {/* <input type="text" placeholder='Escribe aquí...' className='input-t' id="send-mess" onChange={(e) => setNuevoMensaje(e.target.value)}/> */}
                <div className='Options'>
                    <div className={`TextFrequent ${buttonS.text === 'Frecuentemente' ? 'TextFrequentH' : ''}`} onClick={() => handleButton('Frecuentemente')} >Frecuentemente</div>
                    <div className={`TextSome ${buttonS.text === 'Algunas veces' ? 'TextSomeH' : ''}`} onClick={() => handleButton('Algunas veces')} >Algunas veces</div>
                    <div className={`Never ${buttonS.text === 'Nunca' ? 'NeverH' : ''}`} onClick={() => handleButton('Nunca')} >Nunca</div>
                </div>
                <img src={Send} alt="" className='s-send' onClick={handleMessage} id="idMyImage"/>
            </div>
        </div>
    )
}

export default ChatAlkimia
