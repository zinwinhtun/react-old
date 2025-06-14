import React from 'react'

const Continer = ({children}) => {
  return (
    <div className='w-full md:w-[720px] lg:w-[1200-px] xl:w-[1400px] mx-auto'>
      {children}
    </div>
  )
}

export default Continer
