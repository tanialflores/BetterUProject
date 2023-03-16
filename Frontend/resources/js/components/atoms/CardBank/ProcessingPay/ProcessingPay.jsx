import React from 'react'

import "./ProcessingPay.scss"

//Assets
import Process from '../../../../assets/Auth/process.gif'
import ProgressBarDinamic from '../../ProgressBarDinamic/ProgressBarDinamic'

const ProcessingPay = ({ setValue_, setNextStep, time, speed }) => {
    return (
        <div className='ProcessingPay'>
            <div className="inside-ProcessingPay">
                <label htmlFor="" className="title-proce">Procesando pago...</label>
                <div className="cnt-termi">
                    <img src={Process} alt="" className="termin" />
                </div>
                <ProgressBarDinamic setValue_={setValue_} setNextStep={setNextStep} time={time} speed={speed} />
            </div>
        </div>
    )
}

export default ProcessingPay