import {createContext,useContext} from "react"

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"ToDo Msg",
            completed:false
        }
    ],
    AddToDo:(todo) => {},
    UpdateToDo:(id,todo) => {},
    DeleteToDo: (id) => {},
    ToggleComplete: (id) => {}
})

export const useToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider

// import {createContext, useContext} from "react"

// export const TodoContext = createContext({
//     todos: [
//         {
//             id: 1,
//             todo: " Todo msg",
//             completed: false,
//         }
//     ],
//     addTodo: (todo) => {},
//     updateTodo: (id, todo) => {},
//     deleteTodo: (id) => {},
//     toggleComplete: (id) => {}
// })


// export const useTodo = () => {
//     return useContext(TodoContext)
// }

// export const TodoProvider = TodoContext.Provider