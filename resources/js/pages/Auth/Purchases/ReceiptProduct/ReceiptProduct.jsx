import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import Back from "../../../../components/atoms/Back/Back";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";

// //Assets
import IconComment from "../../../../assets/Auth/IconComment.svg";
import Visa from '../../../../assets/Auth/visaa.png'
import Donwload from '../../../../assets/Auth/donwload.svg'
import Sh1 from '../../../../assets/Auth/sh1.png'

import "./ReceiptProduct.scss";
import Button from "../../../../components/atoms/Button/Button";
import DownLoad from "./DownLoad/DownLoad";
import { Affirmations, InvalidAction, Success } from "../../../../components/atoms/Modales/SweetAlert";

const ReceiptProduct = () => {

  const navigate = useNavigate()
  const [time, setTime] = useState()
  const [state, setState] = useState(false)
  const [openDownLoad, setOpenDownLoad] = useState(false)
  const {id, type} = useParams()


  useEffect(() => {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const month = fechaActual.getMonth() + 1;
    const day = fechaActual.getDate();
    const fechaActualString = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`
    setTime(fechaActualString)
  }, [])
  
  

  const infoCard = 
    [
      {
          id: 1,
          date: "01/03/2023",
          noBuy: "5664111545225",
          name: "fleexito",
          address: "Fray Antonio Alcalde Y Barriga 1931, La Guadalupana, 44220 Guadalajara, Jal.",
          send: "$190",
          lapsoTime: "Tu compra llegará en un lapso de 20 días hábiles",
          total: "$5,000",
          visa: "Visa ****12345",
          nameCard: "Diego Venegas",
          ProductDetail: [
            {
              id: 1,
              img: Sh1,
              ProductName: "Vino tinto argentino",
              price: "$500.00",
              ProductTotal: 2,
            },
            {
              id: 2,
              img: Sh1,
              ProductName: "Vino tinto argentino",
              price: "$500.00",
              ProductTotal: 2,
            },
            {
              id: 3,
              img: Sh1,
              ProductName: "Vino tinto argentino",
              price: "$500.00",
              ProductTotal: 2,
            },
            {
              id: 4,
              img: Sh1,
              ProductName: "Vino tinto argentino",
              price: "$500.00",
              ProductTotal: 2,
            },
          ]
      },
    ]

    const [changeType, setChangeType] = useState()

    const handleCancel = async () => {
      let cancel = await InvalidAction(3000, "Acción inválida")
      if(cancel === true){
        let confirm = await Affirmations("¿Deseas continuar?")
        setState(confirm)
        if(confirm === true){
           await Success(3000, "¡Se ha cancelado tu experiencia!", "Tu reembolzo se verá reflejado en tu monedero")
        }
      }
    }

    return (
        <>
          
            <div className="AuthView">
                <div className="Receipt-product">
                    <div className="bg-vg">
                        <div className="bg-white1"></div>
                    </div>
                    <div className="los-title">
                        <Back
                            className={"cnt-return"}
                            onClick={() => navigate("/purchases")}
                        />
                        Comprobante de compra
                    </div>
                    <div className="cnt-cards">
                      <div className="details-receipt">
                        <div className="cnt-s1s2s3">
                          <div className="secct1">
                            <div className="secct1-a">
                              <div className={`circle-comment ${state && "dessable"}`} onClick={() => navigate(`/purchases/chat/${id}`)}>
                                  <img src={IconComment} alt="" className="seal-l" />
                              </div>
                              <Button className={`solid ${state && "dessable"}`} btnTitle="Calificar" onClick={() => navigate(`/purchases/rate-experience/${id}`)}/>
                            </div>
                          </div>
                          <div className="secct2">
                                <label htmlFor="" className="method">Método de pago</label>
                                <div className="cnt-inside2">
                                  <div className="cnt-img">
                                    <img src={Visa} alt="" className="visa-a" />
                                  </div>
                                  <div className="method cnt-info">
                                    {infoCard[0].visa}
                                    <label htmlFor="" className="name-visa">{infoCard[0].nameCard}</label>
                                  </div>
                                </div>
                          </div>
                          {state && 
                            <>
                              <div className="rembolso-a">
                                Reembolso
                                <div className="datas-descrip">
                                  <label>Fecha de cancelación: <span className="s-span">{time}</span></label>
                                  <label>Estatus de reembolso: <span className="comple">Completo</span></label>
                                </div>
                              </div>
                              
                            </>
                          }
                          {!state && 
                            <div className="secct3">
                                <Button className={"solid"} btnTitle="Cancelar" onClick={handleCancel}/>
                                <div className="donwloas-1" onClick={() => setOpenDownLoad(true)}>
                                  <img src={Donwload} alt="" className="donwload" />
                                </div>
                            </div>
                          }
                        </div>
                        <div className="cnt-cance-secct4">
                          {state &&
                            <div className="cancel-l">Cancelada</div>
                          }
                          <div className="secct4">
                              {infoCard.map((item, idx) => (
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
                                  <div className="block3">
                                    Envío estándar
                                    <label className="send">{item.send}</label>
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
                          </div>

                        </div>
                      </div>
                    </div>
                </div>
                {openDownLoad && <DownLoad object={infoCard} setValue={setOpenDownLoad}/>}
                <AuthFooter />
            </div>
        </>
    );
};

export default ReceiptProduct;
