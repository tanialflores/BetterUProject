import React, { useEffect, useState } from "react";

//Styles 😁
import "./CardSmall.scss";

// //Assets
 import IconComment from "../../../../assets/Auth/IconComment.svg";
import { NavLink, useNavigate } from "react-router-dom";

const CardSmall = ({arrayInfo, experiences = false, type}) => {

    const words = ["Cancelada", "Reagendada", "Entregado"]
    const [tamanio, setTamanio] = useState(false)
    const [screen, setScreen] = useState(window.innerWidth)
    const lengthString = 25
    const navigate = useNavigate()
   

    useEffect(() => {
        if(screen < 400){
            setTamanio(true)
        }
    }, [screen])


    return (
        <div className="CardSmall-lo">
                 {arrayInfo.map((item, idx) => {
                     if(item.descrip.length > lengthString){
                        var newString = item.descrip.substring(0, lengthString - 5) + "...";
                     }
                     else{
                        var newString = item.descrip
                     }
                     return(
                        <NavLink className="inside-card" key={idx} to={type === "experiences" ? `/purchases/receipt/${item.id}/${item.type}` : `/purchases/receipt-product/${item.id}/${item.type}`}>
                            <div className="img-item">
                                <img src={item.img} alt="" className="img-small" />
                            </div>
                            <div className="item-cnt">
                                { tamanio ? newString : item.descrip }
                                <label className="item-date">{item.date}</label>
                                <label className={`item-cancel`}>{item.type}</label>
                                    <div className="cnt-btns">
                                    {experiences ? 
                                        <>
                                            <NavLink to={`/purchases/rate-experience/${item.id}`} className={`btn-btns expercv1 ${item.type === words[0] || item.type === words[2] ? "dissable" : null}`}>Calificar</NavLink>
                                            <div className={`circle-sell ${item.type === words[0] || item.type === words[2] ? "dissable" : null}`}>
                                                <img src={item.icon} alt="" className="seal-l" />
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className={`circle-comment ${item.type === words[0] || item.type === words[2] ? "dissable": null}`}>
                                                <img src={IconComment} alt="" className="seal-l" />
                                            </div>
                                            <NavLink to={`/purchases/rate-experience/${item.id}`} className={`btn-btns ${item.type === words[0] || item.type === words[2] ? "dissable" : null}`}>Calificar</NavLink>
                                        </>
                                    }
                                    </div>
                            </div>
                        </NavLink>
                     )
                 })}
        </div>
    );
};

export default CardSmall;
