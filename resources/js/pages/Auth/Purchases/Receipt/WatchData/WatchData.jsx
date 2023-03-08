import React from 'react'

//Assets
import LogoAlki from '../WatchData/icon/logoAlki.png'


//Styles
import "./WatchData.scss"

const WatchData = ({setValue, datas}) => {
    const dtas = [
        {
            id: 1,
            qr: null,
            data: "22/02/2022",
            noBuy: 567856235,
            name: "Diego Venegas",
            detail: "Paseo matutino",
            visit: "2 visitantes",
            detData: "22/02/2022",
            address: "la normal 1256",
            total: "$5,000",
            methoPay: "Visa *****1234",
            namePay: "Flexxito"
        }
    ]

  return (
    <div className='p-WatchData' onClick={() => setValue(false)}>
        <div className="taget-dat">
            <div className="cnt-logo">
                <img src={LogoAlki} alt="" className='logo-o'/>
            </div>
            {datas.map((item, idx) => (
                <div className="cnt-inside" key={idx}>
                    <div className="cnt-qrw">
                        <img src={item.qr} alt="" className="qwr" />
                    </div>
                    <div className="dtas-body">
                        <label className="c-label-ti">Comprobante de compra</label>
                        <div className='cnt-ins'>
                            <label><b>Fecha de compra: </b>{item.data}</label>
                            <label><b>No. de compra: </b>{item.noBuy}</label>
                            <label><b>Nombre del comprador: </b>{item.name}</label>
                            <div className="detailBuy">
                                <label className='detil-buy'>Detalles de la compra</label>
                                <label>{item.detail}</label>
                                <label>{item.visit}</label>
                                <label>{item.detData}</label>
                                <div className="addres-s">
                                    <img src={null} alt="" className="mark" />
                                    {item.address}
                                </div>
                                <div className="total-buy">
                                    Total: 
                                    <label className="price">{item.total}</label>
                                </div>
                            </div>
                            <div className="cnt-cardsVisa">
                                <label className="methodPay">Método de pago:</label>
                                <div className="dtasCard-f">
                                    <div className='cnt-visa'>
                                        <img src={null} alt="" className="visa-visa" />
                                    </div>
                                    <div className="dtas-card">
                                        {item.methoPay}
                                        <label htmlFor="" className="nameBu-y">{item.namePay}</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default WatchData