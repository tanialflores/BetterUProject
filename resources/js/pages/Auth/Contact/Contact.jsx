import React, { useState } from "react";
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import ChatAlkimia from "../../../components/molecules/ChatAlkimia/ChatAlkimia";

import "./Contact.scss";

const Contact = () => {

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
            <div className="Contact-t">
                <div className="bg-vg">
                    <div className="bg-white1"></div>
                </div>
                <div className="cnt-txt">Contacto</div>
                <div className="cardBody-t">
                    <ChatAlkimia mensajes={mensajes} setMensajes={setMensajes}/>
                </div>
            </div>
            <AuthFooter />
        </div>
    );
};

export default Contact;
