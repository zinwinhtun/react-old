import React from 'react'
import Continer from '../components/Continer'
import Breadcrumb from '../components/Breadcrumb'
import CartSection from '../components/CartSection'

const MyCart = () => {
  return (
    <Continer className="px-5">
      <Breadcrumb currentPage="My Cart" />
      <CartSection/>
    </Continer>
  )
}

export default MyCart
