import React from 'react'

function ToDoCard(props) {
    const {todo, todoIndex, handleDeleteTodos, handleEditTodos} = props

    return (
        <li className='todoItem'>
            <p>{props.todo}</p>
            <div className='actionsContainer'>
                <i className="fa-solid fa-pen-to-square" onClick={
                    ()=>{
                        handleEditTodos(todoIndex)
                    }
                }></i>
                <i className="fa-solid fa-trash-can" onClick={()=> {
                    handleDeleteTodos(todoIndex)
                }}></i>
            </div>
        </li>
    )
}

export default ToDoCard
