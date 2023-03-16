import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AuthFooter from '../../../../components/atoms/AuthFooter/AuthFooter'
import Back from '../../../../components/atoms/Back/Back'
import CalendarInput from '../../../../components/molecules/CalendarInput/CalendarInput'
import AuthHeader from '../../../../components/organisms/AuthHeader/AuthHeader'


//Styles
import "./Reschedule.scss"

//Assets
import Left from './icon/leftpor.svg'
import Rigth from './icon/rigthpor.svg'
import Cuponesclub from './icon/cuponesclub.png'
import Button from '../../../../components/atoms/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import ModalCupuos from './ModalCupuos/ModalCupuos'
import { Skeleton } from 'primereact/skeleton'

const RescheduleSkeleton = () => {
  



  return (
    <>
      
        <div className='AuthView'>
            <div className='Reschedule'>
                <div className="bg-vg">
                  <div className="bg-white1"></div>
                </div>
                <div className='secctTitle'>
                    <Skeleton width='200px' height='30px'/>
                </div>
                <div className='Block-Parent'>
                    <div className="card-white">
                        <div className="cnt-seccts">
                            <div className="secct1">
                                <div className='cnt-skeltonCa' style={{width: 421, height: 421, display: "flex", flexDirection: "column", gap: 30}}>
                                    <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
                                        <Skeleton width='32px' height='32px' borderRadius='50%'/>
                                        <Skeleton width='110px' height='16px'/>
                                        <Skeleton width='32px' height='32px' borderRadius='50%'/>
                                    </div>
                                    <div style={{display: "flex", flexWrap: "wrap", gap: 23}}>
                                        {[...Array(35)].map((_, i) => (
                                            <Skeleton width='40px' height='40px' borderRadius='50%'/>
                                        ))}
                                    </div>
                                </div>
                                <div className='cnt-skeltonCa-b' style={{width: "100%", display: "flex", flexDirection: "column", gap: 30, marginBottom: 25}}>
                                    <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
                                        <Skeleton width='32px' height='32px' borderRadius='50%'/>
                                        <Skeleton width='110px' height='16px'/>
                                        <Skeleton width='32px' height='32px' borderRadius='50%'/>
                                    </div>
                                    <div style={{display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center"}}>
                                        {[...Array(35)].map((_, i) => (
                                            <Skeleton width='40px' height='40px' borderRadius='50%'/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="secct2">
                                <div className="secct2-a">
                                    <Skeleton width='150px' height='15px'/>
                                    <Skeleton width='250px' height='15px'/>
                                </div>
                                <div className="secct2-b">
                                    <Skeleton width='100px' height='15px'/>
                                    <div className="count-coup">
                                        <Skeleton width='40px' height='40px' borderRadius='50%'/>
                                        <Skeleton width='30px' height='30px' borderRadius='50%'/>
                                        <Skeleton width='40px' height='40px' borderRadius='50%'/>
                                    </div>
                                </div>
                                <div className="secct2-c">
                                    <div className='secct2-skeleton-a'>
                                        <Skeleton width='100%' height='48px'/>
                                    </div>
                                    <div className='secct2-skeleton-b'>
                                        <Skeleton width='392px' height='48px'/>
                                    </div>
                                  <div className="cnt-check">
                                    <Skeleton width='20px' height='20px' borderRadius='50%'/>
                                    <div style={{display: "flex", flexDirection: "column", gap: 10}}>
                                        <Skeleton width='150px' height='10px'/>
                                        <Skeleton width='200px' height='10px'/>
                                    </div>
                                  </div>
                                </div>
                                <div className="secct2-d">
                                  <Button skelton/>
                                  <Button skelton/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AuthFooter />
        </div>
    </>
  )
}

export default RescheduleSkeleton