import React from "react";

import "./PayMethods.scss";

//Assets
import PayCard from "../../../../../assets/Auth/pago-con-tarjeta.svg";
import Py_png from "../../../../../assets/Auth/py_png.png";
import Google from "../../../../../assets/Auth/google_pay.png";
import Apple_pay from "../../../../../assets/Auth/apple_pay.png";
import { useState } from "react";

const PayMethods = ({ setValue, setNewValue_A, setNewValue_B }) => {
    const [state, setState] = useState(false);

    const [methods, setMethods] = useState([
        {
            id: 1,
            icon: PayCard,
            txt: "Tarjeta de crédito/Débito",
            watch: false,
        },
        {
            id: 2,
            icon: Py_png,
            class: "paypal-l",
            watch: false,
        },
        {
            id: 3,
            icon: Google,
            class: "google-e",
            watch: false,
        },
        {
            id: 4,
            icon: Apple_pay,
            class: "apple-e",
            watch: false,
        },
    ]);

    const handlePicked = (id, type) => {
        setState(id);
        setValue(id);

        if (type == 0) {
            setNewValue_A(true);
            setNewValue_B(false);
        } else {
            setNewValue_B(true);
            setNewValue_A(false);
        }
    };

    return (
        <div className="PayMethods">
            <label className="picked-method">
                Selecciona un método de pago
            </label>
            {methods.map((mt, idx) => (
                <div
                    className="card-met"
                    key={idx}
                    onClick={() => handlePicked(mt.id, idx)}
                >
                    <div className={`cnt-icon ${mt.class && mt.class}`}>
                        <img src={mt.icon} alt="" className="icon-n" />
                    </div>
                    {mt.txt && <label className="mt-text">{mt.txt}</label>}
                </div>
            ))}
        </div>
    );
};

export default PayMethods;
