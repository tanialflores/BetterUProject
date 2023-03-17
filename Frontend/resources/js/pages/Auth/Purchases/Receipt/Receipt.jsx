import React, { useEffect, useState } from 'react'

import "./Receipt.scss"

//Assets
import Zas1 from "../../../../assets/Auth/zas1.png";
import Qr from "../../../../assets/Auth/Qr.svg";
import Saw from "../../../../assets/Auth/saw.svg";
import Seal from '../../../../assets/Auth/seal.svg'
import Marker from '../../../../assets/Auth/marker.svg'
import Visa from '../../../../assets/Auth/visaa.png'
import AuthHeader from '../../../../components/organisms/AuthHeader/AuthHeader';
import CardSmall from '../CardSmall/CardSmall'
import Back from '../../../../components/atoms/Back/Back';
import { useNavigate, useParams } from 'react-router-dom';
import AuthFooter from '../../../../components/atoms/AuthFooter/AuthFooter';
import WhiteCard from './WhiteCard/WhiteCard';
import Button from '../../../../components/atoms/Button/Button';
import WatchData from './WatchData/WatchData';
import CancelModal from './CancelModal/CancelModal';
import WarningModal from './WarningModal/WarningModal';
import SaveModal from '../../../../components/molecules/SaveModal/SaveModal';

const Receipt = () => {

    const navigate = useNavigate()
    const {id, type} = useParams()
    const [watchData, setWatchData] = useState(false)
    const [watchCancel, setWatchCancel] = useState(false)
    const [submitCancel, setSubmitCancel] = useState(false)
    const [modalsuccess, setModalsuccess] = useState(false)
    const [metterStatus, setMetterStatus] = useState(false)
    const [cancelAnfint, setCancelAnfint] = useState(false)
    const [dateCurret, setDateCurret] = useState()
    const [regend, setRegend] = useState(false)

    const infoCard = [
        {
            id: 1,
            img: Zas1,
            descrip: "Ver las estrellas en el monte",
            date: "15/12/2020",
            type: type,
            icon: Seal
        },
    ]

    const dtas = [
        {
            id: 1,
            qr: Qr,
            data: "22/02/2022",
            noBuy: 567856235,
            name: "Diego Venegas",
            detail: "Paseo matutino",
            visit: "2 visitantes",
            detData: "22/02/2022",
            address: "la normal 1256",
            total: "$5,000",
            methoPay: "Visa *****1234",
            namePay: "Fleexito"
        }
    ]

    useEffect(() => {
        const copyArray = [...infoCard]
        const array = copyArray.filter((st) => st.type.toLowerCase() === type.toLowerCase())
        if(array.length === 0){
            return 0
        }
        if(array[0].type == "Cancelada"){
            return setMetterStatus(true)
        }
        if(array[0].type == "Reagendada"){
            return setRegend(true)
        }
        if(array[0].type == "Cancelada-a"){
            return setCancelAnfint(true)
        }
    }, [metterStatus])
    

    useEffect(() => {
        if (modalsuccess) {
            setSubmitCancel(false)
            const myTimeout = setTimeout(sendComment, 3000);
        }
    }, [modalsuccess]);

    const sendComment = () => {
        setModalsuccess(false);
        // navigate("#");
    };

    useEffect(() => {
        const dateCur = new Date()
        setDateCurret(dateCur.toLocaleDateString())
    }, [])

  return (
    <>
  
        <div className="AuthView">
            <div className="Receipt">
                <div className="bg-vg">
                  <div className="bg-white1"></div>
                </div>
                <div className="los-title">
                    <Back className={"cnt-return"} onClick={() => navigate("/purchases")}/>
                    Comprobante de compra
                </div>
                <div className='cnt-cards'>
                    <CardSmall arrayInfo={infoCard} experiences/>
                    {metterStatus && 
                        <div className='cnt-sttus'>
                            <div className='cnacelStatus'>Cancelada</div>
                        </div>
                    }
                    {regend &&
                        <div className='reagendadStatus'>
                            <label className="se-1">Reagendada por anfitrión</label>
                            <label className="se-2">Motivo:</label>
                            <label className="se-2 regul">Fenomenos meteorológicos</label>
                        </div>
                    }
                    {cancelAnfint &&
                         <div className='reagendadStatus'>
                         <label className="se-1 an">Cancelada por anfitrión</label>
                         <label className="se-2">Motivo:</label>
                         <p className="se-2 regul">Lo sentimos por no poder completar tu 
                            experiencia, puedes reagendar tu experiencia, contactar al anfitrion
                            o cancelar tu expericia (se te realizara un reembolzo en tu monedero alkimia)
                        </p>
                     </div>
                    }
                    <div className='cnt-whiteCard-l'>
                    {!metterStatus && 
                        <WhiteCard className={"w-whiteCard"}>
                            <div className="cnt-qr">
                                <img src={Qr} alt="" className="qr"/>
                            </div>
                            <div className="cnt-btn-watch">
                                <Button btnTitle={"Cancelar"} className="solid" onClick={() => setWatchCancel(true)}/>
                                <div className="saw-info" onClick={() => setWatchData(true)}>
                                    <img src={Saw} alt="" className="watch" />
                                </div>
                            </div>
                        </WhiteCard>
                    }
                        <div className={`cnt-two-l ${metterStatus && "changeOrient"}`}>
                            <WhiteCard className={"w-card-b"}>
                                {dtas.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="secct1">
                                            <label htmlFor="" className="sect-title">Datos generales</label>
                                            <div className="secct1-inside">
                                                <label><b>Fecha de compra: </b>{item.data}</label>
                                                <label><b>No. de compra: </b>{item.noBuy}</label>
                                                <label><b>Nombre del comprador: </b>{item.name}</label>
                                            </div>
                                        </div>
                                        <div className="secct2">
                                            <label htmlFor="" className="sect2-title">Detalles de compra</label>
                                            <div className="secct2-inside">
                                                <label>{item.detail}</label>
                                                <label>{item.visit}</label>
                                                <label>{item.detData}</label>
                                            </div>
                                        </div>
                                        <div className="secct3">
                                            <div className="secct3-a">
                                                <img src={Marker} alt="" className='marker'/>
                                                {item.address}
                                            </div>
                                            <div className="secct3-b">
                                                Total: 
                                                <label className="price">{item.total}</label>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </WhiteCard>
                            <div className="cnt-smallCards">
                                <WhiteCard className={"w-card-c"}>
                                    Método de pago
                                    <div className="secct1">
                                        <div className="secct1-a">
                                            <img src={Visa} alt="" className="visa-x" />
                                        </div>
                                        <div className="secct-b">
                                            {dtas[0].methoPay}
                                            <label htmlFor="" className='name-pay'>{dtas[0].namePay}</label>
                                        </div>

                                    </div>
                                </WhiteCard>
                                {metterStatus && 
                                    <WhiteCard className={"w-card-d"}>
                                        <label className="renbol-l">Reembolso</label>
                                        <div className="cnt-labels">
                                            <label className="l-one"><b>Fecha de cancelación: </b>{dateCurret}</label>
                                            <div className="l-one   ">
                                                <b>Estatus de reembolso: </b>
                                                <label className='l-three'>Completo</label>
                                            </div>
                                        </div>
                                    </WhiteCard>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Estos son todos los modales, que la verdad me enfadaron, modal tras modal, */}
            {submitCancel && <WarningModal setValue={setSubmitCancel} setCloseModal={setModalsuccess}/>}
            {watchCancel && <CancelModal setClose={setWatchCancel} setNextModal={setSubmitCancel} viewNavigate={() => navigate(`/purchases/reschedule/${id}`)}/>}
            {watchData && <WatchData setValue={setWatchData} datas={dtas}/>}
            {modalsuccess && <SaveModal s title={"¡Se ha cancelado tu experiencia!"} message={"Tu reembolzo se verá reflejado en tu monedero"}/>}
            <AuthFooter />
        </div>
    </>
  )
}

export default Receipt