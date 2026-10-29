import Header from './components/Header'
import Card from './components/Card'
import Column from './components/Column'
import type { Demand , Status } from './type'
import { initialDemands } from './data'

const columns: {status: Status, title: string}[] = [
  { status: "todo", title: "A fazer" },
  { status: "doing", title: "Fazendo" },
  { status: "done", title: "Feito" }
]

function App() {
  return (
    <div className=" min-h-screen bg-gray-100 ">
      <Header />
      <main className="p-6 grid items-start gap-6 md:grid-cols-3">
        {columns.map((column) =>{
          const columnDemands = initialDemands.filter(demand => demand.status === column.status)
          return (
            <Column key={column.status} title={column.title} count={columnDemands.length}> 
                {columnDemands.map((demand) => (
                  <Card key={demand.id} demand={demand} />
                ))}
            </Column>
          )
        })}
        
      
      </main> 
      

      
    </div>
  )
}

export default App