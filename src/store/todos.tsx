import { createContext, useContext, useState, type ReactNode } from "react";

export type TodosProviderProps = {
      children: ReactNode
}

export type Todo ={
      id:string;
      task:string;
      completed:boolean;
      createAt:Date;
}
export type TodosContext = {
      todos:Todo[];
      handleAddToDo:(task:string)=>void; // call signature
      toggleTodoAsCompleted:(id:string)=>void;
      handleDeleteTodo:(id:string)=>void;
}

export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({children}:TodosProviderProps) =>{


      const [todos, setTodos] = useState<Todo[]>(()=>{
            const storedTodos = localStorage.getItem('todos');
            if(storedTodos){
                  return JSON.parse(storedTodos)
            }
            return []
      })

      const handleAddToDo = (task:string)=>{

      setTodos((prev)=>{
            const newTodos:Todo[] = [
                  {
                     id:Math.random().toString(),
                     task:task,  
                     completed:false,
                     createAt:new Date()
                  },
                  ...prev
            ]
        
        localStorage.setItem('todos',JSON.stringify(newTodos))    
            return newTodos
      })
           }

           //mark todo as completed

           const toggleTodoAsCompleted = (id:string) => {
                 setTodos((prev) => {
                       let newTodos = prev.map((todo)=>{
                        if(todo.id === id){
                              return {...todo, completed:!todo.completed}
                        } 
                        return todo;
                       })
                       localStorage.setItem('todos',JSON.stringify(newTodos))    

                       return newTodos
                 })
           }

           // delete teh indivisual data 

           const handleDeleteTodo = (id:string) => {
                 setTodos((prev) => {
                       let newTodos = prev.filter((filterTodo)=> filterTodo.id !== id);
                       localStorage.setItem('todos',JSON.stringify(newTodos))    
                       return newTodos
                 }          
                 )
           }

 return <todosContext.Provider value={{todos, handleAddToDo,toggleTodoAsCompleted,handleDeleteTodo}}>
      {children}
 </todosContext.Provider>

}


//consumer 

export const useTodos = () => {
      const  todosConsumer = useContext(todosContext);
      if(!todosConsumer){
            throw new Error('useTodos must be used within a TodosProvider')
      }
      return todosConsumer;
}

