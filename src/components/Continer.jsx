import React from 'react'

const Continer = ({children , className}) => {
  return (
    <div className={`w-full md:w-[720px] lg:w-[1200-px] xl:w-[1400px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Continer
