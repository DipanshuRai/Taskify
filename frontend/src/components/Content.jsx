import React, { useState } from "react";
import Box from "./ui/Box.jsx";
import PlusSign from "./ui/PlusSign.jsx";
import "./Content.css";

const Content = () => {

    const [boxId, setBoxId]=useState(0)
    const [boxes, setBoxes]=useState([])

    const addBox=()=>{
        const newBox={
            id:boxId
        }
        setBoxes([...boxes,newBox])
        setBoxId(boxId+1)
    }

    const deleteBox=(id)=>{
        setBoxes(boxes.filter(box=>box.id!==id))
    }

    return (
        <div className="content">
            <div className="boxes">
                {boxes.map(box=>(
                    <Box id={box.id} onDelete={deleteBox}/>
                ))}
                <PlusSign onClick={addBox}/>
            </div>
        </div>
    );
};

export default Content;
