import React from 'react'

import "./DownLoad.scss"

import LogoAlkiD from './icons/logoAlkiD.png'
import Visa from '../../../../../assets/Auth/visaa.png'

const DownLoad = ({setValue, object}) => {
  return (
    <div className='DownLoad-m' onClick={() => setValue(false)}>
        <div className='cnt-cnt'>
            <div className="inside-download">
                {object.map((item, idx) => (
                    <div key={idx} className="subSecct4">
                    <div className="block1">
                        Datos generales:
                        <div className="block-a">
                        <label>Fecha de compra: {item.date}</label>
                        <label>No. de compra: {item.noBuy}</label>
                        <label>Nombre del comprador: {item.name}</label>
                        </div>
                    </div>
                    <div className="block2">
                        Dirección:
                        <div className="block-a">
                        <label className="home">Casa: </label>
                        <p className="address">{item.address}</p>
                        </div>
                    </div>
                    <div className="block4">
                        Detalles de compra:
                        <div className="block-a">
                        <div className="cnt-cards-s">
                            {item.ProductDetail.map((crd, idx) => (
                            <div className="card-small" key={idx}>
                                <div className="cnt-img">
                                <img src={crd.img} alt="" className="img" />
                                </div>
                                <div className="cnt-b">
                                <label htmlFor="" className="label-a">{crd.ProductName}</label>
                                <label htmlFor="" className="label-b">{crd.price}</label>
                                </div>
                                <div className="total-ped">
                                x{crd.ProductTotal}
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                        <div className="block-b">
                        <div className="inside-a">
                            {item.lapsoTime}
                        </div>
                        <div className="inside-b">
                            Total: 
                            <label htmlFor="" className="price-total">{item.total}</label>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                <div className="logo-a">
                    <img src={LogoAlkiD} alt="" className="alm" />
                </div>
            </div>
            <div className="secct2-1">
                <label htmlFor="" className="method">Método de pago</label>
                <div className="cnt-inside2">
                <div className="cnt-img">
                    <img src={Visa} alt="" className="visa-a" />
                </div>
                <div className="method cnt-info">
                    {object[0].visa}
                    <label htmlFor="" className="name-visa">{object[0].nameCard}</label>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownLoad