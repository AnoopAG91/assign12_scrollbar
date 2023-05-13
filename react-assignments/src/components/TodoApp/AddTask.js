import { useState } from "react"

export default function AddTask({addTask}){

    const [value, setValue] = useState(" ");

    const addItem = () =>{
        addTask(value)
    }
    return(
        <>
        <div className="input-container">
            <input type="text" className="input" placeholder="Add a task..." 
             onChange={(e)=>{setValue(e.target.value)}} />
            
            <button onClick={addItem} className="add-btn">Add</button>
        </div>  
        </>
    )
}