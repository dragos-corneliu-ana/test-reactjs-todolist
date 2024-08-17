import React from 'react'
import ToDoCard from './ToDoCard'

const ToDoList = (props) => {
    const {todos, handleDeleteTodos, handleEditTodos} = props

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex)   => {
                return (
                    <ToDoCard key={todoIndex} todo = {todo} todoIndex = {todoIndex} {...props}></ToDoCard>
                )
            })}
        </ul>
    )
}

export default ToDoList