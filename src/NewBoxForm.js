import React, {useState} from "react";


const NewBoxForm = ({addBox})=>{

    const INITIAL_FORM_STATE = {
        color:'',
        height:'',
        width:''
    }

    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(formData =>({
            ...formData,
            [name]:value
        }))
        
    }

    const handleSubmit = (e) =>{
        const {color, width, height} = formData
        e.preventDefault()
        addBox(height, width, color);
        setFormData(INITIAL_FORM_STATE)
    }

    return(
    <form onSubmit={handleSubmit}>
        <input type="text" name="color" placeholder="color" value={formData.color} onChange={handleChange}/>
        <input type="number" name="height" placeholder="height" value={formData.height} onChange={handleChange}/>
        <input type="number" name="width" placeholder="width" value={formData.width} onChange={handleChange}/>
        <button>Create Box</button>
    </form>

    )
}

export default NewBoxForm;