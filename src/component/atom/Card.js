import React from 'react'
import cardblueicon from "../../assets/cardblueicon.svg"

function Card({className,children}) {
  return (
    <div className={className} >
 {children}
      
    </div>
  )
}

export default Card
