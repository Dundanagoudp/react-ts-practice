// Todos.tsx
import { useTodos ,Todo} from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
      const {todos, toggleTodoAsCompleted, handleDeleteTodo}= useTodos();
      const [searchParams] = useSearchParams();

      let todosData = searchParams.get('todos');
      let filterData = todos;

      if(todosData === 'completed'){
            filterData = todos.filter((todo) => todo.completed);
      }else if(todosData === 'active'){
            filterData = todos.filter((todo) => !todo.completed);
      }

  return (
      <ul className="space-y-2">
            {
                  filterData.map((todo)=>{
                            return <li 
                              key={todo.id} 
                              className={`flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors ${todo.completed ? 'opacity-70' : ''}`}
                            >
                              <input 
                                type="checkbox" 
                                id={`todo-${todo.id}`} 
                                checked={todo.completed} 
                                onChange={() => toggleTodoAsCompleted(todo.id)} 
                                className="h-5 w-5 mr-3 rounded focus:ring-blue-500"
                              />
                              <label 
                                htmlFor={`todo-${todo.id}`} 
                                className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : 'text-white'}`}
                              >
                                {todo.task}
                              </label>
                              {
                                    todo.completed &&(
                                          <button 
                                            type="button" 
                                            onClick={()=>handleDeleteTodo(todo.id)}
                                            className="ml-2 px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors"
                                          >
                                            Delete
                                          </button>
                                    )
                              }
                            </li>
                  })
            }
      </ul>
  )
}

export default Todos;