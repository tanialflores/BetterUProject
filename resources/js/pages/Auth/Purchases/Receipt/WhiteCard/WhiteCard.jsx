import React from 'react'


//Styles
import "./WhiteCard.scss"

const WhiteCard = ({children, className}) => {
  return (
    <div className={`l-WhiteCard ${className}`}>
        {children}
    </div>
  )
}

export default WhiteCard