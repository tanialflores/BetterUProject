import React, { useState } from "react";

import Share from "../../../assets/icons/share.svg";
import "./CardViewShort.scss";

const CardViewShort = ({ elements, setElements }) => {
    const [openShare, setOpenShare] = useState(false);

    const OpenShareModal = (id) => {
        if (openShare) {
            setOpenShare(false);
        } else {
            setOpenShare(id);
        }
    };

    const activeHeart = (id) => {
        const likeIdx = elements.findIndex((item) => item.id == id);
        const copy = [...elements];
        copy[likeIdx].liked = !copy[likeIdx].liked;
        setElements(copy);
    };

    return (
        <div className="CardViewShort">
            {elements.map((crd, idx) => (
                <div
                    key={crd.id}
                    className="secct-2-cards"
                    style={{ backgroundColor: crd.bgTrap }}
                >
                    <img src={crd.bg} alt="Background" className="secct-2-bg" />
                    <div className="secct-2-cards-a">
                        <div className="secct-2-div-a">
                            <div>
                                <div>
                                    <span className="secct-2-name">
                                        {crd.name}
                                    </span>
                                    <span>{" "}✒️</span>
                                </div>
                                <br />
                                <span className="secct-2-date">{crd.date}</span>
                            </div>
                        </div>

                        {openShare == crd.id && (
                            <div
                                className={`secct-2-share ${
                                    openShare && "openModal"
                                }`}
                            >
                                <span className="secct-2-text">Compartir</span>
                                <img
                                    src={Share}
                                    alt="Share"
                                    className="share"
                                />
                            </div>
                        )}
                    </div>
                    <div className="footer-secct2">
                        <div className="secct-2-container-title">
                            <h2 className="secct-2-c-title">{crd.title}</h2>
                        </div>
                        <div className="contaner-line">
                            <div className="secct-line-div"></div>
                        </div>

                        <div className="secct-2-c">
                            <img
                                src={crd.icon2}
                                alt="Heart"
                                className={
                                    "secct-2-heart " +
                                    (crd.liked && "likedFilter")
                                }
                                onClick={() => {
                                    activeHeart(crd.id);
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardViewShort;
