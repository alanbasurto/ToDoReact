import { useState } from 'react'
import { nanoid } from 'nanoid'

const Formulario = ({ todos, setTodos }) => {
   
   const [todo, setTodo] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault();
      if(todo.length<1) return; 
      setTodos([{ id: nanoid(3), todo, completed: false }, ...todos])
      setTodo(" ")
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
         />
         <button>Add</button>
      </form>
   )
}

export default Formulario
