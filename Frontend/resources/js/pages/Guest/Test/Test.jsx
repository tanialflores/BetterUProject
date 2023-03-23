import "./Test.scss";

import React, { useState } from "react";
import ChatAlkimia from "../../../components/molecules/ChatAlkimia/ChatAlkimia";

const Test = () => {

    const [mensajes, setMensajes] = useState([
        {
            autor: 'Cliente',
            contenido: 'Hola, buen día. Tengo problemas con mi compra',
            tiempo: new Date()
        },
        {
            autor: 'Proveedor',
            contenido: 'Hola, Santiago ¿Cómo podemos ayudarte?',
            tiempo: new Date()
        },
    ]);
    return (
        <div className="AuthView">
            <div className="Contact-Better">
                <div className="bg-vg">
                    <div className="bg-white1"></div>
                </div>
                <div className="cnt-txt">Test Better U</div>
                <div className="cardBody-Better">
                    <ChatAlkimia mensajes={mensajes} setMensajes={setMensajes}/>
                </div>
            </div>
        </div>
    );
};

export default Test;
