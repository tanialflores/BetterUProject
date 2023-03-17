import React from "react";
import Button from "../../atoms/Button/Button";
import ReactStars from "../../atoms/ReactStars/ReactStars";

import arrowUp from "../../../assets/Auth/arrowUpColorPink.svg";
import Premios from "../../../assets/Auth/premios.png";
import Ticket from "../../../assets/Auth/ticket.svg";
import Heart from "../../../assets/icons/heart.svg";

import "./CardsHome.scss";
import { NavLink, useNavigate } from "react-router-dom";

const CardsHome = ({
    Cards,
    displayNone,
    rowRev,
    nextView,
    viewElemnts = false,
    viewBtn = false,
    viewBtnSale = false,
    size,
    className
}) => {

    return (
        <>
            {Cards.map((item, idx) => {
                if(idx < 8)
                return (
                    <div className={`Cardxx ${className}`} key={item.uuid}>
                        <div
                            className="CardsHome"
                            // onClick={() => {nextView ? nextView(item.uuid) : {}}}
                        >
                            <img src={item.image_experience} alt="" className="card-img" />
                            {item.is_recommended_by_alkimists && (
                                <img
                                    src={Premios}
                                    alt=""
                                    className="item-reward"
                                />
                            )}
                            <div className="container-arrow">
                                <img
                                    src={arrowUp}
                                    alt=""
                                    className="item-arrow"
                                />
                            </div>
                            <div className="container-points">
                                {/* {item.alkimia_points} */}
                                0 p
                            </div>

                            {viewElemnts && (
                                <div
                                    className="cont-h-t"
                                    style={{ flexDirection: rowRev }}
                                >
                                    <div className="container-ticket">
                                        <img
                                            src={Ticket}
                                            alt=""
                                            className="item-ticket"
                                        />
                                    </div>
                                    <div className="item-heart">
                                        <img
                                            src={Heart}
                                            alt=""
                                            className="color-heart"
                                            style={{ display: displayNone }}
                                        />
                                    </div>
                                </div>
                            )}
                            <NavLink to={`/experiences/${item.uuid}`}>
                                <div className="manto-color"></div>
                            </NavLink>
                        </div>
                        {viewElemnts === true ? (
                            <div className="container-values">
                                <div className="contn-prices">
                                    <label className="item-price">
                                        ${item.price}
                                    </label>
                                    <label className="item-price-real">
                                        {/* {item.priceReal} */}
                                    </label>
                                </div>
                                <div>
                                    <label className="item-title">
                                        {item.name}
                                    </label>
                                    <div className="container-star">
                                        <div>
                                            <ReactStars numberStar={item.ranking} size={size}/>
                                        </div>
                                        <label className="item-values">
                                            {/* {item.value} */}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="container-vino-txt">
                                <label className="item-price-vino">
                                    ${item.price}
                                </label>
                                <label className="item-textVino">
                                    {/* {item.textVino} */}
                                </label>
                            </div>
                        )}
                        {viewBtn && (
                            <NavLink to={`/experiences/${item.uuid}`}>
                                <Button btnTitle={"Reservar"} className="solid" onClick={() => {nextView ? nextView(item.uuid) : {}}}/>
                            </NavLink>
                        )}
                        {viewBtnSale && (
                            <NavLink to={`/experiences/${item.uuid}`}>
                                <Button btnTitle={"Comprar"} className="solid" onClick={() => {nextView ? nextView(item.uuid) : {}}}/>
                            </NavLink>
                        )}
                    </div>
                );
            })}
        </>
    );
};

export default CardsHome;
