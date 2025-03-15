import React from 'react'
import './PlusSign.css'

const AddBox = ({onClick}) => {
  return (
    <div className="outer" onClick={onClick}>
        <div className="circle">
            +
        </div>
    </div>
  )
}

export default AddBox
