// NavBar.tsx
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center space-x-4 mb-6">
     <Link 
       to="/" 
       className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
     >
       All
     </Link>
     <Link 
       to="/?todos=active" 
       className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition-colors"
     >
       Active
     </Link>
     <Link 
       to="/?todos=completed" 
       className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition-colors"
     >
       Completed
     </Link>
    </div>
  )
}

export default NavBar;