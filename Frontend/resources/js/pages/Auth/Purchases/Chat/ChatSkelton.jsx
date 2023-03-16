import React from 'react'
import AuthFooter from '../../../../components/atoms/AuthFooter/AuthFooter'
import AuthHeader from '../../../../components/organisms/AuthHeader/AuthHeader'

import "./Chat.scss"

import { Skeleton } from 'primereact/skeleton'

const ChatSkelton = () => {

    

  return (
    <>
        <AuthHeader />
        <div className="AuthView">
            <div className="Chat-ui">
                <div className="bg-vg">
                    <div className="bg-white1"></div>
                </div>
                <div className="los-title">
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <Skeleton width='67px' height='67px' borderRadius='50%'/>
                    </div>
                </div>
                <div className="cnt-cards">
                    <div className="cnt-chat-c">
                        <div style={{width: "100%", height: "100%", display: "flex"}}>
                            <div style={{height: "100%", width: "100%", position: "relative"}}>
                                <Skeleton width='230px' height='45px' className='classS-a'/>
                            </div>
                            <div style={{height: "100%", width: "100%", display: "flex", justifyContent: "flex-end"}}>
                                <Skeleton width='230px' height='45px' className='classS-b'/>
                            </div>
                        </div>
                    </div>
                    <div className="cnt-input">
                        <Skeleton width='100%' height='39px'/>
                        <Skeleton width='24px' height='24px' borderRadius='50%'/>
                    </div>
                </div>
            </div>
            <AuthFooter />
        </div>
    </>
  )
}

export default ChatSkelton