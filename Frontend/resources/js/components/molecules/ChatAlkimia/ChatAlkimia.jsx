import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
//Assets
import Send from '../../../assets/Auth/send.svg'
import "./ChatAlkimia.scss"
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const ChatAlkimia = ({}) => {

    const points = localStorage.getItem('pointsAnsiedad')
    const points1 = localStorage.getItem('pointsDepresion')
    const points2 = localStorage.getItem('pointsAlimenticio')
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
            if(messages.length <= 40) {
                const total = Number(points) + buttonS.point
                localStorage.setItem('pointsAnsiedad', total)
            }
            if(messages.length > 40 && messages.length <= 82) {
                const total = Number(points1) + buttonS.point
                localStorage.setItem('pointsDepresion', total)
            }
            if(messages.length > 82 && messages.length <= 124) {
                const total = Number(points2) + buttonS.point
                localStorage.setItem('pointsAlimenticio', total)
            }
            setButtonS('');
        }
    }

    const handleButton = (id, point) => {
        if(messages.length <= 126){
            setButtonS({
                id: messages?.[messages.length - 1]?.id,
                text: id,
                author: 'cliente',
                point: point
            })
        }
    }

    const handleSwal = () => {
        Swal.fire({
            title: "Resultado:",
            text: `Ansiedad: ${points > 13 ? 'Muestra algunos rasgos del trastorno de ansiedad' : 'No presenta rasgos del trastorno'}, Depresión: ${points1 > 13 ? 'Posible trastorno de depresión' : 'No presenta rasgos del trastorno'}, Trastorno Alimenticio: ${points2 > 13 ? 'Posible transtorno alimenticio' : 'No presenta rasgos del trastorno'}`,
            showConfirmButton: true
        });
    }

    useEffect(() => {
        localStorage.setItem('pointsAnsiedad', 0)
        localStorage.setItem('pointsDepresion', 0)
        localStorage.setItem('pointsAlimenticio', 0)
    },[])

    return (
        <div className="cnt-cards-c">
            <div className="cnt-chat-c">
                {messages&&messages.map((mensaje, index) => (
                    <div className='cntm-messa' key={index}>
                        <div className={`mensaje ${mensaje.author === "proveedor" ? "proveedor" : "cliente"}`} onClick={() => mensaje.id === 64 && handleSwal()}>
                            {mensaje.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="cnt-input">
                {/* <input type="text" placeholder='Escribe aquí...' className='input-t' id="send-mess" onChange={(e) => setNuevoMensaje(e.target.value)}/> */}
                <div className='Options'>
                    <div className={`TextFrequent ${buttonS.text === 'Frecuentemente' ? 'TextFrequentH' : ''}`} onClick={() => handleButton('Frecuentemente', 1)} >Frecuentemente</div>
                    <div className={`TextSome ${buttonS.text === 'Algunas veces' ? 'TextSomeH' : ''}`} onClick={() => handleButton('Algunas veces', 1)} >Algunas veces</div>
                    <div className={`Never ${buttonS.text === 'Nunca' ? 'NeverH' : ''}`} onClick={() => handleButton('Nunca', 0)} >Nunca</div>
                </div>
                <img src={Send} alt="" className='s-send' onClick={handleMessage} id="idMyImage"/>
            </div>
        </div>
    )
}

export default ChatAlkimia
