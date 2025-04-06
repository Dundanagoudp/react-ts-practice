// AddTodo.tsx
import { useState, type FormEvent } from "react"
import { useTodos } from "../store/todos";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();

  const handleformSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo)
    setTodo("")
  }

  return (
    <form onSubmit={handleformSubmit} className="mb-6">
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Write your todo</div>
      <div className="flex">
        <input 
          type="text" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} 
          className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="Add a new task..."
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition-colors"
        >
          ADD
        </button>
      </div>
    </form>
  )
}
export default AddTodo