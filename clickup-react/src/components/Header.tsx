import { PlusCircleIcon } from "lucide-react"

function Header (){
   return (
      <header className="flex  justify-between px-4 py-4 shadow-lg shadow-blue-950 bg-white "> 
         <h1 className="text-3xl font-bold text-blue-950">
            Clickup do Paraguay
         </h1>
         <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-950 font-semibold">
            <PlusCircleIcon className="w-5 h-5 mr-2" />
            Nova demanda
         </button>
      </header>  
   )
   }
export default Header