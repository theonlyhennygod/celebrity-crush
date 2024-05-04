import React from 'react'
import CrushItem from './CrushItem'

// This component will render a list of crushes

function CrushList({ crushList, refreshData }) {
  return (
    <div>
        {crushList.map((crush, index) => (
            <CrushItem key={index} crush={crush} index={index} refreshData={refreshData} index={index} />
        ))}
    </div>
  )
}

export default CrushList
