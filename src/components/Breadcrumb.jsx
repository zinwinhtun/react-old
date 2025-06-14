import React from 'react'
import { Link } from 'react-router'

const Breadcrumb = ({currentPage}) => {
  return (
    <div>
      <Link to={'/'} className='text-gray-500'>Home</Link> / {currentPage} 
    </div>
  )
}

export default Breadcrumb
