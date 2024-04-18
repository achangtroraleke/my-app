import React, { useState } from "react";
import "./Box.css"
import "./App.css"

const Box = ({id, height, width, color, handleRemove})=>{

    const deleteBox = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }

    return(
    <div className="flex align-center">
        <div className="Box" style={{height:`${height}px`, width:`${width}px`, backgroundColor:color}}></div>
        <div onClick={deleteBox}>X</div>
    </div>
 
    )
}

export default Box;