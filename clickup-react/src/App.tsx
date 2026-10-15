import Header from './components/Header'

function App() {
  return (
    <div className=" min-h-screen bg-gray-100 p-8">
      <Header />
      <main className="mt-8">
        <h2 className="text-2xl font-bold text-blue-950 mt-8">
          Demandas
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Este é um aplicativo de gerenciamento de tarefas inspirado no ClickUp, desenvolvido com React e TypeScript.
        </p>
      
      </main> 
      

      
    </div>
  )
}

export default App