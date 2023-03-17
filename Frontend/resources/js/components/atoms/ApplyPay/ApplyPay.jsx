import React from 'react'

import "./ApplyPay.scss"

//Assets
import Checkalkimia from '../../../assets/Auth/checkalkimia.gif'

const ApplyPay = () => {

  return (
    <div className='ApplyPay'>
        <div className="inside-ApplyPay">
            <div className="cnt-giff">
                <img src={Checkalkimia} alt="" className="giff" />
            </div>
            <h1 className='apply-pay'>Pago aplicado</h1>
        </div>
    </div>
  )
}

export default ApplyPay