import React, {useState} from 'react'
import './Box.css'
import DeleteBox from './DeleteBox'

const Box = ({id, onDelete}) => {
  const [isHovered, setIsHovered]=useState(false)

  const handleDelete=(e)=>{
    e.stopPropagation(); // Prevent triggering any parent click events
    onDelete(id);
  }
  return (
    <div className="box"
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >
      Box: {id}
      {isHovered && <DeleteBox onDelete={handleDelete}/>}
      
    </div>
  )
}

export default Box
