import { useEffect, useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter(
      (todo, todoIndex) => {
        return todoIndex != index
      }
    )
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodos(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos: newList}))
  }

  useEffect(()=>{
    if (!localStorage){
      return 
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }
    
    localTodos =  JSON.parse(localTodos).todos
    setTodos(localTodos)
  },
    [])

  return (
    <main>
      <ToDoInput 
        handleAddTodos = {handleAddTodos} 
        todoValue = {todoValue}
        setTodoValue = {setTodoValue}
        >
      </ToDoInput>
      <ToDoList 
        handleEditTodos = {handleEditTodos}
        todos={todos}
        handleDeleteTodos = {handleDeleteTodos}
      ></ToDoList>
    </main>
  )
}

export default App
