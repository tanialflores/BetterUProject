import React from "react";

//Assets
import ArrowUp from "./icons/upLevel.svg";
import Wallet from "./icons/cpnk.svg";
import Ticket from "./icons/ticketW.svg";

//Styles
import "./BenefitsIcons.scss";

const BenefitsIcons = ({ className }) => {
    return (
        <div className={`BenefitsIcons ${className}`}>
            <div className="club-title">Beneficios del club Alkimia</div>
            <div className="block-bfs">
                <div className="block-resp">
                    <div className="circle-bfs">
                        <img src={ArrowUp} alt="" className="img-bfs" />
                    </div>
                    <label className="xtx-label">Sube al siguiente nivel</label>
                </div>
                <div className="block-resp">
                    <div className="circle-bfs">
                        <img
                            src={Wallet}
                            alt=""
                            className="img-bfs filterMax"
                        />
                    </div>
                    <label className="xtx-label">
                        Obten 12 puntos en tu monedero
                    </label>
                </div>
                <div className="block-resp">
                    <div className="circle-bfs tick">
                        <img src={Ticket} alt="" className="img-bfs ictick" />
                    </div>
                    <label className="xtx-label freex">Bebída gratis</label>
                </div>
            </div>
        </div>
    );
};

export default BenefitsIcons;
