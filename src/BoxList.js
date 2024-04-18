import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import './App.css'
import './BoxList.css'
import {v4 as uuidv4} from "uuid"

const BoxList = () => {

    const INITIAL_STATE = []
    const [boxes, setBoxes] = useState(INITIAL_STATE)

    const addBox = (height, width, color) => {
        setBoxes(boxes => [...boxes, {id:uuidv4(), height, width, color}])
     
    }

    const removeBox = (id) =>{
        setBoxes(boxes => boxes.filter((box)=>box.id !== id))
        
    }

    return(
    <div className="BoxList flex-column center">
        <NewBoxForm addBox={addBox}/>
        <div className="flex-column center">
        {boxes.map(({id, height, width, color})=> <Box key={id} id={id} height={height} width={width} color={color} handleRemove={removeBox}/>)}
        </div>
       

    </div>

    )
}

export default BoxList;