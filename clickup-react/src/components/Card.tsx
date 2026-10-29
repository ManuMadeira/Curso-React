import type { Demand } from '../type'

interface CardProps {
    demand: Demand
}

const priorityStyles = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-yellow-100 text-yellow-700',
    low: 'bg-green-100 text-green-700'
}

const priorityLabels = {
    high: 'Alta',
    medium: 'Média',
    low: 'Baixa'
}

function Card({ demand }: CardProps){
    return (
        <article className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'>
            <span className={`rounded-full px-2 py-1 text-xs font-semibold ${priorityStyles[demand.priority]}`}>
                {priorityLabels[demand.priority]}
            </span>
            <h3 className='mt-2 font-semibold text-gray-900'>{demand.title}</h3>
            <p className='text-sm text-gray-500'>Cliente: {demand.client}</p>
        </article>
    )
}

export default Card