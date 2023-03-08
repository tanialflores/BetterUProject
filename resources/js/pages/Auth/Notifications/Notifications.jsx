import React, { useState } from "react";
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import Status from "../../../components/atoms/Status/Status";

import "./Notifications.scss";

const Notifications = () => {

    const [status, setStatus] = useState(false)

    const notificatios= [
        {
            id: 1,
            title: "Compra exitosa",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna.",
            read: false
        }
    ]

    return (
        <div className="AuthView">
            <div className="Notifications-ui">
                <div className="bg-vg">
                    <div className="bg-white1"></div>
                </div>
                <div className="los-title">Notificaciones</div>
                <div className="cnt-Notifications">
                    <Status value={status} setValue={setStatus} title={"Silenciar"}/>
                    <div className="inside-notif">
                        {notificatios.map((item, idx) => (
                            <div className="notifica-tions">

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AuthFooter />
        </div>
    );
};

export default Notifications;
