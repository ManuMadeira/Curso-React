export type Status = 'todo' | 'doing' | 'done' 
export type priority = 'low' | 'medium' | 'high'

export interface demanda {
    id: number
    title: string
    usuario: string
    data: Date
    description: string
    status: Status
    priority: priority
}