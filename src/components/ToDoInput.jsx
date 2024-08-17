import { useState } from "react"

function ToDoInput(props){
    const {handleAddTodos, todoValue, setTodoValue} = props


    return (
        <header>
            <input value={todoValue} onChange={(e)=>setTodoValue(e.target.value)} placeholder="Enter Todo..."/> 
            <button onClick={
                ()=> {
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }
            }>Add</button> 
        </header>
    )
}

export default ToDoInput