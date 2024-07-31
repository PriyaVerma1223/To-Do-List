import React, { useState } from 'react'
import { useToDo } from '../contexts/ToDoContext'

function ToDoForm() {
    const [ToDo, setToDo] = useState("")
    const {AddToDo} = useToDo()

    const add = (e) => {
      e.preventDefault()

      if (!ToDo) return

      AddToDo({ ToDo, completed: false})
      setToDo("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-purple-300 py-1.5 text-black"
              value={ToDo}
              onChange={(e) => setToDo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default ToDoForm;


// import React, { useState } from 'react'
// import {  useToDo } from '../contexts/ToDoContext';

// function ToDoForm() {
//     const [ToDo, setToDo] = useState("")
//     const {AddToDo} = useToDo()

//     const add = (e) => {
//       e.preventDefault()

//       if (!ToDo) return

//       AddToDo({ ToDo, completed: false})
//       setToDo("")
//     }

//   return (
//       <form onSubmit={add}  className="flex">
//           <input
//               type="text"
//               placeholder="Write Todo..."
//               className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//               value={ToDo}
//               onChange={(e) => setToDo(e.target.value)}
//           />
//           <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
//               Add
//           </button>
//       </form>
//   );
// }

// export default ToDoForm;