import React, { useEffect, useState } from "react";
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";

//styles
import "./CoinPurse.scss";

//Assets
import Bg_monedero from '../../../assets/Auth/bg_monedero.jpg'
import { NavLink } from "react-router-dom";
import Factures from '../../../assets/Auth/factures.svg'
import Visa from '../../../assets/Auth/visaa.png'
import Trash from '../../../assets/Auth/trash.svg'
import Paypal from '../../../assets/Auth/payPal.svg'
import ModalEditMethod from "./Modales/ModalEditMethod/ModalEditMethod";
import EditMethodPay from "./Modales/EditMethodPay/EditMethodPay";
import { Affirmations, SuccesSimple } from "../../../components/atoms/Modales/SweetAlert";

const CoinPurse = () => {

    const countCard = [
        {
            id: 1,
            pay: true,
            nameCard: "Visa ****4321",
            name: "Diego Venegas",
        },
        {
            id: 2,
            pay: true,
            nameCard: "Visa ****4321",
            name: "Diego Venegas",
        },
        {
            id: 3,
            pay: false,
            email: "Leonie90@gmail.com"
        },
        {
            id: 4,
            pay: false,
            email: "Leonie90@gmail.com"
        },
        {
            id: 5,
            pay: true,
            nameCard: "Visa ****4321",
            name: "Diego Venegas",
        },
        {
            id: 6,
            pay: true,
            nameCard: "Visa ****4321",
            name: "Diego Venegas",
        },
    ]
    
    const [dtas, setDtas] = useState(false)
    const [method, setMethod] = useState({});
    const [arrayMethod, setArrayMethod] = useState(countCard)
    const [editMethodPaypal, setEditMethodPaypal] = useState(false)
    const [editMethod, setEditMethod] = useState(false)
    
    useEffect(() => {
        const initialPagos = { card: [], paypal: [] };
        const { card, paypal } = arrayMethod.reduce(
          (acc, objeto) => {
            if (objeto.pay) {
              acc.card.push(objeto);
            } else {
              acc.paypal.push(objeto);
            }
            return acc;
          },
          initialPagos
        );
        setMethod({ card, paypal });
      }, [arrayMethod]);


    const handleDelete = async (id) => {
        const accept = await Affirmations("Se eliminará esté método de pago", "¿Deseas continuar?")
        if(accept){
            const array = arrayMethod.filter(objeto => objeto.id !== id);
            setArrayMethod(array);
        }
    };
    
    

    return (
        <>
            <AuthHeader />
            <div className="AuthView">
                <div className="CoinPurse-ui">
                    <div className="bg-vg">
                        <div className="bg-white1"></div>
                    </div>
                    <div className="los-title">
                        Mi monedero
                    </div>
                    <div className="cnt-cards">
                        <div className="secct1">
                            <div className="cnt-card">
                                <div className="cnt-img">
                                    <img src={Factures} alt="" className="img-g" />
                                </div>
                                <div className="detail-saldo">
                                    Saldo total: 
                                    <label className="price-total">$5,000</label>
                                </div>
                            </div>
                            <NavLink to={"new-method"} className={"new-methodPay"}>Nuevo método de pago</NavLink>
                        </div>
                        <div className="secct2">
                            <label htmlFor="" className="my-methods">Mis métodos de pago</label>
                            <div className="cnt-methodsPayd">
                                <div className="cnt-cnts">
                                    <div className="conatiner-pays-s">
                                        {method.card &&
                                            method.card?.map((item, idx) => (
                                                <div className="small-cards-s" key={idx}>
                                                    <div className="block1" onClick={() => setEditMethod(true)}>
                                                        <div className="cnt-visa">
                                                            <img src={Visa} alt="" className="visa-m" />
                                                        </div>
                                                        <div className="dtas-inf">
                                                            <label>{item.nameCard}</label>
                                                            <label>{item.name}</label>
                                                            {item.email && item.email}
                                                        </div>
                                                    </div>
                                                    <div className="block2" onClick={() => handleDelete(item.id)}>
                                                        <img src={Trash} alt="" className="trash-s" />
                                                    </div>
                                                </div>       
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* Contenedores para los paypals */}
                                <div className="cnt-cnts paypa-l">
                                    <div className="conatiner-pays-s">
                                        {method.paypal &&
                                            method.paypal?.map((item, idx) => (
                                                <div className="small-cards-s" key={idx} >
                                                    <div className="block1" onClick={() => setEditMethodPaypal(true)}>
                                                        <div className="cnt-visa pay-pal">
                                                            <img src={Paypal} alt="" className="visa-m" />
                                                        </div>
                                                        <div className="dtas-inf">
                                                            <label>{item.email}</label>
                                                            {item.nameCard && item.nameCard}
                                                            {item.name && item.name}
                                                        </div>
                                                    </div>
                                                    <div className="block2">
                                                        <img src={Trash} alt="" className="trash-s" onClick={() => handleDelete(item.id)}/>
                                                    </div>
                                                </div>       
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {editMethodPaypal && <EditMethodPay setValue={setEditMethodPaypal}/>}
                {editMethod && <ModalEditMethod setValue={setEditMethod}/>}
                <AuthFooter />
            </div>
        </>
    );
};

export default CoinPurse;
