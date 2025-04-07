import AddTodo from "./components/AddTodo"
import NavBar from "./components/navbar"
import Todos from "./components/todos"

const App = () => {
  return (
    <main className="min-h-screen bg-black dark:bg-gray-700 text-white sm:py-12">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-80 lg:mb-12 text-white dark:text-400 lg:text-4xl">Todo React + Typescript</h1>
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800">
          <NavBar/>
          <AddTodo/>
          <Todos/>
        </div>
      </div>
    </main>
  )
}
///bhnjkml
export default App