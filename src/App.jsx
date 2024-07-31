import { useState, useEffect } from 'react'
import {ToDoProvider} from './contexts'
import './App.css'
import ToDoForm  from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'

function App() {

  const [ToDos, setToDos] = useState([])

  const AddToDo = (todo) => {
    setToDos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const UpdateToDo = (id, todo) => {
    setToDos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

  }

  const DeleteToDo = (id) => {
    setToDos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const ToggleComplete = (id) => {
    //console.log(id);
    setToDos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const ToDos = JSON.parse(localStorage.getItem("ToDos"))

    if (ToDos && ToDos.length > 0) {
      setToDos(ToDos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("ToDos", JSON.stringify(ToDos))
  }, [ToDos])
  

  return (
    <ToDoProvider value={{ToDos, AddToDo, UpdateToDo, DeleteToDo, ToggleComplete}}>
    <div className="bg-[#3b1541] min-h-screen py-8">
              <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-black bg-purple-200">
                  <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                  <div className="mb-4">
                      {/* Todo form goes here */} 
                      <ToDoForm />
                  </div>
                  <div className="flex flex-wrap gap-y-3">
                      {/*Loop and Add TodoItem here */}
                      {ToDos.map((todo) => (
                        <div key={todo.id}
                        className='w-full'
                        >
                          <ToDoItem todo={todo} />
                        </div>
                      ))}
                  </div>
              </div>
          </div>
  </ToDoProvider>
  )
}

export default App


// import { useState, useEffect } from 'react'
// import {TodoProvider} from './contexts'
// import './App.css'
// import TodoForm from './components/TodoForm'
// import TodoItem from './components/TodoItem'

// function App() {
//   const [todos, setTodos] = useState([])

//   const addTodo = (todo) => {
//     setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
//   }

//   const updateTodo = (id, todo) => {
//     setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
//   }

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id))
//   }

//   const toggleComplete = (id) => {
//     //console.log(id);
//     setTodos((prev) => 
//     prev.map((prevTodo) => 
//       prevTodo.id === id ? { ...prevTodo, 
//         completed: !prevTodo.completed } : prevTodo))
//   }

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"))

//     if (todos && todos.length > 0) {
//       setTodos(todos)
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   }, [todos])
  



//   return (
//     <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
//       <div className="bg-[#172842] min-h-screen py-8">
//                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//                     <div className="mb-4">
//                         {/* Todo form goes here */} 
//                         <TodoForm />
//                     </div>
//                     <div className="flex flex-wrap gap-y-3">
//                         {/*Loop and Add TodoItem here */}
//                         {todos.map((todo) => (
//                           <div key={todo.id}
//                           className='w-full'
//                           >
//                             <TodoItem todo={todo} />
//                           </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//     </TodoProvider>
//   )
// }

// export default App



