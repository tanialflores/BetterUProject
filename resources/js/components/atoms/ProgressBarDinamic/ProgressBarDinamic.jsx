import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ProgressBar } from "primereact/progressbar";

import "./ProgressBarDinamic.scss"

const ProgressBarDinamic = ({setValue_, setNextStep, time = 5, speed = 500}) => {
    const [value, setValue] = useState(0);
    // const toast = useRef(null);
    const interval = useRef(null);
  
    useEffect(() => {
      let _val = value;
  
      interval.current = setInterval(() => {
        // _val += Math.floor(Math.random() * 10) + 1;
        _val += time
  
        if (_val > 100) {
          _val = 100;
          clearInterval(interval.current);
          setValue_(false)
          setNextStep(true)
        }
  
        setValue(_val);
      }, speed);
  
      return () => {
        if (interval.current) {
          clearInterval(interval.current);
          interval.current = null;
        }
      };
    }, []);

    function displayValueTemplate(currentValue) {
      return `${currentValue}% completado`;
    }

  return (
    <div className='ProgressBarDinamic'>
        <ProgressBar className='barProgress' showValue={false} value={value} displayValueTemplate={displayValueTemplate}></ProgressBar>
        <div className='process'>Procesando...</div>
    </div>
  )
}

export default ProgressBarDinamic