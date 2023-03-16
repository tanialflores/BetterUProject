import React from "react";

import "./CancelModal.scss";

//Asstes
import Gender from './icons/gander.svg'

const CancelModal = ({setClose, setNextModal, viewNavigate}) => {

    // const [nextModal, setNextModal] = useState(false)

    return (
        <div className="CancelModal">
            <div className="modalCard">
                <div className="closer" onClick={() => setClose(false)}>X</div>
                <label className="cancell">Cancelar</label>
                <p className="descrip-p">
                    Puedes solicitar un reembolso a tu monedero o reagendar la
                    experiencia. Para dudas y aclaraciones puedes consultar
                    nuestros <span className="term-span">"Términos y condiciones"</span>
                </p>

                <div className="card-l" onClick={() => {setNextModal(true), setClose(false)}}>
                    <div className="bg-color">x</div>
                    Cancelar y recibir un reembolso
                </div>
                <div className="card-l" onClick={viewNavigate}>
                    <img src={Gender} alt="" className="icon-s" />
                    Reagendar
                </div>
            </div>
        </div>
    );
};

export default CancelModal;
