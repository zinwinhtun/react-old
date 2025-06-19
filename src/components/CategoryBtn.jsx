import React from 'react'
import useCategoties from '../store/useCategories';

const CategoryBtn = ({category: {id,name, isActive}}) => {

    const {activeCategory} = useCategoties();

    const handlePickCategory = () => {
        activeCategory(id);
    }

  return (
    <button onClick={handlePickCategory}
     className={`${isActive && "bg-red-500 text-white" } text-nowrap border border-black px-4 py-2 me-2`}>
            {name}
          </button>
  )
}

export default CategoryBtn
